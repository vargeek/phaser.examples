import { BootState } from '../boot.state';
import { AssetID } from '../constant';

declare var Protracker: any;

export class ProtrackerState extends BootState {
  mods: string[] = [];
  vumeter: Phaser.Sprite[] = [];
  module: any;
  current = 0;
  channels:any[] = [];

  preload () {

    this.load.script('protracker', '_plugins/ProTracker.js');

    this.load.image('vu', 'assets/sprites/vu.png');
    this.load.image('logo', 'assets/sprites/soundtracker.png');
    this.load.image('bg', 'assets/skies/sky2.png');
    this.load.image('vulkaiser', 'assets/pics/vulkaiser_red.png');

    this.load.binary('shampoo', 'assets/audio/protracker/shampoo.mod', this.modLoaded, this);
    this.load.binary('macrocosm', 'assets/audio/protracker/macrocosm.mod', this.modLoaded, this);
    this.load.binary('impulse', 'assets/audio/protracker/act_of_impulse.mod', this.modLoaded, this);
    this.load.binary('enigma', 'assets/audio/protracker/enigma.mod', this.modLoaded, this);
    this.load.binary('elysium', 'assets/audio/protracker/elysium.mod', this.modLoaded, this);
    this.load.binary('stardust', 'assets/audio/protracker/sd-ingame1.mod', this.modLoaded, this);
    this.load.binary('globaltrash', 'assets/audio/protracker/global_trash_3_v2.mod', this.modLoaded, this);

  }

  modLoaded (key: string, data:ArrayBuffer ) {

    this.mods.push(key);
    let buffer = new Uint8Array(data);
    return buffer;

  }

  create () {

    this.add.sprite(0, 0, 'bg');
    this.add.sprite(500, 32, 'logo');
    this.add.sprite(580, 371, 'vulkaiser');

    for (let index = 0, y = 200; index < 4; index++, y+= 50) {
      this.vumeter[index] = this.add.sprite(400, y, 'vu');
      this.vumeter[index].crop(new Phaser.Rectangle(0, 0, 300, 30), undefined);
    }

    this.module = new Protracker();

    this.module.onReady = () => {
      this.module.play();
    };

    this.module.buffer = this.game.cache.getBinary(this.mods[this.current]);
    this.module.parse();

    this.input.onDown.add(this.loadNextModule, this);

  }

  loadNextModule () {

    (this.current === this.mods.length - 1) ? this.current = 0 : this.current++;
    this.module.stop();
    this.module.clearsong();

    this.module.buffer = this.cache.getBinary(this.mods[this.current]);
    this.module.parse();

  }

  update () {

    for (let index = 0; index < this.vumeter.length; index++) {
      if (this.module.channel[index]) {
        let smpIndex = this.module.channel[index].sample;
        this.channels[index] = {
          sample_index: smpIndex,
          sample_name: this.module.sample[smpIndex].name,
        }
        let w = Math.round(this.module.vu[index] * 1200);

        if (w > 300) {
          w = 300;
        }

        this.vumeter[index].cropRect.width = w;
        this.vumeter[index].updateCrop();
      }
    }

  }

  render () {

    for (var i = 0, y = 32; i < this.vumeter.length; i++, y += 32)
    {
        if (this.channels[i])
        {
            this.game.debug.text('Channel #' + i + ' : sample ' + this.channels[i].sample_index + '  ' + this.channels[i].sample_name, 16, y);
            // game.debug.text('vu' + i + ': ' + module.vu[i], 16, 350 + y);
        }
    }

    this.game.debug.text('Position: ' + this.module.position, 16, 160);
    this.game.debug.text('Pattern: ' + this.module.row, 16, 192);
    this.game.debug.text('BPM: ' + this.module.bpm, 16, 224);
    this.game.debug.text('Speed: ' + this.module.speed, 16, 256);
    this.game.debug.text('Name: ' + this.module.title, 16, 288);
    this.game.debug.text('Signature: ' + this.module.signature, 16, 320);

  }

}

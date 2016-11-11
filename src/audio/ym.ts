import { BootState } from '../boot.state';
import { AssetID } from '../constant';
declare const YM: any;

interface IMusicInfo {
  name: string;
  author: string;
  file: string;
}
var musics = [
  {
    name: 'A prehistoric tale 7',
    author: 'Madmax',
    file: 'assets/audio/ym/A_Prehistoric_Tale_7.ym'
  },

  {
    name: 'Copperkaahbaahnaah',
    author: 'Big Alec',
    file: 'assets/audio/ym/big_alec-copperkaahbaahnaah.ym'
  },

  {
    name: 'Thundercats',
    author: 'David Whittaker',
    file: 'assets/audio/ym/david_whittaker-thundercats.ym'
  },

  {
    name: 'Giga Dist',
    author: 'Count0',
    file: 'assets/audio/ym/count0-giga_dist.ym'
  },

  {
    name: 'Comic Bakery',
    author: 'Madmax',
    file: 'assets/audio/ym/mad_max-comic_bakery.ym'
  },

  {
    name: 'Do you speak russian',
    author: 'Jess',
    file: 'assets/audio/ym/jess-do_you_speak_russian.ym'
  },

  {
    name: 'Turrican1 1',
    author: 'Madmax',
    file: 'assets/audio/ym/mad_max-turrican1-1.ym'
  },

  {
    name: 'Wings of death 1',
    author: 'Madmax',
    file: 'assets/audio/ym/mad_max-wings_of_death1.ym'
  }

]

export class YmState extends BootState {
  moveData: any[];
  vuGroup: Phaser.Group;
  musicListGroup: Phaser.Group;
  musicsList = '';
  list: Phaser.Text;
  currentPlayingSelector: Phaser.Graphics;
  selector: Phaser.Graphics;
  vu1: Phaser.Graphics;
  vu2: Phaser.Graphics;
  vu3: Phaser.Graphics;
  cursors: Phaser.CursorKeys;
  spacebar: Phaser.Key;
  currentTime = 0;
  ym: any;
  oldValues: number[];
  values: number[];
  musicIndex = 0;

  preload() {

    // load our YM plugin
    this.load.script('YM', '_plugins/YM.js');

    this.load.image('logo', 'assets/demoscene/atari.png');
    this.load.image('bg', 'assets/skies/sky2.png');

    // load all songs
    musics.forEach(music=>{
      this.load.binary(music.name, music.file);
    })

  }

  create() {

    this.moveData = this.make.tween({y: 0}).to({y: 300}, 1000, Phaser.Easing.Sinusoidal.In).yoyo(true).generateData(60);

    this.add.sprite(0, 0, 'bg');
    this.vuGroup = this.add.group();
    this.add.sprite(600, 32, 'logo');
    this.musicListGroup = this.add.group();

    musics.forEach((music: IMusicInfo, index: number)=>{
      this.musicsList += `${music.author} ${music.name} \n`;
    })

    let style = {
      font: '18px Arial',
      fill: '#fff',
      align: 'center',
    }
    this.list = this.add.text(this.world.centerX, 2, this.musicsList, style, this.musicListGroup);
    this.list.lineSpacing = 8;
    this.list.anchor.set(0.5, 0);

    this.musicListGroup.y = 300;

    this.currentPlayingSelector = this.add.graphics(0, 0, this.musicListGroup);
    this.currentPlayingSelector.beginFill(0xffffff, 0.2);
    this.currentPlayingSelector.drawRect(0, 0, this.world.width, 21);

    this.selector = this.add.graphics(0, 0,  this.musicListGroup);
    this.selector.beginFill(0xffffff, 0.4);
    this.selector.drawRect(0, 0, this.world.width, 21);

    this.vu1 = this.add.graphics(0, 0, this.vuGroup);
    this.vu2 = this.add.graphics(0, 110, this.vuGroup);
    this.vu3 = this.add.graphics(0, 220, this.vuGroup);

    this.vu1.data.movePosIndex = 0;
    this.vu2.data.movePosIndex = 15;
    this.vu3.data.movePosIndex = 30;

    this.vuGroup.y = 70;

    this.changeSong(0);
    this.moveSelector(0);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.currentTime = this.time.time;

  }

  changeSong (index: number) {

    let data = this.cache.getBinary(musics[index].name);

    if (!this.ym) {
      this.ym = new YM(data);
    }
    else {
      this.ym.stop();
      this.ym.clearsong();
      this.ym.parse(data);
    }

    this.oldValues = [0, 0, 0];
    this.values = [0, 0, 0];

    this.ym.play();

    this.currentPlayingSelector.y = this.selector.y;

  }

  moveSelector (index: number) {

    this.selector.y = index * 35;

  }

  buildVu (vu: Phaser.Graphics, colorbg: number, color: number, width: number) {

    let height = 75,
      offsetX = (this.world.width - width) / 2;

    vu.clear();
    vu.beginFill(colorbg, 1);
    vu.drawRect(0, 0, this.world.width, height);

    vu.beginFill(color, 1);
    vu.drawRect(offsetX, 0, width, height);
    vu.drawRect(offsetX - 10, 0, 5, height);
    vu.drawRect(offsetX - 20, 0, 3, height);

    vu.drawRect(width + offsetX + 5, 0, 5, height);
    vu.drawRect(width + offsetX + 18, 0, 3, height);

    vu.beginFill(0, 0.3);
    vu.drawRect(0, height - 25, this.world.width, 25);

  }

  update () {

    let max = this.world.width / 1.5;

    for (let index = 0; index < 3; index++) {
      if (this.ym.vu[index] > 1) {
        this.values[index] = this.ym.vu[index] * (max / 40);
      }
      else {
        this.values[index] -= 4;
        if (this.values[index] < 1) {
          this.values[index] = 0;
        }
      }
    }

    this.buildVu(this.vu3, 0xab124f, 0xe9128d, this.values[0]);
    this.buildVu(this.vu2, 0x8d126e, 0xca12ab, this.values[1]);
    this.buildVu(this.vu1, 0x6e128d, 0xab12ca, this.values[2]);

    [this.vu1, this.vu2, this.vu3].forEach((vu:Phaser.Graphics, index:number)=>{
      if (vu.data.movePosIndex >= this.moveData.length) {
        vu.data.movePosIndex = 0;
      }

      let p = this.moveData[vu.data.movePosIndex];
      vu.y = p.y;

      vu.data.movePosIndex++;
    });

    for (let index = 0; index < 3; index++) {
      this.oldValues[index] = this.ym.vu[index];
    }


    if (this.time.time - this.currentTime > 200) {
      if (this.cursors.up.isDown && this.musicIndex > 0) {
        this.musicIndex--;
        this.moveSelector(this.musicIndex);
        this.currentTime = this.time.time;
      }
      else if (this.cursors.down.isDown && this.musicIndex < musics.length - 1) {
        this.musicIndex++;
        this.moveSelector(this.musicIndex);
        this.currentTime = this.time.time;
      }
      else if (this.spacebar.isDown) {
        this.changeSong(this.musicIndex);
        this.currentTime = this.time.time;
      }
    }

  }

  render () {

    this.game.debug.text('Title  : ' + this.ym.info.title, 16, 24);
    this.game.debug.text('Author : ' + this.ym.info.author, 16, 40);
    this.game.debug.text('Comment: ' + this.ym.info.comment, 16, 56);

    this.game.debug.text('vu1: ' + this.ym.vu[0], 16, 72);
    this.game.debug.text('vu2: ' + this.ym.vu[1], 16, 88);
    this.game.debug.text('vu3: ' + this.ym.vu[2], 16, 104);

  }

}

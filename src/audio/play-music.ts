import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PlayMusicState extends BootState {
  sprite: Phaser.Sprite;
  music: Phaser.Sound;

  preload () {

    this.load.image('disk', 'assets/sprites/ra_dont_crack_under_pressure.png');

    //  Firefox doesn't support mp3 files, so use ogg
    this.load.audio('boden', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg']);

  }

  create () {

    this.stage.backgroundColor = '#182d3b';
    this.input.touch.preventDefault = false;

    this.music = this.add.audio('boden');
    this.music.onDecoded.addOnce(()=>{
      this.music.play();
    });

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'disk');
    this.sprite.anchor.set(0.5);

    this.input.onDown.add(this.changeVolume, this);

  }

  changeVolume (pointer: Phaser.Pointer) {

    if (pointer.y < 100) {
      // http://localhost:3000/Phaser.Sound.html#mute
      // mute :boolean
      // Gets or sets the muted state of this sound.
      this.music.mute = !this.music.mute;
      console.log('toggle mute');
    }
    else if (pointer.y < 300) {
      // http://localhost:3000/Phaser.Sound.html#volume
      // volume :number
      // Gets or sets the volume of this sound, a value between 0 and 1. The value given is clamped to the range 0 to 1.
      this.music.volume += 0.1;
      if (this.music.volume > 1) {
        this.music.volume = 1;
      }
      console.log('volume up');
    }
    else {
      this.music.volume -= 0.1;
      if (this.music.volume < 0) {
        this.music.volume = 0;
      }
      console.log('volume down');
    }

  }

  update () {

    this.sprite.rotation += 0.01;

  }

  render () {

    this.game.debug.soundInfo(this.music, 20, 32);
    this.game.debug.rectangle(new Phaser.Rectangle(0, 100, this.world.width, 1));
    this.game.debug.rectangle(new Phaser.Rectangle(0, 300, this.world.width, 1));

  }

}

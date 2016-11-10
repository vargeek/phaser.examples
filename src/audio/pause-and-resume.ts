import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PauseAndResumeState extends BootState {
  sprite: Phaser.Sprite;
  music: Phaser.Sound;

  preload () {

    this.load.image('disk', 'assets/sprites/ra_dont_crack_under_pressure.png');

    //  Firefox doesn't support mp3 files, so use ogg
    this.load.audio('boden', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg']);
    // game.load.audio('boden', ['assets/audio/time.mp3']);

  }

  create () {

    this.stage.backgroundColor = '#182d3b';
    this.input.touch.preventDefault = false;

    this.music = this.add.audio('boden');
    this.music.play();

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'disk');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.input.onDown.add(this.pauseAndResume, this);

  }

  pauseAndResume (pointer: Phaser.Pointer) {

    if (pointer.y < 300) {
      this.music.pause();
    }
    else {
      this.music.resume();
    }

  }

  update () {

    this.sprite.rotation += 0.01;

  }

  render () {

    this.game.debug.soundInfo(this.music, 20, 32);

  }

}


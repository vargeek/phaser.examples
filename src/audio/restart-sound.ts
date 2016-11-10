import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RestartSoundState extends BootState {
  sprite: Phaser.Sprite;
  music: Phaser.Sound;

  preload () {

    this.load.image('greenie', 'assets/sprites/wizball.png');
    this.load.audio('wizball', ['assets/audio/oedipus_wizball_highscore.mp3', 'assets/audio/oedipus_wizball_highscore.ogg']);

  }

  create () {

    this.stage.backgroundColor = '#182d3b';
    this.input.touch.preventDefault = false;

    this.music = this.add.audio('wizball');
    this.music.play();

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'greenie');
    this.sprite.anchor.set(0.5);

    this.input.onDown.add(this.restartMusic, this);

  }

  restartMusic () {

    // http://localhost:3000/Phaser.Sound.html#restart
    // restart(marker, position, volume, loop)
    // Restart the sound, or a marked section of it.
    this.music.restart(undefined, undefined);

  }

  update () {

    this.sprite.rotation += 0.01;

  }

  render () {

    this.game.debug.soundInfo(this.music, 20, 32);

  }

}

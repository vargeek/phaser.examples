import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FadeInState extends BootState {
  music: Phaser.Sound;

  preload () {

    this.load.image('disk', 'assets/sprites/ra_dont_crack_under_pressure.png');
    this.load.audio('boden', 'assets/audio/goaman_intro.mp3');

  }

  create () {

    this.stage.backgroundColor = '#182d3b';
    this.input.touch.preventDefault = false;

    this.music = this.add.audio('boden');
    // http://localhost:3000/Phaser.Sound.html#onDecoded
    // onDecoded :Phaser.Signal
    // The onDecoded event is dispatched when the sound has finished decoding (typically for mp3 files)
    this.music.onDecoded.add(this.start, this);

    let sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'disk');
    sprite.anchor.set(0.5);

  }

  start () {

    // http://localhost:3000/Phaser.Sound.html#fadeIn
    // fadeIn(duration, loop, marker)
    // duration{number=1000}    The time in milliseconds over which the Sound should fade in.
    // loop(number=false)       Should the Sound be set to loop? Note that this doesn't cause the fade to repeat.
    // marker{string=current_marker}    The marker to start at; defaults to the current (last played) marker. To start playing from the beginning specify specify a marker of ''.

    // Starts this sound playing (or restarts it if already doing so) and sets the volume to zero.
    // Then increases the volume from 0 to 1 over the duration specified.

    // At the end of the fade Sound.onFadeComplete is dispatched with this Sound object as the first parameter,
    // and the final volume (1) as the second parameter.
    this.music.fadeIn(4000);

  }

  render () {

    this.game.debug.soundInfo(this.music, 20, 32);

  }

}

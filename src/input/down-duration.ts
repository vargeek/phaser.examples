import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DownDurationState extends BootState {
  bunny: Phaser.Sprite;
  lastDuration = 0;


  preload () {

    this.load.image('bunny', 'assets/sprites/bunny.png');

  }

  create () {

    this.bunny = this.add.sprite(this.world.centerX, this.world.centerY, 'bunny');
    this.bunny.alpha = 0.5;
    this.bunny.anchor.set(0.5);

    // http://localhost:3000/Phaser.Input.html#onUp
    // game.input.onUp: Phaser.Input, Phaser.Signal
    // onDown, onHold, onTap, onUp, ...
    this.input.onUp.add(this.getTime, this);

  }

  update () {

    // http://localhost:3000/Phaser.Input.html#activePointer
    // game.input.activePointer: Phaser.Input, Phaser.Pointer

    // the most recently active Pointer object.
    // When you've limited max pointers to 1 this will accurately be either the first finger touched or mouse.
    if (this.input.activePointer.isDown) {
      this.bunny.alpha = 1;
    }
    else {
      this.bunny.alpha = 0.5;
    }

  }

  getTime (pointer: Phaser.Pointer) {

    // http://localhost:3000/Phaser.Pointer.html#duration
    // Phaser.Pointer
    // 按住时间

    // How long the Pointer has been depressed on the touchscreen or any of the mouse buttons have been held down.
    // If not currently down it returns -1.
    // If you need to test a specific mouse or pen button then access the buttons directly, i.e. Pointer.rightButton.duration.
    this.lastDuration = pointer.duration;

  }

  render () {

    this.game.debug.text(`Duration: ${this.input.activePointer.duration}`, 32, 32);
    this.game.debug.text(`Last Duration: ${this.lastDuration}`, 32, 64);

  }

}

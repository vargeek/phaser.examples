import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PointerOverState extends BootState {
  bunny: Phaser.Sprite;

  preload () {

    this.load.image('bunny', 'assets/sprites/bunny.png');

  }

  create () {

    this.bunny = this.add.sprite(this.world.centerX, this.world.centerY, 'bunny');

    this.bunny.alpha = 0.5;
    this.bunny.anchor.set(0.5);

    this.bunny.inputEnabled = true;

    // http://localhost:3000/Phaser.Input.html#addMoveCallback
    // addMoveCallback(callback, context)
    // Adds a callback that is fired every time the activePointer receives a DOM move event such as a mousemove or touchmove.

    // The callback will be sent 4 parameters:
    // A reference to the Phaser.Pointer object that moved,
    // The x position of the pointer,
    // The y position,
    // A boolean indicating if the movement was the result of a 'click' event (such as a mouse click or touch down).

    // It will be called every time the activePointer moves, which in a multi-touch game can be a lot of times, so this is best
    // to only use if you've limited input to a single pointer (i.e. mouse or touch).
    // The callback is added to the Phaser.Input.moveCallbacks array and should be removed with Phaser.Input.deleteMoveCallback.
    this.input.addMoveCallback(this.move, this);

  }

  move (pointer: Phaser.Pointer) {

    console.log(`(${pointer.x},${pointer.y})`);

  }

  update () {

    // http://localhost:3000/Phaser.InputHandler.html#pointerOver
    // pointerOver(pointerId) → {boolean}
    // Is the Pointer over this Sprite?
    if (this.bunny.input.pointerOver()) {
      this.bunny.alpha = 1;
    }
    else {
      this.bunny.alpha = 0.5;
    }

  }

  render () {

    this.game.debug.text(`Over: ${this.bunny.input.pointerOver()}`, 32, 32);

  }

}

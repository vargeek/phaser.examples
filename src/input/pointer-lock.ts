import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PointerLockState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.image('ball', 'assets/sprites/shinyball.png');

  }

  create () {

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'ball');

    this.game.canvas.addEventListener('mousedown', this.requestLock.bind(this));

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

  requestLock () {

    // http://localhost:3000/Phaser.Mouse.html#requestPointerLock
    // 射击类游戏: 锁住光标。
    // requestPointerLock()
    // If the browser supports it you can request that the pointer be locked to the browser window.
    // This is classically known as 'FPS controls', where the pointer can't leave the browser until the user presses an exit key.
    // If the browser successfully enters a locked state the event Phaser.Mouse.pointerLock will be dispatched and the first parameter will be 'true'.
    this.input.mouse.requestPointerLock();

  }

  move (pointer: Phaser.Pointer, x: number, y: number) {

    if (this.input.mouse.locked) {

      this.sprite.x += this.input.mouse.event.movementX;
      this.sprite.y += this.input.mouse.event.movementY;

    }

  }

}

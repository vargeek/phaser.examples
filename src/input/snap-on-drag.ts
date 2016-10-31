import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SnapOnDragState extends BootState {

  preload () {

    this.load.image('grid', 'assets/tests/debug-grid-1920x1920.png');
    this.load.image('atari1', 'assets/sprites/atari130xe.png');
    this.load.image('atari2', 'assets/sprites/atari800xl.png');

  }

  create () {

    this.add.sprite(0, 0, 'grid');

    let atari1 = this.add.sprite(128, 128, 'atari1');
    let atari2 = this.add.sprite(256, 256, 'atari2');

    atari1.inputEnabled = true;
    atari2.inputEnabled = true;

    // http://localhost:3000/Phaser.InputHandler.html#enableDrag
    // enableDrag(lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
    // Allow this Sprite to be dragged by any valid pointer.

    // events:
    // When the drag begins the Sprite.events.onDragStart event will be dispatched.
    // When the drag completes by way of the user letting go of the pointer that was dragging the sprite, the Sprite.events.onDragStop event is dispatched.
    // For the duration of the drag the Sprite.events.onDragUpdate event is dispatched. This event is only dispatched when the pointer actually
    // changes position and moves. The event sends 5 parameters: sprite, pointer, dragX, dragY and snapPoint.

    // thresholds:
    // You can control the thresholds over when a drag starts via the properties:
    // Pointer.dragDistanceThreshold the distance, in pixels, that the pointer has to move before the drag will start.
    // Pointer.dragTimeThreshold the time, in ms, that the pointer must be held down on
    // the Sprite before the drag will start.
    // You can set either (or both) of these properties after enabling a Sprite for drag.
    atari1.input.enableDrag();
    atari2.input.enableDrag();

    // http://localhost:3000/Phaser.InputHandler.html#enableSnap
    // enableSnap(snapX, snapY, onDrag, onRelease, snapOffsetX, snapOffsetY)
    // onDrag:
    // If true the sprite will snap to the grid while being dragged.
    // onRelease
    // If true the sprite will snap to the grid when released.

    // Make this Sprite snap to the given grid either during drag or when it's released.
    // For example 16x16 as the snapX and snapY would make the sprite snap to every 16 pixels.
    atari1.input.enableSnap(32, 32, true, true);
    atari2.input.enableSnap(32, 32, false, true);


  }

}

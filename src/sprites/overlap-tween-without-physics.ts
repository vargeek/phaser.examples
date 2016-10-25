/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class OverlapTweenWithoutPhysicsState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  text: Phaser.Text;

  preload () {

    this.load.image(AssetID.atari1, 'assets/sprites/atari130xe.png');
    this.load.image(AssetID.atari2, 'assets/sprites/atari800xl.png');

  }

  create () {

    this.sprite1 = this.add.sprite(100, 200, AssetID.atari1);
    // By default a Game Object won't process any input events. By setting inputEnabled to true a Phaser.InputHandler is created for this Game Object and it will then start to process click / touch events and more.
    this.sprite1.inputEnabled = true;

    // Allow this Sprite to be dragged by any valid pointer.
    // When the drag begins the Sprite.events.onDragStart event will be dispatched.
    // When the drag completes by way of the user letting go of the pointer that was dragging the sprite, the Sprite.events.onDragStop event is dispatched.
    // For the duration of the drag the Sprite.events.onDragUpdate event is dispatched. This event is only dispatched when the pointer actually changes position and moves. The event sends 5 parameters: sprite, pointer, dragX, dragY and snapPoint.

    // You can control the thresholds over when a drag starts via the properties:
    // Pointer.dragDistanceThreshold the distance, in pixels, that the pointer has to move before the drag will start.
    // Pointer.dragTimeThreshold the time, in ms, that the pointer must be held down on the Sprite before the drag will start.
    // You can set either (or both) of these properties after enabling a Sprite for drag.
    this.sprite1.input.enableDrag();

    this.sprite2 = this.add.sprite(400, 100, AssetID.atari2);

    this.add.tween(this.sprite2).to({y: 400}, 3000, Phaser.Easing.Cubic.InOut, true, 0, -1, true);

    this.text = this.add.text(16, 16, 'Drag the sprite. Overlaping: false', {fill: '#ffffff'});

  }

  update () {

    if (this.checkOverlap(this.sprite1, this.sprite2)) {
      this.text.text = 'Drag the sprite. Overlapping: true';
    }
    else {
      this.text.text = 'Drag the sprite. Overlapping: false';
    }

  }

  checkOverlap(sprite1: Phaser.Sprite, sprite2: Phaser.Sprite) {

    // Determines whether the two Rectangles intersect with each other.
    // This method checks the x, y, width, and height properties of the Rectangles.
    return Phaser.Rectangle.intersects(sprite1.getBounds() as any as Phaser.Rectangle, sprite2.getBounds() as any as Phaser.Rectangle);
  }

}

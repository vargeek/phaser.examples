import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DropLimitationState extends BootState {

  preload () {

    this.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);

  }

  create () {

    for (let index = 0; index < 6; index++) {

      let item = this.add.sprite(90, 90 * index, 'item', index);
      item.inputEnabled = true;
      item.input.enableDrag();

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
      item.input.enableSnap(90, 90, false, true);

      // 在drop之后修改位置，从而限制drop范围。
      item.events.onDragStop.add(this.fixLocaltion, this);

    }

  }

  fixLocaltion (sprite: Phaser.Sprite, pointer: Phaser.Pointer) {

    if (sprite.x < 90) {
      sprite.x = 90;
    }
    else if (sprite.x > 180 && sprite.x < 270) {
      sprite.x = 180;
    }
    else if (sprite.x > 360) {
      sprite.x = 270;
    }

  }

  render () {

    this.game.debug.text(`Group Left.`, 100, 560);
    this.game.debug.text(`Group Right.`, 280, 560);
    this.game.debug.inputInfo(36, 36);

  }

}

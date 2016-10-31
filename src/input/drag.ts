import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DragState extends BootState {

  preload () {

    this.load.image('grid', 'assets/tests/debug-grid-1920x1920.png');
    this.load.image('atari', 'assets/sprites/atari800xl.png');

  }

  create () {

    this.add.sprite(0, 0, 'grid');

    let atari1 = this.add.sprite(300, 300, 'atari');
    // 创建 Phaser.InputHandler
    // http://localhost:3000/Phaser.Sprite.html#inputEnabled
    // inputEnabled :boolean
    // By default a Game Object won't process any input events. By setting inputEnabled to true a Phaser.InputHandler is created
    // for this Game Object and it will then start to process click / touch events and more.
    // You can then access the Input Handler via this.input.
    // Note that Input related events are dispatched from this.events, i.e.: events.onInputDown.
    // If you set this property to false it will stop the Input Handler from processing any more input events.
    // If you want to temporarily disable input for a Game Object, then it's better to set
    // input.enabled = false, as it won't reset any of the Input Handlers internal properties.
    // You can then toggle this back on as needed.
    atari1.inputEnabled = true;

    // http://localhost:3000/Phaser.InputHandler.html#enableDrag
    // enableDrag(lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
    // Allow this Sprite to be dragged by any valid pointer.
    // lockCenter:
    // If false the Sprite will drag from where you click it minus the dragOffset. If true it will center itself to the tip of the mouse pointer.

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
    atari1.input.enableDrag(true);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DragUpdateState extends BootState {
  angle: number = 0;
  dragSprite: Phaser.Sprite;
  copySprite: Phaser.Sprite;

  preload () {

    this.load.image('ship', 'assets/sprites/ship.png');;
    this.load.image('ball', 'assets/sprites/pangball.png');

  }

  create () {

    this.stage.backgroundColor = '#2f0f1c';

    this.dragSprite = this.add.sprite(this.world.centerX, this.world.centerY, 'ship');

    this.dragSprite.anchor.set(0.5);

    this.dragSprite.inputEnabled = true;
    this.dragSprite.input.enableDrag();

    this.dragSprite.events.onDragStart.add(this.onDragStart, this);

    // http://localhost:3000/Phaser.Events.html#onDragUpdate
    // This signal is dispatched if the Game Object has been inputEnabled and enableDrag has been set.
    // It is sent when a Phaser.Pointer is actively dragging the Game Object.
    // Be warned: This is a high volume Signal. Be careful what you bind to it.

    // It is sent six arguments:
    // {any} The Game Object that received the event.
    // {Phaser.Pointer} The Phaser.Pointer object that caused the event.
    // {number} The new x coordinate of the Game Object.
    // {number} The new y coordinate of the Game Object.
    // {Phaser.Point} A Point object that contains the point the Game Object was snapped to, if snapOnDrag has been enabled.
    // {boolean} The fromStart boolean, indicates if this is the first update immediately after the drag has started.
    this.dragSprite.events.onDragUpdate.add(this.onDragUpdate, this);
    this.dragSprite.events.onDragStop.add(this.onDragStop, this);

    this.copySprite = this.add.sprite(this.dragSprite.x + 220, this.dragSprite.y, 'ball');
    this.copySprite.anchor.set(0.5);
    this.copySprite.alpha = 0.5;
    this.copySprite.angle = 100;

    let text = this.add.text(32, 32, 'drag the ship', {font: '32px Arial', fill: '#f9b4cf'});
    text.setShadow(6, 6, 'rgba(0,0,0,0.8)', 5);

  }

  onDragStart (sprite: Phaser.Sprite, pointer: Phaser.Pointer) {

    this.copySprite.alpha = 1;

  }

  onDragUpdate (sprite: Phaser.Sprite, pointer: Phaser.Pointer, dragX: number, dragY: number, sanpPoint: Phaser.Point) {

    this.angle += 0.05;

    this.copySprite.x = this.dragSprite.x + 220 * Math.cos(this.angle);
    this.copySprite.y = this.dragSprite.y + 200 * Math.sin(this.angle);

    this.copySprite.rotation = this.physics.arcade.angleToPointer(this.copySprite);

  }

  onDragStop () {

    this.copySprite.alpha = 0.5;

  }

}

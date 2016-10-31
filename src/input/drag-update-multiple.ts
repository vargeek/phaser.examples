import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DragUpdateMultipleState extends BootState {
  angle = 0;
  dragSprite: Phaser.Sprite;
  copySprite: Phaser.Sprite;

  preload () {

    this.load.image('grid', 'assets/tests/debug-grid-1920x1920.png');
    this.load.image('ship', 'assets/sprites/ship.png');
    this.load.image('ball', 'assets/sprites/pangball.png');

  }

  create () {

    this.add.sprite(0, 0, 'grid').alpha = 0.4;

    this.dragSprite = this.add.sprite(this.world.centerX, this.world.centerY, 'ship');
    this.dragSprite.anchor.set(0.5);

    this.dragSprite.inputEnabled = true;
    this.dragSprite.input.enableDrag();

    this.dragSprite.events.onDragStart.add(this.onDragStart, this);
    this.dragSprite.events.onDragUpdate.add(this.onDragUpdate, this);
    this.dragSprite.events.onDragStop.add(this.onDragStop, this);

    this.copySprite = this.add.sprite(this.dragSprite.x + 200, this.dragSprite.y, 'ball');
    this.copySprite.anchor.set(0.5);
    this.copySprite.alpha = 0.5;

  }

  onDragStart (sprite: Phaser.Sprite, pointer: Phaser.Pointer) {

    this.copySprite.alpha = 1;

  }

  onDragUpdate (sprite: Phaser.Sprite, pointer: Phaser.Pointer, dragX: number, dragY: number, snapPointer: Phaser.Point) {

    this.angle += 0.05;

    this.copySprite.x = this.dragSprite.x + 200 * Math.cos(this.angle);
    this.copySprite.y = this.dragSprite.y + 200 * Math.sin(this.angle);

  }

  // 25.8
  onDragStop (sprite: Phaser.Sprite) {

    this.copySprite.alpha = 0.5;

  }

}

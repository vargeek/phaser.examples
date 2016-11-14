import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SpriteShadowState extends BootState {
  sprite: Phaser.Sprite;
  shadow: Phaser.Sprite;
  offset = new Phaser.Point(10, 8);

  preload () {

    this.load.image('hotdog', 'assets/sprites/hotdog.png');

  }

  create () {

    this.stage.backgroundColor = '#0c9fc7';

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'hotdog');
    this.sprite.anchor.set(0.5);

    this.shadow = this.add.sprite(this.sprite.x + this.offset.x, this.sprite.y + this.offset.y, 'hotdog');
    this.shadow.anchor.set(0.5);
    this.shadow.tint = 0x000000;
    this.shadow.alpha = 0.6;

    this.sprite.bringToTop();

    this.input.addMoveCallback(this.move, this);

  }

  move (pointer: Phaser.Pointer, x: number, y: number) {

    this.sprite.x = x;
    this.sprite.y = y;
    this.shadow.x = this.sprite.x + this.offset.x;
    this.shadow.y = this.sprite.y + this.offset.y;

  }

}

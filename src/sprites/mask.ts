/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MaskState extends BootState {
  sprite: Phaser.Sprite;
  mask: Phaser.Graphics;

  preload () {

    this.load.image(AssetID.chaos, '/assets/pics/hotshot-chaos_in_tokyo.png');

  }

  create () {

    this.sprite = this.add.sprite(0, 0, AssetID.chaos);
    this.sprite.scale.set(2);

    this.mask = this.add.graphics(0, 0);
    this.mask.beginFill(0xffffff);
    this.mask.drawCircle(100, 100, 100);

    this.sprite.mask = this.mask;

    this.input.addMoveCallback(this.move, this);

  }

  move (pointer: Phaser.Pointer, x: number, y: number) {

    this.mask.x = x - 100;
    this.mask.y = y - 100;

  }

}

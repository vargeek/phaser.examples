/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DynamicCropState extends BootState {
  pic: Phaser.Image;
  cropRect: Phaser.Rectangle;
  w: number;
  h: number;

  preload () {

    this.load.image(AssetID.trsi, '/assets/pics/trsipic1_lazur.jpg');

  }

  create () {

    this.pic = this.add.sprite(0, 0, AssetID.trsi);

    this.w = this.pic.width;
    this.h = this.pic.height;

    this.cropRect = new Phaser.Rectangle(0, 0, 128, 128);

    this.pic.crop(this.cropRect);

  }

  update () {

    if (this.input.x < this.w && this.input.y < this.h) {
      this.pic.x = this.input.x;
      this.pic.y = this.input.y;
      this.cropRect.x = this.input.x;
      this.cropRect.y = this.input.y;
      this.pic.updateCrop();
    }

  }

  render () {

    this.game.debug.text(`x: ${this.input.x} y:${this.input.y}`, 32, 32);

  }

}

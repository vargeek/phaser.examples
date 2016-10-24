/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class VerticalCropState extends BootState {
  pic: Phaser.Image;
  cropRect: Phaser.Rectangle;

  preload () {

    this.load.image(AssetID.trsi, '/assets/pics/trsipic1_lazur.jpg');

  }

  create () {

    this.pic = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.trsi);
    this.pic.anchor.set(0.5);

    this.cropRect = new Phaser.Rectangle(0, 0, this.pic.width, 0);

    let tween = this.add.tween(this.cropRect).to({height: this.pic.height}, 3000, Phaser.Easing.Bounce.Out, false, 0, Number.MAX_VALUE, true);

    this.pic.crop(this.cropRect);

    tween.start();

  }

  update () {

    this.pic.updateCrop();

  }

}

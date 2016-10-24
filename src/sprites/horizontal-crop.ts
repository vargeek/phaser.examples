/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class HorizontalCropState extends BootState {
  pic: Phaser.Image;
  cropRect: Phaser.Rectangle;

  preload () {

    this.load.image(AssetID.trsi, '/assets/pics/trsipic1_lazur.jpg');

  }

  create () {

    this.pic = this.add.image(this.world.centerX, this.world.centerY, AssetID.trsi);

    this.pic.anchor.setTo(0.5, 0.5);

    this.cropRect = new Phaser.Rectangle(0, 0, 0, this.pic.height);

    let tween = this.add.tween(this.cropRect).to({width: this.pic.width}, 3000, Phaser.Easing.Bounce.Out, false, 0, Number.MAX_VALUE, true);

    this.pic.crop(this.cropRect);

    tween.start();

  }

  update () {

    this.pic.updateCrop();

  }

}

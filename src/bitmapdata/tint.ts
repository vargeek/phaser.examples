import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TintState extends BootState {
  bmd: Phaser.BitmapData;

  preload () {

    this.load.image('crystal', 'assets/pics/cougar_dragonsun.png');

  }

  create () {

    let pic = this.make.image(0, 0, 'crystal');
    this.bmd = this.make.bitmapData(pic.width, pic.height);

    PIXI.CanvasTinter.tintMethod(pic.texture, 0xee4343, this.bmd.canvas);

    this.bmd.addToWorld();


  }

}

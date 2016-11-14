import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ProcessPixels2State extends BootState {
  bmd: Phaser.BitmapData;

  preload () {

    this.load.image('crystal', 'assets/pics/cougar_dragonsun.png');

  }

  create () {

    this.bmd = this.make.bitmapData();
    this.bmd.load('crystal');
    this.bmd.addToWorld(this.world.centerX, this.world.centerY, 0.5, 0.5);

    this.input.onDown.add(this.startProcess, this);
  }

  startProcess () {

    this.bmd.processPixelRGB(this.forEachPixel, this);

  }

  forEachPixel (pixel: any) {

    let {r} = pixel;

    pixel.r = r;
    pixel.g = r;
    pixel.b = r;

    return pixel;

  }

}

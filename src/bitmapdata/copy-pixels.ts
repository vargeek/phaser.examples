import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CopyPixelsState extends BootState {
  bmd: Phaser.BitmapData;
  area: Phaser.Rectangle;
  dropTime = 0;

  preload () {

    this.load.image('pic', 'assets/pics/hotshot-chaos_in_tokyo.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    this.bmd = this.make.bitmapData(800, 600);

    this.bmd.addToWorld();

    this.area = new Phaser.Rectangle(0, 300, 200, 16);

    this.bmd.copyRect('pic', this.area, 300, 0);

  }

  update () {

    if (this.area.y > 0 && this.time.now > this.dropTime) {
      for (let y = 0; y < this.area.y; y++) {
        // http://localhost:3000/Phaser.BitmapData.html#copyRect
        // copyRect(source, area, x, y, alpha, blendMode, roundPx) → {Phaser.BitmapData}
        // x{number}      The destination x coordinate to copy the image to.
        // Copies the area defined by the Rectangle parameter from the source image to this BitmapData at the given location.
        this.bmd.copyRect('pic', this.area, 300, y);
      }
      this.area.y--;
      this.dropTime = this.time.now + 25;
    }

  }

}

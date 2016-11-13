import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RectangleRandomPointState extends BootState {
  math: typeof Phaser.Math;
  colors = Phaser.Color.HSVColorWheel();
  rectangle = new Phaser.Rectangle(100, 200, 600, 200);
  bmd: Phaser.BitmapData;
  point = new Phaser.Point();
  index = 0;

  create () {

    this.bmd = this.add.bitmapData(this.game.width, this.game.height);
    this.bmd.addToWorld();

  }

  update () {

    for (let color = 0; color < 10; color++) {
      // http://localhost:3000/Phaser.Rectangle.html#random
      // random(out) → {Phaser.Point}
      // Returns a uniformly distributed random point from anywhere within this Rectangle.
      this.rectangle.random(this.point);
      this.point.floor();
      this.bmd.setPixel(this.point.x, this.point.y, this.colors[this.index].r, this.colors[this.index].g, this.colors[this.index].b);
    }

    this.index = this.math.wrapValue(this.index, 1, 359);

  }

}

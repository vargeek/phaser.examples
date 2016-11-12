import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class EllipseRandomPointState extends BootState {
  math: typeof Phaser.Math;
  colors = Phaser.Color.HSVColorWheel();
  ellipse: Phaser.Ellipse;
  bmd: Phaser.BitmapData;
  point = new Phaser.Point();
  index = 0;

  create () {

    // http://localhost:3000/Phaser.Ellipse.html
    // new Ellipse(x, y, width, height)
    // Creates a Ellipse object. A curve on a plane surrounding two focal points.
    this.ellipse = new Phaser.Ellipse(this.world.centerX, this.world.centerY, 300, 550);

    this.bmd = this.add.bitmapData(this.game.width, this.game.height);
    this.bmd.addToWorld();

  }

  update () {

    for (let color = 0; color < 10; color++) {
      // http://localhost:3000/Phaser.Ellipse.html#random
      // random(out) → {Phaser.Point}
      // Returns a uniformly distributed random point from anywhere within this Ellipse.
      this.ellipse.random(this.point);
      this.point.floor();
      this.bmd.setPixel(this.point.x, this.point.y, this.colors[this.index].r, this.colors[this.index].g, this.colors[this.index].b);
    }

    this.index = this.math.wrapValue(this.index, 1, 359);

  }

}

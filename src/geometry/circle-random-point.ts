import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CircleRandomPointState extends BootState {
  math: typeof Phaser.Math;
  colors = Phaser.Color.HSVColorWheel();
  circle: Phaser.Circle;
  bmd: Phaser.BitmapData;
  point = new Phaser.Point();
  index = 0;

  create () {

    // http://localhost:3000/Phaser.Circle.html
    // new Circle(x, y, diameter)
    // Creates a new Circle object with the center coordinate specified by the x and y parameters and the diameter specified by the diameter parameter.
    // If you call this function without parameters, a circle with x, y, diameter and radius properties set to 0 is created.
    this.circle = new Phaser.Circle(this.world.randomX, this.world.randomY, 500);

    this.bmd = this.add.bitmapData(this.game.width, this.game.height);
    this.bmd.addToWorld();

    let graphics = this.add.graphics(0, 0);
    graphics.lineStyle(1, 0x00ff00, 1);
    graphics.drawCircle(this.circle.x, this.circle.y, this.circle.diameter);


  }

  update () {

    for (let color = 0; color < 20; color++) {
      // http://localhost:3000/Phaser.Circle.html#random
      // random(out) → {Phaser.Point}
      // Returns a uniformly distributed random point from anywhere within this Circle.
      this.circle.random(this.point);
      this.point.floor();
      this.bmd.setPixel(this.point.x, this.point.y, this.colors[this.index].r, this.colors[this.index].g, this.colors[this.index].b);
    }

    this.index = this.math.wrapValue(this.index, 1, 359);

  }

}

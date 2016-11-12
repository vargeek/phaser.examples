import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LineRandomPointState extends BootState {
  // http://localhost:3000/Phaser.Color.html#HSVColorWheel
  // <static> HSVColorWheel(s, v) → {array}
  // Get HSV color wheel values in an array which will be 360 elements in size.
  colors = Phaser.Color.HSVColorWheel();
  lines: Phaser.Line[] = [];
  bmd: Phaser.BitmapData;
  point = new Phaser.Point();
  math: typeof Phaser.Math;
  index = 0;

  create () {

    for (let index = 0; index < 50; index++) {
      this.lines.push(new Phaser.Line(this.world.randomX, this.world.randomY, this.world.randomX, this.world.randomY));
    }

    this.bmd = this.add.bitmapData(this.game.width, this.game.height
    );
    this.bmd.addToWorld();

  }

  update () {

    for (let color = 0; color < this.lines.length; color++) {
      // http://localhost:3000/Phaser.Line.html#random
      // random(out) → {Phaser.Point}
      // Picks a random point from anywhere on the Line segment and returns it.
      this.lines[color].random(this.point);
      // http://localhost:3000/Phaser.Point.html#floor
      // floor() → {Phaser.Point}
      // Math.floor() both the x and y properties of this Point.
      this.point.floor();
      this.bmd.setPixel(this.point.x, this.point.y, this.colors[this.index].r, this.colors[this.index].g, this.colors[this.index].b);
    }

    // http://localhost:3000/Phaser.Math.html#wrapValue
    // wrapValue(value, amount, max) → {number}
    // Adds value to amount and ensures that the result always stays between 0 and max, by wrapping the value around.
    // Values must be positive integers, and are passed through Math.abs. See Phaser.Math#wrap for an alternative.
    this.index = this.math.wrapValue(this.index, 1, 359);
  }

}

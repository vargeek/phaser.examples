import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RotatePointState extends BootState {
  p1: Phaser.Point;
  p2: Phaser.Point;

  create () {

    // http://localhost:3000/Phaser.Point.html
    // new Point(x, y)

    // A Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
    // The following code creates a point at (0,0):
    // var myPoint = new Phaser.Point();
    // You can also use them as 2D Vectors and you'll find different vector related methods in this class.
    this.p1 = new Phaser.Point(300, 300);
    this.p2 = new Phaser.Point(400, 300);

  }

  update () {

    // http://localhost:3000/Phaser.Point.html#rotate
    // rotate(x, y, angle, asDegrees, distance) → {Phaser.Point}
    // asDegrees{boolean=false}   Is the given angle in radians (false) or degrees (true)?
    // distance{number?}          An optional distance constraint between the Point and the anchor. 旋转点到锚点距离不能大于distance
    // Rotates this Point around the x/y coordinates given to the desired angle.
    this.p1.rotate(this.p2.x, this.p2.y, 1, true);

  }

  render () {

    this.game.debug.pixel(this.p1.x, this.p1.y, '#ff0', 4);

    this.game.debug.pixel(this.p2.x, this.p2.y, '#f00', 4);

  }

}

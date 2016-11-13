import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RectangleIntersectsState extends BootState {
  rectA: Phaser.Rectangle;
  rectB: Phaser.Rectangle;

  create () {

    this.rectA = new Phaser.Rectangle(0, 0, 200, 100);
    this.rectB = new Phaser.Rectangle(100, 100, 500, 400);

  }

  update () {

    this.rectA.x = this.input.activePointer.x;
    this.rectA.y = this.input.activePointer.y;

  }

  render () {

    this.game.debug.geom(this.rectA, 'rgba(200,0,0,0.5)');
    this.game.debug.geom(this.rectB, 'rgba(0,0,255,0.5)');

    // http://localhost:3000/Phaser.Rectangle.html#intersection
    // <static> intersection(a, b, output) → {Phaser.Rectangle}
    // If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object. If the Rectangles do not intersect, this method returns an empty Rectangle object with its properties set to 0.

    // intersection(b, out) → {Phaser.Rectangle}
    // If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object. If the Rectangles do not intersect, this method returns an empty Rectangle object with its properties set to 0.
    let intersects = Phaser.Rectangle.intersection(this.rectA, this.rectB);
    this.game.debug.geom(intersects, 'rgba(255,0,0,1)');


  }

}

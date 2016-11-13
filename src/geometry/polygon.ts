import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PolygonState extends BootState {

  create () {

    // http://localhost:3000/Phaser.Polygon.html
    // Creates a new Polygon.

    // The points can be set from a variety of formats:

    // An array of Point objects: [new Phaser.Point(x1, y1), ...]
    // An array of objects with public x/y properties: [obj1, obj2, ...]
    // An array of paired numbers that represent point coordinates: [x1,y1, x2,y2, ...]
    // As separate Point arguments: setTo(new Phaser.Point(x1, y1), ...)
    // As separate objects with public x/y properties arguments: setTo(obj1, obj2, ...)
    // As separate arguments representing point coordinates: setTo(x1,y1, x2,y2, ...)
    let polygon = new Phaser.Polygon();

    // http://localhost:3000/Phaser.Polygon.html#setTo
    // setTo(points) → {Phaser.Polygon}

    // Sets this Polygon to the given points.

    // The points can be set from a variety of formats:

    // An array of Point objects: [new Phaser.Point(x1, y1), ...]
    // An array of objects with public x/y properties: [obj1, obj2, ...]
    // An array of paired numbers that represent point coordinates: [x1,y1, x2,y2, ...]
    // An array of arrays with two elements representing x/y coordinates: [[x1, y1], [x2, y2], ...]
    // As separate Point arguments: setTo(new Phaser.Point(x1, y1), ...)
    // As separate objects with public x/y properties arguments: setTo(obj1, obj2, ...)
    // As separate arguments representing point coordinates: setTo(x1,y1, x2,y2, ...)
    // setTo may also be called without any arguments to remove all points.
    let points = polygon.setTo([new Phaser.Point(200, 100), new Phaser.Point(350, 100), new Phaser.Point(275, 200), new Phaser.Point(150, 200)]);

    let graphics = this.add.graphics(0, 0);
    graphics.beginFill(0xff33ff);
    graphics.drawPolygon(points);
    graphics.endFill();


  }

}

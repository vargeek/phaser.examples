import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RectangleGetPointState extends BootState {

  create () {

    let rectangle = new Phaser.Rectangle(100, 200, 600, 200);
    let bmd = this.add.bitmapData(this.game.width, this.game.height);

    bmd.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height, '#2d2d2d');

    let p = new Phaser.Point();

    // http://localhost:3000/Phaser.Rectangle.html#getPoint
    // Returns a point based on the given position constant, which can be one of:
    // Phaser.TOP_LEFT, Phaser.TOP_CENTER, Phaser.TOP_RIGHT, Phaser.LEFT_CENTER,
    // Phaser.CENTER, Phaser.RIGHT_CENTER, Phaser.BOTTOM_LEFT, Phaser.BOTTOM_CENTER and Phaser.BOTTOM_RIGHT.
    // This method returns the same values as calling Rectangle.bottomLeft, etc, but those
    // calls always create a new Point object, where-as this one allows you to use your own.
    rectangle.getPoint(Phaser.TOP_LEFT, p);
    bmd.rect(p.x, p.y, 2, 2, '#f0f');


    rectangle.getPoint(Phaser.TOP_CENTER, p);
    bmd.rect(p.x, p.y, 2, 2, '#ff00ff');

    rectangle.getPoint(Phaser.TOP_RIGHT, p);
    bmd.rect(p.x, p.y, 2, 2, '#ff00ff');

    rectangle.getPoint(Phaser.LEFT_CENTER, p);
    bmd.rect(p.x, p.y, 2, 2, '#ff00ff');

    rectangle.getPoint(Phaser.CENTER, p);
    bmd.rect(p.x, p.y, 2, 2, '#ff00ff');

    rectangle.getPoint(Phaser.RIGHT_CENTER, p);
    bmd.rect(p.x, p.y, 2, 2, '#ff00ff');

    rectangle.getPoint(Phaser.BOTTOM_LEFT, p);
    bmd.rect(p.x, p.y, 2, 2, '#ff00ff');

    rectangle.getPoint(Phaser.BOTTOM_CENTER, p);
    bmd.rect(p.x, p.y, 2, 2, '#ff00ff');

    rectangle.getPoint(Phaser.BOTTOM_RIGHT, p);
    bmd.rect(p.x, p.y, 2, 2, '#ff00ff');

    bmd.addToWorld();

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RectangleState extends BootState {
  floor: Phaser.Rectangle;

  create () {

    // http://localhost:3000/Phaser.Rectangle.html#
    // new Rectangle(x, y, width, height)
    // Creates a new Rectangle object with the top-left corner specified by the x and y parameters and with the specified width and height parameters.
    // If you call this function without parameters, a Rectangle with x, y, width, and height properties set to 0 is created.
    this.floor = new Phaser.Rectangle(0, 550, this.world.width, 50);

  }

  render () {

    this.game.debug.geom(this.floor, ' #0fffff');

  }

}

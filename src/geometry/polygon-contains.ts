import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PolygonContainsState extends BootState {
  polygon: Phaser.Polygon;
  graphics: Phaser.Graphics;

  create () {

    this.polygon = new Phaser.Polygon(200, 100, 350, 100, 375, 200, 150, 200);
    this.graphics = this.add.graphics(0, 0);
    this.graphics.beginFill(0xff33ff);
    this.graphics.drawPolygon(this.polygon.points);
    this.graphics.endFill();

  }

  update () {

    this.graphics.clear();
    // http://localhost:3000/Phaser.Polygon.html#contains
    // contains(x, y) → {boolean}
    // Checks whether the x and y coordinates are contained within this polygon.
    if (this.polygon.contains(this.input.x, this.input.y)) {
      this.graphics.beginFill(0xff3300);
    }
    else {
        this.graphics.beginFill(0xff33ff);
    }
    this.graphics.drawPolygon(this.polygon.points);
    this.graphics.endFill();
  }

  render () {

    this.game.debug.text(`${this.input.x} x ${this.input.y}`, 32, 32);

  }

}

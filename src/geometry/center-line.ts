import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CenterLineState extends BootState {
  line: Phaser.Line;

  create () {

    this.stage.backgroundColor = '#124184';

    this.line = new Phaser.Line(100, 100, 200, 200);

  }

  update () {

    // http://localhost:3000/Phaser.Line.html#centerOn
    // centerOn(x, y) → {Phaser.Line}
    // Centers this Line on the given coordinates.
    // The line is centered by positioning the start and end points so that the lines midpoint matches the coordinates given.
    this.line.centerOn(this.input.activePointer.x, this.input.activePointer.y);
    this.line.rotate(0.05);

  }

  render () {

    this.game.debug.geom(this.line);
    this.game.debug.lineInfo(this.line, 32, 32);

  }

}

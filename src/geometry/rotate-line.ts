import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RotateLineState extends BootState {
  line: Phaser.Line;

  create () {

    this.stage.backgroundColor = '#011052';
    this.line = new Phaser.Line(300, 100, 500, 500);

  }

  update () {

    // http://localhost:3000/Phaser.Line.html#rotate
    // rotate(angle, asDegrees) → {Phaser.Line}
    // Rotates the line by the amount specified in angle.
    // Rotation takes place from the center of the line.
    // If you wish to rotate around a different point see Line.rotateAround.
    // If you wish to rotate the ends of the Line then see Line.start.rotate or Line.end.rotate.
    this.line.rotate(1, true);

    // http://localhost:3000/Phaser.Line.html#rotateAround
    // rotateAround(x, y, angle, asDegrees) → {Phaser.Line}
    // Rotates the line by the amount specified in angle.
    // Rotation takes place around the coordinates given.

  }

  render () {

    this.game.debug.geom(this.line);

  }

}

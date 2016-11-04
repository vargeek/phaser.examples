import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BitmaptextAnchorXState extends BootState {
  line: Phaser.Line;

  preload () {

    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');

  }

  create () {

    let text1 = this.add.bitmapText(400, 70, 'desyrel', 'Anchor.x = 0', 64);

    let text2 = this.add.bitmapText(400, 270, 'desyrel', 'Anchor.x = 0.5', 64);
    text2.anchor.x = 0.5;

    let text3 = this.add.bitmapText(400, 470, 'desyrel', 'Anchor.x = 1', 64);
    text3.anchor.x = 1;

    // http://localhost:3000/Phaser.Line.html
    // new Line(x1, y1, x2, y2)
    // Creates a new Line object with a start and an end point.
    this.line = new Phaser.Line(400, 0, 400, 600);

  }

  render () {

    this.game.debug.geom(this.line);

  }

}

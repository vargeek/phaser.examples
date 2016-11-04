import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BitmaptextAnchorYState extends BootState {
  line: Phaser.Line;

  preload () {

    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');

  }

  create () {

    let text1 = this.add.bitmapText(10, 270, 'desyrel', 'Anchor.y = 0', 64);

    let text2 = this.add.bitmapText(210, 270, 'desyrel', 'Anchor.y = 0.5', 64);
    text2.anchor.y = 0.5;

    let text3 = this.add.bitmapText(410, 270, 'desyrel', 'Anchor.y = 1', 64);
    text3.anchor.y = 1;

    // http://localhost:3000/Phaser.Line.html
    // new Line(x1, y1, x2, y2)
    // Creates a new Line object with a start and an end point.
    this.line = new Phaser.Line(0, 270, this.world.width, 270);

  }

  render () {

    this.game.debug.geom(this.line);

  }


}

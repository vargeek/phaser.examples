import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextStrokeWithColorState extends BootState {


  create () {

	  this.stage.setBackgroundColor(0x2d2d2d);

    let text = this.add.text(this.world.centerX, this.world.centerY, '- phaser text stroke -', undefined);

    //	Center align
    text.anchor.set(0.5);
    text.align = 'center';

    //	Font style
    text.font = 'Arial Black';
    text.fontSize = 50;
    text.fontWeight = 'bold';

    //	Stroke color and thickness
    text.stroke = '#000000';
    text.strokeThickness = 8;
    text.fill = '#43d637';

    //  And now we'll color in some of the letters
    text.addColor('#ff00ff', 9);
    text.addColor('#43d637', 13);

    //  This allows us to color the stroke instead of the letters
    // http://localhost:3000/Phaser.Text.html#addStrokeColor
    // addStrokeColor(color, position) → {Phaser.Text}
    // Set specific stroke colors for certain characters within the Text.

    // It works by taking a color value, which is a typical HTML string such as #ff0000 or rgb(255,0,0) and a position.
    // The position value is the index of the character in the Text string to start applying this color to.
    // Once set the color remains in use until either another color or the end of the string is encountered.
    // For example if the Text was Photon Storm and you did Text.addColor('#ffff00', 6) it would color in the word Storm in yellow.
    // This has no effect if stroke is disabled or has a thickness of 0.
    // If you wish to change the text fill color see addColor instead.
    text.addStrokeColor('#ff0000', 13);
    text.addStrokeColor('#000000', 20);


  }

}

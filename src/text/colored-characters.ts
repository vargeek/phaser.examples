import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ColoredCharactersState extends BootState {

  create () {

    let style: Phaser.PhaserTextStyle = {
      font: '65px Arial',
      fill: '#ffffff',
      align: 'center',
    }

    let text = this.add.text(this.world.centerX, this.world.centerY, '- phaser -\nwith a sprinkle of\npixi dust', style);

    text.anchor.set(0.5);

    // http://localhost:3000/Phaser.Text.html#addColor
    // addColor(color, position) → {Phaser.Text}
    // Set specific colors for certain characters within the Text.

    // It works by taking a color value, which is a typical HTML string such as #ff0000 or rgb(255,0,0) and a position.
    // The position value is the index of the character in the Text string to start applying this color to.
    // Once set the color remains in use until either another color or the end of the string is encountered.
    // For example if the Text was Photon Storm and you did Text.addColor('#ffff00', 6) it would color in the word Storm in yellow.
    // If you wish to change the stroke color see addStrokeColor instead.
    text.addColor('#ffff00', 16);
    text.addColor('#ffffff', 25);

    text.addColor('#ff00ff', 28);
    text.addColor('#ffffff', 32);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextLineSpacingState extends BootState {

  preload () {

  }

  create () {

    this.stage.backgroundColor = '#5d5d5d';

    let haiku = 'Turtles and mushrooms\nYou are in the wrong castle\nFireball mustache';

    let text = this.add.text(100, 64, haiku, {
      font: '32px Arial',
      fill: '#ffffff',
      backgroundColor: 'rgba(0,255,0,0.25)'
    });
    // http://localhost:3000/Phaser.Text.html#lineSpacing
    // lineSpacing :number
    // Additional spacing (in pixels) between each line of text if multi-line.
    text.lineSpacing = -20;

    let haiku2 = '"Green hat, Master Sword\nMonsters and chickens beware\nMoney making game';
    let text2 = this.add.text(100, 300, haiku2, {
      font: '32px Arial',
      fill: '#ffffff',
      backgroundColor: 'rgba(0,255,0,0.25)'
    });
    text2.lineSpacing = 40;

  }

}

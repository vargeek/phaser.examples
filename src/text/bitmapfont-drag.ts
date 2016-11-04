import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BitmapfontDragState extends BootState {
  bmpText: Phaser.BitmapText;

  preload () {

    this.load.bitmapFont('carrier_command', 'assets/fonts/bitmapFonts/carrier_command.png', 'assets/fonts/bitmapFonts/carrier_command.xml');

  }

  create () {

    this.bmpText = this.add.bitmapText(10, 100, 'carrier_command', 'Drag me around !', 34);

    this.bmpText.inputEnabled = true;
    this.bmpText.input.enableDrag();

  }

}

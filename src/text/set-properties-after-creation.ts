import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SetPropertiesAfterCreationState extends BootState {
  text: Phaser.BitmapText;

  preload () {

    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');

  }

  create () {

    this.text = this.add.bitmapText(0, 100, 'desyrel', "I'm growing", 64);

  }

  update () {

    if (this.text.fontSize < 250) {
      this.text.fontSize += 1;
    }

  }

}

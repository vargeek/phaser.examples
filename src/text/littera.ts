import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LitteraState extends BootState {

  preload () {

    this.load.bitmapFont('shortStack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.fnt');

  }

  create () {

    this.add.bitmapText(32, 32, 'shortStack', 'This font was generated using the\nfree Littera web site\n\nhttp://kvazars.com/littera/', 32);

  }

}

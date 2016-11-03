import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BitmapFontCacheAsBitmapState extends BootState {

  preload () {

    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');


  }

  create () {

    let txt1 = this.add.bitmapText(0, 0, 'desyrel','0x0', 30);
    let txt2 = this.add.bitmapText(25, 25, 'desyrel', '25x25', 30);
    let txt3 = this.add.bitmapText(50, 50, 'desyrel', '50x50', 60);

    // DisplayObject.cacheAsBitmap
    txt1.cacheAsBitmap = true;
    txt2.cacheAsBitmap = true;
    txt3.cacheAsBitmap = true;

  }

}

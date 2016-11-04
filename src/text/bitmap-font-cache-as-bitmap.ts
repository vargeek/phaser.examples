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

    // http://localhost:3000/PIXI.PIXI.DisplayObject.html#cacheAsBitmap
    // cacheAsBitmap :Boolean
    // Sets if this DisplayObject should be cached as a bitmap.

    // When invoked it will take a snapshot of the DisplayObject, as it is at that moment, and store it in a RenderTexture. This is then used whenever this DisplayObject is rendered. It can provide a performance benefit for complex, but static, DisplayObjects. I.e. those with lots of children.

    // Cached Bitmaps do not track their parents. If you update a property of this DisplayObject, it will not re-generate the cached bitmap automatically. To do that you need to call DisplayObject.updateCache.

    // To remove a cached bitmap, set this property to null.
    txt1.cacheAsBitmap = true;
    txt2.cacheAsBitmap = true;
    txt3.cacheAsBitmap = true;

  }

}

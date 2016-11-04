import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BitmapFontsState extends BootState {
  bmpText: Phaser.BitmapText;

  preload () {

    // http://localhost:3000/Phaser.Loader.html#bitmapFont
    // bitmapFont(key, textureURL, atlasURL, atlasData, xSpacing, ySpacing) → {Phaser.Loader}
    // Adds Bitmap Font files to the current load queue.
    // To create the Bitmap Font files you can use:
    // BMFont (Windows, free): http://www.angelcode.com/products/bmfont/
    // Glyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner
    // Littera (Web-based, free): http://kvazars.com/littera/
    // You can choose to either load the data externally, by providing a URL to an xml file.
    // Or you can pass in an XML object or String via the xmlData parameter.
    // If you pass a String the data is automatically run through Loader.parseXML and then immediately added to the Phaser.Cache.
    // If URLs are provided the files are not loaded immediately after calling this method, but are added to the load queue.
    // The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
    // Retrieve the file via Cache.getBitmapFont(key). XML files are automatically parsed upon load.
    // If you need to control when the XML is parsed then use Loader.text instead and parse the XML file as needed.
    // The URLs can be relative or absolute. If the URL is relative the Loader.baseURL and Loader.path values will be prepended to it.
    // If the textureURL isn't specified then the Loader will take the key and create a filename from that.
    // For example if the key is "megaFont" and textureURL is null then the Loader will set the URL to be "megaFont.png".
    // The same is true for the atlasURL. If atlasURL isn't specified and no atlasData has been provided then the Loader will
    // set the atlasURL to be the key. For example if the key is "megaFont" the atlasURL will be set to "megaFont.xml".
    // If you do not desire this action then provide URLs and / or a data object.
    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');

  }

  create () {

    // http://localhost:3000/Phaser.GameObjectFactory.html#bitmapText

    // bitmapText(x, y, font, text, size, group) → {Phaser.BitmapText}
    // Create a new BitmapText object.

    // BitmapText objects work by taking a texture file and an XML file that describes the font structure.
    // It then generates a new Sprite object for each letter of the text, proportionally spaced out and aligned to match the font structure.

    // BitmapText objects are less flexible than Text objects, in that they have less features such as shadows, fills and the ability to use Web Fonts.
    // However you trade this flexibility for pure rendering speed. You can also create visually compelling BitmapTexts by processing the font texture in an image veditor first, applying fills and any other effects required.

    // To create multi-line text insert \r, \n or \r\n escape codes into the text string.

    // To create a BitmapText data files you can use:

    // BMFont (Windows, free): http://www.angelcode.com/products/bmfont/
    // Glyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner
    // Littera (Web-based, free): http://kvazars.com/littera/
    this.bmpText = this.add.bitmapText(200, 100, 'desyrel', 'Phaser & Pixi\nrocking!', 64);

  }

  update () {

    this.bmpText.text = `Phaser & Pixi\nrocking!\n${Math.round(this.time.now)}`;

  }

}

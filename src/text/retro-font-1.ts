import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RetroFont1State extends BootState {
  font: Phaser.RetroFont;

  preload () {

    this.load.image('knightHawks', 'assets/fonts/retroFonts/KNIGHT3.png');

  }

  create () {

    // http://localhost:3000/Phaser.GameObjectFactory.html#retroFont
    // retroFont(font, characterWidth, characterHeight, chars, charsPerRow, xSpacing, ySpacing, xOffset, yOffset) → {Phaser.RetroFont}
    // Create a new RetroFont object.
    // font: The key of the image in the Game.Cache that the RetroFont will use.
    // characterWidth: The width of each character in the font set.
    // chars{string}: The characters used in the font set, in display order. You can use the TEXT_SET consts for common font set arrangements.
    // charsPerRow: The number of characters per row in the font set.

    // A RetroFont can be used as a texture for an Image or Sprite and optionally add it to the Cache.
    // A RetroFont uses a bitmap which contains fixed with characters for the font set. You use character spacing to define the set.
    // If you need variable width character support then use a BitmapText object instead. The main difference between a RetroFont and a BitmapText
    // is that a RetroFont creates a single texture that you can apply to a game object, where-as a BitmapText creates one Sprite object per letter of text.
    // The texture can be asssigned or one or multiple images/sprites, but note that the text the RetroFont uses will be shared across them all,
    // i.e. if you need each Image to have different text in it, then you need to create multiple RetroFont objects.
    this.font = this.add.retroFont('knightHawks', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1,);

    for (let index = 0; index < 19; index++) {
      let image = this.add.image(this.world.centerX, 6 + index * 32, this.font);
      image.tint = Math.random() * 0xffffff;
      image.anchor.set(0.5, 1);
    }

  }

  update () {

    // http://localhost:3000/Phaser.RetroFont.html#text
    // text :string
    // Set this value to update the text in this sprite. Carriage returns are automatically stripped out if multiLine is false. Text is converted to upper case if autoUpperCase is true.
    this.font.text = `Phaser x: ${this.input.x} y: ${this.input.y}`;

  }

}

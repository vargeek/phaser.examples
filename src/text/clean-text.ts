import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CleanTextState extends BootState {

  preload () {

    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');

  }

  create () {

    let dirtyString = 'The Desyrel™ font doesn\'t have\na trademark character\nor a €Euro sign.\nString length: ';

    let text1 = this.add.bitmapText(100, 64, 'desyrel', `${dirtyString} ${dirtyString.length}`, 32) as any;

    // http://localhost:3000/Phaser.BitmapText.html#cleanText
    // cleanText(text, replace) → {string}
    // Given a text string this will scan each character in the string to ensure it exists
    // in the BitmapText font data. If it doesn't the character is removed, or replaced with the replace argument.
    // If no font data has been loaded at all this returns an empty string, as nothing can be rendered.
    let cleanString = text1.cleanText(dirtyString);

    let text2 = this.add.bitmapText(100, 300, 'desyrel', `${cleanString} ${cleanString.length}`, 32);

  }

}

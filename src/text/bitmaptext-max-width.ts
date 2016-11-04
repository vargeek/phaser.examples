import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BitmaptextMaxWidthState extends BootState {
  bmpText: Phaser.BitmapText;
  text = "Lorem ipsum ";
  words = [
    'dolor', 'sit', 'amet', 'consectetuer', 'adipiscing', 'elit', 'aenean',
    'commodo', 'ligula', 'eget', 'massa', 'sociis', 'natoque', 'penatibus',
    'et', 'magnis', 'dis', 'parturient', 'montes' ];
  run = 5;
  current = 2;

  preload () {

    this.load.bitmapFont('gem', 'assets/fonts/bitmapFonts/gem.png', 'assets/fonts/bitmapFonts/gem.xml');

  }

  create () {

    this.stage.backgroundColor = 0x272822;

    this.bmpText = this.add.bitmapText(32, 32, 'gem', this.text, 16);
    // http://localhost:3000/Phaser.BitmapText.html#maxWidth
    // maxWidth :number
    // The maximum display width of this BitmapText in pixels.
    // If BitmapText.text is longer than maxWidth then the lines will be automatically wrapped
    // based on the last whitespace character found in the line.
    // If no whitespace was found then no wrapping will take place and consequently the maxWidth value will not be honored.
    // Disable maxWidth by setting the value to 0. The maximum width of this BitmapText in pixels.
    this.bmpText.maxWidth = 400;

    let marker = this.add.graphics(432, 0);
    marker.beginFill(0xa6e22e);
    marker.drawRect(0, 0, 1, this.game.height);
    marker.endFill();

    this.time.events.repeat(100, 200, this.addText, this);

  }

  addText () {

    let word = this.rnd.pick(this.words);
    if (this.current === 0) {
      word = word[0].toUpperCase() + word.slice(1);
    }

    this.text += word;

    this.current++;

    if (this.current === this.run) {
      this.text += '. ';
      this.run = this.rnd.between(3, 6);
      this.current = 0;
    }
    else {
      this.text += ' ';
    }

    this.bmpText.text = this.text;

  }

}

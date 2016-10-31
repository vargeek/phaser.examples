import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class WordInputState extends BootState {
  word = 'phaser';
  correct:any = {};
  bmd: Phaser.BitmapData;

  preload () {

  }

  create () {

    for (let index = 0; index < this.word.length; index++) {
      this.correct[this.word[index]] = false;
    }

    this.bmd = this.make.bitmapData(800, 200);
    this.bmd.context.font = '64px Arial';
    this.bmd.context.fillStyle = '#ffffff';
    this.bmd.context.fillText(this.word, 64, 64);
    this.bmd.addToWorld();

    //  Capture all key presses
    // http://localhost:3000/Phaser.Keyboard.html#addCallbacks
    // addCallbacks(context, onDown, onUp, onPress)
    // Add callbacks to the Keyboard handler so that each time a key is pressed down or released the callbacks are activated.
    this.input.keyboard.addCallbacks(this, null, null, this.onKeyPress)

  }

  onKeyPress (char: string) {

    this.bmd.cls();

    let x = 64;

    for (let index = 0; index < this.word.length; index++) {

      let letter = this.word.charAt(index);

      if (char === letter) {
        this.correct[letter] = true;
      }

      if (this.correct[letter]) {
        this.bmd.context.fillStyle = '#00ff00';
      }
      else {
        this.bmd.context.fillStyle = '#ffffff';
      }

      this.bmd.context.fillText(letter, x, 64);
      x += this.bmd.context.measureText(letter).width;

    }

  }

}

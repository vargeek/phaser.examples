import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextPaddingState extends BootState {
  text: Phaser.Text;

  preload () {

    (window as any).WebFontConfig = {
      active: () => {
        this.time.events.add(Phaser.Timer.SECOND, this.createText, this);
      },
      google: {
        families: ['Fontdiner Swanky']
      }
    }

    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

  }

  create () {

    this.stage.setBackgroundColor(0x2d2d2d);

  }

  createText () {

    this.text = this.add.text(this.world.centerX, this.world.centerY, '- phaser -\nrocking with\ngoogle web fonts\nxxxxxx', undefined);
    this.text.anchor.set(0.5);

    this.text.font = 'Fontdiner Swank';
    this.text.fontSize = 60;

    // http://localhost:3000/Phaser.Text.html#padding
    // padding :Phaser.Point
    // Specify a padding value which is added to the line width and height when calculating the Text size.
    // ALlows you to add extra spacing if Phaser is unable to accurately determine the true font dimensions.
    this.text.padding.set(10, 16);

  }

}

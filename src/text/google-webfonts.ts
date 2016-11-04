import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GoogleWebfontsState extends BootState {
  text: Phaser.Text;
  grd: CanvasGradient;
  preload () {

    (window as any).WebFontConfig = {
      google: {
        families: ['Revalia', 'Droid Sans', 'Droid Serif']
      },
      active: () => {
        this.time.events.add(Phaser.Timer.SECOND, this.createText, this);
      }
    }
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

  }

  create () {

    this.stage.setBackgroundColor(0x2d2d2d);

  }

  createText () {

    this.text = this.add.text(this.world.centerX, this.world.centerY, '- phaser -\nrocking with\ngoogle web fonts', undefined);
    this.text.anchor.set(0.5);

    this.text.font = 'Revalia';
    this.text.fontSize = 60;

    // http://localhost:3000/Phaser.Text.html#context
    // context :HTMLCanvasElement
    // The context of the canvas element that the text is rendered to.
    this.grd = this.text.context.createLinearGradient(0, 0, 0, this.text.canvas.height);
    this.grd.addColorStop(0, '#8ed6ff');
    this.grd.addColorStop(1, '#004cb3');
    this.text.fill = this.grd;

    this.text.align = 'center';
    // http://localhost:3000/Phaser.Text.html#stroke
    // stroke :string
    // A canvas fillstyle that will be used on the text stroke eg 'blue', '#FCFF00'.
    this.text.stroke = '#000000';
    // http://localhost:3000/Phaser.Text.html#strokeThickness
    // strokeThickness :number
    // A number that represents the thickness of the stroke. Default is 0 (no stroke)
    this.text.strokeThickness = 2;
    this.text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

    this.text.inputEnabled = true;
    this.text.input.enableDrag();

    this.text.events.onInputOver.add(this.onInputOver, this);
    this.text.events.onInputOut.add(this.onInputOut, this);

  }

  onInputOver () {

    this.text.fill = this.grd;

  }

  onInputOut () {

    this.text.fill = '#ff00ff';

  }

}

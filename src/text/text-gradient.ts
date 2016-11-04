import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextGradientState extends BootState {
  text: Phaser.Text;

  create () {

    this.text = this.add.text(this.world.centerX, this.world.centerY, '- phaser gradient text -', undefined);

    this.text.anchor.set(0.5);
    this.text.align = 'center';

    this.text.font = 'Arial';
    this.text.fontWeight = 'bold';
    this.text.fontSize = 70;

   // http://localhost:3000/Phaser.Text.html#context
    // context :HTMLCanvasElement
    // The context of the canvas element that the text is rendered to.
    let grd = this.text.context.createLinearGradient(0, 0, 0, this.text.height)
    grd.addColorStop(0, '#8ed6ff');
    grd.addColorStop(1, '#004cb3');
    this.text.fill = grd;

  }

}

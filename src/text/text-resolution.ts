import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextResolutionState extends BootState {

  create () {

    this.stage.backgroundColor = '#5d5d5d';

    let text = this.add.text(32, 164, 'High DPI Text', {
      font: 'Bold 86px Arial',
      fill: '#ffffff'
    });
    let text2 = this.add.text(32, 300, 'Low DPI Text', {
      font: 'Bold 86px Arial',
      fill: '#ffffff'
    });

    // http://localhost:3000/Phaser.Text.html#resolution
    // resolution :integer
    // The resolution of the canvas the text is rendered to.
    // This defaults to match the resolution of the renderer, but can be changed on a per Text object basis.
    text2.resolution = 1;

  }

}

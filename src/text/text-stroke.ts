import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextStrokeState extends BootState {

  create () {

	  this.stage.setBackgroundColor(0x2d2d2d);

    let text = this.add.text(this.world.centerX, this.world.centerY, '- phaser text stroke -', undefined);

    //	Center align
    text.anchor.set(0.5);
    text.align = 'center';

    //	Font style
    text.font = 'Arial Black';
    text.fontSize = 50;
    text.fontWeight = 'bold';

    //	Stroke color and thickness
    text.stroke = '#000000';
    text.strokeThickness = 6;
    text.fill = '#43d637';



  }

}

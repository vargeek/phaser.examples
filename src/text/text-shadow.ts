import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextShadowState extends BootState {

  create () {

    this.stage.backgroundColor = 0xefefef;

    let text = this.createText(100, 'shadow 5');
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

    text = this.createText(300, 'shadow 15');
    text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 15);

    text = this.createText(500, 'shadow 0');
    text.setShadow(-5, 5, 'rgba(0,0,0,0.5)', 0);

  }

  createText (y: number, content: string) {

    var text = this.add.text(this.world.centerX, y, `- phaser text shadow ,${content}-`, undefined);
    text.anchor.set(0.5);
    text.align = 'center';

    //  Font style
    text.font = 'Arial Black';
    text.fontSize = 26;
    text.fontWeight = 'bold';
    text.fill = '#ff00ff';

    return text;

  }

}

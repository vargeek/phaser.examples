import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextReflectState extends BootState {
  text: Phaser.Text;
  textReflect: Phaser.Text;

  create () {

    this.stage.backgroundColor = 0x3b0760;

    this.text = this.add.text(this.world.centerX, this.world.centerY, '- PHASER -', undefined);

    this.text.anchor.set(0.5);
    this.text.align = 'center';

    this.text.font = 'Arial';
    this.text.fontWeight = 'bold';
    this.text.fontSize = 70;
    this.text.fill = '#ffffff';

    this.textReflect = this.add.text(this.world.centerX, this.world.centerY + 50, '- PHASER -', undefined);
    this.textReflect.anchor.set(0.5);
    this.textReflect.align = 'center';
    this.textReflect.scale.y = -1;

    this.textReflect.font = 'Arial';
    this.textReflect.fontWeight = 'bold';
    this.textReflect.fontSize = 70;

    let grd = this.textReflect.context.createLinearGradient(0, 0, 0, this.textReflect.canvas.height);

    grd.addColorStop(0, 'rgba(255,255,255, 0)');
    grd.addColorStop(1, 'rgba(255,255,255,0.08)');
    this.textReflect.fill = grd;

  }

}

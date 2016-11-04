import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class UpdateTextState extends BootState {
  text: Phaser.Text;
  count = 0;

  create () {

    this.text = this.add.text(this.world.centerX, this.world.centerY, '- You have clicked -\n0 times !', {
      font: '65px Arial',
      fill: '#ff0044',
      align: 'center',
    });
    this.text.anchor.set(0.5);

  }

  update () {

    this.input.onDown.addOnce(this.updateText, this);

  }

  updateText () {

    this.count++;
    this.text.setText(`- You have clicked -\n ${this.count} times !`);

  }

}

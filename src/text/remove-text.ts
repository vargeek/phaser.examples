import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RemoveTextState extends BootState {
  text: Phaser.Text;

  create () {

    this.text = this.add.text(this.world.centerX, this.world.centerY, '- phaser -\nclick to remove', {
      font: '65px Arial',
      fill: '#ff0044',
      align: 'center'
    });

    this.text.anchor.set(0.5);
    this.input.onDown.addOnce(this.removeText, this);

  }

  removeText () {

    // http://localhost:3000/Phaser.Text.html#destroy
    // destroy(destroyChildren)
    // Destroy this Text object, removing it from the group it belongs to.
    this.text.destroy();

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextTintState extends BootState {
  clicks = 0;

  create () {

    let text = this.add.text(this.world.centerX, this.world.centerY, 'Click me', {
      font: '65px Arial',
      fill: '#ffff00',
      align: 'center'
    });

    text.anchor.set(0.5);
    text.inputEnabled = true;
    text.events.onInputDown.add(this.onInputDown, this);


  }

  onInputDown (item: Phaser.Text) {

    this.clicks++;

    item.text = `clicked ${this.clicks} times`;

    // http://localhost:3000/Phaser.Text.html#tint
    // tint :Number
    // The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
    item.tint = (item.tint === 0xffffff) ? 0xff0000 : 0xffffff;

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextEventsState extends BootState {
  clicks = 0;

  create () {

    let text = this.add.text(this.world.centerX, this.world.centerY, 'click and drag me', {
      font: '65px Arial',
      fill: '#ff0044',
      align: 'center',
    });

    text.anchor.set(0.5);
    text.inputEnabled = true;
    text.input.enableDrag();

    text.events.onInputOver.add(this.onInputOver, this);
    text.events.onInputOut.add(this.onInputOut, this);
    text.events.onInputDown.add(this.onInputDown, this);
    text.events.onInputDown.add(this.onInputUp, this);

  }

  onInputOver (item: Phaser.Text) {

    item.fill = '#ffff44';
    item.text = `clicked ${this.clicks} times`;

  }

  onInputOut (item: Phaser.Text) {

    item.fill = '#ff0044';
    item.text = `click and drag me`;


  }

  onInputDown (item: Phaser.Text) {

    this.clicks++;
    item.text = `clicked ${this.clicks} times`;


  }

  onInputUp (item: Phaser.Text) {

    item.text = 'thanks for clicking!';

  }

}

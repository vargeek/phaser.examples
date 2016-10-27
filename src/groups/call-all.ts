import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CallAllState extends BootState {

  preload () {

    this.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);
    this.load.image('reviveBtn', 'assets/buttons/revive-button.png');

  }

  create () {

    for (let index = 0; index < 3; index++) {

      let item = this.add.sprite(290, 98 * (index  + 1), 'item', index);
      item.inputEnabled = true;
      item.events.onInputUp.add(this.kill, this);

      item = this.add.sprite(388, 98 * (index + 1), 'item', index + 3);
      item.inputEnabled = true;
      item.events.onInputUp.add(this.kill, this);

    }

    this.add.button(270, 400, 'reviveBtn', this.reviveAll, this, 0, 0, 0);

  }

  kill (item: Phaser.Sprite) {

    item.kill();

  }

  reviveAll () {

    // Inherited From: Phaser.Group#callAll
    // callAll(method, context, args)
    // Calls a function, specified by name, on all on children.
    // The function is called for all children regardless if they are dead or alive (see callAllExists for different options).
    // After the method parameter and context you can add as many extra parameters as you like, which will all be passed to the child.

    // callAllExists(callback, existsValue, parameter)
    // Calls a function, specified by name, on all children in the group who exist (or do not exist).
    // After the existsValue parameter you can add as many parameters as you like, which will all be passed to the child callback.
    this.world.callAll('revive', undefined);

  }

  render () {

    this.game.debug.text('Tap or click an item to kill it', 160, 500);
    this.game.debug.text('Press the Revive button to revive them all.', 160, 520);


  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CallAllInputState extends BootState {
  coins: Phaser.Group;

  preload () {

    this.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);

  }

  create () {

    this.coins = this.add.group();

    for (let index = 0; index < 50; index++) {
      this.coins.create(this.world.randomX, this.world.randomY, 'coin', 0);
    }

    this.coins.setAll('inputEnabled', true);
    this.coins.callAll('events.onInputDown.add', 'events.onInputDown', this.removeCoin, this);

  }

  removeCoin (item: Phaser.Sprite) {

    item.alpha = 0.3;

  }

}

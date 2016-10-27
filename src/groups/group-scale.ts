import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GroupScaleState extends BootState {
  coins: Phaser.Group;

  preload () {

    this.load.spritesheet(AssetID.coin, 'assets/sprites/coin.png', 32, 32);

  }

  create () {

    this.add.sprite(0, 0, AssetID.coin, 0);

    this.coins = this.add.group();

    for (let index = 0; index < 50; index++) {

      this.coins.create(this.world.randomX / 2, this.world.randomY / 2, AssetID.coin, 0);

    }

    this.coins.scale.set(2, 2);

  }

}

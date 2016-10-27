import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CallAllAnimationsState extends BootState {
  coins: Phaser.Group;

  preload () {

    this.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);

  }

  create () {

    this.coins = this.add.group();

    for (let index = 0; index < 50; index++) {
      this.coins.create(this.world.randomX, this.world.randomY, 'coin', 0);
    }

    this.coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);

    this.coins.callAll('animations.play', 'animations', 'spin');

  }

}

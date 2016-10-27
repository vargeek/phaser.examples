import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class HasPropertyState extends BootState {
  coins: Phaser.Group;

  preload () {

    this.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);

  }

  create () {

    this.coins = this.add.group();

    this.coins.createMultiple(10, 'coin', 0, true);

    this.coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);

    let test = this.coins.getAt(2);

    console.log(this.hasProperty(test, 'animations.currentAnim.currentFrame'));


  }

  hasProperty (obj: any, key: string) {

    let names = key.split('.');

    for (let name of names) {
      if (!name || !obj || !(name in obj)) {
        return false;
      }
      obj = obj[name];
    }

    return true;

  }

}

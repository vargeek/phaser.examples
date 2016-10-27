import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AddASpriteToGroupState extends BootState {
  friendAndFoe: Phaser.Group;
  enemies: Phaser.Group;

  preload () {

    this.load.image(AssetID.ufo, 'assets/sprites/ufo.png');
    this.load.image(AssetID.baddie, 'assets/sprites/space-baddie.png');

  }

  create () {

    this.friendAndFoe = this.add.group();
    this.enemies = this.add.group();

    for (let index = 0; index < 16; index++) {
      this.enemies.create(360 + Math.random() * 200, 120 + Math.random() * 200, AssetID.baddie);
    }

    // v.s. this.friendAndFoe.create(200, 240, AssetID.ufo)
    let ufo = this.add.sprite(200, 240, AssetID.ufo);
    this.friendAndFoe.add(ufo);

  }

}

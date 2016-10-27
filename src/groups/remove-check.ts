import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RemoveCheckState extends BootState {
  group: Phaser.Group;
  sprite: Phaser.Sprite;

  preload () {

    this.load.image('wasp', 'assets/sprites/wasp.png');
    this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
    this.load.image('phaser', 'assets/sprites/phaser.png');


  }

  create () {

    this.group = this.add.group();

    for (let index = 0; index < 10; index++) {

      this.group.create(this.world.randomX, this.world.randomY, 'wasp');

    }

    this.sprite = this.add.sprite(200, 20, 'sonic');

    this.input.onDown.addOnce(this.remove, this);

  }


  remove () {

    console.log('input on down');

    //  This should do nothing, because sprite isn't a child of the group
    this.group.remove(this.sprite);

  }

  render () {

    this.game.debug.text('Group size: ' + this.group.total, 32, 32);

  }

}

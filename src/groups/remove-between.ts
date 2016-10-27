import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RemoveBetweenState extends BootState {
  sprites: Phaser.Group;

  preload () {

    this.load.image('wasp', 'assets/sprites/wasp.png');
    this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
    this.load.image('phaser', 'assets/sprites/phaser.png');


  }

  create () {

    this.sprites = this.add.group();

    for (let index = 0; index < 10; index++) {
      this.sprites.create(this.world.randomX, this.world.randomY, 'wasp');
    }

    for (let index = 0; index < 10; index++) {
      this.sprites.create(this.world.randomX, this.world.randomY, 'sonic');
    }

    for (let index = 0; index < 10; index++) {
      this.sprites.create(this.world.randomX, this.world.randomY, 'phaser');
    }

    this.input.onDown.addOnce(this.remove, this);

  }

  remove () {

    //  This will remove all of the 'sonic' sprites from the Group
    //  because we're removing all sprites between indexes 10 through to 19
    // removeBetween(startIndex, endIndex, destroy, silent)

    // Removes all children from this group whose index falls beteen the given startIndex and endIndex values.
    this.sprites.removeBetween(10, 19);

  }

  render () {

    this.game.debug.text('Group size: ' + this.sprites.total, 32, 32);

  }

}

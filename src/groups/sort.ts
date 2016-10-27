import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SortState extends BootState {
  group: Phaser.Group;

  preload () {

    this.load.spritesheet(AssetID.tree, 'assets/tilemaps/tiles/walls_1x2.png', 32, 64);

  }

  create () {

    this.group = this.add.group();

    let locations: any[] = [];

    for (let index = 0; index < 16; index++) {
      locations.push(index * 32 + Math.random());
    }

    // 洗牌
    locations = Phaser.ArrayUtils.shuffle(locations);
    console.log(locations);

    for (let index = 0; index < 16; index++) {
      this.group.create(400, locations[index], AssetID.tree, 0);
    }

    this.input.onDown.addOnce(this.sort, this);



  }

  sort () {

    // sort(key, order)
    // Sort the children in the group according to a particular key and ordering.
    // Call this function to sort the group according to a particular key value and order.
    // For example to depth sort Sprites for Zelda-style game you might call group.sort('y', Phaser.Group.SORT_ASCENDING) at the bottom of your State.update().
    // Internally this uses a standard JavaScript Array sort, so everything that applies there also applies here, including
    // alphabetical sorting, mixing strings and numbers, and Unicode sorting. See MDN for more details.
    this.group.sort('y', Phaser.Group.SORT_ASCENDING);

    for (let index = 0; index < 16; index++) {
      console.log((this.group.children[index] as any).z, '=', this.group.children[index].y);
    }

  }

  render () {

    this.game.debug.text('Click to sort', 10, 20);

  }

}

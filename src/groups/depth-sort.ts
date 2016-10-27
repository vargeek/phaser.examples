import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DepthSortsState extends BootState {
  math: typeof Phaser.Math;
  map: Phaser.Tilemap;
  group: Phaser.Group;
  sprite: Phaser.Sprite;
  locs: any[] = [];
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');
    this.load.tilemap('desert', 'assets/tilemaps/maps/depthsort.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    this.load.spritesheet('trees', 'assets/tilemaps/tiles/walls_1x2.png', 32, 64);


  }

  create () {

    this.map = this.add.tilemap('desert');
    this.map.addTilesetImage('ground_1x1');
    this.map.createLayer('Tile Layer 1');

    this.group = this.add.group();

    for (let index = 0; index < 200; index++) {
      this.createUniqueLocation();
    }

    this.sprite = this.group.create(300, 28, 'phaser');

    // sort(key, order)
    // Sort the children in the group according to a particular key and ordering.
    // Call this function to sort the group according to a particular key value and order.
    // For example to depth sort Sprites for Zelda-style game you might call group.sort('y', Phaser.Group.SORT_ASCENDING) at the bottom of your State.update().
    // Internally this uses a standard JavaScript Array sort, so everything that applies there also applies here, including
    // alphabetical sorting, mixing strings and numbers, and Unicode sorting. See MDN for more details.
    // y比较小的图片不应该挡住y比较大的图片
    this.group.sort('y', Phaser.Group.SORT_ASCENDING);

    this.cursors = this.input.keyboard.createCursorKeys();


  }

  createUniqueLocation () {

    let idx = 0;
    let x = 0;
    let y = 0;
    do {
      x = this.math.snapTo(this.world.randomX, 32) / 32;
      y = this.math.snapTo(this.world.randomY, 32) / 32;

      if (y > 17) {
        y = 17;
      }
      idx = (y * 17) + x;

    } while (this.locs.indexOf(idx) != -1);

    this.locs.push(idx);

    this.group.create(x * 32, y * 32, 'trees', this.rnd.integerInRange(0, 7));

  }

  update () {

    if (this.cursors.left.isDown) {
      this.sprite.x -= 2;
    }
    else if (this.cursors.right.isDown) {
      this.sprite.x += 2;
    }
    else if (this.cursors.up.isDown) {
      this.sprite.y -= 2;
    }
    else if (this.cursors.down.isDown) {
      this.sprite.y += 2;
    }

    this.group.sort('y', Phaser.Group.SORT_ASCENDING);
  }

  render () {

    this.game.debug.text(`Sprite z-depth: ${this.sprite.z}`, 10, 20);

  }

}

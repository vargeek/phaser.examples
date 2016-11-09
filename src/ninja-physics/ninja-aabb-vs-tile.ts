import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class NinjaAabbVsTileState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  tile: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('block', 'assets/sprites/block.png');
    this.load.spritesheet('ninja-tiles', 'assets/physics/ninja-tiles128.png', 128, 128, 34);

  }

  create () {

    this.physics.startSystem(Phaser.Physics.NINJA);

    this.sprite1 = this.add.sprite(600, 100, 'block');
    this.sprite1.name = 'blockA';
    this.physics.ninja.enableAABB(this.sprite1);

    this.tile = this.add.sprite(600, 480, 'ninja-tiles', 3);

    // http://localhost:3000/Phaser.Physics.Ninja.html#enableTile
    // enableTile(object, id, children)
    // id{number=1}   The type of Tile this will use, i.e. Phaser.Physics.Ninja.Tile.SLOPE_45DEGpn, Phaser.Physics.Ninja.Tile.CONVEXpp, etc.

    // This will create a Ninja Physics Tile body on the given game object. There are 34 different types of tile you can create, including 45 degree slopes, convex and concave circles and more.
    // The id parameter controls which Tile type is created, but you can also change it at run-time.
    // Note that for all degree based tile types they need to have an equal width and height. If the given object doesn't have equal width and height it will use the width.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    this.physics.ninja.enableTile(this.tile, this.tile.frame as number);


    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.physics.ninja.collide(this.sprite1, this.tile);

    if (this.cursors.left.isDown) {
      this.sprite1.body.moveLeft(20);
    }
    else if (this.cursors.right.isDown) {
      this.sprite1.body.moveRight(20);
    }

    if (this.cursors.up.isDown) {
      this.sprite1.body.moveUp(30);
    }

  }

  render () {

    this.game.debug.text('left: ' + this.sprite1.body.touching.left, 32, 32);
    this.game.debug.text('right: ' + this.sprite1.body.touching.right, 256, 32);
    this.game.debug.text('up: ' + this.sprite1.body.touching.up, 32, 64);
    this.game.debug.text('down: ' + this.sprite1.body.touching.down, 256, 64);

  }

}

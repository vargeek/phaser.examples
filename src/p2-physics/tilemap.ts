import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TilemapState extends BootState {
  ship: Phaser.Sprite;
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.tilemap('map', 'assets/tilemaps/maps/collision_test.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    this.load.image('walls_1x2', 'assets/tilemaps/tiles/walls_1x2.png');
    this.load.image('tiles2', 'assets/tilemaps/tiles/tiles2.png');
    this.load.image('ship', 'assets/sprites/thrust_ship2.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.stage.backgroundColor = '#2d2d2d';

    this.map = this.add.tilemap('map');

    this.map.addTilesetImage('ground_1x1');
    this.map.addTilesetImage('walls_1x2');
    this.map.addTilesetImage('tiles2');

    this.layer = this.map.createLayer('Tile Layer 1');

    this.layer.resizeWorld();

    //  Set the tiles for collision.
    //  Do this BEFORE generating the p2 bodies below.
    this.map.setCollisionBetween(1, 12);

    //  Convert the tilemap layer into bodies. Only tiles that collide (see above) are created.
    //  This call returns an array of body objects which you can perform addition actions on if
    //  required. There is also a parameter to control optimising the map build.

    // http://localhost:3000/Phaser.Physics.P2.html#convertTilemap
    // convertTilemap(map, layer, addToWorld, optimize) → {array}
    // addToWorld{boolean=true}   If true it will automatically add each body to the world, otherwise it's up to you to do so.
    // optimize{boolean=true}     If true adjacent colliding tiles will be combined into a single body to save processing. However it means you cannot perform specific Tile to Body collision responses.
    // Returns: An array of the Phaser.Physics.P2.Body objects that were created.

    // Goes through all tiles in the given Tilemap and TilemapLayer and converts those set to collide into physics bodies.
    // Only call this after you have specified all of the tiles you wish to collide with calls like Tilemap.setCollisionBetween, etc.
    // Every time you call this method it will destroy any previously created bodies and remove them from the world.
    // Therefore understand it's a very expensive operation and not to be done in a core game update loop.
    this.physics.p2.convertTilemap(this.map, this.layer);

    this.ship = this.add.sprite(200, 200, 'ship');
    this.physics.p2.enable(this.ship);

    this.camera.follow(this.ship);

    //  By default the ship will collide with the World bounds,
    //  however because you have changed the size of the world (via layer.resizeWorld) to match the tilemap
    // 新版本不需要手动再调用一次了？
    //  you need to rebuild the physics world boundary as well. The following
    //  line does that. The first 4 parameters control if you need a boundary on the left, right, top and bottom of your world.
    //  The final parameter (false) controls if the boundary should use its own collision group or not. In this case we don't require
    //  that, so it's set to false. But if you had custom collision groups set-up then you would need this set to true.
    // this.physics.p2.setBoundsToWorld(true, true, true, true, false);

    //  Even after the world boundary is set-up you can still toggle if the ship collides or not with this:
    // ship.body.collideWorldBounds = false;

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown)
    {
        this.ship.body.rotateLeft(100);
    }
    else if (this.cursors.right.isDown)
    {
        this.ship.body.rotateRight(100);
    }
    else
    {
        this.ship.body.setZeroRotation();
    }

    if (this.cursors.up.isDown)
    {
        this.ship.body.thrust(400);
    }
    else if (this.cursors.down.isDown)
    {
        this.ship.body.reverse(400);
    }

  }

}

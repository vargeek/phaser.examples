import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Tile = Phaser.Physics.Ninja.Tile;
type Body = Phaser.Physics.Ninja.Body;

export class NinjaTilemapState extends BootState {
  sprite1: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  tiles: Tile[];

  preload () {

    this.load.tilemap('map', 'assets/tilemaps/maps/ninja-tilemap.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('ball', 'assets/sprites/shinyball.png');
    this.load.image('sky', 'assets/skies/sky2.png');
    this.load.image('kenney', 'assets/tilemaps/tiles/kenney.png');

  }

  create () {

    var sky = this.add.image(0, 0, 'sky');
    sky.fixedToCamera = true;

    //  Activate the Ninja physics system
    this.physics.startSystem(Phaser.Physics.NINJA);

    this.map = this.add.tilemap('map');

    this.map.addTilesetImage('kenney');

    this.layer = this.map.createLayer('Tile Layer 1');

    this.layer.resizeWorld();

    var slopeMap = { '32': 1, '77': 1, '95': 2, '36': 3, '137': 3, '140': 2 };

    // http://localhost:3000/Phaser.Physics.Ninja.html#convertTilemap
    // convertTilemap(map, layer, slopeMap) → {array}
    // slopeMap{object}     The tilemap index to Tile ID map.

    // Goes through all tiles in the given Tilemap and TilemapLayer and converts those set to collide into physics tiles.
    // Only call this after you have specified all of the tiles you wish to collide with calls like Tilemap.setCollisionBetween, etc.
    // Every time you call this method it will destroy any previously created bodies and remove them from the world.
    // Therefore understand it's a very expensive operation and not to be done in a core game update loop.

    // In Ninja the Tiles have an ID from 0 to 33, where 0 is 'empty', 1 is a full tile, 2 is a 45-degree slope, etc. You can find the ID
    // list either at the very bottom of Tile.js, or in a handy visual reference in the resources/Ninja Physics Debug Tiles folder in the repository.
    // The slopeMap parameter is an array that controls how the indexes of the tiles in your tilemap data will map to the Ninja Tile IDs.
    // For example if you had 6 tiles in your tileset: Imagine the first 4 should be converted into fully solid Tiles and the other 2 are 45-degree slopes.
    // Your slopeMap array would look like this: [ 1, 1, 1, 1, 2, 3 ].
    // Where each element of the array is a tile in your tilemap and the resulting Ninja Tile it should create.
    this.tiles = this.physics.ninja.convertTilemap(this.map, this.layer, slopeMap);
    Phaser.Physics.Ninja.TileType

    this.sprite1 = this.add.sprite(50, 50, 'ball');

    // http://localhost:3000/Phaser.Physics.Ninja.html#enableCircle
    // enableCircle(object, radius, children)

    // This will create a Ninja Physics Circle body on the given game object.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    this.physics.ninja.enableCircle(this.sprite1, this.sprite1.width / 2);

    //  A little more bounce
    this.sprite1.body.bounce = 0.5;

    this.camera.follow(this.sprite1);

    this.cursors = this.input.keyboard.createCursorKeys();


  }

  update () {

    for (var i = 0; i < this.tiles.length; i++)
    {
      // http://localhost:3000/Phaser.Physics.Ninja.Body.html#circle
      // circle :Phaser.Physics.Ninja.Circle
      // The Circle object this body is using for collision.

      // http://localhost:3000/Phaser.Physics.Ninja.Circle.html#collideCircleVsTile
      // collideCircleVsTile(t) → {boolean}
      // Collides this Circle with a Tile.
      (this.sprite1.body as Body).circle.collideCircleVsTile((this.tiles[i] as any).tile);
    }

    if (this.cursors.left.isDown)
    {
        this.sprite1.body.moveLeft(20);
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite1.body.moveRight(20);
    }

    if (this.cursors.up.isDown)
    {
        this.sprite1.body.moveUp(20);
    }
    else if (this.cursors.down.isDown)
    {
        this.sprite1.body.moveUp(20);
    }

  }

}

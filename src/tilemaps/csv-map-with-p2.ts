import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CsvMapWithP2State extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  cursors: Phaser.CursorKeys;
  player: Phaser.Sprite;

  preload () {

    this.load.tilemap('map', 'assets/tilemaps/csv/catastrophi_level2.csv', null, Phaser.Tilemap.CSV);
    this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    this.load.image('player', 'assets/sprites/tinycar.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.map = this.add.tilemap('map', 16, 16);

    this.map.addTilesetImage('tiles');

    this.layer = this.map.createLayer(0);

    this.layer.resizeWorld();

    this.map.setCollisionBetween(54, 83);

    //  Convert the tilemap layer into bodies. Only tiles that collide (see above) are created.
    //  This call returns an array of body objects which you can perform addition actions on if
    //  required. There is also a parameter to control optimising the map build.
    // http://localhost:3000/Phaser.Physics.P2.html#convertTilemap
    // convertTilemap(map, layer, addToWorld, optimize) → {array}
    // optimize{boolean}  If true adjacent colliding tiles will be combined into a single body to save processing. However it means you cannot perform specific Tile to Body collision responses.

    // Goes through all tiles in the given Tilemap and TilemapLayer and converts those set to collide into physics bodies.
    // Only call this after you have specified all of the tiles you wish to collide with calls like Tilemap.setCollisionBetween, etc.
    // Every time you call this method it will destroy any previously created bodies and remove them from the world.
    // Therefore understand it's a very expensive operation and not to be done in a core game update loop.
    this.physics.p2.convertTilemap(this.map, this.layer);

    this.player = this.add.sprite(48, 48, 'player');

    this.physics.p2.enable(this.player);

    this.physics.p2.setBoundsToWorld(true, true, true, false);

    this.camera.follow(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();

    let help = this.add.text(16, 16 , 'Arrows to mvoe', {
      font: '14px Arial',
      fill: '#fff'
    });
    help.fixedToCamera = true;

  }

  update () {

    if (this.cursors.left.isDown)
    {
        this.player.body.rotateLeft(100);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.rotateRight(100);
    }
    else
    {
        this.player.body.setZeroRotation();
    }

    if (this.cursors.up.isDown)
    {
        this.player.body.thrust(400);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.body.reverse(400);
    }


  }

}

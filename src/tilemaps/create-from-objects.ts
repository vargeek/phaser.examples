import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class CreateFromObjectsState extends BootState {
  cursors: Phaser.CursorKeys;
  map: Phaser.Tilemap;
  coins: Phaser.Group;
  layer: Phaser.TilemapLayer;
  sprite: Phaser.Sprite;


  preload () {

    // http://localhost:3000/Phaser.Loader.html#tilemap
    // tilemap(key, url, data, format) → {Phaser.Loader}
    // Adds a Tile Map data file to the current load queue.
    // Phaser can load data in two different formats: CSV and Tiled JSON.
    // Tiled is a free software package, specifically for creating tilemaps, and is available from http://www.mapeditor.org

    // You can choose to either load the data externally, by providing a URL to a json file.
    // Or you can pass in a JSON object or String via the data parameter.
    // If you pass a String the data is automatically run through JSON.parse and then immediately added to the Phaser.Cache.

    // If a URL is provided the file is not loaded immediately after calling this method, but is added to the load queue.

    // The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.

    // Retrieve the file via Cache.getTilemapData(key). JSON files are automatically parsed upon load.
    // If you need to control when the JSON is parsed then use Loader.text instead and parse the text file as needed.

    // The URL can be relative or absolute. If the URL is relative the Loader.baseURL and Loader.path values will be prepended to it.

    // If the URL isn't specified and no data is given then the Loader will take the key and create a filename from that.
    // For example if the key is "level1" and no URL or data is given then the Loader will set the URL to be "level1.json".
    // If you set the format to be Tilemap.CSV it will set the URL to be "level1.csv" instead.
    // If you do not desire this action then provide a URL or data object.
    this.load.tilemap('map', 'assets/tilemaps/maps/features_test.json', null, Phaser.Tilemap.TILED_JSON);

    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    this.load.image('walls_1x2', 'assets/tilemaps/tiles/walls_1x2.png');
    this.load.image('tiles2', 'assets/tilemaps/tiles/tiles2.png');

    this.load.image('phaser', 'assets/sprites/arrow.png');
    this.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);

  }

  create () {

    this.map = this.add.tilemap('map');

    this.map.addTilesetImage('ground_1x1');
    this.map.addTilesetImage('walls_1x2');
    this.map.addTilesetImage('tiles2');

    // http://localhost:3000/Phaser.Tilemap.html#setCollisionBetween
    // setCollisionBetween(start, stop, collides, layer, recalculate)
    // layer{number | string | Phaser.TilemapLayer}  The layer to operate on. If not given will default to this.currentLayer.
    // recalculate{boolean}=true  Recalculates the tile faces after the update.
    // Sets collision on a range of tiles where the tile IDs increment sequentially.
    // Calling this with a start value of 10 and a stop value of 14 would set collision for tiles 10, 11, 12, 13 and 14.
    // The collides parameter controls if collision will be enabled (true) or disabled (false).
    this.map.setCollisionBetween(1, 12);

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.coins = this.add.group();
    this.coins.enableBody = true;
    // http://localhost:3000/Phaser.Tilemap.html#createFromObjects
    // createFromObjects(name, gid, key, frame, exists, autoCull, group, CustomClass, adjustY)
    // name{string}  The name of the Object Group to create Sprites from.
    // gid{number}   The layer array index value, or if a string is given the layer name within the map data.
    // autoCull{boolean}=false  The default autoCull state of the Sprite. Sprites that are autoCulled are culled from the camera if out of its range.
    // adjustY{boolean}   By default the Tiled map editor uses a bottom-left coordinate system. Phaser uses top-left. So most objects will appear too low down. This parameter moves them up by their height.

    // Creates a Sprite for every object matching the given gid in the map data. You can optionally specify the group that the Sprite will be created in. If none is
    // given it will be created in the World. All properties from the map data objectgroup are copied across to the Sprite, so you can use this as an easy way to
    // configure Sprite properties from within the map editor. For example giving an object a property of alpha: 0.5 in the map editor will duplicate that when the
    // Sprite is created. You could also give it a value like: body.velocity.x: 100 to set it moving automatically.
    this.map.createFromObjects('Object Layer 1', 34, 'coin', 0, true, false, this.coins);

    this.coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
    this.coins.callAll('animations.play', 'animations', 'spin');

    this.sprite = this.add.sprite(260, 100, 'phaser');
    this.sprite.anchor.set(0.5);

    this.physics.arcade.enable(this.sprite);
    (this.sprite.body as Body).setSize(32, 32, 0, 0);
    (this.sprite.body as Body).maxAngular = 500;
    (this.sprite.body as Body).angularDrag = 50;

    this.camera.follow(this.sprite);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.physics.arcade.collide(this.sprite, this.layer);
    this.physics.arcade.overlap(this.sprite, this.coins, this.collectCoin, null, this);

    (this.sprite.body as Body).velocity.x = 0;
    (this.sprite.body as Body).velocity.y = 0;
    (this.sprite.body as Body).angularVelocity = 0;

    if (this.cursors.left.isDown) {
      (this.sprite.body as Body).angularVelocity = -300;
    }
    else if (this.cursors.right.isDown) {
      (this.sprite.body as Body).angularVelocity = 300;
    }

    if (this.cursors.up.isDown) {
      this.physics.arcade.velocityFromAngle(this.sprite.angle, 300, this.sprite.body.velocity);
    }

  }

  collectCoin (player: Phaser.Sprite, coin: Phaser.Sprite) {

    coin.kill();

  }

  render () {

    this.game.debug.body(this.sprite);

  }

}

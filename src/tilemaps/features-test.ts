import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FeaturesTestState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;

  sprite: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.tilemap('map', 'assets/tilemaps/maps/features_test_rotated.json', null, Phaser.Tilemap.TILED_JSON);

    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    this.load.image('walls_1x2', 'assets/tilemaps/tiles/walls_1x2.png');
    this.load.image('tiles2', 'assets/tilemaps/tiles/tiles2.png');
    this.load.image('phaser', 'assets/sprites/arrow.png');
    this.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);
    this.load.image('bunny', 'assets/sprites/bunny.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.map = this.add.tilemap('map');

    this.map.addTilesetImage('ground_1x1');
    this.map.addTilesetImage('coin');
    this.map.addTilesetImage('walls_1x2');
    this.map.addTilesetImage('tiles2');

    this.map.setCollisionBetween(1, 2);

    // http://localhost:3000/Phaser.Tilemap.html#setTileIndexCallback
    // setTileIndexCallback(indexes, callback, callbackContext, layer)
    // Sets a global collision callback for the given tile index within the layer. This will affect all tiles on this layer that have the same index.

    // If a callback is already set for the tile index it will be replaced. Set the callback to null to remove it.
    // If you want to set a callback for a tile at a specific location on the map then see setTileLocationCallback.
    this.map.setTileIndexCallback(26, this.hitCoin, this);

    // http://localhost:3000/Phaser.Tilemap.html#setTileLocationCallback
    // setTileLocationCallback(x, y, width, height, callback, callbackContext, layer)
    // Sets a global collision callback for the given map location within the layer. This will affect all tiles on this layer found in the given area.
    // If a callback is already set for the tile index it will be replaced. Set the callback to null to remove it.
    // If you want to set a callback for a tile at a specific location on the map then see setTileLocationCallback.
    this.map.setTileLocationCallback(2, 0, 1, 1, this.hitCoin, this);

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    // http://localhost:3000/Phaser.TilemapLayer.html#debugSettings
    // Settings used for debugging and diagnostics.

    //  missingImageFill	string	<nullable>
    // A tile is rendered as a rectangle using the following fill if a valid tileset/image cannot be found. A value of null prevents additional rendering for tiles without a valid tileset image. This takes effect even when debug rendering for the layer is not enabled.

    // debuggedTileOverfill	string	<nullable>
    // If a Tile has Tile#debug true then, after normal tile image rendering, a rectangle with the following fill is drawn above/over it. This takes effect even when debug rendering for the layer is not enabled.

    // forceFullRedraw	boolean
    // When debug rendering (debug is true), and this option is enabled, the a full redraw is forced and rendering optimization is suppressed.

    // debugAlpha	number
    // When debug rendering (debug is true), the tileset is initially rendered with this alpha level. This can make the tile edges clearer.

    // facingEdgeStroke	string	<nullable>
    // When debug rendering (debug is true), this color/stroke is used to draw "face" edges. A value of null disables coloring facing edges.

    // collidingTileOverfill	string	<nullable>
    // When debug rendering (debug is true), this fill is used for tiles that are collidable. A value of null disables applying the additional overfill.
    this.layer.debugSettings.forceFullRedraw = true;

    let layer3 = this.map.createLayer('Tile Layer 3');

    this.sprite = this.add.sprite(260, 100, 'phaser');
    this.sprite.anchor.set(0.5);

    this.physics.enable(this.sprite);

    this.sprite.body.setSize(16, 16, 8, 8);
    this.sprite.body.maxAngular = 500;
    this.sprite.body.angularDrag = 50;
    (this.sprite.body as Phaser.Physics.Arcade.Body).collideWorldBounds = true;

    this.camera.follow(this.sprite);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  hitCoin (sprite: Phaser.Sprite, tile: Phaser.Tile) {

    tile.alpha = 0.2;
    this.layer.dirty = true;

    return false;

  }

  update () {

    this.physics.arcade.collide(this.sprite, this.layer);

    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;
    this.sprite.body.angularVelocity = 0;

    if (this.cursors.left.isDown) {
      this.sprite.body.angularVelocity = -200;
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.angularVelocity = 200;
    }

    if (this.cursors.up.isDown) {
      this.physics.arcade.velocityFromAngle(this.sprite.angle, 200, this.sprite.body.velocity);
    }

  }

  render () {

    this.game.debug.body(this.sprite);

  }


}

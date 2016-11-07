import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TileCallbacksState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;

  sprite: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.tilemap('map', 'assets/tilemaps/maps/tile_collision_test.json', null, Phaser.Tilemap.TILED_JSON);

    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    this.load.image('phaser', 'assets/sprites/arrow.png');
    this.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.map = this.add.tilemap('map');

    this.map.addTilesetImage('ground_1x1');
    this.map.addTilesetImage('coin');

    this.map.setCollisionBetween(1, 12);

    //  This will set Tile ID 26 (the coin) to call the hitCoin function when collided with
    this.map.setTileIndexCallback(26, this.hitCoin, this);

    //  This will set the map location 2, 0 to call the function
    this.map.setTileLocationCallback(2, 0, 1, 1, this.hitCoin, this);

    // game.device.canvasBitBltShift = false;

    this.layer = this.map.createLayer('Tile Layer 1');

    this.layer.resizeWorld();

    this.sprite = this.add.sprite(260, 100, 'phaser');
    this.sprite.anchor.set(0.5);
    this.physics.enable(this.sprite);

    this.sprite.body.setSize(16, 16, 8, 8);

    //  We'll set a lower max angular velocity here to keep it from going totally nuts
    this.sprite.body.maxAngular = 500;

    //  Apply a drag otherwise the sprite will just spin and never slow down
    this.sprite.body.angularDrag = 50;

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

    if (this.cursors.left.isDown)
    {
        this.sprite.body.angularVelocity = -200;
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite.body.angularVelocity = 200;
    }

    if (this.cursors.up.isDown)
    {
        this.physics.arcade.velocityFromAngle(this.sprite.angle, 200, this.sprite.body.velocity);
    }

  }

  render () {

    this.game.debug.body(this.sprite);

  }

}

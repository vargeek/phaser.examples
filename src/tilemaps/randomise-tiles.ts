import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RandomiseTilesState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;

  cursors: Phaser.CursorKeys;
  sprite: Phaser.Sprite;
  marker: Phaser.Graphics;

  preload () {

    this.load.tilemap('desert', 'assets/tilemaps/maps/desert.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/tilemaps/tiles/tmw_desert_spacing.png');
    this.load.image('car', 'assets/sprites/car90.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.map = this.add.tilemap('desert');

    this.map.addTilesetImage('Desert', 'tiles');

    this.layer = this.map.createLayer('Ground');
    this.layer.resizeWorld();

    this.marker = this.add.graphics(0, 0);
    this.marker.lineStyle(2, 0x00bff3, 1);
    this.marker.drawRect(0, 0, 32 * 6, 32 * 6);

    this.sprite = this.add.sprite(450, 80, 'car');
    this.sprite.anchor.set(0.5);

    this.physics.enable(this.sprite);

    this.camera.follow(this.sprite);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.input.onDown.add(this.randomiseTiles, this);

  }

  randomiseTiles () {

    // http://localhost:3000/Phaser.Tilemap.html#random
    // random(x, y, width, height, layer)
    // x      {number}    X position of the top left of the area to operate one, given in tiles, not pixels.
    // width  {number}    The width in tiles of the area to operate on.

    // Randomises a set of tiles in a given area.
    this.map.random((this.layer as any).getTileX(this.sprite.x), (this.layer as any).getTileY(this.sprite.y), 6, 6);

  }

  update () {

    this.marker.x = (this.layer as any).getTileX(this.sprite.x) * 32;
    this.marker.y = (this.layer as any).getTileY(this.sprite.y) * 32;

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
      this.physics.arcade.velocityFromAngle(this.sprite.angle, 300, this.sprite.body.velocity);
    }

  }

  render () {

    this.game.debug.text('Click to randomise tiles', 32, 32, 'rgb(0,0,0)');
    this.game.debug.text('Tile X: ' + (this.layer as any).getTileX(this.sprite.x), 32, 48, 'rgb(0,0,0)');
    this.game.debug.text('Tile Y: ' + (this.layer as any).getTileY(this.sprite.y), 32, 64, 'rgb(0,0,0)');

  }

}

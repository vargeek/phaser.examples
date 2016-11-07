import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FillTilesState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;

  cursors: Phaser.CursorKeys;
  sprite: Phaser.Sprite;

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

    this.sprite = this.add.sprite(450, 80, 'car');
    this.sprite.anchor.set(0.5);

    this.physics.enable(this.sprite);
    this.camera.follow(this.sprite);
   (this.sprite.body as Phaser.Physics.Arcade.Body).collideWorldBounds = true;

    this.cursors = this.input.keyboard.createCursorKeys();

    this.input.onDown.add(this.fillTiles, this);

  }

  fillTiles () {

    // http://localhost:3000/Phaser.Tilemap.html#fill
    // fill(index, x, y, width, height, layer)
    // Fills the given area with the specified tile.
    // index  {number}    The index of the tile that the area will be filled with.
    // x      {number}    X position of the top left of the area to operate one, given in tiles, not pixels.
    // width  {number}    The width in tiles of the area to operate on.
    // layer  {number|string|TilemapLayer}<optional>
    //                    The layer to operate on.
    this.map.fill(31, (this.layer as any).getTileX(this.sprite.x), (this.layer as any).getTileY(this.sprite.y), 8, 8);

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
      this.physics.arcade.velocityFromAngle(this.sprite.angle, 300, this.sprite.body.velocity);
    }

  }

  render () {

    this.game.debug.text('Click to fill tiles', 32, 32, '#000');
    this.game.debug.text(`Tile X: ${(this.layer as any).getTileX(this.sprite.x)}`, 32, 48, '#000');
    this.game.debug.text(`Tile Y: ${(this.layer as any).getTileY(this.sprite.y)}`, 32, 64, '#000');

  }

}

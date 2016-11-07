import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SwapTilesState extends BootState {
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

    this.map = this.add.tilemap('desert');

    this.map.addTilesetImage('Desert', 'tiles');

    this.layer = this.map.createLayer('Ground');

    this.layer.resizeWorld();

    this.sprite = this.add.sprite(450, 80, 'car');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    this.camera.follow(this.sprite);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.input.onDown.addOnce(this.swapTiles, this);

  }

  swapTiles () {

    // http://localhost:3000/Phaser.Tilemap.html#swap
    // swap(tileA, tileB, x, y, width, height, layer)
    // tileA{number}      First tile index.
    // tileB{number}      Second tile index.
    // x{number}          X position of the top left of the area to operate one, given in tiles, not pixels.
    // width{number}      The width in tiles of the area to operate on.


    // Scans the given area for tiles with an index matching tileA and swaps them with tileB.
    this.map.swap(30, 31, undefined, undefined, undefined, undefined);


  }


  update () {


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
        this.sprite.body.velocity.copyFrom(this.physics.arcade.velocityFromAngle(this.sprite.angle, 300));
    }

  }

  render () {

   this.game.debug.text('Click to randomise tiles', 32, 32, 'rgb(0,0,0)');
    this.game.debug.text('Tile X: ' + (this.layer as any).getTileX(this.sprite.x), 32, 48, 'rgb(0,0,0)');
    this.game.debug.text('Tile Y: ' + (this.layer as any).getTileY(this.sprite.y), 32, 64, 'rgb(0,0,0)');

  }

}

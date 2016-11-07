import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ReplaceTilesState extends BootState {
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

    this.camera.follow(this.sprite);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.input.onDown.addOnce(this.replaceTiles, this);

  }

  replaceTiles () {

    // http://localhost:3000/Phaser.Tilemap.html#replace
    // replace(source, dest, x, y, width, height, layer)
    // source{number}     The tile index value to scan for.
    // dest{number}       The tile index value to replace found tiles with.
    // x{number}          X position of the top left of the area to operate one, given in tiles, not pixels.
    // width{width}       The width in tiles of the area to operate on.

    // Scans the given area for tiles with an index matching source and updates their index to match dest.
    this.map.replace(31, 46, undefined, undefined, undefined, undefined);

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

    this.game.debug.text('Click to replace tiles', 32, 32, 'rgb(0,0,0)');
    this.game.debug.text('Tile X: ' + (this.layer as any).getTileX(this.sprite.x), 32, 48, 'rgb(0,0,0)');
    this.game.debug.text('Tile Y: ' + (this.layer as any).getTileY(this.sprite.y), 32, 64, 'rgb(0,0,0)');

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ResizeMapState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.tilemap('level3', 'assets/tilemaps/maps/cybernoid.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/tilemaps/tiles/cybernoid.png');

  }

  create () {

    this.map = this.add.tilemap('level3');
    this.map.addTilesetImage('CybernoidMap3BG_bank.png', 'tiles');

    this.layer = this.map.createLayer(0, 400, 200);

    // this.layer.scale.set(2);

    this.layer.resizeWorld();

    this.cursors = this.input.keyboard.createCursorKeys();

    this.input.onDown.add(this.resize, this);

  }

  resize () {
    if (this.layer.width < 800) {
      let w = this.layer.width + 100;
      let h = this.layer.height + 100;

      // http://localhost:3000/Phaser.TilemapLayer.html#resize
      // Resizes the internal canvas and texture frame used by this TilemapLayer.

      // This is an expensive call, so don't bind it to a window resize event! But instead call it at carefully selected times.

      // Be aware that no validation of the new sizes takes place and the current map scroll coordinates are not modified either.
      // You will have to handle both of these things from your game code if required.
      this.layer.resize(w, h);
    }
  }

  update () {

    if (this.cursors.up.isDown)
    {
        this.camera.y -= 4;
    }
    else if (this.cursors.down.isDown)
    {
        this.camera.y += 4;
    }

    if (this.cursors.left.isDown)
    {
        this.camera.x -= 4;
    }
    else if (this.cursors.right.isDown)
    {
        this.camera.x += 4;
    }

  }

}

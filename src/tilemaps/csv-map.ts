import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CsvMapState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.tilemap('map', 'assets/tilemaps/csv/catastrophi_level2.csv', null, Phaser.Tilemap.CSV);
    this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');

  }

  create () {

    this.map = this.add.tilemap('map', 16, 16);

    this.map.addTilesetImage('tiles');

    this.layer = this.map.createLayer(0);

    this.layer.resizeWorld();

    this.cursors = this.input.keyboard.createCursorKeys();

    let help = this.add.text(16, 16, 'Arrows to scroll', {
      font: '14px Arial',
      fill: '#fff',
    });
    help.fixedToCamera = true;

  }

  update () {

    if (this.cursors.left.isDown) {
      this.camera.x -= 4;
    }
    else if (this.cursors.right.isDown) {
      this.camera.x += 4;
    }

    if (this.cursors.up.isDown) {
      this.camera.y -= 4;
    }
    else if (this.cursors.down.isDown) {
      this.camera.y += 4;
    }

  }

}

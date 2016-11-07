import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CreateFromArrayState extends BootState {
  cursors: Phaser.CursorKeys;

  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;

  preload () {

    this.load.image('tiles', 'assets/tilemaps/tiles/sci-fi-tiles.png');

  }

  create () {

    let data = '';

    for (let y = 0; y < 128; y++) {
      for (let x = 0; x < 128; x++) {
        data += this.rnd.between(0, 20).toString();

        if (x < 127) {
          data += ','
        }
      }
      if (y < 127) {
        data += '\n';
      }
    }

    // console.log(data);

    // http://localhost:3000/Phaser.Cache.html#addTilemap
    // addTilemap(key, url, mapData, format)
    // mapData{object}  The tilemap data object (either a CSV or JSON file).
    // format{number}  The format of the tilemap data.

    // Add a new tilemap to the Cache.
    this.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV);
    this.map = this.add.tilemap('dynamicMap', 16, 16);
    this.map.addTilesetImage('tiles', 'tiles', 16, 16);

    // http://localhost:3000/Phaser.Tilemap.html#createLayer
    // createLayer(layer, width, height, group) → {Phaser.TilemapLayer}
    // layer{number | string} The layer array index value, or if a string is given the layer name, within the map data that this TilemapLayer represents.
    // width{number}  The rendered width of the layer, should never be wider than Game.width. If not given it will be set to Game.width.

    // Creates a new TilemapLayer object. By default TilemapLayers are fixed to the camera.
    // The layer parameter is important. If you've created your map in Tiled then you can get this by looking in Tiled and looking at the Layer name.
    // Or you can open the JSON file it exports and look at the layers[].name value. Either way it must match.
    // If you wish to create a blank layer to put your own tiles on then see Tilemap.createBlankLayer.
    this.layer = this.map.createLayer(0);
    this.layer.resizeWorld();

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown) {
      this.camera.x--;
    }
    else if (this.cursors.right.isDown) {
      this.camera.x++;
    }
    if (this.cursors.up.isDown) {
      this.camera.y--;
    }
    if (this.cursors.down.isDown) {
      this.camera.y++;
    }


  }

}

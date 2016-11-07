import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BlankTilemapState extends BootState {
  math: typeof Phaser.Math;
  map: Phaser.Tilemap;
  layer1: Phaser.TilemapLayer;
  layer2: Phaser.TilemapLayer;
  layer3: Phaser.TilemapLayer;
  currentLayer: any;

  marker: Phaser.Graphics;
  currentTile = 0;

  cursors: Phaser.CursorKeys;
  showLayersKey: Phaser.Key;
  layer1Key: Phaser.Key;
  layer2Key: Phaser.Key;
  layer3Key: Phaser.Key;

  init () {

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

  }

  preload () {

    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    // http://localhost:3000/Phaser.GameObjectFactory.html#tilemap
    // tilemap(key, tileWidth, tileHeight, width, height) → {Phaser.Tilemap}
    // Creates a new Phaser.Tilemap object.
    // tileWidth=32: The pixel width of a single map tile. If using CSV data you must specify this. Not required if using Tiled map data.
    // tileHeight=32: The pixel height of a single map tile. If using CSV data you must specify this. Not required if using Tiled map data.
    // width=10: The width of the map in tiles. If this map is created from Tiled or CSV data you don't need to specify this.
    // height=10: The height of the map in tiles. If this map is created from Tiled or CSV data you don't need to specify this.

    // The map can either be populated with data from a Tiled JSON file or from a CSV file.
    // To do this pass the Cache key as the first parameter. When using Tiled data you need only provide the key.
    // When using CSV data you must provide the key and the tileWidth and tileHeight parameters.
    // If creating a blank tilemap to be populated later, you can either specify no parameters at all and then use Tilemap.create or pass the map and tile dimensions here.
    // Note that all Tilemaps use a base tile size to calculate dimensions from, but that a TilemapLayer may have its own unique tile size that overrides it.
    this.map = this.add.tilemap();
    // http://localhost:3000/Phaser.Tilemap.html#addTilesetImage
    // addTilesetImage(tileset, key, tileWidth, tileHeight, tileMargin, tileSpacing, gid) → {Phaser.Tileset}
    // Adds an image to the map to be used as a tileset. A single map may use multiple tilesets.
    // Note that the tileset name can be found in the JSON file exported from Tiled, or in the Tiled editor.
    this.map.addTilesetImage('ground_1x1');

    // http://localhost:3000/Phaser.Tilemap.html#create
    // create(name, width, height, tileWidth, tileHeight, group) → {Phaser.TilemapLayer}
    // width: The width of the map in tiles.
    // height: The height of the map in tiles.
    // tileWidth: The width of the tiles the map uses for calculations.
    // tileHeight: The height of the tiles the map uses for calculations.
    // Creates an empty map of the given dimensions and one blank layer. If layers already exist they are erased.
    this.layer1 = this.map.create('level1', 40, 30, 32, 32);
    // http://localhost:3000/Phaser.TilemapLayer.html#scrollFactorX
    // scrollFactorX :number
    // Speed at which this layer scrolls horizontally, relative to the camera (e.g. scrollFactorX of 0.5 scrolls half as quickly as the 'normal' camera-locked layers do).
    this.layer1.scrollFactorX = 0.5;
    this.layer1.scrollFactorY = 0.5;


    // http://localhost:3000/Phaser.TilemapLayer.html#resizeWorld
    // resizeWorld()
    // Sets the world size to match the size of this layer.
    this.layer1.resizeWorld();

    // http://localhost:3000/Phaser.Tilemap.html#createBlankLayer
    // createBlankLayer(name, width, height, tileWidth, tileHeight, group) → {Phaser.TilemapLayer}
    // Creates a new and empty layer on this Tilemap. By default TilemapLayers are fixed to the camera.
    this.layer2 = this.map.createBlankLayer('layer2', 40, 30, 32, 32);
    this.layer2.scrollFactorX = 0.8;
    this.layer2.scrollFactorY = 0.8;

    this.layer3 = this.map.createBlankLayer('level3', 40, 30, 32, 23);
    this.currentLayer = this.layer3;

    this.createTileSelector();
    this.input.addMoveCallback(this.updateMarker, this);


    this.cursors = this.input.keyboard.createCursorKeys();
    this.showLayersKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.layer1Key = this.input.keyboard.addKey(Phaser.Keyboard.ONE);
    this.layer2Key = this.input.keyboard.addKey(Phaser.Keyboard.TWO);
    this.layer3Key = this.input.keyboard.addKey(Phaser.Keyboard.THREE);


    this.showLayersKey.onDown.add(this.changeLayer, this);
    this.layer1Key.onDown.add(this.changeLayer, this);
    this.layer2Key.onDown.add(this.changeLayer, this);
    this.layer3Key.onDown.add(this.changeLayer, this);

    console.log(this.layer1.index);
    console.log(this.layer2.index);
    console.log(this.layer3.index);

  }

  createTileSelector () {

    let tileSelector = this.add.group();

    let tileSelectorBackground = this.make.graphics();
    tileSelectorBackground.beginFill(0x000000, 0.5);
    tileSelectorBackground.drawRect(0, 0, this.game.width, 32);
    tileSelectorBackground.endFill();

    tileSelector.add(tileSelectorBackground);

    let tileStrip = tileSelector.create(1, 1, 'ground_1x1') as Phaser.Sprite;
    tileStrip.inputEnabled = true;
    tileStrip.events.onInputDown.add(this.picktile, this);

    tileSelector.fixedToCamera = true;

    this.marker = this.add.graphics(undefined, undefined);
    this.marker.lineStyle(2, 0x000000, 1);
    this.marker.drawRect(0, 0, 32, 32);

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

  updateMarker () {

    // http://localhost:3000/Phaser.TilemapLayer.html#getTileX
    // getTileX(x) → {integer}
    // Convert a pixel value to a tile coordinate.
    this.marker.x = this.currentLayer.getTileX(this.input.activePointer.worldX) * 32;
    // http://localhost:3000/Phaser.TilemapLayer.html#getTileY
    // getTileY(y) → {integer}
    // Convert a pixel value to a tile coordinate.
    this.marker.y = this.currentLayer.getTileY(this.input.activePointer.worldY) * 32;

    if (this.input.mousePointer.isDown) {
      // http://localhost:3000/Phaser.Tilemap.html#putTile
      // putTile(tile, x, y, layer) → {Phaser.Tile}
      // tile{Phaser.Tile|number|null} 	The index of this tile to set or a Phaser.Tile object. If null the tile is removed from the map.
      // x{number} X position to place the tile (given in tile units, not pixels)
      // layer{number|string|Phaser.TilemapLayer}  The layer to modify.

      // Puts a tile of the given index value at the coordinate specified.
      // If you pass null as the tile it will pass your call over to Tilemap.removeTile instead.
      this.map.putTile(this.currentTile, this.currentLayer.getTileX(this.marker.x), this.currentLayer.getTileY(this.marker.y), this.currentLayer);

      // http://localhost:3000/Phaser.Tilemap.html#removeTile
      // removeTile(x, y, layer) → {Phaser.Tile}
      // x{number}  X position to insert the tile (given in pixels)
      // y{number}  Y position to insert the tile (given in pixels)

      // Removes the tile located at the given coordinates and updates the collision data.
    }

  }

  picktile (sprite: Phaser.Sprite, pointer: Phaser.Pointer) {

    // http://localhost:3000/Phaser.Math.html#snapToFloor
    // snapToFloor(input, gap, start) → {number}
    // Snap a value to nearest grid slice, using floor.
    // Example: if you have an interval gap of 5 and a position of 12... you will snap to 10.
    // As will 14 snap to 10... but 16 will snap to 15.
    this.currentTile = this.math.snapToFloor(pointer.x, 32) / 32;

  }

  changeLayer (key: Phaser.Key) {

    switch (key.keyCode) {
      case Phaser.Keyboard.SPACEBAR:
        this.layer1.alpha = 1;
        this.layer2.alpha = 1;
        this.layer3.alpha = 1;
        break;
      case Phaser.Keyboard.ONE:
        this.currentLayer = this.layer1;
        this.layer1.alpha = 1;
        this.layer2.alpha = 0.2;
        this.layer3.alpha = 0.2;
        break;
      case Phaser.Keyboard.TWO:
        this.currentLayer = this.layer2;
        this.layer1.alpha = 0.2;
        this.layer2.alpha = 1;
        this.layer3.alpha = 0.2;
        break;
      case Phaser.Keyboard.THREE:
        this.currentLayer = this.layer3;
        this.layer1.alpha = 0.2;
        this.layer2.alpha = 0.2;
        this.layer3.alpha = 1;
        break;

      default:
        break;
    }


  }

}

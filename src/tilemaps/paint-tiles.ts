import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PaintTilesState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;

  marker: Phaser.Graphics;
  currentTile: Phaser.Tile;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.tilemap('desert', 'assets/tilemaps/maps/desert.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/tilemaps/tiles/tmw_desert_spacing.png');

  }

  create () {

    this.map = this.add.tilemap('desert');

    this.map.addTilesetImage('Desert', 'tiles');

    this.layer = this.map.createLayer('Ground');
    this.layer.resizeWorld();

    // http://localhost:3000/Phaser.Tilemap.html#getTile
    // getTile(x, y, layer, nonNull) → {Phaser.Tile}
    // x  {number}    X position to get the tile from (given in tile units, not pixels)
    // nonNull {boolean} = false    If true getTile won't return null for empty tiles, but a Tile object with an index of -1.
    // Returns {Phaser.Tile}        The tile at the given coordinates or null if no tile was found or the coordinates were invalid.

    // Gets a tile from the Tilemap Layer. The coordinates are given in tile values.
    this.currentTile = this.map.getTile(2, 3);

    this.marker = this.add.graphics(0, 0);
    this.marker.lineStyle(2, 0x000000, 1);
    this.marker.drawRect(0, 0, 32, 32);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.marker.x = (this.layer as any).getTileX(this.input.activePointer.worldX) * 32;
    this.marker.y = (this.layer as any).getTileX(this.input.activePointer.worldY) * 32;

    if (this.input.mousePointer.isDown) {

      if (this.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
        this.currentTile = this.map.getTile((this.layer as any).getTileX(this.marker.x), (this.layer as any).getTileY(this.marker.y));
      }
      else {
        if (this.map.getTile((this.layer as any).getTileX(this.marker.x), (this.layer as any).getTileY(this.marker.y)) !== this.currentTile) {
          // http://localhost:3000/Phaser.Tilemap.html#putTile
          // putTile(tile, x, y, layer) → {Phaser.Tile}
          // tile{Tile|number|null}   The index of this tile to set or a Phaser.Tile object. If null the tile is removed from the map.
          // x  {number}              given in tile units

          // Puts a tile of the given index value at the coordinate specified.
          // If you pass null as the tile it will pass your call over to Tilemap.removeTile instead.
          this.map.putTile(this.currentTile, (this.layer as any).getTileX(this.marker.x), (this.layer as any).getTileY(this.marker.y));
        }
      }
    }



    if (this.cursors.left.isDown)
    {
        this.camera.x -= 4;
    }
    else if (this.cursors.right.isDown)
    {
        this.camera.x += 4;
    }

    if (this.cursors.up.isDown)
    {
        this.camera.y -= 4;
    }
    else if (this.cursors.down.isDown)
    {
        this.camera.y += 4;
    }

  }

  render () {

    this.game.debug.text('Left-click to paint. Shift + Left-click to select tile. Arrows to scroll.', 32, 32, '#efefef');

  }

}

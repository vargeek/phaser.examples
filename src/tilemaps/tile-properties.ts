import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TilePropertiesState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  marker: Phaser.Graphics;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.tilemap('map', 'assets/tilemaps/maps/tile_properties.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/tilemaps/tiles/gridtiles.png');


  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('tiles');

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.marker = this.add.graphics(0, 0);
    this.marker.lineStyle(2, 0xffffff, 1);
    this.marker.drawRect(0, 0, 32 ,32);

    this.input.addMoveCallback(this.updateMarker, this);

    this.input.onDown.add(this.getTileProperties, this);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

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

  updateMarker () {

    this.marker.x = (this.layer as any).getTileX(this.input.activePointer.worldX) * 32;
    this.marker.y = (this.layer as any).getTileY(this.input.activePointer.worldY) * 32;


  }

  getTileProperties () {

    var x = (this.layer as any).getTileX(this.input.activePointer.worldX);
    var y = (this.layer as any).getTileY(this.input.activePointer.worldY);

    var tile = this.map.getTile(x, y, this.layer);
    console.log(tile.properties);

    // http://localhost:3000/Phaser.Tile.html#properties
    // properties :object
    // Tile specific properties.
    tile.properties.wibble = true;

  }

  render () {

    this.game.debug.text('Current Layer: ' + this.map.currentLayer, 16, 550);
    this.game.debug.text('1-3 Switch Layers. SPACE = Show All. Cursors = Move Camera', 16, 570);


  }


}

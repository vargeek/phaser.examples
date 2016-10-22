/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Mario: 'Mario',
  Tiles: 'Tiles'
}

export class LoadTilemapJsonState extends BootState {

  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;

  preload () {

    // Tilemap 分成两部分： 地图数据 (CSV、JSON) 和 tileset (图片文件)
    this.load.tilemap(AssetID.Mario, '/assets/tilemaps/maps/super_mario.json', null, Phaser.Tilemap.TILED_JSON);

    this.load.image(AssetID.Tiles, '/assets/tilemaps/tiles/super_mario.png');

  }

  create () {

    this.stage.backgroundColor = '#787878';

    // 添加 tilemap 地图数据、tileset信息等
    this.map = this.add.tilemap(AssetID.Mario);

    // 添加图片集。第一个参数为 tileset name， 第二个参数为 Phaser.Cache key
    // tileset name 对应 json 中的
    // {tilesets:{name:SuperMarioBros-World1-1}}
    this.map.addTilesetImage('SuperMarioBros-World1-1', AssetID.Tiles);

    // 添加地图层。 第一个参数为地图层 layerName
    // layerName 对应 JSON 中的
    // {layers:[{name:World1, data:...}]}
    this.layer = this.map.createLayer('World1');

    //  调整游戏世界的size
    this.layer.resizeWorld();

  }

}

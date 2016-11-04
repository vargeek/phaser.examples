import { BootState } from './boot.state';

import { BlankTilemapState } from './tilemaps/blank-tilemap';
import { CreateFromArrayState } from './tilemaps/create-from-array';
import { CreateFromObjectsState } from './tilemaps/create-from-objects';
import { CsvMapCollideState } from './tilemaps/csv-map-collide';
import { CsvMapWithP2State } from './tilemaps/csv-map-with-p2';
import { CsvMapState } from './tilemaps/csv-map';
import { DetachFromCameraState } from './tilemaps/detach-from-camera';
import { DualViewState } from './tilemaps/dual-view';
import { FeaturesTestState } from './tilemaps/features-test';
import { FillTilesState } from './tilemaps/fill-tiles';
import { FlippedTilesState } from './tilemaps/flipped-tiles';
import { MapBounceState } from './tilemaps/map-bounce';
import { MapCollideState } from './tilemaps/map-collide';
import { MarioState } from './tilemaps/mario';
import { MultiLayerMultiTilesetState } from './tilemaps/multi-layer-multi-tileset';
import { MultiLayerState } from './tilemaps/multi-layer';
import { MultiMapCollideState } from './tilemaps/multi-map-collide';
import { MultiTilesetState } from './tilemaps/multi-tileset';
import { PaintTilesState } from './tilemaps/paint-tiles';
import { RandomiseTilesState } from './tilemaps/randomise-tiles';
import { ReplaceTilesState } from './tilemaps/replace-tiles';
import { ResizeMapState } from './tilemaps/resize-map';
import { SciFlyState } from './tilemaps/sci-fly';
import { ShuffleTilesState } from './tilemaps/shuffle-tiles';
import { SwapTilesState } from './tilemaps/swap-tiles';
import { TileCallbacksState } from './tilemaps/tile-callbacks';
import { TilePropertiesState } from './tilemaps/tile-properties';
import { TilemapRayCastState } from './tilemaps/tilemap-ray-cast';
import { TilesetFromBitmapdataState } from './tilemaps/tileset-from-bitmapdata';

const BootStateKey = 'boot';
class App {
  game: Phaser.Game;

  constructor (boot:typeof BootState) {
    let info = boot.bootInfo;
    this.game = new Phaser.Game(info.bounds.width, info.bounds.height, info.renderer, '');
    this.addStatesAndBoot(boot);
  }

  addStatesAndBoot (boot: typeof BootState) {
    boot.bootInfo.states.forEach((state)=>{
      this.game.state.add(state.key, state.constructor);
    });
    this.game.state.add(BootStateKey, boot, true);
  }
}

const app = new App(BlankTilemapState);
// const app = new App(CreateFromArrayState);
// const app = new App(CreateFromObjectsState);
// const app = new App(CsvMapCollideState);
// const app = new App(CsvMapWithP2State);
// const app = new App(CsvMapState);
// const app = new App(DetachFromCameraState);
// const app = new App(DualViewState);
// const app = new App(FeaturesTestState);
// const app = new App(FillTilesState);
// const app = new App(FlippedTilesState);
// const app = new App(MapBounceState);
// const app = new App(MapCollideState);
// const app = new App(MarioState);
// const app = new App(MultiLayerMultiTilesetState);
// const app = new App(MultiLayerState);
// const app = new App(MultiMapCollideState);
// const app = new App(MultiTilesetState);
// const app = new App(PaintTilesState);
// const app = new App(RandomiseTilesState);
// const app = new App(ReplaceTilesState);
// const app = new App(ResizeMapState);
// const app = new App(SciFlyState);
// const app = new App(ShuffleTilesState);
// const app = new App(SwapTilesState);
// const app = new App(TileCallbacksState);
// const app = new App(TilePropertiesState);
// const app = new App(TilemapRayCastState);
// const app = new App(TilesetFromBitmapdataState);

/// <reference path="./phaser.d.ts" />

import { BootState } from './boot.state';

import { TileSpriteState } from './tile-sprites/tiling-sprite';
import { SpriteSheetTilingSpriteState } from './tile-sprites/sprite-sheet-tiling-sprite';
import { TilingAtlasTrimState } from './tile-sprites/tiling-atlast-trim';
import { TilingSpriteAtlasState } from './tile-sprites/tiling-sprite-atlas';

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

// const app = new App(TileSpriteState);
// const app = new App(SpriteSheetTilingSpriteState);
// const app = new App(TilingAtlasTrimState);
const app = new App(TilingSpriteAtlasState);

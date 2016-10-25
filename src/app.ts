/// <reference path="./phaser.d.ts" />

import { BootState } from './boot.state';

import { SpriteSheetState } from './animation/sprite-sheet';
import { LoadTextureState } from './animation/load-texture';
import { StarlingAtlasState } from './animation/starling-atlas';
import { LocalJsonObjectState } from './animation/local-json-object';

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

// const app = new App(SpriteSheetState);
// const app = new App(LoadTextureState);
// const app = new App(StarlingAtlasState);
const app = new App(LocalJsonObjectState);

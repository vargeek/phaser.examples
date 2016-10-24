/// <reference path="./phaser.d.ts" />

import { BootState } from './boot.state';

import { HorizontalCropState } from './sprites/horizontal-crop';
import { VerticalCropState } from './sprites/vertical-crop';
import { DynamicCropState } from './sprites/dynamic-crop';

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

// const app = new App(HorizontalCropState);
// const app = new App(VerticalCropState);
const app = new App(DynamicCropState);

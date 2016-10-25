/// <reference path="./phaser.d.ts" />

import { BootState } from './boot.state';

import { FrameUpdateState } from './animation/frame-update';
import { ChangeFrameState } from './animation/change-frame';
import { ChangeTextureOnClickState } from './animation/change-texture-on-click';
import { DynamicAnimationState } from './animation/dynamic-animation';

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

// const app = new App(FrameUpdateState);
// const app = new App(ChangeFrameState);
// const app = new App(ChangeTextureOnClickState);
const app = new App(DynamicAnimationState);

/// <reference path="./phaser.d.ts" />

import { BootState } from './boot.state';

import { AnimationEventsState } from './animation/animation-events';
import { StopAnimationState } from './animation/stop-animation';
import { LoopedAnimationState } from './animation/looped-animation';
import { DestroyAnimationState } from './animation/destroy-animation';

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

// const app = new App(AnimationEventsState);
// const app = new App(StopAnimationState);
// const app = new App(LoopedAnimationState);
const app = new App(DestroyAnimationState);

/// <reference path="./phaser.d.ts" />

import { BootState } from './boot.state';

import { OverlapTweenWithoutPhysicsState } from './sprites/overlap-tween-without-physics';
import { OverlapWithoutPhysicsState } from './sprites/overlap-without-physics';

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

// const app = new App(OverlapTweenWithoutPhysicsState);
const app = new App(OverlapWithoutPhysicsState);

/// <reference path="./phaser.d.ts" />

import { BootState } from './boot.state';

import { SpriteBoundsState } from './sprites/sprite-bounds';
import { AlignInRectangleState } from './sprites/align-in-rectangle';
import { AlignMultipleSpriteState } from './sprites/align-multiple-sprites';
import { AlignToSpriteState } from './sprites/align-to-sprite';
import { AlignToRectangleState } from './sprites/align-to-rectangle';
import { AlignWithinSpriteState } from './sprites/align-within-sprite';
import { RopeState } from './sprites/rope';

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

// const app = new App(SpriteBoundsState);
// const app = new App(AlignInRectangleState);
// const app = new App(AlignMultipleSpriteState);
// const app = new App(AlignToSpriteState);
// const app = new App(AlignToRectangleState);
// const app = new App(AlignWithinSpriteState);
const app = new App(RopeState);

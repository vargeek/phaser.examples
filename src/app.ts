/// <reference path="./phaser.d.ts" />

import { BootState } from './boot.state';

// import { LoadAnImageState } from './basics/load-an-image.state';
import { ClickAnImageState } from './basics/click-an-image.state';
import { MoveAnImageState } from './basics/move-an-image.state';

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

// const app = new App(LoadAnImageState);
// const app = new App(ClickAnImageState);
const app = new App(MoveAnImageState);

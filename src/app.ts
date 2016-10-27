import { BootState } from './boot.state';

import { AlignFramesToGridState } from './groups/align-frames-to-grid';
import { AlignSpriteToGridState } from './groups/align-sprites-to-grid';

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

// const app = new App(AlignFramesToGridState);
const app = new App(AlignSpriteToGridState);


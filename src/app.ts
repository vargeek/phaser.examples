import { BootState } from './boot.state';

import { GetFirstState } from './groups/get-first';
import { GetFirstDeadState } from './groups/get-first-dead';
import { RecyclingState } from './groups/recycling';
import { CreateIfNullState } from './groups/create-if-null';

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

// const app = new App(GetFirstState);
// const app = new App(GetFirstDeadState);
// const app = new App(RecyclingState);
const app = new App(CreateIfNullState);


import { BootState } from './boot.state';

import { CallAllState } from './groups/call-all';
import { CallAllAnimationsState } from './groups/call-all-animations';
import { CallAllInputState } from './groups/call-all-input';
import { SetAllState } from './groups/set-all';
import { ForEachState } from './groups/for-each';

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

// const app = new App(CallAllState);
// const app = new App(CallAllAnimationsState);
// const app = new App(CallAllInputState);
// const app = new App(SetAllState);
const app = new App(ForEachState);


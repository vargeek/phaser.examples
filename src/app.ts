import { BootState } from './boot.state';

import { MoveToAnotherGroupState } from './groups/move-to-another-group';
import { RemoveState } from './groups/remove';
import { RemoveCheckState } from './groups/remove-check';
import { RemoveBetweenState } from './groups/remove-between';
import { ReplaceState } from './groups/replace';
import { SwapChildrenInAGroupState } from './groups/swap-children-in-a-group';

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

// const app = new App(MoveToAnotherGroupState);
// const app = new App(RemoveState);
// const app = new App(RemoveCheckState);
// const app = new App(RemoveBetweenState);
// const app = new App(ReplaceState);
const app = new App(SwapChildrenInAGroupState);


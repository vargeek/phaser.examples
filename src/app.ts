import { BootState } from './boot.state';

import { DisplayOrderState } from './groups/display-order';
import { GroupAsLayersState } from './groups/group-as-layers';
import { BringAGroupToTopState } from './groups/bring-a-group-to-top';
import { SortState } from './groups/sort';
import { DepthSortsState } from './groups/depth-sort';

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

// const app = new App(DisplayOrderState);
// const app = new App(GroupAsLayersState);
// const app = new App(BringAGroupToTopState);
// const app = new App(SortState);
const app = new App(DepthSortsState);


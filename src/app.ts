import { BootState } from './boot.state';

import { NestedGroupsState } from './groups/nested-groups';
import { SubGroupsGroupLengthState } from './groups/sub-groups-group-length';

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

// const app = new App(NestedGroupsState);
const app = new App(SubGroupsGroupLengthState);


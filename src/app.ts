import { BootState } from './boot.state';

import { InputOrderState } from './input/input-order';
import { InputPriorityState } from './input/input-priority';
import { InputEnableGroupState } from './input/input-enable-group';
import { GroupInputEventsState } from './input/group-input-events';
import { IgnoreChildInputState } from './input/ignore-child-input';
import { InputChildPriorityState } from './input/input-child-priority';
import { CustomCandidateHandlerState } from './input/custom-candidate-handler';

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

// const app = new App(InputOrderState);
// const app = new App(InputPriorityState);
// const app = new App(InputEnableGroupState);
// const app = new App(GroupInputEventsState);
// const app = new App(IgnoreChildInputState);
// const app = new App(InputChildPriorityState);
const app = new App(CustomCandidateHandlerState);



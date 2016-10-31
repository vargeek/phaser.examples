import { BootState } from './boot.state';

import { TouchEventsState } from './input/touch-events';
import { OnTapState } from './input/on-tap';
import { ButtonOpenPopupState } from './input/button-open-popup';
import { ButtonDestroyState } from './input/button-destroy';

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

// const app = new App(TouchEventsState);
// const app = new App(OnTapState);
// const app = new App(ButtonOpenPopupState);
const app = new App(ButtonDestroyState);


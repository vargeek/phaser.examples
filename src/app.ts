import { BootState } from './boot.state';

import { MouseButtonsState } from './input/mouse-buttons';
import { MultiTouchState } from './input/multi-touch';
import { FollowMouseState } from './input/follow-mouse';

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

// const app = new App(MouseButtonsState);
// const app = new App(MultiTouchState);
const app = new App(FollowMouseState);



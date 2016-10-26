import { BootState } from './boot.state';

import { TweenFromState } from './tweens/tween-from';
import { TweenToState } from './tweens/tween-to';
import { TweenRelativeState } from './tweens/tween-relative';
import { YoyoState } from './tweens/yoyo';

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

// const app = new App(TweenFromState);
// const app = new App(TweenToState);
// const app = new App(TweenRelativeState);
const app = new App(YoyoState);

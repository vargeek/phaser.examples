import { BootState } from './boot.state';

import { ChainedTweensState } from './tweens/chained-tweens';
import { CombinedTweensState } from './tweens/combined-tweens';
import { TweenSeveralPropertiesState } from './tweens/tween-several-properties';

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

// const app = new App(ChainedTweensState);
// const app = new App(CombinedTweensState);
const app = new App(TweenSeveralPropertiesState);


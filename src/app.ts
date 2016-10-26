import { BootState } from './boot.state';

import { TweenLoopEventsState } from './tweens/tween-loop-event';
import { PauseTweenState } from './tweens/pause-tween';
import { RepeatState } from './tweens/repeat';
import { TweenDelayState } from './tweens/tween-delay';

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

// const app = new App(TweenLoopEventsState);
// const app = new App(PauseTweenState);
// const app = new App(RepeatState);
const app = new App(TweenDelayState);


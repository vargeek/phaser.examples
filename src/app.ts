import { BootState } from './boot.state';

import { BasicLoopedEventState } from './time/basic-looped-event';
import { BasicRepeatEventState } from './time/basic-repeat-event';
import { BasicTimedEventState } from './time/basic-timed-event';
import { CustomTimerState } from './time/custom-timer';
import { ElapsedSecondsState } from './time/elapsed-seconds';
import { MultipleTimersState } from './time/multiple-timers';
import { RemoveEventState } from './time/remove-event';
import { SlowDownTimeState } from './time/slow-down-time';
import { TimedSlideshowState } from './time/timed-slideshow';

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

// const app = new App(BasicLoopedEventState);
// const app = new App(BasicRepeatEventState);
// const app = new App(BasicTimedEventState);
// const app = new App(CustomTimerState);
// const app = new App(ElapsedSecondsState);
// const app = new App(MultipleTimersState);
// const app = new App(RemoveEventState);
// const app = new App(SlowDownTimeState);
const app = new App(TimedSlideshowState);

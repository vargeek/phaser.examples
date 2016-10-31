import { BootState } from './boot.state';

import { GameScaleState } from './input/game-scale';
import { DownDurationState } from './input/down-duration';
import { OutOfGameState } from './input/out-of-game';
import { OutOfGameMouseUpState } from './input/out-of-game-mouse-up';
import { OverrideDefaultControlsState } from './input/override-default-controls';
import { PointerLockState } from './input/pointer-lock';
import { PointerOverState } from './input/pointer-over';

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

// const app = new App(GameScaleState);
// const app = new App(DownDurationState);
// const app = new App(OutOfGameState);
// const app = new App(OutOfGameMouseUpState);
// const app = new App(OverrideDefaultControlsState);
// const app = new App(PointerLockState);
const app = new App(PointerOverState);



import { BootState } from './boot.state';

import { GamepadState } from './input/gamepad';
import { GamepadAnalogButtonState } from './input/gamepad-analog-button';
import { GamepadButtonsState } from './input/gamepad-buttons';
import { GamepadHotkeysState } from './input/gamepad-hotkeys';
import { GamepadMultiplePadsState } from './input/gamepad-multiple-pads';

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

// const app = new App(GamepadState);
// const app = new App(GamepadAnalogButtonState);
// const app = new App(GamepadButtonsState);
// const app = new App(GamepadHotkeysState);
const app = new App(GamepadMultiplePadsState);


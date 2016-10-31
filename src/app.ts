import { BootState } from './boot.state';

import { KeyState } from './input/key';
import { KeyboardState } from './input/keyboard';
import { KeyboardJustpressedState } from './input/keyboard-justpressed';
import { KeyboardHotkeysState } from './input/keyboard-hotkeys';
import { WordInputState } from './input/word-input';
import { CursorKeyMovementState } from './input/cursor-key-movement';

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

// const app = new App(KeyState);
// const app = new App(KeyboardState);
// const app = new App(KeyboardJustpressedState);
// const app = new App(KeyboardHotkeysState);
// const app = new App(WordInputState);
const app = new App(CursorKeyMovementState);


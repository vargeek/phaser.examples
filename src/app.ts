import { BootState } from './boot.state';

import { PixelPerfectClickDetectionState } from './input/pixel-perfect-click-detection';
import { PixelpickAtlasState } from './input/pixelpick-atlas';
import { PixelpickAtlasScaledState } from './input/pixelpick-atlas-scaled';
import { PixelpickSpritesheetState } from './input/pixelpick-spritesheet';
import { PixelpickScrollingEffectState } from './input/pixelpick-scrolling-effect';

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

// const app = new App(PixelPerfectClickDetectionState);
// const app = new App(PixelpickAtlasState);
// const app = new App(PixelpickAtlasScaledState);
// const app = new App(PixelpickSpritesheetState);
const app = new App(PixelpickScrollingEffectState);



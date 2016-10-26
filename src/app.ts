import { BootState } from './boot.state';

import { BounceState } from './tweens/bounce';
import { BubblesState } from './tweens/bubbles';
import { EarthQuakeState } from './tweens/earthquake';
import { FadingInASpriteState } from './tweens/fading-in-a-sprite';

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

// const app = new App(BounceState);
// const app = new App(BubblesState);
// const app = new App(EarthQuakeState);
const app = new App(FadingInASpriteState);


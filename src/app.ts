import { BootState } from './boot.state';

import { NinjaAabbVsAabbState } from './ninja-physics/ninja-aabb-vs-aabb';
import { NinjaAabbVsTileState } from './ninja-physics/ninja-aabb-vs-tile';
import { NinjaImpactState } from './ninja-physics/ninja-impact';
import { NinjaPlatformsState } from './ninja-physics/ninja-platforms';
import { NinjaTilemapState } from './ninja-physics/ninja-tilemap';

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

const app = new App(NinjaAabbVsAabbState);
// const app = new App(NinjaAabbVsTileState);
// const app = new App(NinjaImpactState);
// const app = new App(NinjaPlatformsState);
// const app = new App(NinjaTilemapState);

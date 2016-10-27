import { BootState } from './boot.state';

import { GroupTransformState } from './groups/group-transform';
import { GroupTransformRotateState } from './groups/group-transform-rotate';
import { GroupTransformTweenState } from './groups/group-transform-tween';
import { GroupScaleState } from './groups/group-scale';
import { GroupBoundsState } from './groups/group-bounds';

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

// const app = new App(GroupTransformState);
// const app = new App(GroupTransformRotateState);
// const app = new App(GroupTransformTweenState);
// const app = new App(GroupScaleState);
const app = new App(GroupBoundsState);


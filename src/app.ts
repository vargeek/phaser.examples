import { BootState } from './boot.state';

import { DragState } from './input/drag';
import { BringAChildToTopState } from './input/bring-a-child-to-top';
import { SnapOnDragState } from './input/snap-on-drag';
import { BoundsRectState } from './input/bounds-rect';
import { BoundsSpriteState } from './input/bounds-sprite';
import { DragEventParametersState } from './input/drag-event-parameters';
import { DragUpdateState } from './input/drag-update';
import { DragUpdateMultipleState } from './input/drag-update-multiple';
import { DragScaledGroupState } from './input/drag-scaled-group';
import { DragSeveralSpritesState } from './input/drag-several-sprites';
import { DropLimitationState } from './input/drop-limitation';
import { MotionLockHorizontalState } from './input/motion-lock-horizontal';
import { MotionLockVerticalState } from './input/motion-lock-vertical';

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

// const app = new App(DragState);
// const app = new App(BringAChildToTopState);
// const app = new App(SnapOnDragState);
// const app = new App(BoundsRectState);
// const app = new App(BoundsSpriteState);
// const app = new App(DragEventParametersState);
// const app = new App(DragUpdateState);
// const app = new App(DragUpdateMultipleState);
// const app = new App(DragScaledGroupState);
// const app = new App(DragSeveralSpritesState);
// const app = new App(DropLimitationState);
// const app = new App(MotionLockHorizontalState);
const app = new App(MotionLockVerticalState);


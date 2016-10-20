/// <reference path="./phaser.d.ts" />

import { BootState } from './boot.state';

// import { LoadAnImageState } from './basics/load-an-image.state';
// import { ClickAnImageState } from './basics/click-an-image.state';
// import { MoveAnImageState } from './basics/move-an-image.state';
// import { ImageFollowInputState } from './basics/04-image-follow-input.state';
// import { LoadAnAnimationState } from './basics/05-load-an-animation.state';
// import { RenderTextState } from './basics/06-render-text.state';
import { TweenAnImageState } from './basics/07-tween-an-image.state';

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

// const app = new App(LoadAnImageState);
// const app = new App(ClickAnImageState);
// const app = new App(MoveAnImageState);
// const app = new App(ImageFollowInputState);
// const app = new App(LoadAnAnimationState);
// const app = new App(RenderTextState);
const app = new App(TweenAnImageState);

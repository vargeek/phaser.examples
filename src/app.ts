import { BootState } from './boot.state';

import { CreateGroupState } from './groups/create-group';
import { CreateSpriteInAGroupState } from './groups/create-sprite-in-a-group';
import { AddASpriteToGroupState } from './groups/add-a-sprite-to-group';
import { ExtendingAGroupState } from './groups/extending-a-group';

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

// const app = new App(CreateGroupState);
// const app = new App(CreateSpriteInAGroupState);
// const app = new App(AddASpriteToGroupState);
const app = new App(ExtendingAGroupState);


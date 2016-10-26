/// <reference path="./phaser.d.ts" />

import { BootState } from './boot.state';

import { GroupCreationState } from './animation/group-creation';
import { CreaturePhoenixState } from './animation/creature-phoenix';
import { CreatureDragonState } from './animation/creature-dragon';

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

// const app = new App(GroupCreationState);
// const app = new App(CreaturePhoenixState);
const app = new App(CreatureDragonState);

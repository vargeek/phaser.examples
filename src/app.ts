/// <reference path="./phaser.d.ts" />

import { IBootInfo, IBounds, IStateInfo } from './boot-info.interface';
import * as LoadAnImage from './basics/load-an-image.state';

let bootInfo = LoadAnImage.bootInfo;

const BootStateKey = 'boot';
class App {
  game: Phaser.Game;

  constructor (bounds: IBounds = { width: 640,height:480}, renderer: number = Phaser.AUTO) {

    this.game = new Phaser.Game(bounds.width, bounds.height, renderer, '');

  }

  addStatesAndBoot (boot: typeof Phaser.State, states: IStateInfo[] = []) {

    states.forEach((state)=>{
      this.game.state.add(state.key, state.constructor);
    });
    this.game.state.add(BootStateKey, boot, true);

  }
}


const app = new App(bootInfo.bounds, bootInfo.renderer);
app.addStatesAndBoot(bootInfo.boot, bootInfo.states);

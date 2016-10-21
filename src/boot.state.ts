/// <reference path="./phaser.d.ts" />

export interface IBounds {
  width: number;
  height: number;
}

export interface IStateInfo {
  key: string;
  constructor: typeof Phaser.State;
}

export interface IBootInfo {
  states: IStateInfo[];
  renderer: number;
  bounds: IBounds;
}

export class BootState extends Phaser.State {
  static bootInfo: IBootInfo = {
    states: [],
    renderer: Phaser.AUTO,
    bounds: {
      width: 800,
      height: 600
    }
  }

  init () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    // Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
  }
}

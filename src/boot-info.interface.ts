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
  boot: typeof Phaser.State;
  states?: IStateInfo[];
  renderer?: number;
  bounds?: IBounds;
}

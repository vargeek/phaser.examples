/// <reference path="../phaser.d.ts" />

import { IBootInfo } from '../boot-info.interface';
const AssetID = {
  Einstein: 'Einstein'
}

export class LoadAnImageState extends Phaser.State {
  init () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    // Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
  }

  preload () {
    this.load.image(AssetID.Einstein, '/assets/pics/ra_einstein.png');
  }
  create () {
    this.add.sprite(0, 0, AssetID.Einstein);
  }
}

export const bootInfo: IBootInfo = {
  boot: LoadAnImageState
}

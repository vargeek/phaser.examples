/// <reference path="../phaser.d.ts" />

import { BootState } from '../boot.state';

const AssetID = {
  Einstein: 'Einstein'
}

export class LoadAnImageState extends BootState {
  preload () {
    this.load.image(AssetID.Einstein, '/assets/pics/ra_einstein.png');
  }
  create () {
    this.add.sprite(0, 0, AssetID.Einstein);
  }
}

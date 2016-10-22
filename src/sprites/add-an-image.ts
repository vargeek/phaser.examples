/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Pic: 'Pic'
}

export class AddAnImage extends BootState {

  preload () {

    this.load.image(AssetID.Pic, '/assets/pics/acryl_bladerunner.png');

  }

  create () {

    this.add.image(100, 100, AssetID.Pic);

  }

}

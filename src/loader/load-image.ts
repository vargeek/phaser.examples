/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  ImageKey: 'ImageKey'
}

export class LoadImageState extends BootState {

  preload () {

    this.load.image(AssetID.ImageKey, '/assets/sprites/phaser2.png');

  }

  create () {

    this.add.sprite(0, 0, AssetID.ImageKey);

  }

}

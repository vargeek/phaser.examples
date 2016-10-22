/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Mushroom: 'Mushroom'
}

export class AddASpriteState extends BootState {

  preload () {

    this.load.image(AssetID.Mushroom, '/assets/sprites/mushroom2.png');

  }

  create () {

    this.add.sprite(200, 200, AssetID.Mushroom);

  }

}

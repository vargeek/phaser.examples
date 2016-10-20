/// <reference path="../phaser.d.ts" />

import { BootState } from '../boot.state';

const AssetID = {
  Einstein: 'Einstein'
}

export class MoveAnImageState extends BootState {
  image: Phaser.Sprite;

  preload () {

    this.load.image(AssetID.Einstein, '/assets/pics/ra_einstein.png');

  }

  create () {

    this.image = this.add.sprite(0, 0, AssetID.Einstein);
    this.physics.enable(this.image, Phaser.Physics.ARCADE);
    (this.image.body as Phaser.Physics.Arcade.Body).velocity.x = 150;

  }

  update () {
    if (this.image.x > this.world.width) {
      this.image.x = -this.image.width;
    }
  }

}

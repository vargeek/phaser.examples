/// <reference path="../phaser.d.ts" />

import { BootState } from '../boot.state';

const AssetID = {
  Einstein: 'Einstein'
}

export class TweenAnImageState extends BootState {

  sprite: Phaser.Sprite;

  preload () {

    this.load.image(AssetID.Einstein, '/assets/pics/ra_einstein.png');

  }

  create () {

    this.sprite = this.add.sprite(-this.world.width / 2, 0, AssetID.Einstein);

  }

  update () {

    if (this.sprite.x < this.world.width) {
      this.sprite.x += 4;
    }

  }

  render () {

    if (this.sprite.deltaX > 0) {
      const elapsedMS = this.game.time.elapsedMS.toString();
      const deltaX = this.sprite.deltaX.toString();
      this.game.debug.text(`elapsed: ${elapsedMS} ms`, 32, 32);
      this.game.debug.text(`deltaX: ${deltaX}`, 32, 64);
    }

  }

}

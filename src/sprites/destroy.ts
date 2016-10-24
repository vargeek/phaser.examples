/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Plane: 'Plane',
  Sky: 'Sky'
}

export class DestroyState extends BootState {

  preload () {

    this.load.image(AssetID.Plane, '/assets/misc/boss1.png');
    this.load.image(AssetID.Sky, '/assets/tests/sky-2x.png');

  }

  create () {

    this.add.sprite(0, 0, AssetID.Sky);

    let mx = this.game.width - this.game.cache.getImage(AssetID.Plane).width;
    let my = this.game.height - this.game.cache.getImage(AssetID.Plane).height;

    for (let index = 0; index < 5; index++) {

      let sprite = this.add.sprite(this.rnd.integerInRange(0, mx), this.rnd.integerInRange(0, my), AssetID.Plane);

      sprite.inputEnabled = true;
      sprite.events.onInputDown.add(this.destroySprite, this);

    }

  }

  destroySprite (sprite: Phaser.Sprite) {

    sprite.destroy();

  }

}

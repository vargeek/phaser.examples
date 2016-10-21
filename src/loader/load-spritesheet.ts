/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Sprite: 'Sprite'
}
const Animation = {
  Walk: 'Walk'
}

export class LoadSpritesheet extends BootState {

  preload () {

    this.load.spritesheet(AssetID.Sprite, '/assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

  }

  create () {

    let sprite = this.add.sprite(300, 200, AssetID.Sprite);

    sprite.animations.add(Animation.Walk);

    sprite.animations.play(Animation.Walk, 50, true);

  }

}

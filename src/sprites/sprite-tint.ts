/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Atlas: 'Atlas'
}

export class SpriteTintState extends BootState {

  sprite: Phaser.Sprite;

  preload () {

    this.load.atlas(AssetID.Atlas, '/assets/sprites/seacreatures_json.png','/assets/sprites/seacreatures_json.json');

  }

  create () {

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.Atlas, 'greenJellyfish0000');
    this.sprite.anchor.set(0.5);
    this.changeTint();

    this.input.onDown.add(this.changeTint, this);

  }

  changeTint () {

    this.sprite.tint = Math.random() * 0xffffff;

  }

  update () {

    this.sprite.rotation += 0.02;

  }

}

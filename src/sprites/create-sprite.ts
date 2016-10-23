/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  MS: 'ms'
}

const Animation = {
  Walk: 'Walk'
}

export class CreateSpriteState extends BootState {

  sprite: Phaser.Sprite;
  tween: Phaser.Tween;
  rectSprite: Phaser.Sprite;

  preload () {

    this.load.spritesheet(AssetID.MS, 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

  }

  create () {

    this.sprite = this.add.sprite(40, 100, AssetID.MS);

    this.sprite.animations.add(Animation.Walk);
    this.sprite.animations.play(Animation.Walk, 30, true);

    this.tween = this.add.tween(this.sprite).to({x: this.game.width}, 10000, Phaser.Easing.Linear.None, true, 0, 10000, false);

    let bmd = this.add.bitmapData(128, 128);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 128, 128);
    bmd.ctx.fillStyle = '#ff0000';
    bmd.ctx.fill();
    this.rectSprite = this.add.sprite(200, 200, bmd);

  }

  update () {

    if (this.sprite.x >= this.world.width) {
      this.sprite.scale.x = 1;
      this.sprite.scale.y = 1;
    }
    else if (this.sprite.x >= 300) {
      this.sprite.scale.x += 0.01;
      this.sprite.scale.y += 0.01;
    }

  }

}

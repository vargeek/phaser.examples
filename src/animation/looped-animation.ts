/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class LoopedAnimationState extends BootState {
  bot: Phaser.Sprite;

  preload () {

    this.load.atlasJSONHash(AssetID.bot, 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');

  }

  create () {

    this.bot = this.add.sprite(200, 200, AssetID.bot);

    this.bot.animations.add(Animation.run);

    this.bot.animations.play(Animation.run, 15, true);

  }

  update () {

    this.bot.x -= 2;

    if (this.bot.x < -this.bot.width) {
      this.bot.x = this.world.width;
    }

  }

}

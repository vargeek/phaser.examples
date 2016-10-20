/// <reference path="../phaser.d.ts" />

import { BootState } from '../boot.state';

const AssetID = {
  Bot: 'Bot'
}

const Animation = {
  Run: 'Run'
}

export class LoadAnAnimationState extends BootState {

  bot: Phaser.Sprite;

  preload () {

    this.load.atlasJSONHash(AssetID.Bot, '/assets/sprites/running_bot.png', '/assets/sprites/running_bot.json');

  }

  create () {

    this.bot = this.add.sprite(200, 200, AssetID.Bot);

    this.bot.animations.add(Animation.Run);

    this.bot.animations.play(Animation.Run, 15, true);

  }

}

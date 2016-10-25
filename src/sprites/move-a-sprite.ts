/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class MoveASpriteState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.atlasJSONHash(AssetID.bot, '/assets/sprites/running_bot.png', '/assets/sprites/running_bot.json');

  }

  create () {

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.bot);
    this.sprite.anchor.set(0.5);
    this.sprite.scale.set(2);

    this.sprite.animations.add(Animation.run)
    this.sprite.animations.play(Animation.run, 10, true);

  }

  update () {

    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.sprite.x -= 4;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.sprite.x += 4;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.sprite.y -= 4;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.sprite.y += 4;
    }

  }

    render () {

      this.game.debug.spriteInfo(this.sprite, 20, 32);

    }

}

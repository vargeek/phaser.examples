/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class ChangeTextureOnClickState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.atlasJSONHash(AssetID.bot, 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');
    this.load.spritesheet(AssetID.mummy, 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

  }

  create () {

    this.sprite = this.add.sprite(200, 200, AssetID.bot);

    this.sprite.animations.add(Animation.run);
    this.sprite.animations.play(Animation.run, 15, true);

    this.input.onDown.addOnce(this.changeMummy, this);

  }

  changeMummy () {

    // Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.
    // If your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the frame or frameName properties instead.
    // You should only use loadTexture if you want to replace the base texture entirely.
    // Calling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU.
    // You can use the new const Phaser.PENDING_ATLAS as the texture key for any sprite.
    // Doing this then sets the key to be the frame argument (the frame is set to zero).
    // This allows you to create sprites using load.image during development, and then change them
    // to use a Texture Atlas later in development by simply searching your code for 'PENDING_ATLAS'
    // and swapping it to be the key of the atlas data.
    // Note: You cannot use a RenderTexture as a texture for a TileSprite.
    this.sprite.loadTexture(AssetID.mummy, 0);
    this.sprite.animations.add(Animation.walk);
    this.sprite.animations.play(Animation.walk, 30, true);

  }

  render () {

    this.game.debug.body(this.sprite);

  }

}

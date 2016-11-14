import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RenderTextureImageState extends BootState {
  ball: Phaser.Sprite;
  texture: Phaser.RenderTexture;

  preload () {

    this.load.image('ball', 'assets/sprites/spinObj_01.png');

  }

  create () {

    this.ball = this.make.sprite(0, 0, 'ball');

    // http://localhost:3000/Phaser.GameObjectFactory.html#renderTexture
    // renderTexture(width, height, key, addToCache) → {Phaser.RenderTexture}
    // key{string=''}                 Asset key for the RenderTexture when stored in the Cache (see addToCache parameter).
    // addToCache{boolean=false}      Should this RenderTexture be added to the Game.Cache? If so you can retrieve it with Cache.getTexture(key)
    // A dynamic initially blank canvas to which images can be drawn.
    this.texture = this.add.renderTexture(this.game.width, this.game.height);

    this.add.sprite(0, 0, this.texture);

  }

  update () {

    if (!this.input.activePointer.position.isZero()) {
      // http://localhost:3000/Phaser.RenderTexture.html#renderXY
      // renderXY(displayObject, x, y, clear)
      // This function will draw the display object to the RenderTexture at the given coordinates.
      // When the display object is drawn it takes into account scale and rotation.
      // If you don't want those then use RenderTexture.renderRawXY instead.
      this.texture.renderXY(this.ball, this.input.activePointer.x, this.input.activePointer.y, true);

      // http://localhost:3000/Phaser.RenderTexture.html#renderRawXY
      // renderRawXY(displayObject, x, y, clear)
      // This function will draw the display object to the RenderTexture at the given coordinates.
      // When the display object is drawn it doesn't take into account scale, rotation or translation.
      // If you need those then use RenderTexture.renderXY instead.
    }

  }

}

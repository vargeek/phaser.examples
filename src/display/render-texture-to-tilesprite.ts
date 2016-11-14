import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RenderTextureToTilespriteState extends BootState {
  ball: Phaser.Sprite;
  texture: Phaser.RenderTexture;

  preload () {

    this.load.image('ball', 'assets/sprites/spinObj_01.png');

  }

  create () {

    this.ball = this.make.sprite(0, 0, 'ball');
    this.texture = this.add.renderTexture(256, 256);

    this.texture.renderXY(this.ball, 0, 0, false);
    this.texture.renderXY(this.ball, 50, 50, false);
    this.texture.renderXY(this.ball, 100, 100, false);

    this.cache.addImage('tsTexture', null, this.texture.getImage());

    let ts = this.add.tileSprite(0, 0, 800, 600, 'tsTexture');

    ts.textureDebug = true;

  }

}

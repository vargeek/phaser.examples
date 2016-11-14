import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RenderTextureMirrorState extends BootState {
  ball: Phaser.Sprite;
  texture: Phaser.RenderTexture;

  preload () {

    this.load.image('ball', 'assets/sprites/pangball.png');

  }

  create () {

    this.texture = this.add.renderTexture(800, 600, 'mousetrail');

    this.ball = this.make.sprite(0, 0, 'ball');
    this.ball.anchor.set(0.5);

    this.add.sprite(0, 0, this.texture);

  }

  update () {

    this.texture.renderXY(this.ball, this.input.activePointer.x, this.input.activePointer.y, true);
    this.texture.renderXY(this.ball, this.input.x, 600 - this.input.activePointer.y, false);

  }

}

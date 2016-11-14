import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RenderTextureTrailState extends BootState {
  mushroom: Phaser.Sprite;
  texture: Phaser.RenderTexture;

  preload () {

    this.load.image('mushroom', 'assets/sprites/mushroom2.png');

  }

  create () {

    this.texture = this.add.renderTexture(800, 600, 'mousetrail');

    this.mushroom = this.make.sprite(0, 0, 'mushroom');
    this.mushroom.anchor.set(0.5);

    this.add.sprite(0, 0, this.texture);

  }

  update () {

    if (!this.input.activePointer.position.isZero()) {
      this.texture.renderXY(this.mushroom, this.input.activePointer.x, this.input.activePointer.y);
    }

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AtlasState extends BootState {
  bmd: Phaser.BitmapData;
  jellyfish: Phaser.Sprite;

  preload () {

    this.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');

  }

  create () {

    this.bmd = this.make.bitmapData(800, 600);
    this.add.image(0, 0, this.bmd);

    this.jellyfish = this.add.sprite(0, 0, 'seacreatures', 'blueJellyfish0010');
    this.jellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('blueJellyfish', 0, 32, '', 4), 30, true)
    this.jellyfish.animations.play('swim');

  }

  update () {

    if (this.input.activePointer.isDown) {
      // http://localhost:3000/Phaser.BitmapData.html#draw
      // draw(source, x, y, width, height, blendMode, roundPx) → {Phaser.BitmapData}

      // Draws the given Phaser.Sprite, Phaser.Image or Phaser.Text to this BitmapData at the coordinates specified.
      // You can use the optional width and height values to 'stretch' the sprite as it is drawn. This uses drawImage stretching, not scaling.

      // The children will be drawn at their x and y world space coordinates. If this is outside the bounds of the BitmapData they won't be visible.
      // When drawing it will take into account the rotation, scale, scaleMode, alpha and tint values.

      // Note: You should ensure that at least 1 full update has taken place before calling this,
      // otherwise the objects are likely to render incorrectly, if at all.
      // You can trigger an update yourself by calling stage.updateTransform() before calling draw.
      this.bmd.draw(this.jellyfish, this.input.activePointer.position.x, this.input.activePointer.position.y);
    }

  }

}

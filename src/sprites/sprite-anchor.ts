/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Pic: 'pic'
}

export class SpriteAnchorState extends BootState {

  sprite: Phaser.Sprite;
  point: Phaser.Point;
  dec = false;

  preload () {

    this.load.image(AssetID.Pic, '/assets/pics/lance-overdose-loader_eye.png');

  }

  create () {

    this.stage.backgroundColor = '#0072bc';

    this.point = new Phaser.Point(300, 300);

    this.sprite = this.add.sprite(this.point.x, this.point.y, AssetID.Pic);

    this.input.onDown.add(this.updateAnchor, this);


  }

  update () {

    this.sprite.rotation += 0.01

  }
  updateAnchor () {

    if (this.dec) {

      this.sprite.anchor.x -= 0.1;
      this.sprite.anchor.y -= 0.1;

      if (this.sprite.anchor.x <= 0) {
        this.dec = false;
      }
    }
    else {
      this.sprite.anchor.x += 0.1;
      this.sprite.anchor.y += 0.1;

      if (this.sprite.anchor.x >= 1) {
        this.dec = true;
      }

    }

  }

  render () {

    this.game.debug.geom(this.point, 'rgb(0, 255, 0)');

    this.game.debug.text(`Anchor X: ${this.sprite.anchor.x.toFixed(1)} Y: ${this.sprite.anchor.y.toFixed(1)}`, 32, 32);
    this.game.debug.text(`Sprite X: ${this.sprite.x} Y: ${this.sprite.y}`, 32, 64);
    this.game.debug.text(`Click to adjust the anchor`, 32, 96);


  }

}

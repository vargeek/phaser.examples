/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class DynamicAnimationState extends BootState {

  preload () {

    this.load.image(AssetID.orb, 'assets/sprites/orb-blue.png');

  }

  create () {

    this.stage.backgroundColor = '#ef3d45';

    //  We're going to dynamically create an animation.
    //  It will consist of 16 frames, each 22x22 pixels in size.
    //
    //  So the overall dimensions will be 352x22

    // make.sprite(x, y, key, frame) → {Phaser.Sprite}
    // Create a new Sprite with specific position and sprite sheet key.

    let orb = this.make.sprite(0, 0, AssetID.orb);

    //  First create a BitmapData object at the size we need

    const frames = 16;
    const w = 22;
    const h = 22;

    let bmd = this.add.bitmapData(frames * w, h);

    let x = 0;
    let y = -h; // 第一帧只看到orb的最底部

    for (let index = 0; index < frames; index++) {
      bmd.draw(orb, x, y);
      x += w;
      y += 3;
    }

    // 添加到屏幕上做对比
    this.add.image(0, 0, bmd);

    this.cache.addSpriteSheet('dynamic', '', bmd.canvas, w, h, frames, 0, 0);

    for (let index = 0; index < frames; index++) {
      let test = this.add.sprite(200, 100 + (index * h), 'dynamic');
      test.animations.add('float');
      test.play('float', 20, true);
    }


  }

}

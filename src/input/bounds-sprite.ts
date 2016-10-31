import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BoundsSpriteState extends BootState {

  preload () {

    this.load.image('pic', 'assets/pics/game14_angel_dawn.png');
    this.load.image('atari', 'assets/sprites/atari800xl.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    let bounds = this.add.sprite(this.world.centerX, this.world.centerY, 'pic');
    bounds.alpha = 0.5;
    bounds.anchor.set(0.5);

    let sprite = this.add.sprite(300, 300, 'atari');
    sprite.inputEnabled = true;
    sprite.anchor.set(0.5);

    // 限制拖拽范围，只能在指定精灵的bounds内移动。
    // http://localhost:3000/Phaser.InputHandler.html#enableDrag
    // enableDrag(lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
    // Allow this Sprite to be dragged by any valid pointer.
    // boundsSprite:
    // If you want to restrict the drag of this sprite to within the bounding box of another sprite, pass it here.
    sprite.input.enableDrag();

    // http://localhost:3000/Phaser.InputHandler.html#boundsSprite
    // A Sprite the bounds of which this sprite is restricted during drag.
    sprite.input.boundsSprite = bounds;

  }

}

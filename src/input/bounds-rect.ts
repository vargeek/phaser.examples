import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BoundsRectState extends BootState {

  preload () {

    this.load.image('atari', 'assets/sprites/atari800xl.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    let bounds = new Phaser.Rectangle(100, 100, 500, 400);

    let graphics = this.add.graphics(bounds.x, bounds.y);
    graphics.beginFill(0x000077);
    graphics.drawRect(0, 0, bounds.width, bounds.height);

    let sprite = this.add.sprite(300, 300, 'atari');
    sprite.inputEnabled = true;
    sprite.anchor.set(0.5);

    // 限制拖拽范围，只能在指定矩形内移动。
    // http://localhost:3000/Phaser.InputHandler.html#enableDrag
    // enableDrag(lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
    // Allow this Sprite to be dragged by any valid pointer.
    // boundsRect:
    // If you want to restrict the drag of this sprite to a specific Rectangle, pass the Phaser.Rectangle here, otherwise it's free to drag anywhere.
    sprite.input.enableDrag();

    // 限制拖拽范围，只能在指定矩形内移动。可以在使能拖拽功能时设置，也可以在使能后设置。
    // http://localhost:3000/Phaser.InputHandler.html#boundsRect
    // A region of the game world within which the sprite is restricted during drag.
    sprite.input.boundsRect = bounds;


  }

}

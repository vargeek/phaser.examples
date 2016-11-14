import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FastcopyDrawState extends BootState {
  math: typeof Phaser.Math;
  bmd: Phaser.BitmapData;
  bmdDest: Phaser.BitmapData;
  colors: Phaser.ColorComponents[];
  index = 0;
  rectangle: Phaser.Rectangle;

  create () {

    this.bmd = this.make.bitmapData(this.game.width, this.game.height);

    this.bmdDest = this.make.bitmapData(this.game.width, this.game.height);
    this.bmdDest.addToWorld();

    this.colors = Phaser.Color.HSVColorWheel();

    this.input.addMoveCallback(this.paint, this);

    this.rectangle = new Phaser.Rectangle(0, 0, this.game.width, this.game.height);

  }

  paint (pointer: Phaser.Pointer, x: number, y: number) {

    if (pointer.isDown) {
      this.bmd.circle(x, y, 4, this.colors[this.index].rgba);
      this.index = this.math.wrapValue(this.index, 1, 359);
    }

  }

  update () {

    this.bmdDest.fill(0, 0, 0, 0.1);
    // http://localhost:3000/Phaser.BitmapData.html#copy
    // copy(source, x, y, width, height, tx, ty, newWidth, newHeight, rotate, anchorX, anchorY, scaleX, scaleY, alpha, blendMode, roundPx) → {Phaser.BitmapData}
    // x{number=0}    The x coordinate representing the top-left of the region to copy from the source image.
    // tx{number?}    The x coordinate to translate to before drawing. If not specified it will default to the x parameter. If null and source is a Display Object, it will default to source.x.

    // Copies a rectangular area from the source object to this BitmapData. If you give null as the source it will copy from itself.

    // You can optionally resize, translate, rotate, scale, alpha or blend as it's drawn.

    // All rotation, scaling and drawing takes place around the regions center point by default, but can be changed with the anchor parameters.

    // Note that the source image can also be this BitmapData, which can create some interesting effects.

    // This method has a lot of parameters for maximum control.
    // You can use the more friendly methods like copyRect and draw to avoid having to remember them all.

    // You may prefer to use copyTransform if you're simply trying to draw a Sprite to this BitmapData,
    // and don't wish to translate, scale or rotate it from its original values.
    this.bmdDest.copy(this.bmd, 0, 0);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CopyBitmapdataState extends BootState {
  bmd: Phaser.BitmapData;
  bmd2: Phaser.BitmapData;

  preload () {

    this.load.image('pic', 'assets/pics/Equality_by_Ragnarok.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    this.bmd = this.make.bitmapData(800, 600);
    // http://localhost:3000/Phaser.BitmapData.html#copy
    // copy(source, x, y, width, height, tx, ty, newWidth, newHeight, rotate, anchorX, anchorY, scaleX, scaleY, alpha, blendMode, roundPx) → {Phaser.BitmapData}
    // x{number=0}      The x coordinate representing the top-left of the region to copy from the source image.
    // tx{number?}      The x coordinate to translate to before drawing. If not specified it will default to the x parameter. If null and source is a Display Object, it will default to source.x.
    // blendMode{string=null}   The composite blend mode that will be used when drawing. The default is no blend mode at all. This is a Canvas globalCompositeOperation value such as 'lighter' or 'xor'.
    // roundPx{boolean=false}   Should the x and y values be rounded to integers before drawing? This prevents anti-aliasing in some instances.

    // Copies a rectangular area from the source object to this BitmapData. If you give null as the source it will copy from itself.

    // You can optionally resize, translate, rotate, scale, alpha or blend as it's drawn.

    // All rotation, scaling and drawing takes place around the regions center point by default, but can be changed with the anchor parameters.

    // Note that the source image can also be this BitmapData, which can create some interesting effects.

    // This method has a lot of parameters for maximum control.
    // You can use the more friendly methods like copyRect and draw to avoid having to remember them all.

    // You may prefer to use copyTransform if you're simply trying to draw a Sprite to this BitmapData,
    // and don't wish to translate, scale or rotate it from its original values.
    this.bmd.copy('pic');
    // http://localhost:3000/Phaser.BitmapData.html#addToWorld
    // addToWorld(x, y, anchorX, anchorY, scaleX, scaleY) → {Phaser.Image}
    // Creates a new Phaser.Image object, assigns this BitmapData to be its texture, adds it to the world then returns it.
    this.bmd.addToWorld();

    this.bmd2 = this.make.bitmapData(64, 64);
    // http://localhost:3000/Phaser.BitmapData.html#circle
    // circle(x, y, radius, fillStyle) → {Phaser.BitmapData}
    // fillStyle{string?}   If set the context fillStyle will be set to this value before the circle is drawn.
    // Draws a filled Circle to the BitmapData at the given x, y coordinates and radius in size.
    this.bmd2.circle(32, 32, 32, 'rgba(255,0,255,0.2)');

    this.input.addMoveCallback(this.paint, this);


  }

  paint (pointer: Phaser.Pointer, x: number, y: number) {

    if (pointer.isDown) {
      this.bmd.draw(this.bmd2, x - 16, y - 16);
    }

  }

}

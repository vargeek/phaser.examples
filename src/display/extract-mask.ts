import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ExtractMaskState extends BootState {
  font: Phaser.BitmapData;
  mask: Phaser.BitmapData;

  preload () {

    this.load.image('font', 'assets/demoscene/knighthawks.png');

  }

  create () {

    // http://localhost:3000/Phaser.GameObjectCreator.html#bitmapData
    // bitmapData(width, height, key, addToCache) → {Phaser.BitmapData}
    // Create a BitmpaData object.
    // A BitmapData object can be manipulated and drawn to like a traditional Canvas object and used to texture Sprites.
    this.font = this.make.bitmapData(320, 150);
    this.mask = this.make.bitmapData(320, 150);
    // http://localhost:3000/Phaser.BitmapData.html#fill
    // fill(r, g, b, a) → {Phaser.BitmapData}
    // Fills the BitmapData with the given color.
    this.mask.fill(50, 50, 50);

    // http://localhost:3000/Phaser.BitmapData.html#draw
    // draw(source, x, y, width, height, blendMode, roundPx) → {Phaser.BitmapData}
    // blendMode{string=null}     The composite blend mode that will be used when drawing. The default is no blend mode at all. This is a Canvas globalCompositeOperation value such as 'lighter' or 'xor'.
    // roundPx{boolean=false}     Should the x and y values be rounded to integers before drawing? This prevents anti-aliasing in some instances.

    // Draws the given Phaser.Sprite, Phaser.Image or Phaser.Text to this BitmapData at the coordinates specified.
    // You can use the optional width and height values to 'stretch' the sprite as it is drawn. This uses drawImage stretching, not scaling.
    // The children will be drawn at their x and y world space coordinates. If this is outside the bounds of the BitmapData they won't be visible.
    // When drawing it will take into account the rotation, scale, scaleMode, alpha and tint values.
    // Note: You should ensure that at least 1 full update has taken place before calling this,
    // otherwise the objects are likely to render incorrectly, if at all.
    // You can trigger an update yourself by calling stage.updateTransform() before calling draw.
    this.font.draw('font');
    // http://localhost:3000/Phaser.BitmapData.html#update
    // update(x, y, width, height) → {Phaser.BitmapData}
    // This re-creates the BitmapData.imageData from the current context.
    // It then re-builds the ArrayBuffer, the data Uint8ClampedArray reference and the pixels Int32Array.
    // If not given the dimensions defaults to the full size of the context.
    // Warning: This is a very expensive operation, so use it sparingly.
    this.font.update();

    this.add.sprite(0, 0, this.font);
    this.add.sprite(0, 150, this.mask);

    this.input.onDown.addOnce(this.getMask, this);


  }

  getMask () {

    // http://localhost:3000/Phaser.BitmapData.html#extract
    // extract(destination, r, g, b, a, resize, r2, g2, b2) → {Phaser.BitmapData}

    // Scans this BitmapData for all pixels matching the given r,g,b values and then draws them into the given destination BitmapData.
    // The original BitmapData remains unchanged.
    // The destination BitmapData must be large enough to receive all of the pixels that are scanned unless the 'resize' parameter is true.
    // Although the destination BitmapData is returned from this method, it's actually modified directly in place, meaning this call is perfectly valid:
    // picture.extract(mask, r, g, b)
    // You can specify optional r2, g2, b2 color values. If given the pixel written to the destination bitmap will be of the r2, g2, b2 color.
    // If not given it will be written as the same color it was extracted. You can provide one or more alternative colors, allowing you to tint
    // the color during extraction.
    this.font.extract(this.mask, 237, 0, 140);

  }

}

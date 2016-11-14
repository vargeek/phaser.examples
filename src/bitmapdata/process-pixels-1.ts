import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ProcessPixels1State extends BootState {
  bmd: Phaser.BitmapData;

  preload () {

    this.load.image('crystal', 'assets/pics/cougar_dragonsun.png');

  }

  create () {

    this.bmd = this.make.bitmapData();
    this.bmd.load('crystal');
    this.bmd.addToWorld(this.world.centerX, this.world.centerY, 0.5, 0.5);

    this.input.onDown.add(this.startProcess, this);


  }

  startProcess () {

    // http://localhost:3000/Phaser.BitmapData.html#processPixelRGB
    // processPixelRGB(callback, callbackContext, x, y, width, height) → {Phaser.BitmapData}

    // Scans through the area specified in this BitmapData and sends a color object for every pixel to the given callback.
    // The callback will be sent a color object with 6 properties: { r: number, g: number, b: number, a: number, color: number, rgba: string }.
    // Where r, g, b and a are integers between 0 and 255 representing the color component values for red, green, blue and alpha.
    // The color property is an Int32 of the full color. Note the endianess of this will change per system.
    // The rgba property is a CSS style rgba() string which can be used with context.fillStyle calls, among others.
    // The callback will also be sent the pixels x and y coordinates respectively.
    // The callback must return either false, in which case no change will be made to the pixel, or a new color object.
    // If a new color object is returned the pixel will be set to the r, g, b and a color values given within it.
    this.bmd.processPixelRGB(this.forEachPixel, this);

  }

  forEachPixel (pixel: any) {

    let {r,g,b} = pixel;

    pixel.r = b;
    pixel.g = g;
    pixel.b = r;

    return pixel;

  }

}

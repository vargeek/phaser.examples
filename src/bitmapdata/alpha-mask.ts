import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AlphaMaskState extends BootState {

  preload () {

	  this.load.image('pic', 'assets/pics/questar.png');
	  this.load.image('mask', 'assets/pics/mask-test2.png');

  }

  create () {

    this.stage.backgroundColor = 0x4d4d4d;

    this.add.text(64, 10, 'Source image', { font: '16px Arial', fill: '#ffffff' })
    this.add.image(64, 32, 'pic');

    this.add.text(400, 10, 'Alpha mask', { font: '16px Arial', fill: '#ffffff' })
    this.add.image(400, 32, 'mask');

    // http://localhost:3000/Phaser.GameObjectCreator.html#bitmapData
    // bitmapData(width, height, key, addToCache) → {Phaser.BitmapData}
    // Create a BitmpaData object.
    // A BitmapData object can be manipulated and drawn to like a traditional Canvas object and used to texture Sprites.
    let bmd = this.make.bitmapData(320, 256);
    // http://localhost:3000/Phaser.BitmapData.html#alphaMask
    // alphaMask(source, mask, sourceRect, maskRect) → {Phaser.BitmapData}
    // sourceRect{Phaser.Rectangle}   A Rectangle where x/y define the coordinates to draw the Source image to and width/height define the size.
    // maskRect{Phaser.Rectangle}     A Rectangle where x/y define the coordinates to draw the Mask image to and width/height define the size.
    // Draws the image onto this BitmapData using an image as an alpha mask.
    bmd.alphaMask('pic', 'mask');

    this.add.image(this.world.centerX, 320, bmd).anchor.set(0.5, 0);


  }

}

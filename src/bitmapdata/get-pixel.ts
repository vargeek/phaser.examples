import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GetPixelState extends BootState {
  bmd: Phaser.BitmapData;
  tooltip: Phaser.BitmapData;
  sprete: Phaser.Sprite;

  preload () {

    this.load.image('wheel', 'assets/pics/color_wheel_swirl.png');

  }

  create () {

    this.bmd = this.make.bitmapData(800, 600);
    this.bmd.draw('wheel', -200, -200);
    this.bmd.update();
    this.bmd.addToWorld();

    this.tooltip = this.make.bitmapData(64, 64);
    this.sprete = this.add.sprite(0, 0, this.tooltip);

    this.input.addMoveCallback(this.updateTooltip, this);

  }

  updateTooltip (pointer: Phaser.Pointer, x: number, y: number) {

    x = Math.floor(x);
    y = Math.floor(y);

    if (x >= 0 && x <= this.bmd.width && y >= 0 && y <= this.bmd.height) {

      // http://localhost:3000/Phaser.BitmapData.html#getPixelRGB
      // getPixelRGB(x, y, out, hsl, hsv) → {object}

      // Get the color of a specific pixel including its alpha value as a color object containing r,g,b,a and rgba properties.
      // If you have drawn anything to the BitmapData since it was created you must call BitmapData.update to refresh the array buffer,
      // otherwise this may return out of date color values, or worse - throw a run-time error as it tries to access an array element that doesn't exist.
      let color = this.bmd.getPixelRGB(x, y);

      this.tooltip.fill(0, 0, 0);
      this.tooltip.rect(1, 1, 62, 62, color.rgba);

      this.sprete.x = x;
      this.sprete.y = y;
    }

  }

}

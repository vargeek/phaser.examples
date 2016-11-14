import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SetHslState extends BootState {
  bmd: Phaser.BitmapData;

  preload () {

    this.load.image('pic', 'assets/tests/ships.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    this.bmd = this.make.bitmapData();

    this.bmd.load('pic');

    let sprite = this.bmd.addToWorld(this.world.centerX, this.world.centerY, 0.5, 0.5, 3, 3);
    sprite.smoothed = false;

    this.input.onDown.add(this.startProcess, this);

  }

  startProcess () {

    // http://localhost:3000/Phaser.BitmapData.html#shiftHSL
    // shiftHSL(h, s, l, region) → {Phaser.BitmapData}

    // Shifts any or all of the hue, saturation and lightness values on every pixel in the given region, or the whole BitmapData if no region was specified.
    // Shifting will add the given value onto the current h, s and l values, not replace them.
    // The hue is wrapped to keep it within the range 0 to 1. Saturation and lightness are clamped to not exceed 1.
    this.bmd.shiftHSL(0.1);

  }

}

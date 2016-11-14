import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ReplaceColorState extends BootState {
  bmd: Phaser.BitmapData;
  color1 = {
    r: 0,
    g: 85,
    b: 255,
    a: 255
  }
  color2 = {
    r: 0,
    g: 250,
    b: 40,
    a: 255
  }


  preload () {

    this.load.image('crystal', 'assets/pics/jim_sachs_time_crystal.png');

  }

  create () {

    this.bmd = this.make.bitmapData();

    this.bmd.load('crystal');
    this.bmd.addToWorld(this.world.centerX, this.world.centerY, 0.5, 0.5);

    this.input.onDown.add(this.replaceColor, this);


  }

  replaceColor () {

    // http://localhost:3000/Phaser.BitmapData.html#replaceRGB
    // replaceRGB(r1, g1, b1, a1, r2, g2, b2, a2, region) → {Phaser.BitmapData}
    // Replaces all pixels matching one color with another. The color values are given as two sets of RGBA values.
    // An optional region parameter controls if the replacement happens in just a specific area of the BitmapData or the entire thing.
    this.bmd.replaceRGB(this.color1.r, this.color1.g, this.color1.b, this.color1.a, this.color2.r, this.color2.g, this.color2.b, this.color2.a);
    let temp = this.color1;
    this.color1 = this.color2;
    this.color2 = temp;

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RadialGradientState extends BootState {

  bmd: Phaser.BitmapData;
  innterCircle = new Phaser.Circle(200, 200, 100);
  outerCircle = new Phaser.Circle(200, 200, 300);

  create () {

    this.bmd = this.make.bitmapData(800, 600);

    this.bmd.addToWorld();

    this.add.tween(this.innterCircle).to({x: 100, y: 100, radius: 1}, 3000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);

  }

  update () {

    let grd = this.bmd.context.createRadialGradient(this.innterCircle.x, this.innterCircle.y, this.innterCircle.radius, this.outerCircle.x, this.outerCircle.y, this.outerCircle.radius);
    grd.addColorStop(0, '#8ED6FF');
    grd.addColorStop(1, '#003BA2');

    // http://localhost:3000/Phaser.BitmapData.html#cls
    // cls()
    // Clears the BitmapData context using a clearRect.
    this.bmd.cls();
    // http://localhost:3000/Phaser.BitmapData.html#circle
    // circle(x, y, radius, fillStyle) → {Phaser.BitmapData}
    // Draws a filled Circle to the BitmapData at the given x, y coordinates and radius in size.
    this.bmd.circle(this.outerCircle.x, this.outerCircle.y, this.outerCircle.radius, grd as any);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ArcState extends BootState {
  math: typeof Phaser.Math;
  create () {

    let graphics = this.add.graphics(this.world.centerX, this.world.centerY);

    graphics.lineStyle(8, 0xffd900);
    // http://localhost:3000/Phaser.Graphics.html#arc
    // arc(cx, cy, radius, startAngle, endAngle, anticlockwise, segments) → {PIXI.Graphics}
    // The arc method creates an arc/curve (used to create circles, or parts of circles).
    graphics.arc(0, 0, 135, 0, Math.PI / 2, false);

    graphics.lineStyle(0);
    graphics.beginFill(0xff3300);

    graphics.arc(-100, -100, 135, this.math.degToRad(0), Math.PI / 2, true);

    graphics.endFill();

  }

}

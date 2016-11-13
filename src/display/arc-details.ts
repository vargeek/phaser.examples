import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ArcDetailsState extends BootState {
  math: typeof Phaser.Math;
  graphics1: Phaser.Graphics;
  graphics2: Phaser.Graphics;
  info: Phaser.Text;
  angle = {
    min: 0,
    max: 0
  }
  create () {

    this.stage.backgroundColor = '#2d2d2d';

    this.graphics1 = this.add.graphics(0, 0);
    this.graphics2 = this.add.graphics(0, 0);

    let style = {
      font: '24px Arial',
      fill: '#fff',
      aligh: 'center',
    }

    this.info = this.add.text(32, 32, 'Arc', style);

    this.add.text(130, 500, 'Clockwise', style);
    this.add.text(530, 500, 'Anticlockwise', style);

    this.add.tween(this.angle).to({max: 360}, 6000, 'Linear', true, 0, -1, true);

  }

  update () {

    this.info.text = `Arc maxAngle:  ${Math.round(this.angle.max)}`;

    // http://localhost:3000/Phaser.Graphics.html#clear
    // clear() → {PIXI.Graphics}
    // Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
    this.graphics1.clear();
    this.graphics1.lineStyle(2, 0xffffff)
    this.graphics1.beginFill(0x00bff3);
    this.graphics1.arc(200, 300, 160, this.math.degToRad(this.angle.min), this.math.degToRad(this.angle.max), false);
    this.graphics1.endFill();

    this.graphics2.clear();
    this.graphics2.lineStyle(2, 0xffffff)
    this.graphics2.beginFill(0x00bff3);
    this.graphics2.arc(600, 300, 160, this.math.degToRad(this.angle.min), this.math.degToRad(this.angle.max), true);
    this.graphics2.endFill();


  }

}

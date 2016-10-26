import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class InterpolationState extends BootState {
  logo: Phaser.Sprite;
  text: Phaser.Text;
  tween: Phaser.Tween;
  method = 0;

  preload () {

    this.load.image(AssetID.phaser, 'assets/sprites/phaser2.png');

  }

  create () {

    this.logo = this.add.sprite(0, 0, AssetID.phaser);
    this.logo.scale.set(0.5);

    let style = {
      font: '48px Arial',
      fill: '#ff0044',
      align: 'center',
    }

    this.text = this.add.text(this.world.centerX, this.world.centerY, 'Linear Interpolation', style);

    let w = this.game.width - this.logo.width;
    let h = this.game.height - this.logo.height;

    this.tween = this.add.tween(this.logo).to({
      x: [w, w, 0, 0],
      y: [0, h, h, 0]
    }, 4000, Phaser.Easing.Sinusoidal.Out, true, 0, -1);
    this.tween.onLoop.add(this.changeMethod, this);

  }

  changeMethod () {

    this.method++;

    if (this.method === 1) {
      this.tween.interpolation(Phaser.Math.bezierInterpolation);
      this.text.text = 'Bezier Interpolation';
    }
    else if (this.method === 2) {
      this.tween.interpolation(Phaser.Math.catmullRomInterpolation);
      this.text.text = 'CatmullRom Interpolation';
    }
    else if (this.method === 3) {
      this.method = 0;
      this.tween.interpolation(Phaser.Math.linearInterpolation)
      this.text.text = 'Linear Interpolation';
    }

  }

}

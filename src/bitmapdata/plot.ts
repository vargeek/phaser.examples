import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PlotState extends BootState {
  star: Phaser.Sprite;
  texture1: Phaser.RenderTexture;
  data = { res: 6, pow: 10000, angle: 0.1, height: 6 };

  preload () {

    this.load.image('star', 'assets/sprites/chunk.png');

  }

  create () {

    this.star = this.make.sprite(0, 0, 'star');

    this.texture1 = this.add.renderTexture(800, 600, 'texture1');

    this.add.sprite(0, 0, this.texture1);

    this.add.tween(this.data).to({height: 12}, 3000, Phaser.Easing.Sinusoidal.InOut, true, 4000, -1, true);
    this.add.tween(this.data).to({angle: 1.0}, 4000, Phaser.Easing.Linear.None, true, 0, -1, true);

  }

  plot () {

    this.texture1.clear();

    for (let x = -100; x <= 100; x+=2) {
      let v = this.data.res * Math.floor(Math.sqrt(this.data.pow - x * x) / this.data.res);

      for (let y = v; y > -v; y-=this.data.res) {
        let z = 32 * Math.sin(Math.sqrt(x * x + y * y) / this.data.height) + this.data.angle * y;

        let drawX = 400 + Math.floor(x * 3);
        let drawY = 300 + Math.floor(z * 2);

        this.texture1.renderRawXY(this.star, drawX, drawY, false);

      }

    }

  }

  update () {

    this.plot();

  }

}

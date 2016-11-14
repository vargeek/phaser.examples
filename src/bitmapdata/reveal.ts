import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RevealState extends BootState {
  bmd: Phaser.BitmapData;
  p = 1;
  pixels:[number, number][] = [];
  temp:[number, number][] = [];

  preload () {

    this.load.image('pic1', 'assets/pics/cougar-face_of_nature.png');
    this.load.image('pic2', 'assets/pics/cougar_sanity_train.png');
    this.load.image('pic3', 'assets/pics/questar.png');
    this.load.image('pic4', 'assets/pics/slayer-sorry_im_the_beast.png');

  }

  create () {

    this.stage.smoothed = false;

    this.bmd = this.make.bitmapData(320, 256);

    this.bmd.addToWorld(this.world.centerX, this.world.centerY, 0.5, 0.5, 2, 2);
    for (let y = 0; y < 256; y++) {
      for (let x = 0; x < 320; x++) {
        this.pixels.push([x, y]);
      }
    }
    this.temp = this.pixels.slice(0);

    Phaser.ArrayUtils.shuffle(this.temp);

  }

  update () {

    for (let index = 0; index < 128; index++) {

      if (this.temp.length > 0) {

        let xy = this.temp.pop();
        this.bmd.copy(`pic${this.p}`, xy[0], xy[1], 1, 1);

      }
      else {

        this.temp = this.pixels.slice(0);
        Phaser.ArrayUtils.shuffle(this.temp);
        this.p++;

        if (this.p === 5) {
          this.p = 1;
        }

      }
    }

  }

}

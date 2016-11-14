import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FloodFillState extends BootState {
  bmd: Phaser.BitmapData;
  area: Phaser.Rectangle;
  dropTime = 0;


  preload () {

    this.load.image('pic', 'assets/pics/hotshot-chaos_in_tokyo.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    this.bmd = this.make.bitmapData()
    this.bmd.load('pic').cls();

    this.bmd.addToWorld(this.world.centerX, this.world.centerY, 0.5, 0.5, 2, 2);

    this.stage.smoothed = false;

    this.area = new Phaser.Rectangle(0, this.bmd.height, this.bmd.width, 1);

    this.dropTime = this.time.now + 250;

  }

  update () {

    if (this.area.y > 0 && this.time.now > this.dropTime) {
      for (let y = 0; y < this.area.y; y++) {
        this.bmd.copyRect('pic', this.area, 0, y);
      }
      this.area.y--;
      this.dropTime = this.time.now + 25;
    }

  }

}

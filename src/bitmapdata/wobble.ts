import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class WobbleState extends BootState {
  math: typeof Phaser.Math;
  stars: Phaser.Sprite[] = [];
  waveform: any[];

  xl: number;
  yl: number;
  cx = 0;
  cy = 0;

  preload () {

    this.load.image('pic', 'assets/pics/jim_sachs_time_crystal.png');

  }

  create () {

    this.stage.backgroundColor = '#05f';

    let sprite = {
      x: 0,
      y: 1
    }

    let tween = this.add.tween(sprite).to({x: 132, y: 16}, 2000, Phaser.Easing.Elastic.InOut, true, 0, -1, true);
    this.waveform = tween.generateData(60);

    this.xl = this.waveform.length - 1;
    this.yl = this.waveform.length - 1;

    let sprites = this.add.spriteBatch(this.world);

    let picWidth = this.cache.getImage('pic').width;
    let picHeight = this.cache.getImage('pic').height;

    let ys = 4;

    for (let y = 0; y < Math.floor(picHeight/ys); y++) {
      let star = this.make.sprite(300, 100 + (y * ys), 'pic');
      star.crop(new Phaser.Rectangle(0, y * ys, picWidth, ys), true);

      star.data.ox = star.x;
      star.data.oy = star.y;

      star.data.cx = this.math.wrap(y, 0, this.xl);
      star.data.cy = y;

      star.anchor.set(0.5);
      sprites.addChild(star);
      this.stars.push(star);
    }

  }

  update () {

    for (let index = 0; index < this.stars.length; index++) {
      this.stars[index].x = this.stars[index].data.ox + this.waveform[this.stars[index].data.cx].x;
      this.stars[index].y = this.stars[index].data.oy + this.waveform[this.stars[index].data.cy].y;

      this.stars[index].data.cx++;
      if (this.stars[index].data.cx > this.xl) {
        this.stars[index].data.cx = 0;
      }

      this.stars[index].data.cy++;
      if (this.stars[index].data.cy > this.yl) {
        this.stars[index].data.cy = 0;
      }

    }

  }

}

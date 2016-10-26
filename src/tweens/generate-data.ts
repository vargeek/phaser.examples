import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GenerateDataState extends BootState {
  data: any[];
  bugs: Phaser.Group;
  pos:any[] = [];
  index = 0;

  preload () {

    this.load.image(AssetID.wasp, 'assets/sprites/wasp.png');
    this.load.image(AssetID.sky, 'assets/skies/cavern1.png');

  }

  create () {

    this.add.image(0, 0, AssetID.sky);

    let tweenData = {
      x: 0,
      y: 0
    }

    // or game.add.tween(...), game.tweens.create(...)
    let tween = this.make.tween(tweenData).to({x: 100, y: 400}, 2000, Phaser.Easing.Sinusoidal.InOut);

    tween.yoyo(true);

    //  Generates the tween data at a rate of 60 frames per second.
    //  This is useful if you've got a lot of objects all using the same tween, just at different coordinates.
    //  It saves having to calculate the same tween across the properties of all objects involved in the motion.
    //  Instead you can pre-calculate it in advance and trade that in for a bit of memory to store it in an array.
    // generateData(frameRate, data) → {array}
    this.data = tween.generateData(60);

    this.bugs = this.add.group();

    this.pos.push(new Phaser.Point(32, 0));
    this.pos.push(new Phaser.Point(300, 100));
    this.pos.push(new Phaser.Point(600, 70));

    this.bugs.create(this.pos[0].x, this.pos[0].y, AssetID.wasp);
    this.bugs.create(this.pos[1].x, this.pos[1].y, AssetID.wasp);
    this.bugs.create(this.pos[2].x, this.pos[2].y, AssetID.wasp);

  }

  update () {

    (this.bugs.getAt(0) as any).x = this.pos[0].x + this.data[this.index].x;
    (this.bugs.getAt(0) as any).y = this.pos[0].y + this.data[this.index].y;

    (this.bugs.getAt(1) as any).x = this.pos[1].x + this.data[this.index].x;
    (this.bugs.getAt(1) as any).y = this.pos[1].y + this.data[this.index].y;

    (this.bugs.getAt(2) as any).x = this.pos[2].x + this.data[this.index].x;
    (this.bugs.getAt(2) as any).y = this.pos[2].y + this.data[this.index].y;

    this.index++;

    if (this.index === this.data.length) {
      this.index = 0;
    }

  }

}

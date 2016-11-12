import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LineMidpointState extends BootState {
  handle1: Phaser.Sprite;
  handle2: Phaser.Sprite;

  line: Phaser.Line;
  midpoint: Phaser.Point;

  preload () {

    this.load.spritesheet('balls', 'assets/sprites/balls.png', 17, 17);

  }

  create () {

    this.stage.backgroundColor = '#124184';

    this.handle1 = this.add.sprite(100, 200, 'balls', 0);
    this.handle1.anchor.set(0.5);
    this.handle1.inputEnabled = true;
    this.handle1.input.enableDrag(true);

    this.handle2 = this.add.sprite(400, 300, 'balls', 0);
    this.handle2.anchor.set(0.5);
    this.handle2.inputEnabled = true;
    this.handle2.input.enableDrag(true)

    this.line = new Phaser.Line(this.handle1.x, this.handle1.y, this.handle2.x, this.handle2.y);

    this.midpoint = new Phaser.Point();

  }

  update () {

    this.line.fromSprite(this.handle1, this.handle2);
    // http://localhost:3000/Phaser.Line.html#midPoint
    // midPoint(out) → {Phaser.Point}
    // out{Phaser.Point?}     A Phaser.Point object into which the result will be populated. If not given a new Point object is created.
    // Returns a Point object where the x and y values correspond to the center (or midpoint) of the Line segment.
    this.line.midPoint(this.midpoint);

  }

  render () {


    this.game.debug.geom(this.line);
    this.game.debug.geom(this.midpoint, '#ffff00');
    this.game.debug.lineInfo(this.line, 32, 32);

    this.game.debug.text("Drag the handles", 32, 550);

  }

}

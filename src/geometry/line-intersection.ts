import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LineIntersectionState extends BootState {
  handle1: Phaser.Sprite;
  handle2: Phaser.Sprite;
  handle3: Phaser.Sprite;
  handle4: Phaser.Sprite;
  line1: Phaser.Line;
  line2: Phaser.Line;
  intersection: Phaser.Point;
  color = 'rgb(255,255,255)';

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

    this.line1 = new Phaser.Line(this.handle1.x, this.handle1.y, this.handle2.x, this.handle2.y);

    this.handle3 = this.add.sprite(200, 400, 'balls', 1);
    this.handle3.anchor.set(0.5);
    this.handle3.inputEnabled = true;
    this.handle3.input.enableDrag(true);

    this.handle4 = this.add.sprite(500, 500, 'balls', 1);
    this.handle4.anchor.set(0.5);
    this.handle4.inputEnabled = true;
    this.handle4.input.enableDrag(true)

    this.line2 = new Phaser.Line(this.handle3.x, this.handle3.y, this.handle4.x, this.handle4.y);

  }

  update () {

    this.line1.fromSprite(this.handle1, this.handle2, false);
    this.line2.fromSprite(this.handle3, this.handle4, false);

    // http://localhost:3000/Phaser.Line.html#intersects
    // intersects(line, asSegment, result) → {Phaser.Point}
    // Checks for intersection between this line and another Line.
    // If asSegment is true it will check for segment intersection. If asSegment is false it will check for line intersection.
    // Returns the intersection segment of AB and EF as a Point, or null if there is no intersection.
    this.intersection = this.line1.intersects(this.line2, true);

    if (this.intersection) {
      this.color = 'rgb(0,255,0)';
    }
    else {
      this.color = 'rgb(255,255,255)';
    }

  }

  render () {

    this.game.debug.geom(this.line1, this.color);
    this.game.debug.geom(this.line2, this.color);

    this.game.debug.lineInfo(this.line1, 32, 32);
    this.game.debug.lineInfo(this.line2, 32, 100);

    if (this.intersection) {

      this.game.debug.geom(this.intersection, 'rgb(255,0,255)');

    }

    this.game.debug.text('Drag the handles', 32, 550);

  }

}

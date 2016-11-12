import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LineReflectionState extends BootState {
  handle1: Phaser.Sprite;
  handle2: Phaser.Sprite;
  handle3: Phaser.Sprite;
  handle4: Phaser.Sprite;
  line1: Phaser.Line;
  line2: Phaser.Line;

  arrow: Phaser.Sprite;
  normal: Phaser.Line;
  reflection: Phaser.Line;

  color = 'rgb(255,255,255)';
  point: Phaser.Point;

  preload () {

    this.load.spritesheet('balls', 'assets/sprites/balls.png', 17, 17);
    this.load.image('arrow', 'assets/sprites/asteroids_ship.png');

  }

  create () {

    this.stage.backgroundColor = '#124184';

    this.handle1 = this.add.sprite(235, 220, 'balls', 0);
    this.handle1.anchor.set(0.5);
    this.handle1.inputEnabled = true;
    this.handle1.input.enableDrag(true);

    this.handle2 = this.add.sprite(337, 437, 'balls', 0);
    this.handle2.anchor.set(0.5);
    this.handle2.inputEnabled = true;
    this.handle2.input.enableDrag(true)

    this.handle3 = this.add.sprite(160, 300, 'balls', 1);
    this.handle3.anchor.set(0.5);
    this.handle3.inputEnabled = true;
    this.handle3.input.enableDrag(true);

    this.handle4 = this.add.sprite(450, 350, 'balls', 1);
    this.handle4.anchor.set(0.5);
    this.handle4.inputEnabled = true;
    this.handle4.input.enableDrag(true)

    this.line1 = new Phaser.Line(this.handle1.x, this.handle1.y, this.handle2.x, this.handle2.y);
    this.line2 = new Phaser.Line(this.handle3.x, this.handle3.y, this.handle4.x, this.handle4.y);

    this.arrow = this.add.sprite(0, 0, 'arrow');
    this.arrow.anchor.set(0.5);

    this.normal = new Phaser.Line(0, 0, 0, 0);
    this.reflection = new Phaser.Line(0, 0, 0, 0);

  }

  update () {

    this.line1.fromSprite(this.handle1, this.handle2, false);
    this.line2.fromSprite(this.handle3, this.handle4, false);

    this.point = this.line1.intersects(this.line2, true);

    if (this.point) {

      this.color = 'rgb(0,255,0)';

      // 法线
      // http://localhost:3000/Phaser.Line.html#normalAngle
      // Gets the angle in radians of the normal of this line (line.angle - 90 degrees.)
      // http://localhost:3000/Phaser.Line.html#fromAngle
      // fromAngle(x, y, angle, length) → {Phaser.Line}
      // Sets this line to start at the given x and y coordinates and for the segment to extend at angle for the given length.
      this.normal.fromAngle(this.point.x, this.point.y, this.line2.normalAngle, 100);

      // http://localhost:3000/Phaser.Line.html#reflect
      // reflect(line) → {number}
      // Returns the reflected angle between two lines.
      // This is the outgoing angle based on the angle of this line and the normalAngle of the given line.
      let outgoing = this.line1.reflect(this.line2);
      this.reflection.fromAngle(this.point.x, this.point.y, outgoing, 200);

      this.arrow.x = this.reflection.end.x;
      this.arrow.y = this.reflection.end.y;
      // http://localhost:3000/Phaser.Line.html#angle
      // <readonly> angle :number
      // Gets the angle of the line in radians.
      this.arrow.rotation = this.reflection.angle;
      this.arrow.visible = true;
    }
    else {
      this.arrow.visible = false;
      this.color = 'rgb(255,255,255)';
    }

  }

  render () {

    this.game.debug.geom(this.line1, '#fff');
    this.game.debug.geom(this.line2, '#0f0');

    this.game.debug.lineInfo(this.line1, 32, 32);
    this.game.debug.lineInfo(this.line2, 32, 100);

    if (this.point) {

      this.game.debug.geom(this.normal, '#fff');
      this.game.debug.geom(this.reflection, '#0f0');
      this.game.debug.geom(this.point, 'rgb(255,0,255)');

    }

    this.game.debug.text('Drag the handles', 32, 550);


  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LineState extends BootState {
  handle1: Phaser.Sprite;
  handle2: Phaser.Sprite;

  line1: Phaser.Line;

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

    // http://localhost:3000/Phaser.Line.html
    // new Line(x1, y1, x2, y2)
    // Creates a new Line object with a start and an end point.
    this.line1 = new Phaser.Line(this.handle1.x, this.handle1.y, this.handle2.x, this.handle2.y);

  }

  update () {

    // http://localhost:3000/Phaser.Line.html#fromSprite
    // fromSprite(startSprite, endSprite, useCenter) → {Phaser.Line}
    // useCenter{boolean=false}     If true it will use startSprite.center.x, if false startSprite.x. Note that Sprites don't have a center property by default, so only enable if you've over-ridden your Sprite with a custom class.

    // Sets the line to match the x/y coordinates of the two given sprites.
    // Can optionally be calculated from their center coordinates.
    this.line1.fromSprite(this.handle1, this.handle2, false);

  }

  render () {

    this.game.debug.geom(this.line1);
    this.game.debug.lineInfo(this.line1, 32, 32);

    this.game.debug.text('Drag the handles', 32, 550);

  }



}

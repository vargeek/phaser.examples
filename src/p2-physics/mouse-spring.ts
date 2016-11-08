import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MouseSpringState extends BootState {
  cow: Phaser.Sprite;
  line: Phaser.Line;
  mouseBody: Phaser.Sprite;
  mouseSpring: Phaser.Physics.P2.Spring;
  drawLine = false;

  preload () {

    this.load.image('cursor', 'assets/sprites/enemy-bullet.png');

  }

  create () {

    this.stage.backgroundColor = '#304871';

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.gravity.y = 100;
    this.physics.p2.restitution = 0.8;

    //  Create an object to pick-up

    this.cow = this.add.sprite(200, 200, 'cursor');
    // game.physics.p2.enable(cow, false);
    this.physics.p2.enable(this.cow, true);
    this.cow.body.setCircle(20);

    //  Create our Mouse Cursor / Spring

    this.mouseBody = this.add.sprite(100, 100, 'cursor');
    this.physics.p2.enable(this.mouseBody, true);
    this.mouseBody.body.static = true;
    this.mouseBody.body.setCircle(10);
    // http://schteppe.github.io/p2.js/docs/classes/Shape.html
    // sensor Boolean
    // Set to true if you want this shape to be a sensor. A sensor does not generate contacts, but it still reports contact events. This is good if you want to know if a shape is overlapping another shape, without them generating contacts.
    this.mouseBody.body.data.shapes[0].sensor = true;

    //  Debug spring line

    this.line = new Phaser.Line(this.cow.x, this.cow.y, this.mouseBody.x, this.mouseBody.y);

    this.input.onDown.add(this.click, this);
    this.input.onUp.add(this.release, this);
    this.input.addMoveCallback(this.move, this);

  }

  click (pointer: Phaser.Pointer) {

    let bodies = this.physics.p2.hitTest(pointer.position, [this.cow.body]);

    if (bodies.length) {
      // http://localhost:3000/Phaser.Physics.P2.html#createSpring
      // createSpring(bodyA, bodyB, restLength, stiffness, damping, worldA, worldB, localA, localB) → {Phaser.Physics.P2.Spring}
      // restLength{number=1}   Rest length of the spring. A number > 0.
      // worldA{[number,number]}  Where to hook the spring to body A in world coordinates. This value is an array by 2 elements, x and y, i.e: [32, 32].
      // localA{[number,number]}  Where to hook the spring to body A in local body coordinates. This value is an array by 2 elements, x and y, i.e: [32, 32].
      // Creates a linear spring, connecting two bodies. A spring can have a resting length, a stiffness and damping.
      this.mouseSpring = this.physics.p2.createSpring(this.mouseBody, bodies[0], 0, 30, 1);
      this.line.setTo(this.cow.x, this.cow.y, this.mouseBody.x, this.mouseBody.y);
      this.drawLine = true;
    }


  }

  release () {

    // http://localhost:3000/Phaser.Physics.P2.html#removeSpring
    // removeSpring(spring) → {Phaser.Physics.P2.Spring}
    // Removes a Spring from the world.
    this.physics.p2.removeSpring(this.mouseSpring);
    this.drawLine = false;

  }

  move (pointer: Phaser.Pointer, x: number, y: number, isDown: boolean) {

    this.mouseBody.body.x = x;
    this.mouseBody.body.y = y;
    this.line.setTo(this.cow.x, this.cow.y, this.mouseBody.x, this.mouseBody.y);

  }

  preRender () {

    if (this.line) {
      this.line.setTo(this.cow.x, this.cow.y, this.mouseBody.x, this.mouseBody.y);
    }

  }

  render () {

    if (this.drawLine) {
      this.game.debug.geom(this.line);
    }

  }

}

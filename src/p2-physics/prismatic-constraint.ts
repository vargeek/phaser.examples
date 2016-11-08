import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.P2.Body;
export class PrismaticConstraintState extends BootState {

  sprite: Phaser.Sprite;
  vu1: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('atari', 'assets/sprites/atari800xl.png');
    this.load.image('lift', 'assets/sprites/flectrum.png');
    this.load.image('sky', 'assets/skies/cavern2.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.sprite = this.add.sprite(200, 400, 'atari');

    this.vu1 = this.add.sprite(400, 400, 'lift');

    this.physics.p2.enable([this.sprite, this.vu1]);

    (this.sprite.body as Body).fixedRotation = true;
    (this.vu1.body as Body).fixedRotation = true;

    // See http://www.iforce2d.net/b2dtut/joints-prismatic
    // The prismatic joint is probably more commonly known as a slider joint.
    // The two joined bodies have their rotation held fixed relative to each other, and they can only move along a specified axis.
    // Prismatic joints can be given limits so that the bodies can only move along the axis within a specific range.
    // They can also be given a motor so that the bodies will try to move at a given speed, with a given force.
    // Common uses for prismatic joints include: elevators, moving platforms, sliding doors, pistons
    // localAxis1: the axis (line) of movement (relative to bodyA)
    // the axis itself is not related to any particular point in the body, it only specifies a direction for the sliding movement.
    // since this only specifies a direction for sliding, the negative of this vector is an equivalent direction
    // localAnchorA: a point in body A to keep on the axis line
    // localAnchorB: a point in body B to keep on the axis line

    // http://localhost:3000/Phaser.Physics.P2.html#createPrismaticConstraint
    // createPrismaticConstraint(bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce) → {Phaser.Physics.P2.PrismaticConstraint}
    // lockRotation{boolean=true}     If set to false, bodyB will be free to rotate around its anchor point.
    // anchorA{[number,number]}       Body A's anchor point, defined in its own local frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
    // axis{number,number}            An axis, defined in body A frame, that body B's anchor point may slide along. The value is an array with 2 elements matching x and y, i.e: [32, 32].

    // Constraint that only allows bodies to move along a line, relative to each other.
    let constraint = this.physics.p2.createPrismaticConstraint(this.sprite, this.vu1, false, [150, 0], [-15, 0], new Float32Array([0, 1]));

    let text = this.add.text(20, 20, 'move with arrow keys', { fill: '#ffffff' });

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.sprite.body.setZeroVelocity();
    this.vu1.body.setZeroVelocity();

    if (this.cursors.left.isDown)
    {
    	this.sprite.body.moveLeft(200);
    }
    else if (this.cursors.right.isDown)
    {
    	this.sprite.body.moveRight(200);
    }

    if (this.cursors.up.isDown)
    {
        this.vu1.body.moveUp(200);
    }
    else if (this.cursors.down.isDown)
    {
        this.vu1.body.moveDown(200);
    }

  }

}

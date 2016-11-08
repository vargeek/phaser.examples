import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DistanceConstraintState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('atari', 'assets/sprites/cokecan.png');
    this.load.image('ball', 'assets/sprites/red_ball.png');
    this.load.image('sky', 'assets/skies/cavern2.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.sprite1 = this.add.sprite(400, 300, 'ball');
    this.sprite2 = this.add.sprite(400, 400, 'atari');

    this.physics.p2.enable([this.sprite1, this.sprite2]);

    // http://localhost:3000/Phaser.Physics.P2.html#createDistanceConstraint
    // createDistanceConstraint(bodyA, bodyB, distance, localAnchorA, localAnchorB, maxForce) → {Phaser.Physics.P2.DistanceConstraint}
    // Creates a constraint that tries to keep the distance between two bodies constant.
    let constraint = this.physics.p2.createDistanceConstraint(this.sprite1, this.sprite2, 150);

    let text = this.add.text(20, 20, 'move with arrow keys', {fill: '#fff'});

    this.cursors = this.input.keyboard.createCursorKeys();


  }

  update () {

	this.sprite1.body.setZeroVelocity();

    if (this.cursors.left.isDown)
    {
    	this.sprite1.body.moveLeft(400);
    }
    else if (this.cursors.right.isDown)
    {
    	this.sprite1.body.moveRight(400);
    }

    if (this.cursors.up.isDown)
    {
        this.sprite1.body.moveUp(400);
    }
    else if (this.cursors.down.isDown)
    {
        this.sprite1.body.moveDown(400);
    }

  }

}

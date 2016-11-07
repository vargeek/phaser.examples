import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BasicMovementState extends BootState {
  sprite: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  text: Phaser.Text;

  preload () {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
	  this.load.image('sky', 'assets/skies/sunset.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.physics.startSystem(Phaser.Physics.P2JS);

    (this.physics.p2 as any).defaultRestitution = 0.8

    this.sprite = this.add.sprite(200, 200, 'atari');

    //  Enable if for physics. This creates a default rectangular body.
	  this.physics.p2.enable(this.sprite);

    // http://localhost:3000/Phaser.Physics.P2.Body.html#setZeroDamping
    // setZeroDamping()
    // Sets the Body damping and angularDamping to zero.
	  this.sprite.body.setZeroDamping();
    // http://localhost:3000/Phaser.Physics.P2.Body.html#damping
    // damping :number
    // Damping is specified as a value between 0 and 1, which is the proportion of velocity lost per second. The linear damping acting on the body in the velocity direction.

    // http://localhost:3000/Phaser.Physics.P2.Body.html#angularDamping
    // angularDamping :number
    // Damping is specified as a value between 0 and 1, which is the proportion of velocity lost per second. The angular damping acting acting on the body.


    // http://localhost:3000/Phaser.Physics.P2.Body.html#fixedRotation
	  this.sprite.body.fixedRotation = true;

    this.text = this.add.text(20, 20, 'move with arrow keys', { fill: '#ffffff' });

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    // http://localhost:3000/Phaser.Physics.P2.Body.html#setZeroVelocity
    // setZeroVelocity()
    // If this Body is dynamic then this will zero its velocity on both axis.
    this.sprite.body.setZeroVelocity();

    if (this.cursors.left.isDown)
    {
      // http://localhost:3000/Phaser.Physics.P2.Body.html#moveLeft
      // moveLeft(speed)
      // If this Body is dynamic then this will move it to the left by setting its x velocity to the given speed.
      // The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
    	this.sprite.body.moveLeft(400);
    }
    else if (this.cursors.right.isDown)
    {
      // http://localhost:3000/Phaser.Physics.P2.Body.html#moveRight
    	this.sprite.body.moveRight(400);
    }

    if (this.cursors.up.isDown)
    {
      // http://localhost:3000/Phaser.Physics.P2.Body.html#moveUp
    	this.sprite.body.moveUp(400);
    }
    else if (this.cursors.down.isDown)
    {
      // http://localhost:3000/Phaser.Physics.P2.Body.html#moveDown
    	this.sprite.body.moveDown(400);
    }

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';


type Body = Phaser.Physics.P2.Body;
export class KinematicBodyState extends BootState {
  kinematic1: Phaser.Sprite;
  kinematic2: Phaser.Sprite;
  sprite: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('wizball', 'assets/sprites/wizball.png');
    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.image('sky', 'assets/skies/sunset.png');

  }

  create () {

    // this.world.setBounds(0, 0, 1600, 1200);

    this.add.image(0, 0, 'sky');

    //	Enable p2 physics
    this.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    this.physics.p2.restitution = 0.8;

    //  Add a sprite
	  this.sprite = this.add.sprite(400, 300, 'wizball');
    this.physics.p2.enable(this.sprite);
    this.sprite.body.setCircle(44);

    //  Create two kinematic objects
    this.kinematic1 = this.add.sprite(200, 200, 'atari');
    this.kinematic2 = this.add.sprite(500, 500, 'atari');

    //  Enable if for physics. This creates a default rectangular body.
    this.physics.p2.enable( [ this.kinematic1, this.kinematic2 ]);

    //  Make kinematic - Kinematic means that the body will not be effected by
    //  physics such as gravity and collisions, but can still move and
    //  will fire collision events
    // http://localhost:3000/Phaser.Physics.P2.Body.html#kinematic
    // kinematic :boolean
    // Returns true if the Body is kinematic. Setting Body.kinematic to 'false' will make it static.
    this.kinematic1.body.kinematic = true;
	  this.kinematic2.body.kinematic = true;

    //  Give the kinematic objects some velocity
    this.kinematic1.body.velocity.x = 10;
    this.kinematic2.body.velocity.x = -10;

    let text = this.add.text(20, 20, 'move with arrow keys', { fill: '#ffffff' });

    this.cursors = this.input.keyboard.createCursorKeys();

    //  Change the directions of the kinematic objects after 20 seconds
    this.time.events.loop(Phaser.Timer.SECOND * 20, this.switchDirections, this);

  }

  switchDirections () {

    // http://localhost:3000/Phaser.Physics.P2.html#mpxi
    // mpxi(v) → {number}
    // Convert p2 physics value (meters) to pixel scale and inverses it.
    // By default Phaser uses a scale of 20px per meter.
    // If you need to modify this you can over-ride these functions via the Physics Configuration object.
    this.kinematic1.body.velocity.x = -this.physics.p2.mpxi(this.kinematic1.body.velocity.x);
    this.kinematic2.body.velocity.x = -this.physics.p2.mpxi(this.kinematic2.body.velocity.x);

  }

  update () {

    if (this.cursors.left.isDown)
    {
    	this.sprite.body.rotateLeft(80);
    }
    else if (this.cursors.right.isDown)
    {
    	this.sprite.body.rotateRight(80);
    }
    else
    {
        this.sprite.body.setZeroRotation();
    }

    if (this.cursors.up.isDown)
    {
    	this.sprite.body.thrust(400);
    }
    else if (this.cursors.down.isDown)
    {
    	this.sprite.body.reverse(400);
    }


  }

}

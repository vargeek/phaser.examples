import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BounceKnockState extends BootState {
  image: Phaser.Image;
  cursors: Phaser.CursorKeys;
  ball: Phaser.Sprite;
  knocker: Phaser.Sprite;

  preload () {

    this.load.image('dude', 'assets/sprites/phaser-dude.png');
    this.load.image('ball', 'assets/sprites/pangball.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.cursors = this.input.keyboard.createCursorKeys();

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    this.ball = this.add.sprite(400, 200, 'ball');

    this.knocker = this.add.sprite(400, 200, 'dude');

    this.physics.enable([this.knocker,this.ball], Phaser.Physics.ARCADE);

    this.knocker.body.immovable = true;

    //  This gets it moving
    this.ball.body.velocity.setTo(200, 200);

	// http://localhost:3000/Phaser.Physics.Arcade.Body.html#collideWorldBounds
	// collideWorldBounds :boolean
	// A Body can be set to collide against the World bounds automatically and rebound back into the World if this is set to true. Otherwise it will leave the World. Should the Body collide with the World bounds?
    this.ball.body.collideWorldBounds = true;

    //  This sets the image bounce energy for the horizontal
    //  and vertical vectors (as an x,y point). "1" is 100% energy return
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#bounce
    // bounce :Phaser.Point
    // The elasticity of the Body when colliding. bounce.x/y = 1 means full rebound, bounce.x/y = 0.5 means 50% rebound velocity.
    this.ball.body.bounce.setTo(1, 1);


  }

  update () {

    //  Enable physics between the knocker and the ball
    this.physics.arcade.collide(this.knocker, this.ball);

    if (this.cursors.up.isDown)
    {
        this.knocker.body.velocity.y = -300;
    }
    else if (this.cursors.down.isDown)
    {
        this.knocker.body.velocity.y =  300;
    }
    else if (this.cursors.left.isDown)
    {
        this.knocker.body.velocity.x = -300;
    }
    else if (this.cursors.right.isDown)
    {
        this.knocker.body.velocity.x = 300;
    }
    else
    {
        this.knocker.body.velocity.setTo(0, 0);
    }


  }

  render () {

    this.game.debug.spriteInfo(this.ball, 32, 32);

  }

}

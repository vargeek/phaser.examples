import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class StaticBodyState extends BootState {
  static1: Phaser.Sprite;
  static2: Phaser.Sprite;
  sprite: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('wizball', 'assets/sprites/wizball.png');
    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.image('sky', 'assets/skies/sunset.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    //	Enable p2 physics
    this.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    this.physics.p2.restitution = 0.8;

    //  Add a sprite
	  this.sprite = this.add.sprite(400, 300, 'wizball');
    this.physics.p2.enable(this.sprite);
    this.sprite.body.setCircle(44);

    //  Create two static objects
    this.static1 = this.add.sprite(200, 200, 'atari');
    this.static2 = this.add.sprite(500, 500, 'atari');

    //  Enable if for physics. This creates a default rectangular body.
    this.physics.p2.enable( [ this.static1, this.static2 ]);

    //  Make static
    this.static1.body.static = true;
	  this.static2.body.static = true;

    let text = this.add.text(20, 20, 'move with arrow keys', { fill: '#ffffff' });

    this.cursors = this.input.keyboard.createCursorKeys();

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

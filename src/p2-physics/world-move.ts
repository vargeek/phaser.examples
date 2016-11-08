import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class WorldMoveState extends BootState {
  ship: Phaser.Sprite;
  starfield: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('stars', 'assets/misc/starfield.jpg');
    this.load.spritesheet('ship', 'assets/sprites/humstar.png', 32, 32);
    this.load.image('ball', 'assets/sprites/shinyball.png');

  }

  create () {

    this.world.setBounds(0, 0, 1600, 1200);

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.restitution = 0.9;

    this.starfield = this.add.tileSprite(0, 0, 800, 600, 'stars');
    this.starfield.fixedToCamera = true;

    let balls = this.add.group();
    balls.enableBody = true;
    balls.physicsBodyType = Phaser.Physics.P2JS;

    for (var i = 0; i < 50; i++)
    {
        var ball = balls.create(this.world.randomX, this.world.randomY, 'ball');
        ball.body.setCircle(16);
    }

	  this.ship = this.add.sprite(200, 200, 'ship');
    this.ship.scale.set(2);
    this.ship.smoothed = false;
    this.ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
    this.ship.play('fly');

    //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
	  this.physics.p2.enable(this.ship, false);
    this.ship.body.setCircle(28);

	  this.camera.follow(this.ship);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.ship.body.setZeroVelocity();

    if (this.cursors.left.isDown)
    {
		  this.ship.body.moveLeft(200);
    }
    else if (this.cursors.right.isDown)
    {
		  this.ship.body.moveRight(200);
    }

    if (this.cursors.up.isDown)
    {
    	this.ship.body.moveUp(200);
    }
    else if (this.cursors.down.isDown)
    {
      this.ship.body.moveDown(200);
    }

    if (!this.camera.atLimit.x)
    {
      this.starfield.tilePosition.x -= (this.ship.body.velocity.x * this.time.physicsElapsed);
    }

    if (!this.camera.atLimit.y)
    {
      this.starfield.tilePosition.y -= (this.ship.body.velocity.y * this.time.physicsElapsed);
    }

  }

}

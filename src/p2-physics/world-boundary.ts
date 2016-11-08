import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class WorldBoundaryState extends BootState {
  ship: Phaser.Sprite;
  starfield: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('stars', 'assets/misc/starfield.jpg');
    this.load.spritesheet('ship', 'assets/sprites/humstar.png', 32, 32);

  }

  create () {

    //  Our world size is 1600 x 1200 pixels
    this.world.setBounds(0, 0, 1600, 1200);

    //  Enable P2 and it will use the updated world size
    this.physics.startSystem(Phaser.Physics.P2JS);

    this.starfield = this.add.tileSprite(0, 0, 800, 600, 'stars');
    this.starfield.fixedToCamera = true;

	  this.ship = this.add.sprite(200, 200, 'ship');
    this.ship.scale.set(2);
    this.ship.smoothed = false;
    this.ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
    this.ship.play('fly');

    //  Create our physics body. The 'true' parameter enables visual debugging.
	  this.physics.p2.enable(this.ship, true);

    //  Alternatively create a circle for the ship instead (which more accurately matches its size)
    // ship.body.setCircle(28);

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
        this.starfield.tilePosition.x -= ((this.ship.body.velocity.x) * this.time.physicsElapsed);
    }

    if (!this.camera.atLimit.y)
    {
        this.starfield.tilePosition.y -= ((this.ship.body.velocity.y) * this.time.physicsElapsed);
    }

  }

}

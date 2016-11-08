import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MovementConstraintState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('ball', 'assets/sprites/blue_ball.png');
    this.load.image('background', 'assets/games/starstruck/background2.png');
    this.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);

  }

  create () {

    let bg = this.add.tileSprite(0, 0, 800, 600, 'background');

	  //	Enable p2 physics
	  this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.gravity.y = 200;

    //  Add 2 sprites which we'll join with a spring

    this.player = this.add.sprite(200, 400, 'dude');
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('turn', [4], 20, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    //  Enable if for physics. This creates a default rectangular body.
    this.physics.p2.enable(this.player);

    this.player.body.fixedRotation = true;

	  this.sprite2 = this.add.sprite(400, 400, 'ball');

	  this.physics.p2.enable(this.sprite2);
    this.sprite2.body.fixedRotation = true;

    //  Lock the two bodies together. The [0, 50] sets the distance apart (y: 80)
    var constraint = this.physics.p2.createLockConstraint(this.sprite2, this.player, [0, 50], 80);

    this.cursors = this.input.keyboard.createCursorKeys();


  }


  update () {

	  this.sprite2.body.setZeroVelocity();

    if (this.cursors.left.isDown)
    {
    	this.sprite2.body.moveLeft(400);
    }
    else if (this.cursors.right.isDown)
    {
    	this.sprite2.body.moveRight(400);
    }

    if (this.cursors.up.isDown)
    {
        this.sprite2.body.moveUp(400);
    }
    else if (this.cursors.down.isDown)
    {
        this.sprite2.body.moveDown(400);
    }


  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SpringsState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.image('ball', 'assets/sprites/red_ball.png');
    this.load.image('sky', 'assets/skies/cavern2.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.sprite1 = this.add.sprite(400, 300, 'ball');
	  this.sprite2 = this.add.sprite(400, 400, 'atari');

	  this.physics.p2.enable([this.sprite1, this.sprite2]);

    this.sprite1.body.collideWorldBounds = true;
    this.sprite2.body.collideWorldBounds = true;

    var spring = this.physics.p2.createSpring(this.sprite1, this.sprite2, 20, 10, 1);

    let text = this.add.text(20, 20, 'move with arrow keys', {
      fill: '#fff'
    });

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

  }

}

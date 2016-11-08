import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class KillAndReviveState extends BootState {
  sprite: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.image('sky', 'assets/skies/sunset.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.physics.p2.restitution = 0.8;

    this.sprite = this.add.sprite(200, 200, 'atari');

    //  Enable if for physics. This creates a default rectangular body.
	  this.physics.p2.enable(this.sprite);

    //  Modify a few body properties
	  this.sprite.body.setZeroDamping();
	  this.sprite.body.fixedRotation = true;

    let text = this.add.text(20, 20, 'move with arrow keys, click to kill and reset', { fill: '#ffffff' });

    this.input.onDown.add(this.deathToggle, this);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  deathToggle (pointer: Phaser.Pointer) {

    if (this.sprite.alive) {
      this.sprite.kill();
    }
    else {
      this.sprite.reset(pointer.x, pointer.y);
    }

  }

  update () {

	  this.sprite.body.setZeroVelocity();

    if (this.cursors.left.isDown)
    {
    	this.sprite.body.moveLeft(400);
    }
    else if (this.cursors.right.isDown)
    {
    	this.sprite.body.moveRight(400);
    }

    if (this.cursors.up.isDown)
    {
    	this.sprite.body.moveUp(400);
    }
    else if (this.cursors.down.isDown)
    {
    	this.sprite.body.moveDown(400);
    }

  }

}



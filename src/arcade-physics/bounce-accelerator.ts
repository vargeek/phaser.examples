import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BounceAcceleratorState extends BootState {
  flyer: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.flyer = this.add.sprite(400, 200, 'dude');

    this.flyer.animations.add('left', [0, 1, 2, 3], 10, true);
    this.flyer.animations.add('right', [5, 6, 7, 8], 10, true);

    this.physics.enable(this.flyer, Phaser.Physics.ARCADE);

    this.flyer.body.velocity.set(200, 200);
    this.flyer.body.collideWorldBounds = true;

    this.flyer.body.bounce.setTo(0.8);

  }

  update () {

    if (this.cursors.up.isDown)
    {
        // http://localhost:3000/Phaser.Physics.Arcade.Body.html#acceleration
        // acceleration :Phaser.Point

        // The acceleration is the rate of change of the velocity. Measured in pixels per second squared.
        this.flyer.body.acceleration.y = -600;

        if (this.flyer.body.velocity.x > 0)
        {
            this.flyer.animations.play('right');
        }
        else
        {
            this.flyer.animations.play('left');
        }
    }
    else if (this.cursors.down.isDown)
    {
        this.flyer.body.acceleration.y = 600;

        if (this.flyer.body.velocity.x > 0)
        {
            this.flyer.animations.play('right');
        }
        else
        {
            this.flyer.animations.play('left');
        }
    }
    else if (this.cursors.left.isDown)
    {
        this.flyer.body.acceleration.x = -500;
        this.flyer.animations.play('left');
    }
    else if (this.cursors.right.isDown)
    {
        this.flyer.body.acceleration.x = 500;
        this.flyer.animations.play('right');
    }
    else
    {
        this.flyer.frame = 4;
        this.flyer.body.acceleration.setTo(0,0);
        this.flyer.animations.stop();
    }


  }

  render () {

    this.game.debug.spriteInfo(this.flyer, 32, 32);

  }

}

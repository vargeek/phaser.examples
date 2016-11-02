import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class OneWayCollisionState extends BootState {
  sprite: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  sprite3: Phaser.Sprite;

  preload () {

	this.load.spritesheet('gameboy', 'assets/sprites/gameboy_seize_color_40x60.png', 40, 60);
	this.load.image('atari', 'assets/sprites/atari130xe.png');


  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#124184';

    //	In this example the little Gameboy sprite can pass through the top/bottom of the Atari sprite
    //	Because it's set to ignore collisions on its top/bottom faces.

    this.sprite = this.add.sprite(300, 200, 'atari');
    this.sprite.name = 'atari';
    this.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#checkCollision
    // checkCollision :object
    // Set the checkCollision properties to control which directions collision is processed for this Body.
    // For example checkCollision.up = false means it won't collide when the collision happened while moving up.
    // If you need to disable a Body entirely, use body.enable = false, this will also disable motion.
    // If you need to disable just collision and/or overlap checks, but retain motion, set checkCollision.none = true. An object containing allowed collision.
    this.sprite.body.checkCollision.up = false;
    this.sprite.body.checkCollision.down = false;
    this.sprite.body.immovable = true;

    this.sprite2 = this.add.sprite(350, 400, 'gameboy', 2);
    this.sprite2.name = 'gameboy';

    this.physics.enable(this.sprite2, Phaser.Physics.ARCADE);
    this.sprite2.body.collideWorldBounds = true;
    this.sprite2.body.bounce.setTo(1, 1);

    this.sprite3 = this.add.sprite(0, 210, 'gameboy', 4);

    this.physics.enable(this.sprite3, Phaser.Physics.ARCADE);

    this.sprite3.name = 'gameboy2';
    this.sprite3.body.collideWorldBounds = true;
    this.sprite3.body.bounce.setTo(1, 1);

    this.sprite2.body.velocity.y = -200;
    this.sprite3.body.velocity.x = 200;

  }

  update () {

    this.physics.arcade.collide(this.sprite, this.sprite2);
    this.physics.arcade.collide(this.sprite, this.sprite3);

  }

  render () {

    this.game.debug.bodyInfo(this.sprite, 16, 24);

    this.game.debug.body(this.sprite);
    this.game.debug.body(this.sprite2);

  }

}

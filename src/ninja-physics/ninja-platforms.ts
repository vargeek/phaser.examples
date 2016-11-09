import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class NinjaPlatformsState extends BootState {
  score = 0;
  platforms: Phaser.Group;
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  diamond: Phaser.Sprite;



  preload () {

    this.load.image('sky', 'assets/skies/sky1.png');
    this.load.image('ground', 'assets/sprites/platform.png');
    this.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);
    this.load.image('diamond', 'assets/sprites/diamond.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.NINJA);
    // http://localhost:3000/Phaser.Physics.Ninja.html#gravity
    // gravity :number
    // The World gravity setting.
    this.physics.ninja.gravity = 1;
    // http://localhost:3000/Phaser.Physics.Ninja.html#setBoundsToWorld
    // setBoundsToWorld()
    // Updates the size of this physics world to match the size of the game world.
    this.physics.ninja.setBoundsToWorld();

    this.add.sprite(0, 0, 'sky');

    this.platforms = this.add.group();

    var ground = this.platforms.create(0, this.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);

    // http://localhost:3000/Phaser.Physics.Ninja.html#enable
    // enable(object, type, id, radius, children)
    // This will create a Ninja Physics body on the given game object or array of game objects.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    this.physics.ninja.enable(ground);
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#immovable
    // immovable :boolean
    // An immovable Body will not receive any impacts from other bodies. Not fully implemented.
    ground.body.immovable = true;
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#gravityScale
    // How much of the world gravity should be applied to this object? 1 = all of it, 0.5 = 50%, etc.
    ground.body.gravityScale = 0;

    var ledge = this.platforms.create(400, 400, 'ground');

    this.physics.ninja.enable(ledge);
    ledge.body.immovable = true;
    ledge.body.gravityScale = 0;

    ledge = this.platforms.create(-150, 250, 'ground');

    this.physics.ninja.enable(ledge);
    ledge.body.immovable = true;
    ledge.body.gravityScale = 0;

    this.player = this.add.sprite(64, this.world.height - 150, 'dude');
    this.physics.ninja.enable(this.player);
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#bounce
    // bounce :number
    // The bounciness of this object when it collides. A value between 0 and 1. We recommend setting it to 0.999 to avoid jittering.
    this.player.body.bounce = 0.5;
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#friction
    // riction :number
    // The friction applied to this object as it moves.
    this.player.body.friction = 0.5;

    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#collideWorldBounds
    // A Body can be set to collide against the World bounds automatically and rebound back into the World if this is set to true. Otherwise it will leave the World. Should the Body collide with the World bounds?
    this.player.body.collideWorldBounds = true;

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.cursors = this.input.keyboard.createCursorKeys();

    //  Pushable object
    this.diamond = this.add.sprite(200, this.world.height - 150, 'diamond');
    this.physics.ninja.enable(this.diamond);
    this.diamond.body.collideWorldBounds = true;
    this.diamond.body.bounce = 0.5;

  }

  update () {

    this.physics.ninja.collide(this.player, this.platforms);
    this.physics.ninja.collide(this.diamond, this.platforms);
    this.physics.ninja.collide(this.player, this.diamond);

    if (this.cursors.left.isDown)
    {
        this.player.body.moveLeft(150);
        this.player.animations.play('left');
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.moveRight(150);
        this.player.animations.play('right');
    }
    else
    {
        this.player.animations.stop();
        this.player.frame = 4;
    }

    if (this.cursors.up.isDown)
    {
        this.player.body.moveUp(350);
    }

  }

}

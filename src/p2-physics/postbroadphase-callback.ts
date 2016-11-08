import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.P2.Body;
export class PostbroadphaseCallbackState extends BootState {
  ship: Phaser.Sprite;
  starfield: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('stars', 'assets/misc/starfield.jpg');
    this.load.spritesheet('ship', 'assets/sprites/humstar.png', 32, 32);
    this.load.spritesheet('veggies', 'assets/sprites/fruitnveg64wh37.png', 64, 64);

  }

  create () {

    this.world.setBounds(0, 0, 1600, 1200);

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.restitution = 0.9;

    this.starfield = this.add.tileSprite(0, 0, 800, 600, 'stars');
    this.starfield.fixedToCamera = true;

    let veggies = this.add.group();
    veggies.enableBody = true;
    veggies.physicsBodyType = Phaser.Physics.P2JS;

    var vegFrames = [ 1, 3, 4, 8 ];

    for (var i = 0; i < 25; i++)
    {
        var veg = veggies.create(this.world.randomX, this.world.randomY, 'veggies', this.rnd.pick(vegFrames));
        veg.body.setCircle(26);
    }

    this.ship = this.add.sprite(200, 200, 'ship');
    this.ship.name = 'ship';
    this.ship.scale.set(2);
    this.ship.smoothed = false;
    this.ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
    this.ship.play('fly');

    //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
    this.physics.p2.enable(this.ship, false);
    this.ship.body.setCircle(28);
    this.ship.body.fixedRotation = true;

    this.camera.follow(this.ship);

    // http://localhost:3000/Phaser.Physics.P2.html#setPostBroadphaseCallback
    // setPostBroadphaseCallback(callback, context)

    // Sets a callback to be fired after the Broadphase has collected collision pairs in the world.
    // Just because a pair exists it doesn't mean they will collide, just that they potentially could do.
    // If your calback returns false the pair will be removed from the narrowphase. This will stop them testing for collision this step.
    // Returning true from the callback will ensure they are checked in the narrowphase.
    this.physics.p2.setPostBroadphaseCallback(this.checkVeg, this);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  checkVeg (body1: Body, body2: Body) {

    //  To explain - the post broadphase event has collected together all potential collision pairs in the world
    //  It doesn't mean they WILL collide, just that they might do.

    //  This callback is sent each collision pair of bodies. It's up to you how you compare them.
    //  If you return true then the pair will carry on into the narrow phase, potentially colliding.
    //  If you return false they will be removed from the narrow phase check all together.

    //  In this simple example if one of the bodies is our space ship,
    //  and the other body is the green pepper sprite (frame ID 4) then we DON'T allow the collision to happen.
    //  Usually you would use a collision mask for something this simple, but it demonstates use.
    if (body1.sprite.name === 'ship' && body2.sprite.frame === 4 ||
       body2.sprite.name === 'ship' && body1.sprite.frame === 4) {
      return false;
    }

    return true;

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
        this.starfield.tilePosition.y += (this.ship.body.velocity.y * this.time.physicsElapsed);
    }

  }

  render () {

    this.game.debug.text(`World bodies: ${this.physics.p2.total}`, 32 ,32);

  }
}

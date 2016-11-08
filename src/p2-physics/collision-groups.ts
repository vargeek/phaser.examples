import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.P2.Body;
export class CollisionGroupsState extends BootState {
  ship: Phaser.Sprite;
  starfield: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('stars', 'assets/misc/starfield.jpg');
    this.load.spritesheet('ship', 'assets/sprites/humstar.png', 32, 32);
    this.load.image('panda', 'assets/sprites/spinObj_01.png');
    this.load.image('sweet', 'assets/sprites/spinObj_06.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.P2JS);

    //  Turn on impact events for the world, without this we get no collision callbacks
    // http://localhost:3000/Phaser.Physics.P2.html#setImpactEvents
    // setImpactEvents(state)
    // Impact event handling is disabled by default. Enable it before any impact events will be dispatched.
    // In a busy world hundreds of impact events can be generated every step, so only enable this if you cannot do what you need via beginContact or collision masks.
    this.physics.p2.setImpactEvents(true);

    this.physics.p2.restitution = 0.8;

    // http://localhost:3000/Phaser.Physics.P2.html#createCollisionGroup
    // createCollisionGroup(object)
    // object{Group|Sprite}   An optional Sprite or Group to apply the Collision Group to. If a Group is given it will be applied to all top-level children.
    // Creates a new Collision Group and optionally applies it to the given object.
    // Collision Groups are handled using bitmasks, therefore you have a fixed limit you can create before you need to re-use older groups.
    let playerCollisionGroup = this.physics.p2.createCollisionGroup();
    let pandaCollisionGroup = this.physics.p2.createCollisionGroup();

    // http://localhost:3000/Phaser.Physics.P2.html#boundsCollisionGroup
    // boundsCollisionGroup :Phaser.Physics.P2.CollisionGroup
    // A default collision group.
    console.log(this.physics.p2.boundsCollisionGroup.mask);

    // http://localhost:3000/Phaser.Physics.P2.CollisionGroup.html#mask
    // mask :number
    // The CollisionGroup bitmask.
    console.log(playerCollisionGroup.mask);
    console.log(pandaCollisionGroup.mask);

    // http://localhost:3000/Phaser.Physics.P2.html#updateBoundsCollisionGroup
    // updateBoundsCollisionGroup(setCollisionGroup)
    // By default the World will be set to collide everything with everything. The bounds of the world is a Body with 4 shapes, one for each face.
    // If you start to use your own collision groups then your objects will no longer collide with the bounds.
    // To fix this you need to adjust the bounds to use its own collision group first BEFORE changing your Sprites collision group.
    this.physics.p2.updateBoundsCollisionGroup();

    this.starfield = this.add.tileSprite(0, 0, 800, 600, 'stars');
    this.starfield.fixedToCamera = true;

    let pandas = this.add.group();
    pandas.enableBody = true;
    pandas.physicsBodyType = Phaser.Physics.P2JS;

    for (let index = 0; index < 4; index++) {
      let panda = pandas.create(this.world.randomX, this.world.randomY, 'panda') as Phaser.Sprite;
      (panda.body as Body).setRectangle(40, 40);
      // http://localhost:3000/Phaser.Physics.P2.Body.html#setCollisionGroup
      // setCollisionGroup(group, shape)
      // shape{p2.Shape}  An optional Shape. If not provided the collision group will be added to all Shapes in this Body.

      // Sets the given CollisionGroup to be the collision group for all shapes in this Body, unless a shape is specified.
      // This also resets the collisionMask.
      (panda.body as Body).setCollisionGroup(pandaCollisionGroup);
      // http://localhost:3000/Phaser.Physics.P2.Body.html#collides
      // collides(group, callback, callbackContext, shape)

      // Adds the given CollisionGroup, or array of CollisionGroups, to the list of groups that this body will collide with and updates the collision masks.
      (panda.body as Body).collides([pandaCollisionGroup, playerCollisionGroup]);
    }

    this.ship = this.add.sprite(200, 200, 'ship');
    this.ship.scale.set(2);
    this.ship.smoothed = false;
    this.ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
    this.ship.play('fly');

    this.physics.p2.enable(this.ship, false);
    (this.ship.body as Body).setCircle(28);
    (this.ship.body as Body).fixedRotation = true;

    (this.ship.body as Body).setCollisionGroup(playerCollisionGroup);
    (this.ship.body as Body).collides(pandaCollisionGroup, this.hitPanda, this);

    this.camera.follow(this.ship);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    const shipbody = this.ship.body as Body;
    shipbody.setZeroVelocity();

    if (this.cursors.left.isDown) {
      shipbody.moveLeft(200);
    }
    else if (this.cursors.right.isDown) {
      shipbody.moveRight(200);
    }
    if (this.cursors.up.isDown) {
      shipbody.moveUp(200);
    }
    else if (this.cursors.down.isDown) {
      shipbody.moveDown(200);
    }

    if (!this.camera.atLimit.x) {
      this.starfield.tilePosition.x += shipbody.velocity.x * 16 * this.time.physicsElapsed;
    }

    if (!this.camera.atLimit.y) {
      this.starfield.tilePosition.y += shipbody.velocity.y * 16 * this.time.physicsElapsed;
    }


  }

  hitPanda (body1: Body, body2: Body) {

    body2.sprite.alpha -= 0.1;

  }

}

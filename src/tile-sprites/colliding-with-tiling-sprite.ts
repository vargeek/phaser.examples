/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;

export class CollidingWithTilingSpriteState extends BootState {
  ball: Phaser.Sprite;
  tilesprite: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image(AssetID.starfield, 'assets/misc/starfield.jpg');
    this.load.image(AssetID.ball, 'assets/sprites/pangball.png');

  }

  create () {

    // This will create an instance of the requested physics simulation.
    // Phaser.Physics.Arcade is running by default, but all others need activating directly.

    // You can start the following physics systems:

    // Phaser.Physics.P2JS - A full-body advanced physics system by Stefan Hedman.
    // Phaser.Physics.NINJA - A port of Metanet Softwares N+ physics system.
    // Phaser.Physics.BOX2D - A commercial Phaser Plugin (see http://phaser.io)

    // Both Ninja Physics and Box2D require their respective plugins to be loaded before you can start them.
    // They are not bundled into the core Phaser library.

    // If the physics world has already been created (i.e. in another state in your game) then
    // calling startSystem will reset the physics world, not re-create it. If you need to start them again from their constructors
    // then set Phaser.Physics.p2 (or whichever system you want to recreate) to null before calling startSystem.
    this.physics.startSystem(Phaser.Physics.ARCADE);

    // The World gravity setting. Defaults to x: 0, y: 0, or no gravity.
    this.physics.arcade.gravity.y = 200;

    this.ball = this.add.sprite(400, 0, AssetID.ball);
    this.tilesprite = this.add.tileSprite(300, 450, 200, 100, AssetID.starfield);

    // This will create a default physics body on the given game object or array of objects.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    // It can be for any of the physics systems that have been started:

    // Phaser.Physics.Arcade - A light weight AABB based collision system with basic separation.
    // Phaser.Physics.P2JS - A full-body advanced physics system supporting multiple object shapes, polygon loading, contact materials, springs and constraints.
    // Phaser.Physics.NINJA - A port of Metanet Softwares N+ physics system. Advanced AABB and Circle vs. Tile collision.
    // Phaser.Physics.BOX2D - A port of https://code.google.com/p/box2d-html5
    // Phaser.Physics.MATTER - A full-body and light-weight advanced physics system (still in development)
    // Phaser.Physics.CHIPMUNK is still in development.

    // If you require more control over what type of body is created, for example to create a Ninja Physics Circle instead of the default AABB, then see the
    // individual physics systems enable methods instead of using this generic one.
    this.physics.enable([this.ball, this.tilesprite], Phaser.Physics.ARCADE);

    (this.ball.body as Body).collideWorldBounds = true;
    (this.ball.body as Body).bounce.set(1);

    (this.tilesprite.body as Body).collideWorldBounds = true;
    // An immovable Body will not receive any impacts from other bodies.
    (this.tilesprite.body as Body).immovable = true;
    // Allow this Body to be influenced by gravity? Either world or local. default: true
    (this.tilesprite.body as Body).allowGravity = false;

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    // collide(object1, object2, collideCallback, processCallback, callbackContext) → {boolean}
    // Checks for collision between two game objects. You can perform Sprite vs. Sprite, Sprite vs. Group, Group vs. Group, Sprite vs. Tilemap Layer or Group vs. Tilemap Layer collisions.
    // Both the first and second parameter can be arrays of objects, of differing types.
    // If two arrays are passed, the contents of the first parameter will be tested against all contents of the 2nd parameter.
    // The objects are also automatically separated. If you don't require separation then use ArcadePhysics.overlap instead.
    // An optional processCallback can be provided. If given this function will be called when two sprites are found to be colliding. It is called before any separation takes place,
    // giving you the chance to perform additional checks. If the function returns true then the collision and separation is carried out. If it returns false it is skipped.
    // The collideCallback is an optional function that is only called if two sprites collide. If a processCallback has been set then it needs to return true for collideCallback to be called.
    // NOTE: This function is not recursive, and will not test against children of objects passed (i.e. Groups or Tilemaps within other Groups).
    this.physics.arcade.collide(this.ball, this.tilesprite);

    if (this.cursors.left.isDown) {
      (this.tilesprite.body as Body).x -= 8
      this.tilesprite.tilePosition.x -= 8;
    }
    else if (this.cursors.right.isDown) {
      (this.tilesprite.body as Body).x += 8
      this.tilesprite.tilePosition.x += 8;
    }

    if (this.cursors.up.isDown) {
      this.tilesprite.tilePosition.y += 8;
    }
    else if (this.cursors.down.isDown) {
      this.tilesprite.tilePosition.y -= 8;
    }

  }

  render () {

    this.game.debug.body(this.ball);
    this.game.debug.body(this.tilesprite as any);

  }

}

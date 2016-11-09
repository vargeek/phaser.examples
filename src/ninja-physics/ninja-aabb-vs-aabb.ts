import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Ninja.Body;
export class NinjaAabbVsAabbState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('block', 'assets/sprites/block.png');
    this.load.spritesheet('ninja-tiles', 'assets/physics/ninja-tiles128.png', 128, 128, 34);

  }

  create () {

    this.physics.startSystem(Phaser.Physics.NINJA);

    this.sprite1 = this.add.sprite(100, 450, 'block');
    this.sprite1.name = 'blockA';

    this.sprite2 = this.add.sprite(600, 450, 'block');
    this.sprite2.name = 'blockB';
    this.sprite2.tint = Math.random() * 0xffffff;

    // http://localhost:3000/Phaser.Physics.Ninja.html#enableAABB
    // enableAABB(object, children)
    // children{boolean=true}   Should a body be created on all children of this object? If true it will recurse down the display list as far as it can go.

    // This will create a Ninja Physics AABB body on the given game object. Its dimensions will match the width and height of the object at the point it is created.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    this.physics.ninja.enableAABB([this.sprite1, this.sprite2]);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    // http://localhost:3000/Phaser.Physics.Ninja.html#collide
    // collide(object1, object2, collideCallback, processCallback, callbackContext) → {boolean}

    // Checks for collision between two game objects. You can perform Sprite vs. Sprite, Sprite vs. Group, Group vs. Group, Sprite vs. Tilemap Layer or Group vs. Tilemap Layer collisions.
    // The second parameter can be an array of objects, of differing types.
    // The objects are also automatically separated. If you don't require separation then use ArcadePhysics.overlap instead.
    // An optional processCallback can be provided. If given this function will be called when two sprites are found to be colliding. It is called before any separation takes place,
    // giving you the chance to perform additional checks. If the function returns true then the collision and separation is carried out. If it returns false it is skipped.
    // The collideCallback is an optional function that is only called if two sprites collide. If a processCallback has been set then it needs to return true for collideCallback to be called.
    this.physics.ninja.collide(this.sprite1, this.sprite2);

    if (this.cursors.left.isDown) {
      (this.sprite1.body as Body).moveLeft(20);
    }
    else if (this.cursors.right.isDown) {
      (this.sprite1.body as Body).moveRight(20);
    }

    if (this.cursors.up.isDown) {
      (this.sprite1.body as Body).moveUp(30);
    }

  }

  render () {

    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#touching
    // touching :object
    // This object is populated with boolean values when the Body collides with another.
    // touching.up = true means the collision happened to the top of this Body for example. An object containing touching results.
    this.game.debug.text('left: ' + this.sprite1.body.touching.left, 32, 32);
    this.game.debug.text('right: ' + this.sprite1.body.touching.right, 256, 32);
    this.game.debug.text('up: ' + this.sprite1.body.touching.up, 32, 64);
    this.game.debug.text('down: ' + this.sprite1.body.touching.down, 256, 64);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.P2.Body;
export class CollideWorldBoundsState extends BootState {
  ship: Phaser.Sprite;
  starfield: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('stars', 'assets/misc/starfield.jpg');
    this.load.spritesheet('ship', 'assets/sprites/humstar.png', 32, 32);

  }

  create () {

    this.starfield = this.add.tileSprite(0, 0, 800, 600, 'stars');

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.physics.p2.restitution = 0.8;

    this.ship = this.add.sprite(200, 200, 'ship');
    this.ship.scale.set(2);
    this.ship.smoothed = false;
    this.ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
    this.ship.play('fly');

    //  Create our physics body. A circle assigned the playerCollisionGroup
    this.physics.p2.enable(this.ship);

    this.ship.body.setCircle(28);

    //  This boolean controls if the player should collide with the world bounds or not
    // http://localhost:3000/Phaser.Physics.P2.Body.html#collideWorldBounds
    // collideWorldBounds :boolean = true
    // A Body can be set to collide against the World bounds automatically if this is set to true. Otherwise it will leave the World.
    // Note that this only applies if your World has bounds! The response to the collision should be managed via CollisionMaterials.
    // Also note that when you set this it will only effect Body shapes that already exist. If you then add further shapes to your Body
    // after setting this it will not proactively set them to collide with the bounds. Should the Body collide with the World bounds?
    this.ship.body.collideWorldBounds = true;

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    const body = this.ship.body as Body;

    body.setZeroVelocity();
    if (this.cursors.left.isDown) {
      body.moveLeft(200);
    }
    else if (this.cursors.right.isDown) {
      body.moveRight(200);
    }

    if (this.cursors.up.isDown) {
      body.moveUp(200);
    }
    else if (this.cursors.down.isDown) {
      body.moveDown(200);
    }

  }

}

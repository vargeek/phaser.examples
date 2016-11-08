import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ThrustLeftRightState extends BootState {
  ship: Phaser.Sprite;
  starfield: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('stars', 'assets/misc/starfield.jpg');
    this.load.image('ship', 'assets/sprites/thrust_ship2.png');

  }

  create () {

    this.world.setBounds(0, 0, 1920, 1200);

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.restitution = 0.8;

    this.starfield = this.add.tileSprite(0, 0, 800, 600, 'stars');
    this.starfield.fixedToCamera = true;

    this.ship = this.add.sprite(200, 200, 'ship');

    this.physics.p2.enable(this.ship);

    this.camera.follow(this.ship);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown)
    {
        // http://localhost:3000/Phaser.Physics.P2.Body.html#thrustLeft
        // thrustLeft(speed)

        // Applies a force to the Body that causes it to 'thrust' to the left, based on its current angle and the given speed.
        // The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
        this.ship.body.thrustLeft(100);
    }
    else if (this.cursors.right.isDown)
    {
        // http://localhost:3000/Phaser.Physics.P2.Body.html#thrustRight
        // thrustRight(speed)
        // Applies a force to the Body that causes it to 'thrust' to the right, based on its current angle and the given speed.
        // The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
        this.ship.body.thrustRight(100);
    }

    if (this.cursors.up.isDown)
    {
        this.ship.body.thrust(400);
    }
    else if (this.cursors.down.isDown)
    {
        this.ship.body.reverse(400);
    }

    if (!this.camera.atLimit.x)
    {
        this.starfield.tilePosition.x -= (this.ship.body.velocity.x * this.time.physicsElapsed);
    }

    if (!this.camera.atLimit.y)
    {
        this.starfield.tilePosition.y -= (this.ship.body.velocity.y * this.time.physicsElapsed);
    }

  }

}

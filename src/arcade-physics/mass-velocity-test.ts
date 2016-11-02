import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class MassVelocityTestState extends BootState {
  car: Phaser.Sprite;
  aliens: Phaser.Group;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('car', 'assets/sprites/car90.png');
    this.load.image('baddie', 'assets/sprites/space-baddie.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.aliens = this.add.group();
    this.aliens.enableBody = true;

    for (let index = 0; index < 50; index++) {

      let alien = this.aliens.create(this.world.randomX, this.world.randomY, 'baddie') as Phaser.Sprite;
      alien.name = `alien ${index}`;
      (alien.body as Body).collideWorldBounds = true;
      (alien.body as Body).bounce.set(0.8);
      // http://localhost:3000/Phaser.Physics.Arcade.Body.html#velocity
      // velocity :Phaser.Point
      // The velocity, or rate of change in speed of the Body. Measured in pixels per second.
      (alien.body as Body).velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);

    }

    this.car = this.add.sprite(400, 300, 'car');
    this.car.name = 'car';
    this.car.anchor.set(0.5);

    this.physics.enable(this.car, Phaser.Physics.ARCADE);

    (this.car.body as Body).collideWorldBounds = true;
    (this.car.body as Body).bounce.set(0.8);
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#allowRotation
    // allowRotation :boolean (true)
    // Allow this Body to be rotated? (via angularVelocity, etc)
    (this.car.body as Body).allowRotation = true;
    (this.car.body as Body).immovable = true;

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.physics.arcade.collide(this.car, this.aliens);

    (this.car.body as Body).velocity.x = 0;
    (this.car.body as Body).velocity.y = 0;
    (this.car.body as Body).angularVelocity = 0;

    if (this.cursors.left.isDown) {
      (this.car.body as Body).angularVelocity = -200;
    }
    else if (this.cursors.right.isDown) {
      (this.car.body as Body).angularVelocity = 200;
    }

    if (this.cursors.up.isDown) {
      this.physics.arcade.velocityFromAngle(this.car.angle, 300, (this.car.body as Body).velocity);
    }



  }

}

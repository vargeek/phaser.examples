import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AccelerateToObjectState extends BootState {
  math: typeof Phaser.Math;
  bullets: Phaser.Group;
  cursors: Phaser.CursorKeys;
  ship: Phaser.Sprite;


  preload () {

    this.load.image('car', 'assets/sprites/car.png');
    this.load.image('tinycar', 'assets/sprites/tinycar.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.bullets = this.add.group();
    for (let index = 0; index < 10; index++) {
      let bullet = this.bullets.create(this.rnd.integerInRange(200, 1700), this.rnd.integerInRange(-200, 400), 'tinycar');
      // http://localhost:3000/Phaser.Physics.P2.html#enable
      // enable(object, debug, children)
      // debug{boolean=false}     Create a debug object to go with this body?
      // children{boolean=true}   Should a body be created on all children of this object? If true it will recurse down the display list as far as it can go.

      // This will create a P2 Physics body on the given game object or array of game objects.
      // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
      // Note: When the game object is enabled for P2 physics it has its anchor x/y set to 0.5 so it becomes centered.
      this.physics.p2.enable(bullet, false);
    }

    this.cursors = this.input.keyboard.createCursorKeys();
    this.ship = this.add.sprite(32, this.world.height - 150, 'car');
    this.physics.p2.enable(this.ship);

  }

  update () {

    this.bullets.forEachAlive(this.moveBullets, this);

    if (this.cursors.left.isDown) {
      // http://localhost:3000/Phaser.Physics.P2.Body.html#rotateLeft
      // rotateLeft(speed)
      // This will rotate the Body by the given speed to the left (counter-clockwise).
      this.ship.body.rotateLeft(100);
    }
    else if (this.cursors.right.isDown) {
      // http://localhost:3000/Phaser.Physics.P2.Body.html#rotateRight
      // rotateRight(speed)
      // This will rotate the Body by the given speed to the left (clockwise).
      this.ship.body.rotateRight(100);

    }
    else {
      // http://localhost:3000/Phaser.Physics.P2.Body.html#setZeroRotation
      // If this Body is dynamic then this will zero its angular velocity.
      this.ship.body.setZeroRotation();
    }

    if (this.cursors.up.isDown) {
      // http://localhost:3000/Phaser.Physics.P2.Body.html#thrust
      // thrust(speed)
      // Applies a force to the Body that causes it to 'thrust' forwards, based on its current angle and the given speed.
      // The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
      this.ship.body.thrust(400);
    }
    else if (this.cursors.down.isDown) {
      // http://localhost:3000/Phaser.Physics.P2.Body.html#reverse
      // reverse(speed)

      // Applies a force to the Body that causes it to 'thrust' backwards (in reverse), based on its current angle and the given speed.
      // The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
      this.ship.body.reverse(400);
    }

  }

  moveBullets (bullet: Phaser.Sprite) {

    this.accelerateToObject(bullet, this.ship, 30);

  }

  accelerateToObject(obj1: Phaser.Sprite, obj2: Phaser.Sprite, speed: number = 60) {

    let angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
    // http://localhost:3000/Phaser.Physics.P2.Body.html#rotation
    // rotation :number
    // The angle of the Body in radians.
    // If you wish to work in degrees instead of radians use the Body.angle property instead. Working in radians is faster as it doesn't have to convert values. The angle of this Body in radians.
    obj1.body.rotation = angle + this.math.degToRad(90);
    // http://localhost:3000/Phaser.Physics.P2.Body.html#angle
    // angle :number
    // The angle of the Body in degrees from its original orientation. Values from 0 to 180 represent clockwise rotation; values from 0 to -180 represent counterclockwise rotation.
    // Values outside this range are added to or subtracted from 360 to obtain a value within the range. For example, the statement Body.angle = 450 is the same as Body.angle = 90.
    // If you wish to work in radians instead of degrees use the property Body.rotation instead. Working in radians is faster as it doesn't have to convert values. The angle of this Body in degrees.

    // http://localhost:3000/Phaser.Physics.P2.Body.html#force
    // force :Phaser.Physics.P2.InversePointProxy
    // The force applied to the body.
    obj1.body.force.x = Math.cos(angle) * speed;
    obj1.body.force.y = Math.sin(angle) * speed;

  }


}

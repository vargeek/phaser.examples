import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class AngularVelocityState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.image('arrow', 'assets/sprites/arrow.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#0072bc';

    this.sprite = this.add.sprite(400, 300, 'arrow');
    this.sprite.anchor.set(0.5);

    this.physics.enable(this.sprite, Phaser.Physics.ARCADE);

  }

  update () {

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#velocity
    // velocity :Phaser.Point
    // The velocity, or rate of change in speed of the Body. Measured in pixels per second.
    (this.sprite.body as Body).velocity.x = 0;
    (this.sprite.body as Body).velocity.y = 0;

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#angularVelocity
    // angularVelocity :number
    // The angular velocity controls the rotation speed of the Body. It is measured in degrees per second.
    (this.sprite.body as Body).angularVelocity = 0;

    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      (this.sprite.body as Body).angularVelocity = -200;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      (this.sprite.body as Body).angularVelocity = 200;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      // http://localhost:3000/Phaser.Physics.Arcade.html#velocityFromAngle
      // velocityFromAngle(angle, speed, point) → {Phaser.Point}
      // 根据速度大小和角度，计算速度矢量
      // Given the angle (in degrees) and speed calculate the velocity and return it as a Point object, or set it to the given point object.
      // One way to use this is: velocityFromAngle(angle, 200, sprite.velocity) which will set the values directly to the sprites velocity and not create a new Point object.

      // point: 可选，保存计算结果
      // The Point object in which the x and y properties will be set to the calculated velocity.
      this.physics.arcade.velocityFromAngle(this.sprite.angle, 300, this.sprite.body.velocity);
    }

  }


  render () {

    this.game.debug.spriteInfo(this.sprite, 32, 32);
    this.game.debug.text(`angularVelocity: ${this.sprite.body.angularVelocity}`, 32, 200);

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#angularAcceleration
    // angularAcceleration :number
    // The angular acceleration is the rate of change of the angular velocity. Measured in degrees per second squared.
    this.game.debug.text(`angularAcceleration: ${this.sprite.body.angularAcceleration}`, 23, 232);
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#angularDrag
    // angularDrag :number
    // The drag applied during the rotation of the Body. Measured in degrees per second squared.
    this.game.debug.text(`angularDrag: ${this.sprite.body.angularDrag}`, 32, 264);
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#deltaZ
    // deltaZ() → {number}
    // Returns the delta z value. The difference between Body.rotation now and in the previous step.
    this.game.debug.text(`deltaZ: ${this.sprite.body.deltaZ()}`, 32, 296);

  }

}
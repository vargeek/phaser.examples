import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class AngularAccelerationState extends BootState {
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

    //  We'll set a lower max angular velocity here to keep it from going totally nuts
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#maxAngular
    // maxAngular :number
    // The maximum angular velocity in degrees per second that the Body can reach.
    (this.sprite.body as Body).maxAngular = 500;

    //  Apply a drag otherwise the sprite will just spin and never slow down
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#angularDrag
    // 角阻力
    // angularDrag :number
    // The drag applied during the rotation of the Body. Measured in degrees per second squared.
    (this.sprite.body as Body).angularDrag = 50;

  }

  update () {

    (this.sprite.body as Body).angularAcceleration = 0;

    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      (this.sprite.body as Body).angularAcceleration = -200;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      (this.sprite.body as Body).angularAcceleration = 200;
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

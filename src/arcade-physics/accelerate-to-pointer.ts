import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class AccelerateToPointerState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.image('arrow', 'assets/sprites/arrow.png');

  }

  create () {

    this.stage.backgroundColor = '#0072bc';

    this.sprite = this.add.sprite(400, 300, 'arrow');
    this.sprite.anchor.set(0.5);

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    (this.sprite.body as Body).allowGravity = false;

  }

  update () {

    // http://localhost:3000/Phaser.Physics.Arcade.html#moveToPointer
    // moveToPointer(displayObject, speed, pointer, maxTime) → {number}
    // Move the given display object towards the pointer at a steady velocity. If no pointer is given it will use Phaser.Input.activePointer.

    // If you specify a maxTime then it will adjust the speed (over-writing what you set) so it arrives at the destination in that number of seconds.

    // Timings are approximate due to the way browser timers work. Allow for a variance of +- 50ms.

    // Note: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.
    // Note: The display object doesn't stop moving once it reaches the destination coordinates.
    // Returns:
    // The angle (in radians) that the object should be visually set to in order to match its new velocity.
    // 只是给个初速度，到达目的地后不会自动停止;
    // 移动过程中改变对象的位置，不会自动改变速度方向来重新朝向目的地。
    // 速度的方向指向目的地，但是精灵本身没有面向目的地，需要根据返回值的角度自己设置精灵的rotation
    this.sprite.rotation = this.physics.arcade.moveToPointer(this.sprite, 60, this.input.activePointer, 500);

  }

  render () {

    this.game.debug.spriteInfo(this.sprite, 32, 32);

  }


}

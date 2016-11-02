import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AngleToPointerState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.image('arrow', 'assets/sprites/arrow.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#0072bc';

    this.sprite = this.add.sprite(400, 300, 'arrow');
    this.sprite.anchor.set(0.5);

  }

  update () {

    //  This will update the sprite.rotation so that it points to the currently active pointer
    //  On a Desktop that is the mouse, on mobile the most recent finger press.

    // http://localhost:3000/Phaser.Physics.Arcade.html#angleToPointer
    // angleToPointer(displayObject, pointer, world) → {number}
    // Find the angle in radians between a display object (like a Sprite) and a Pointer, taking their x/y and center into account.

    // pointer: he Phaser.Pointer to test to. If none is given then Input.activePointer is used.

    // world: boolean (false)
    // Calculate the angle using World coordinates (true), or Object coordinates (false, the default)
    // The optional world argument allows you to return the result based on the Game Objects world property, instead of its x and y values. This is useful of the object has been nested inside an offset Group, or parent Game Object.
    this.sprite.rotation = this.physics.arcade.angleToPointer(this.sprite);

  }

  render () {

    this.game.debug.spriteInfo(this.sprite, 32, 32);

  }

}

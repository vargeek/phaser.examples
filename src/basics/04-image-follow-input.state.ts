/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Phaser: 'Phaser'
}

type Body = Phaser.Physics.Arcade.Body;

export class ImageFollowInputState extends BootState {

  sprit: Phaser.Sprite;

  preload () {

    this.load.image(AssetID.Phaser, '/assets/sprites/phaser.png');

  }

  create () {

    // To make the sprite move we need to enable Arcade Physics
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.sprit = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.Phaser);
    this.sprit.anchor.set(0.5);

    // And enable the Sprite to have a physics body:
    this.physics.enable(this.sprit);

  }

  update () {

    //  If the sprite is > 8px away from the pointer then let's move to it
    if (this.physics.arcade.distanceToPointer(this.sprit, this.input.activePointer) > 8) {
      //  Make the object seek to the active pointer (mouse or touch).
      this.physics.arcade.moveToPointer(this.sprit, 300);
    }
    else {
      //  Otherwise turn off velocity because we're close enough to the pointer
      (this.sprit.body as Body).velocity.set(0);
    }

  }

  render () {
    this.game.debug.inputInfo(32, 32);
  }

}

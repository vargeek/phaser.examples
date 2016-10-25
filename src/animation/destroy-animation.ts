/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class DestroyAnimationState extends BootState {
  sprites: Phaser.Group;
  rip = 0;

  preload () {

    this.load.spritesheet(AssetID.mummy, 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

  }

  create () {

    this.sprites = this.add.group();
    this.time.events.loop(50, this.createSprite, this);

  }

  update () {

    // Quickly set the same property across all children of this group to a new value.
    // This call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children. If you need that ability please see Group.setAllChildren.
    // The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.
    this.sprites.setAll('x', 10, true, true, 1);
    this.sprites.forEach(this.checkSprite, this, true);

  }

  createSprite () {

    let mummy = this.sprites.create(0, this.world.randomY, AssetID.mummy) as Phaser.Sprite;
    mummy.animations.add(Animation.walk);

    mummy.play(Animation.walk, 10, true);

  }

  checkSprite (sprite: Phaser.Sprite) {

    try {
      if (sprite.x > this.game.width) {
        this.rip++;
        // Removes the given child from this group.
        // This will dispatch an onRemovedFromGroup event from the child (if it has one), and optionally destroy the child.
        // If the group cursor was referring to the removed child it is updated to refer to the next child.
        this.sprites.remove(sprite, true);
        sprite.destroy()
        // Sprite.destroy(destroyChildren, destroyTexture)
        // Destroys the Game Object. This removes it from its parent group, destroys the input, event and animation handlers if present
        // and nulls its reference to game, freeing it up for garbage collection.

        // If this Game Object has the Events component it will also dispatch the onDestroy event.

        // You can optionally also destroy the BaseTexture this Game Object is using. Be careful if you've
        // more than one Game Object sharing the same BaseTexture.
      }
    } catch (error) {
      console.log(sprite);
    }

  }

  render () {

    this.game.debug.text(`Group size: ${this.sprites.total}`, 32, 32);
    this.game.debug.text(`Destroyed: ${this.rip}`, 32, 64);

  }


}

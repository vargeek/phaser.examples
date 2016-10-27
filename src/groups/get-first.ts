import { BootState } from '../boot.state';
import { AssetID } from '../constant';


// alive :boolean
// A useful flag to control if the Game Object is alive or dead.
// This is set automatically by the Health components damage method should the object run out of health.
// Or you can toggle it via your game code.
// This property is mostly just provided to be used by your game - it doesn't effect rendering or logic updates.
// However you can use Group.getFirstAlive in conjunction with this property for fast object pooling and recycling.

// health :number
// The Game Objects health value. This is a handy property for setting and manipulating health on a Game Object.
// It can be used in combination with the damage method or modified directly.

// damage(amount: number): Phaser.Sprite;
// Damages the Game Object. This removes the given amount of health from the health property.
// If health is taken below or is equal to zero then the kill method is called.

// heal(amount: number): Phaser.Sprite;
// Heal the Game Object. This adds the given amount of health to the health property.

// maxHealth :number
// The Game Objects maximum health value. This works in combination with the heal method to ensure the health value never exceeds the maximum.

// exists :Boolean
// Controls if this Sprite is processed by the core Phaser game loops and Group loops.

// <readonly> fresh :boolean
// A Game Object is considered fresh if it has just been created or reset and is yet to receive a renderer transform update.
// This property is mostly used internally by the physics systems, but is exposed for the use of plugins.

export class GetFirstState extends BootState {
  timer = 0;
  cycle = 1000;

  preload () {

    this.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);
    this.load.image('reviveBtn', 'assets/buttons/revive-button.png');

  }

  create () {

    for (let index = 0; index < 3; index++) {
      let item = this.add.sprite(290, 98 * (index + 1), 'item', index);
      item = this.add.sprite(398, 98 * (index + 1), 'item', index + 3);
    }

  }

  update () {

    if (this.game.time.now > this.timer) {

      this.timer = this.game.time.now + this.cycle;

      // getFirstAlive(createIfNull, x, y, key, frame) → {DisplayObject}

      // Get the first child that is alive (child.alive === true).
      // This is handy for choosing a squad leader, etc.
      // You can use the optional argument createIfNull to create a new Game Object if no alive ones were found in this Group.
      // It works by calling Group.create passing it the parameters given to this method, and returning the new child.
      // If a child was found , createIfNull is false and you provided the additional arguments then the child
      // will be reset and/or have a new texture loaded on it. This is handled by Group.resetChild
      let item = this.world.getFirstAlive() as Phaser.Sprite;

      if (item) {

        // kill() → {PIXI.DisplayObject}

        // Kills a Game Object. A killed Game Object has its alive, exists and visible properties all set to false.
        // It will dispatch the onKilled event. You can listen to events.onKilled for the signal.
        // Note that killing a Game Object is a way for you to quickly recycle it in an object pool,
        // it doesn't destroy the object or free it up from memory.
        // If you don't need this Game Object any more you should call destroy instead.
        item.kill();
      }

    }

  }

  render () {

    this.game.debug.text('One item will be killed each second.', 280, 420);

    this.game.debug.text(`Living: ${this.world.countLiving()}, Dead: ${this.world.countDead()}`, 330, 440);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GetFirstDeadState extends BootState {
  veg: Phaser.Group;

  preload () {

    this.load.spritesheet('veg', 'assets/sprites/fruitnveg32wh37.png', 32, 32);

  }

  create () {

    this.veg = this.add.group();

    this.veg.createMultiple(20, 'veg', 0, false);

    // repeat(delay, repeatCount, callback, callbackContext, arguments) → {Phaser.TimerEvent}

    // Adds a new TimerEvent that will always play through once and then repeat for the given number of iterations.
    // The event will fire after the given amount of delay in milliseconds has passed, once the Timer has started running.
    // The delay is in relation to when the Timer starts, not the time it was added.
    // If the Timer is already running the delay will be calculated based on the timers current time.
    // Make sure to call start after adding all of the Events you require for this Timer.
    this.time.events.repeat(Phaser.Timer.SECOND, 20, this.resurrect, this);


  }

  resurrect () {

    // getFirstDead(createIfNull, x, y, key, frame) → {DisplayObject}
    // Get the first child that is dead (child.alive === false).
    // This is handy for checking if everything has been wiped out and adding to the pool as needed.
    // You can use the optional argument createIfNull to create a new Game Object if no dead ones were found in this Group.
    // It works by calling Group.create passing it the parameters given to this method, and returning the new child.
    // If a child was found , createIfNull is false and you provided the additional arguments then the child
    // will be reset and/or have a new texture loaded on it. This is handled by Group.resetChild.
    let item = this.veg.getFirstDead() as Phaser.Sprite;

    if (item) {

      // reset(x, y, health) → {PIXI.DisplayObject}

      // Resets the Game Object.
      // This moves the Game Object to the given x/y world coordinates and sets fresh, exists,
      // visible and renderable to true.
      // If this Game Object has the LifeSpan component it will also set alive to true and health to the given value.
      // If this Game Object has a Physics Body it will reset the Body.
      item.reset(this.world.randomX, this.world.randomY);

      item.frame = this.rnd.integerInRange(0, 36);

    }

  }

  render () {

    this.game.debug.text(`One item will be resurrect every second`, 32, 32);
    this.game.debug.text(`Living: ${this.veg.countLiving()} Dead: ${this.veg.countDead()}`, 32, 64);

  }

}

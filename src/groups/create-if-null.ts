import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CreateIfNullState extends BootState {
  veg: Phaser.Group;

  preload () {

    this.load.spritesheet('veg', 'assets/sprites/fruitnveg32wh37.png', 32, 32);

  }

  create () {

    this.veg = this.add.group();

    this.veg.createMultiple(5, 'veg', 0, false);

    this.time.events.repeat(Phaser.Timer.SECOND, 20, this.resurrect, this);

  }

  resurrect () {

    let x = this.world.randomX;
    let y = this.world.randomY;
    let key = 'veg';
    let frame = this.rnd.between(0, 36);

    // getFirstDead(createIfNull, x, y, key, frame) → {DisplayObject}

    // Get the first child that is dead (child.alive === false).
    // Get the first child that is dead (child.alive === false).
    // This is handy for checking if everything has been wiped out and adding to the pool as needed.
    // You can use the optional argument createIfNull to create a new Game Object if no dead ones were found in this Group.
    // It works by calling Group.create passing it the parameters given to this method, and returning the new child.
    // If a child was found , createIfNull is false and you provided the additional arguments then the child
    // will be reset and/or have a new texture loaded on it. This is handled by Group.resetChild.
    this.veg.getFirstDead(true, x, y, key, frame);

  }

  render () {

    this.game.debug.text('getFirstDead will be called every second', 32, 32);
    this.game.debug.text('Living: ' + this.veg.countLiving() + '   Dead: ' + this.veg.countDead(), 32, 64);


  }

}

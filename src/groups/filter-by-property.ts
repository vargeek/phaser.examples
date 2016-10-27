import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FilterByPropertyState extends BootState {
  items: Phaser.Group;

  preload () {

    this.load.image('blue', 'assets/sprites/blue_ball.png');
    this.load.image('red', 'assets/sprites/orb-red.png');
    this.load.image('card', 'assets/sprites/mana_card.png');
    this.load.image('hotdog', 'assets/sprites/hotdog.png');

  }

  create () {

    this.items = this.add.group();

    for (let index = 0; index < 10; index++) {

      this.items.create(this.world.randomX, this.world.randomY, 'blue');
      this.items.create(this.world.randomX, this.world.randomY, 'red');
      this.items.create(this.world.randomX, this.world.randomY, 'card');

    }

    this.input.onDown.add(this.pickCard, this);

  }

  pickCard () {

    // iterate(key, value, returnType, callback, callbackContext, args) → {any}

    // Iterates over the children of the group performing one of several actions for matched children.
    // A child is considered a match when it has a property, named key, whose value is equal to value
    // according to a strict equality comparison.
    // The result depends on the returnType:
    // RETURN_TOTAL:
    // The callback, if any, is applied to all matching children. The number of matched children is returned.
    // RETURN_NONE:
    // The callback, if any, is applied to all matching children. No value is returned.
    // RETURN_CHILD:
    // The callback, if any, is applied to the first matching child and the first matched child is returned.
    // If there is no matching child then null is returned.
    // If args is specified it must be an array. The matched child will be assigned to the first
    // element and the entire array will be applied to the callback function.
    let card = this.items.iterate('key', 'card', Phaser.Group.RETURN_CHILD) as Phaser.Sprite;
    if (card !== null) {
      card.loadTexture('hotdog');
    }

  }

}

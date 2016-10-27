import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SetAllState extends BootState {

  baseIncSpeed = 0.006;

  preload () {

    this.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);

  }

  create () {

    for (let index = 0; index < 3; index++) {
      this.add.sprite(200, 98 * (index + 1), 'item', index);
      this.add.sprite(388, 98 * (index + 1), 'item', index + 3);
    }

    this.input.onTap.add(this.resetAlpha, this);

  }

  resetAlpha () {

    // Set "alpha" value of all the childs.
    // setAll(key, value, checkAlive, checkVisible, operation, force)

    // Quickly set the same property across all children of this group to a new value.
    // This call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children.
    // If you need that ability please see Group.setAllChildren.
    // The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.

    // setAllChildren(key, value, checkAlive, checkVisible, operation, force)
    // Quickly set the same property across all children of this group, and any child Groups, to a new value.
    // If this group contains other Groups then the same property is set across their children as well, iterating down until it reaches the bottom.
    // Unlike with setAll the property is NOT set on child Groups itself.
    // The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.
    this.world.setAll('alpha', Math.random());

  }

  render () {

    this.game.debug.text('Tap or click to set random alpha of all the items.', 240, 480);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RemoveState extends BootState {
  items: Phaser.Group;

  preload () {

    this.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);
    this.load.image('rect', 'assets/tests/200x100corners.png');

  }

  create () {

    this.items = this.add.group();

    for (let index = 0; index < 6; index++) {

      let item = this.items.create(90, 16 + 90 * index, 'item', index) as Phaser.Sprite;

      item.name = `block${index}`;

      item.inputEnabled = true;

      item.input.enableDrag();

      // Then we make it snap to 90x90 grids.
      // 自动对齐网格
      // enableSnap(snapX, snapY, onDrag, onRelease, snapOffsetX, snapOffsetY)
      // Make this Sprite snap to the given grid either during drag or when it's released.
      // For example 16x16 as the snapX and snapY would make the sprite snap to every 16 pixels.
      item.input.enableSnap(90, 90, false, true);

      item.events.onDragStop.add(this.dropHandler, this);

    }

  }

  dropHandler(item: Phaser.Sprite, pointer: Phaser.Pointer) {

    if (item.x < 90) {
      item.x = 90
    }
    else if (item.x > 400) {

      //  Remove the item from the Group.
      // remove(child, destroy, silent) → {boolean}

      // Removes the given child from this group.
      // This will dispatch an onRemovedFromGroup event from the child (if it has one), and optionally destroy the child.
      // If the group cursor was referring to the removed child it is updated to refer to the next child.
      this.items.remove(item);
    }

  }

  render () {

    this.game.debug.text('Group size: ' + this.items.total, 74, 580);
    this.game.debug.text('Drop here to remove item from the Group', 394, 24);


  }

}

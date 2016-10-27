import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ReplaceState extends BootState {
  left: Phaser.Group;
  right: Phaser.Group;

  selected: Phaser.Sprite = null;

  leftText: Phaser.Text;
  rightText: Phaser.Text;


  preload () {

    this.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);

  }

  create () {

    this.left = this.add.group();
    this.right = this.add.group();

    for (let index = 0; index < 3; index++) {
      let item = this.left.create(290, 98 * (index + 1), 'item', index) as Phaser.Sprite;

      item.inputEnabled = true;
      item.events.onInputUp.add(this.select, this);

      item = this.right.create(400, 98 * (index + 1), 'item', index + 3);
      item.inputEnabled = true;
      item.events.onInputUp.add(this.select, this);
    }

    this.leftText = this.add.text(290, 20, '', { font: '14px Arial', fill: '#fff' });
    this.rightText = this.add.text(400, 20, '', { font: '14px Arial', fill: '#fff' });

    this.leftText.text = "Left Group\nTotal: " + this.left.total;
    this.rightText.text = "Right Group\nTotal: " + this.right.total;

    this.add.text(260, 450, 'Click one item, then another to replace it', { font: '14px Arial', fill: '#fff' });

  }

  select (item: Phaser.Sprite, pointer: Phaser.Pointer) {

    if (!this.selected) {
      this.selected = item;
      this.selected.alpha = 0.5;
    }
    else {
      if (this.selected.parent !== item.parent) {
        this.add.tween(item).to({x: this.selected.x, y: this.selected.y}, 500, Phaser.Easing.Quadratic.Out, true);

        // replace(oldChild, newChild) → {any}

        // Replaces a child of this Group with the given newChild. The newChild cannot be a member of this Group.
        // If Group.enableBody is set, then a physics body will be created on the object, so long as one does not already exist.
        // If Group.inputEnableChildren is set, then an Input Handler will be created on the object, so long as one does not already exist.

        (this.selected.parent as Phaser.Group).replace(this.selected , item);
        this.selected.inputEnabled = false;

        this.leftText.text = `Left Group\nTotal: ${this.left.total}`;
        this.rightText.text = `Right Group\nTotal: ${this.right.total}`;

        this.selected = null;
      }
      else {
        this.selected.alpha = 1;
        this.selected = item;
        this.selected.alpha = 0.5;
      }
    }

  }

}

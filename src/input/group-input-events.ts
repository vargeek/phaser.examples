import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GroupInputEventsState extends BootState {
  text = 'Interact with the Sprites.';
  group1: Phaser.Group;
  group2: Phaser.Group;

  preload () {

    this.load.image('beball', 'assets/sprites/beball1.png');
    this.load.image('bikkuriman', 'assets/sprites/bikkuriman.png');

  }

  create () {

    this.group1 = this.add.group();
    this.group2 = this.add.group();

    this.group1.inputEnableChildren = true;
    this.group2.inputEnableChildren = true;

    for (let index = 0; index < 10; index++) {
      let sprite1 = this.group1.create(64 + 64 * index, 150, 'beball') as Phaser.Sprite;
      sprite1.name = `group1-child-${index}`;

      let sprite2 = this.group2.create(64 + 64 * index, 350, 'bikkuriman');
      sprite2.name = `group2-child-${index}`;
    }

    //  And now we'll listen to the Group events
    // http://localhost:3000/Phaser.Group.html#onChildInputDown
    // onChildInputDown :Phaser.Signal
    // This Signal is dispatched whenever a child of this Group emits an onInputDown signal as a result
    // of having been interacted with by a Pointer. You can bind functions to this Signal instead of to
    // every child Sprite.

    // This Signal is sent 2 arguments: A reference to the Sprite that triggered the signal, and
    // a reference to the Pointer that caused it.
    this.group1.onChildInputDown.add(this.onDown, this);
    this.group2.onChildInputDown.add(this.onDown, this);

    this.group1.onChildInputOver.add(this.onOver, this);
    this.group2.onChildInputOver.add(this.onOver, this);

    this.group1.onChildInputOut.add(this.onOut, this);
    this.group2.onChildInputOut.add(this.onOut, this);

  }

  onDown (sprite: Phaser.Sprite) {

    this.text = `onDown: ${sprite.name}`;
    sprite.tint = 0x00ff00;

  }

  onOver (sprite: Phaser.Sprite) {

    this.text = `onOver: ${sprite.name}`;
    sprite.tint = 0xff0000;

  }

  onOut (sprite: Phaser.Sprite) {

    this.text = `onOut: ${sprite.name}`;
    sprite.tint = 0xffffff;

  }

  render () {

    this.game.debug.text(this.text, 32, 32);

  }

}

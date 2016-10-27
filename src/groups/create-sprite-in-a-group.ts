import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CreateSpriteInAGroupState extends BootState {
  friendAndFoe: Phaser.Group;
  enemies: Phaser.Group;

  preload () {

    this.load.image(AssetID.ufo, 'assets/sprites/ufo.png');
    this.load.image(AssetID.baddie, 'assets/sprites/space-baddie.png');

  }

  create () {

    this.friendAndFoe = this.add.group();
    this.enemies = this.add.group();

    // create(x, y, key, frame, exists, index) → {DisplayObject}

    // Creates a new Phaser.Sprite object and adds it to the top of this group.
    // Use classType to change the type of object created.
    // The child is automatically added to the top of the group, and is displayed above every previous child.
    // Or if the optional index is specified, the child is added at the location specified by the index value,
    // this allows you to control child ordering.

    // If Group.enableBody is set, then a physics body will be created on the object, so long as one does not already exist.
    // If Group.inputEnableChildren is set, then an Input Handler will be created on the object, so long as one does not already exist.
    this.friendAndFoe.create(200, 240, AssetID.ufo)

    for (let index = 0; index < 8; index++) {
      this.createBaddie();
    }

    this.input.onTap.add(this.createBaddie, this);

  }

  createBaddie () {
    this.enemies.create(360 + Math.random() * 200, 120 + Math.random() * 200, AssetID.baddie);
  }

  render () {

    this.game.debug.text('Tap screen or click to create new baddies.', 16, 24);

  }

}

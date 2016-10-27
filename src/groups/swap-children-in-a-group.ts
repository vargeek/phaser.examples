import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SwapChildrenInAGroupState extends BootState {
  atari1: Phaser.Sprite;
  atari2: Phaser.Sprite;


  preload () {

    this.load.image('atari1', 'assets/sprites/atari130xe.png');
    this.load.image('atari2', 'assets/sprites/atari800xl.png');


  }

  create () {

    this.atari1 = this.add.sprite(100, 100, 'atari1');
    this.atari2 = this.add.sprite(250, 90, 'atari2');

    this.input.onTap.add(this.swapSprites, this);

  }

  swapSprites () {

    //The 2 Sprites are in the global world Group (World class extends the Group class), but this will work for any Group:
    // swap(child1, child2)

    // 交换两个子元素在数组中的位置
    // waps the position of two children in this group.
    // Both children must be in this group, a child cannot be swapped with itself, and unparented children cannot be swapped.
    this.world.swap(this.atari1, this.atari2);

  }

  render () {

    this.game.debug.text('Tap screen to swap the children and therefore swap their indexes.', 10, 280);

  }

}

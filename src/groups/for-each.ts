import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ForEachState extends BootState {
  baseAlphaIncSpeed = 0.006;

  preload () {

    this.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);

  }

  create () {

    for (let index = 0; index < 3; index++) {
      (this.add.sprite(290, 98 * (index + 1),'item', index) as any).alphaIncSpeed = this.baseAlphaIncSpeed * (index + 1);
      (this.add.sprite(388, 98 * (index + 1), 'item', index + 3) as any).alphaIncSpeed = this.baseAlphaIncSpeed * (index + 4);
    }

  }

  update () {

    // Animating alpha property of each item using forEach() method.
    // forEach(callback, callbackContext, checkExists, args)

    // Call a function on each child in this group.
    // Additional arguments for the callback can be specified after the checkExists parameter.
    // Note: This check will skip any children which are Groups themselves.
    this.world.forEach(function (item: any) {

      item.alpha -= item.alphaIncSpeed;
      if (item.alpha < 0.001 || item.alpha > 0.999) {
        item.alphaIncSpeed *= -1;
      }

    }, undefined);

  }

  render () {

    this.game.debug.text('Alpha of items is always changing.', 280, 480);

  }

}

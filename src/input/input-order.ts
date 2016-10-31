import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class InputOrderState extends BootState {
  text = 'Click the Sprites';

  preload () {

    this.load.image('block', 'assets/sprites/block.png');

  }

  create () {

    for (let index = 0; index < 10; index++) {

      let sprite = this.add.sprite(64 + 64 * index, 200 + index * 4, 'block');

      sprite.name = `block ${index}`;
      sprite.inputEnabled = true;
      sprite.events.onInputDown.add(this.onClickSprite, this);

    }

  }

  onClickSprite (sprite: Phaser.Sprite) {

    // http://localhost:3000/Phaser.Sprite.html#renderOrderID
    // <readonly> renderOrderID :number
    // The render order ID is used internally by the renderer and Input Manager and should not be modified.
    // This property is mostly used internally by the renderers, but is exposed for the use of plugins.
    this.text = `You clicked: ${sprite.name} RenderOrderID: ${sprite.renderOrderID}`;
    sprite.tint = 0xff0000;

  }

  render () {

    this.game.debug.text(this.text, 32, 32);

  }

}

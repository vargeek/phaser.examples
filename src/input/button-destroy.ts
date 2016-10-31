import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ButtonDestroyState extends BootState {
  button: Phaser.Button;

  preload () {

    this.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);

  }

  create () {

    this.stage.backgroundColor = '#4b0049';
    this.button = this.add.button(this.world.centerX - 95, 460, 'button', this.nukeButton, this, 1, 2, 0);

  }

  nukeButton () {

    // http://localhost:3000/Phaser.Button.html#pendingDestroy
    // pendingDestroy :boolean
    // 在下一个 logic update 摧毁， 所以可以在button的回调里销毁这个button
    // A Game Object is that is pendingDestroy is flagged to have its destroy method called on the next logic update.
    // You can set it directly to allow you to flag an object to be destroyed on its next update.

    // This is extremely useful if you wish to destroy an object from within one of its own callbacks
    // such as with Buttons or other Input events.
    this.button.pendingDestroy = true;
    let text = this.add.text(this.world.centerX, this.world.centerY, '- button nuked -', {font: '64px Arial', fill: '#ffffff'});
    text.anchor.set(0.5);

  }

}

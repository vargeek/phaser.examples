import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ButtonOpenPopupState extends BootState {
  button: Phaser.Button;
  popup: Phaser.Sprite;
  tween: Phaser.Tween = null;

  preload () {

    this.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
    this.load.image('background', 'assets/pics/bubble-on.png');
    this.load.image('close', 'assets/sprites/orb-red.png');

  }

  create () {

    this.stage.backgroundColor = '#4b0049';

    this.button = this.add.button(this.world.centerX - 95, 460, 'button', this.openWindow, this, 2, 1, 0);

    // http://localhost:3000/Phaser.InputHandler.html#useHandCursor
    // useHandCursor :boolean
    // On a desktop browser you can set the 'hand' cursor to appear when moving over the Sprite.
    this.button.input.useHandCursor = true;

    this.popup = this.add.sprite(this.world.centerX, this.world.centerY, 'background');
    this.popup.alpha = 0.8;
    this.popup.anchor.set(0.5);
    this.popup.inputEnabled = true;
    this.popup.input.enableDrag();

    let pw = (this.popup.width / 2) - 30;
    let ph = (this.popup.height / 2) - 8;

    let closeButton = this.make.sprite(pw, -ph, 'close');
    closeButton.inputEnabled = true;
    // http://localhost:3000/Phaser.InputHandler.html#priorityID
    // priorityID :number

    // The priorityID is used to determine which game objects should get priority when input events occur. For example if you have several Sprites that overlap, by default the one at the top of the display list is given priority for input events. You can
    // stop this from happening by controlling the priorityID value. The higher the value, the more important they are considered to the Input events.
    closeButton.input.priorityID = 1;
    closeButton.input.useHandCursor = true;

    // events
    // All Phaser Game Objects have an Events class which contains all of the events that are dispatched when certain things happen to this
    // Game Object, or any of its components.
    closeButton.events.onInputDown.add(this.closeWindow, this);

    this.popup.addChild(closeButton);
    this.popup.scale.set(0.1);

  }

  openWindow () {

    if ((this.tween !== null && this.tween.isRunning)||this.popup.scale.x === 1) {
      return;
    }

    this.tween = this.add.tween(this.popup.scale).to({x: 1, y: 1}, 1000, Phaser.Easing.Elastic.Out, true);

  }

  closeWindow () {

    if (this.tween && this.tween.isRunning || this.popup.scale.x === 0.1) {
      return;
    }

    this.tween = this.add.tween(this.popup.scale).to({x: 0.1, y: 0.1}, 500, Phaser.Easing.Elastic.In, true);

  }

  render () {

    this.game.debug.text('Click to open window + drag + close', 32, 32);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MouseButtonsState extends BootState {

  preload () {

    this.load.image('mouse', 'assets/sprites/mouse_jim_sachs.png');

  }

  create () {

    this.stage.backgroundColor = '#943021';
    this.add.sprite(0, 100, 'mouse');

    // http://localhost:3000/Phaser.Mouse.html#capture
    // Phaser.Input, Phaser.Mouse
    // capture :boolean
    // if true the DOM mouse events will have event.preventDefault applied to them, if false they will propagate fully.
    this.input.mouse.capture = true;

  }

  render () {

    // http://localhost:3000/Phaser.Pointer.html#leftButton
    // leftButton :Phaser.DeviceButton
    // If this Pointer is a Mouse or Pen / Stylus then you can access its left button directly through this property.
    // The DeviceButton has its own properties such as isDown, duration and methods like justReleased for more fine-grained
    // button control.
    this.game.debug.text("Left Button: " + this.game.input.activePointer.leftButton.isDown, 300, 132);
    this.game.debug.text("Middle Button: " + this.game.input.activePointer.middleButton.isDown, 300, 196);
    this.game.debug.text("Right Button: " + this.game.input.activePointer.rightButton.isDown, 300, 260);

  }

}

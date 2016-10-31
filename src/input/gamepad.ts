import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GamepadState extends BootState {
  sprite: Phaser.Sprite;
  indicator: Phaser.Sprite;
  pad1: Phaser.SinglePad;


  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');
    this.load.spritesheet('controller-indicator', 'assets/misc/controller-indicator.png', 16,16);

  }

  create () {

    this.stage.backgroundColor = '#736357';

    this.sprite = this.add.sprite(300, 300, 'phaser');
    this.sprite.anchor.set(0.5);

    this.indicator = this.add.sprite(10, 10, 'controller-indicator');
    this.indicator.scale.x = this.indicator.scale.y = 2;
    this.indicator.animations.frame = 1;

    // http://localhost:3000/Phaser.Gamepad.html#start
    // game.input.gamepad: Phaser.Input, Phaser.Gamepad
    // start()
    // Starts the Gamepad event handling.
    // This MUST be called manually before Phaser will start polling the Gamepad API.
    this.input.gamepad.start();

    // To listen to buttons from a specific pad listen directly on that pad game.input.gamepad.padX, where X = pad 1-4
    // http://localhost:3000/Phaser.Gamepad.html#pad1
    // game.input.gamepad.pad1: Phaser.Input, Phaser.Gamepad, Phaser.SinglePad
    // Gamepad #1
    this.pad1 = this.input.gamepad.pad1;

  }

  update () {

    // Pad "connected or not" indicator
    // 激活状态
    // http://localhost:3000/Phaser.Gamepad.html#supported
    // <readonly> supported :boolean
    // Whether or not gamepads are supported in current browser.

    // http://localhost:3000/Phaser.Gamepad.html#active
    // <readonly> active :boolean
    // If the gamepad input is active or not - if not active it should not be updated from Input.js

    // http://localhost:3000/Phaser.SinglePad.html#connected
    // <readonly> connected :boolean
    // Whether or not this particular gamepad is connected or not.
    if (this.input.gamepad.supported && this.input.gamepad.active && this.pad1.connected) {
      this.indicator.animations.frame = 0;
    }
    else {
      this.indicator.animations.frame = 1;
    }

    // http://localhost:3000/Phaser.SinglePad.html#isDown
    // isDown(buttonCode) → {boolean}
    // Returns true if the button is pressed down.

    // http://localhost:3000/Phaser.SinglePad.html#axis
    // axis(axisCode) → {number}
    // Returns value of requested axis.
    if (this.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1) {
      this.sprite.x--;
    }
    else if (this.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1) {
      this.sprite.x++;
    }

    if (this.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1) {
      this.sprite.y--;
    }
    else if (this.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1) {
      this.sprite.y++;
    }

    // http://localhost:3000/Phaser.SinglePad.html#justPressed
    // justPressed(buttonCode, duration) → {boolean}
    // Returns the "just pressed" state of a button from this gamepad. Just pressed is considered true if the button was pressed down within the duration given (default 250ms).
    if (this.pad1.justPressed(Phaser.Gamepad.XBOX360_A)) {
      this.sprite.angle += 5;
    }

    if (this.pad1.justReleased(Phaser.Gamepad.XBOX360_B)) {
      this.sprite.scale.x += 0.01;
      this.sprite.scale.y = this.sprite.scale.x;
    }

    // 快速移动
    if (this.pad1.connected) {

      let rightStickX = this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X);
      let rightStickY = this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y);

      if (rightStickX) {
        this.sprite.x += rightStickX * 10;
      }

      if (rightStickY) {
        this.sprite.y += rightStickY * 10;
      }
    }

  }

}

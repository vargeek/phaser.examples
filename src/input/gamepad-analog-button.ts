import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GamepadAnalogButtonState extends BootState {
  indicator: Phaser.Sprite;
  leftTriggerGfx: Phaser.Graphics;
  rightTriggerGfx: Phaser.Graphics;
  leftTriggerButton: Phaser.DeviceButton;
  rightTriggerButton: Phaser.DeviceButton;

  pad: Phaser.SinglePad;

  preload () {

    this.load.spritesheet('controller-indicator', 'assets/misc/controller-indicator.png', 16,16);

  }

  create () {

    this.stage.backgroundColor = '#736357';

    this.setupScene();

    this.input.gamepad.start();

    this.pad = this.input.gamepad.pad1;

    // http://localhost:3000/Phaser.Singlepad.html#addCallbacks
    // addCallbacks(context, callbacks)
    // Add callbacks to this Gamepad to handle connect / disconnect / button down / button up / axis change / float value buttons.
    // callbacks: Object that takes six different callbak methods:
    // onConnectCallback, onDisconnectCallback, onDownCallback, onUpCallback, onAxisCallback, onFloatCallback
    this.pad.addCallbacks(this, {onConnect: this.addButtons});

  }

  update () {

    if (this.input.gamepad.supported && this.input.gamepad.active && this.input.gamepad.pad1.connected) {
      this.indicator.animations.frame = 0;
    }
    else {
      this.indicator.animations.frame = 1;
    }

  }

  addButtons () {

    // http://localhost:3000/Phaser.SinglePad.html#getButton
    // Phaser.DeviceButton
    // Gets a DeviceButton object from this controller to be stored and referenced locally.
    // The DeviceButton object can then be polled, have events attached to it, etc.
    this.leftTriggerButton = this.pad.getButton(Phaser.Gamepad.XBOX360_LEFT_TRIGGER);

    this.leftTriggerButton.onDown.add(this.onLeftTrigger.bind(this));
    this.leftTriggerButton.onUp.add(this.onLeftTrigger.bind(this));
    
    // http://localhost:3000/Phaser.DeviceButton.html#onFloat
    // onFloat :Phaser.Signal
    // Gamepad only.
    // This Signal is dispatched every time this DeviceButton changes floating value (between, but not exactly, 0 and 1).
    // When dispatched it sends 2 arguments: A reference to this DeviceButton and the value of the button.
    this.leftTriggerButton.onFloat.add(this.onLeftTrigger.bind(this));


    this.rightTriggerButton = this.pad.getButton(Phaser.Gamepad.XBOX360_RIGHT_TRIGGER);

    this.rightTriggerButton.onDown.add(this.onRightTrigger.bind(this));
    this.rightTriggerButton.onUp.add(this.onRightTrigger.bind(this));
    this.rightTriggerButton.onFloat.add(this.onRightTrigger.bind(this));

  }

  onLeftTrigger (button: Phaser.DeviceButton, value: number) {

    this.leftTriggerGfx.clear();
    this.leftTriggerGfx.beginFill(0xff700b, 1);
    this.leftTriggerGfx.lineStyle(2, 0xffffff, 1);
    this.leftTriggerGfx.drawRect(0, -value * 500, 50, value * 500 + 5);
    this.leftTriggerGfx.endFill();

  }

  onRightTrigger (button: Phaser.DeviceButton, value: number) {

    this.rightTriggerGfx.clear();
    this.rightTriggerGfx.beginFill(0xff700b, 1);
    this.rightTriggerGfx.lineStyle(2, 0xffffff, 1);
    this.rightTriggerGfx.drawRect(0, -value * 500, 50, value * 500 + 5);

  }

  setupScene () {

    this.indicator = this.add.sprite(10,10, 'controller-indicator');
    this.indicator.scale.x = this.indicator.scale.y = 2;
    this.indicator.animations.frame = 0;

    this.leftTriggerGfx = this.add.graphics(300,550);
    this.leftTriggerGfx.beginFill(0xFF700B, 1);
    this.leftTriggerGfx.lineStyle(2, 0xFFFFFF, 1);
    this.leftTriggerGfx.drawRect(0, 0, 50, 5);
    this.leftTriggerGfx.endFill();

    this.rightTriggerGfx = this.add.graphics(450,550);
    this.rightTriggerGfx.beginFill(0xFF700B, 1);
    this.rightTriggerGfx.lineStyle(2, 0xFFFFFF, 1);
    this.rightTriggerGfx.drawRect(0, 0, 50, 5);
    this.rightTriggerGfx.endFill();
  }

}

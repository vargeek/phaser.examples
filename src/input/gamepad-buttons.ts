import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GamepadButtonsState extends BootState {
  pad: Phaser.SinglePad;
  buttonA: Phaser.DeviceButton;
  buttonB: Phaser.DeviceButton;
  buttonX: Phaser.DeviceButton;
  buttonY: Phaser.DeviceButton;
  buttonDPadLeft: Phaser.DeviceButton;
  buttonDPadRight: Phaser.DeviceButton;
  buttonDPadUp: Phaser.DeviceButton;
  buttonDPadDown: Phaser.DeviceButton;

  imageA: Phaser.Image;
  imageB: Phaser.Image;
  imageX: Phaser.Image;
  imageY: Phaser.Image;
  imageDPad: Phaser.Image;



  preload () {

    this.load.atlas('xbox360', 'assets/controllers/xbox360.png', 'assets/controllers/xbox360.json');

  }

  create () {

    this.game.stage.backgroundColor = '#2d2d2d';

    //  Add some images
    this.imageA = this.add.image(500, 300, 'xbox360', '360_A');
    this.imageB = this.add.image(600, 200, 'xbox360', '360_B');
    this.imageX = this.add.image(400, 200, 'xbox360', '360_X');
    this.imageY = this.add.image(500, 100, 'xbox360', '360_Y');
    this.imageDPad = this.add.image(100, 200, 'xbox360', '360_Dpad');

    this.input.gamepad.start();

    this.pad = this.input.gamepad.pad1;

    this.pad.addCallbacks(this, {onConnect: this.addButtons});

  }

  addButtons () {

    // abxy
    this.buttonA = this.pad.getButton(Phaser.Gamepad.XBOX360_A);
    this.buttonB = this.pad.getButton(Phaser.Gamepad.XBOX360_B);
    this.buttonX = this.pad.getButton(Phaser.Gamepad.XBOX360_X);
    this.buttonY = this.pad.getButton(Phaser.Gamepad.XBOX360_Y);

    this.buttonA.onDown.add(this.onDown, this);
    this.buttonB.onDown.add(this.onDown, this);
    this.buttonX.onDown.add(this.onDown, this);
    this.buttonY.onDown.add(this.onDown, this);

    this.buttonA.onUp.add(this.onUp, this);
    this.buttonB.onUp.add(this.onUp, this);
    this.buttonX.onUp.add(this.onUp, this);
    this.buttonY.onUp.add(this.onUp, this);

    //  These won't work in Firefox, sorry! It uses totally different button mappings

    // up right bottom left
    this.buttonDPadLeft = this.pad.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT);
    this.buttonDPadRight = this.pad.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT);
    this.buttonDPadUp = this.pad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP);
    this.buttonDPadDown = this.pad.getButton(Phaser.Gamepad.XBOX360_DPAD_DOWN);

    this.buttonDPadLeft.onDown.add(this.onDown, this);
    this.buttonDPadRight.onDown.add(this.onDown, this);
    this.buttonDPadUp.onDown.add(this.onDown, this);
    this.buttonDPadDown.onDown.add(this.onDown, this);

    this.buttonDPadLeft.onUp.add(this.onUp, this);
    this.buttonDPadRight.onUp.add(this.onUp, this);
    this.buttonDPadUp.onUp.add(this.onUp, this);
    this.buttonDPadDown.onUp.add(this.onUp, this);

  }
  

  onDown (button: Phaser.DeviceButton, value: number) {

    if (button.buttonCode === Phaser.Gamepad.XBOX360_A)
    {
      this.imageA.alpha = 0.5;
    }
    else if (button.buttonCode === Phaser.Gamepad.XBOX360_B)
    {
      this.imageB.alpha = 0.5;
    }
    else if (button.buttonCode === Phaser.Gamepad.XBOX360_X)
    {
      this.imageX.alpha = 0.5;
    }
    else if (button.buttonCode === Phaser.Gamepad.XBOX360_Y)
    {
      this.imageY.alpha = 0.5;
    }
    else if (button.buttonCode === Phaser.Gamepad.XBOX360_DPAD_LEFT)
    {
      this.imageDPad.frameName = '360_Dpad_Left';
    }
    else if (button.buttonCode === Phaser.Gamepad.XBOX360_DPAD_RIGHT)
    {
      this.imageDPad.frameName = '360_Dpad_Right';
    }
    else if (button.buttonCode === Phaser.Gamepad.XBOX360_DPAD_UP)
    {
      this.imageDPad.frameName = '360_Dpad_Up';
    }
    else if (button.buttonCode === Phaser.Gamepad.XBOX360_DPAD_DOWN)
    {
      this.imageDPad.frameName = '360_Dpad_Down';
    }

  }

  onUp (button: Phaser.DeviceButton, value: number) {

    if (button.buttonCode === Phaser.Gamepad.XBOX360_A)
    {
      this.imageA.alpha = 1;
    }
    else if (button.buttonCode === Phaser.Gamepad.XBOX360_B)
    {
      this.imageB.alpha = 1;
    }
    else if (button.buttonCode === Phaser.Gamepad.XBOX360_X)
    {
      this.imageX.alpha = 1;
    }
    else if (button.buttonCode === Phaser.Gamepad.XBOX360_Y)
    {
      this.imageY.alpha = 1;
    }
    else
    {
      this.imageDPad.frameName = '360_Dpad';
    }


  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GamepadHotkeysState extends BootState {
  button1: Phaser.DeviceButton;
  button2: Phaser.DeviceButton;
  button3: Phaser.DeviceButton;
  pad: Phaser.SinglePad;

  indicator: Phaser.Sprite;

  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');
    this.load.image('logo', 'assets/sprites/phaser_tiny.png');
    this.load.image('pineapple', 'assets/sprites/pineapple.png');
    this.load.spritesheet('controller-indicator', 'assets/misc/controller-indicator.png', 16,16);

  }

  create () {

    this.stage.backgroundColor = '#736357';

    this.input.gamepad.start();

    this.indicator = this.add.sprite(10, 10, 'controller-indicator');
    this.indicator.scale.x = this.indicator.scale.y = 2;
    this.indicator.animations.frame = 1;

    this.pad = this.input.gamepad.pad1;
    this.pad.addCallbacks(this, {onConnect: this.addButtons});

  }

  addButtons () {

    this.button1 = this.input.gamepad.pad1.getButton(Phaser.Gamepad.BUTTON_0);
    this.button1.onDown.add(this.addPhaserDude, this);

    this.button2 = this.input.gamepad.pad1.getButton(Phaser.Gamepad.BUTTON_1);
    this.button2.onDown.add(this.addPhaserLogo, this);

    this.button3 = this.input.gamepad.pad1.getButton(Phaser.Gamepad.BUTTON_2);
    this.button3.onDown.add(this.addPineapple, this);


  }

  update () {

    if (this.input.gamepad.supported && this.input.gamepad.active && this.input.gamepad.pad1.connected) {
      this.indicator.animations.frame = 0;
    }
    else {
      this.indicator.animations.frame = 1;
    }

  }


  addPhaserDude () {

    this.add.sprite(this.world.randomX, this.world.randomY, 'phaser');

  }

  addPhaserLogo () {

    this.add.sprite(this.world.randomX, this.world.randomY, 'logo');

  }

  addPineapple () {

    this.add.sprite(this.world.randomX, this.world.randomY, 'pineapple');

  }

}

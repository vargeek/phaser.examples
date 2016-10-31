import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GamepadMultiplePadsState extends BootState {
  pad1: Phaser.SinglePad;
  pad2: Phaser.SinglePad;

  indicator1: Phaser.Sprite;
  indicator2: Phaser.Sprite;

  player1: Phaser.Sprite;
  player2: Phaser.Sprite;

  melon: Phaser.Sprite;

  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');
    this.load.image('melon', 'assets/sprites/melon.png');
    this.load.spritesheet('controller-indicator', 'assets/misc/controller-indicator.png', 16,16);

  }

  create () {

    this.stage.backgroundColor = '#736357';
    this.input.gamepad.start();


    this.indicator1 = this.add.sprite(10,10, 'controller-indicator');
    this.indicator1.scale.x = this.indicator1.scale.y = 2;
    this.indicator1.animations.frame = 1;

    this.indicator2 = this.add.sprite(10,50, 'controller-indicator');
    this.indicator2.scale.x = this.indicator2.scale.y = 2;
    this.indicator2.animations.frame = 1;

    this.player1 = this.add.sprite(300, 300, 'phaser');
    this.player1.anchor.setTo(0.5,0.5);

    this.player2 = this.add.sprite(450, 300, 'phaser');
    this.player2.anchor.setTo(0.5,0.5);

    // This little melon dude is controlled by all gamepads!
    this.melon = this.add.sprite(375, 350, 'melon');
    this.melon.anchor.setTo(0.5,0.5);

    // pad1 pad2
    this.pad1 = this.input.gamepad.pad1;
    this.pad2 = this.input.gamepad.pad2;

  }

  update () {

    // Pad "connected or not" indicator
    if(this.input.gamepad.supported && this.input.gamepad.active && this.input.gamepad.pad1.connected) {
        this.indicator1.animations.frame = 0;
    } else {
        this.indicator1.animations.frame = 1;
    }
    if(this.input.gamepad.supported && this.input.gamepad.active && this.input.gamepad.pad2.connected) {
        this.indicator2.animations.frame = 0;
    } else {
        this.indicator2.animations.frame = 1;
    }


    if (this.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)
    {
        this.player1.x--;
    }
    if (this.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)
    {
        this.player1.x++;
    }
    if (this.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1)
    {
        this.player1.y--;
    }
    if (this.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1)
    {
        this.player1.y++;
    }


    if (this.pad2.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || this.pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)
    {
        this.player2.x--;
    }
    if (this.pad2.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || this.pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)
    {
        this.player2.x++;
    }
    if (this.pad2.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || this.pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1)
    {
        this.player2.y--;
    }
    if (this.pad2.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || this.pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1)
    {
        this.player2.y++;
    }


    // isDown on game.input.gamepad checks ALL gamepad buttons
    if (this.input.gamepad.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT))
    {
        this.melon.x--;
    }
    if (this.input.gamepad.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT))
    {
        this.melon.x++;
    }
    if (this.input.gamepad.isDown(Phaser.Gamepad.XBOX360_DPAD_UP))
    {
        this.melon.y--;
    }
    if (this.input.gamepad.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN))
    {
        this.melon.y++;
    }

  }

}

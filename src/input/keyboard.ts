import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class KeyboardState extends BootState {
  ufo: Phaser.Sprite;
  leftBtn: Phaser.Sprite;
  rightBtn: Phaser.Sprite;
  speed = 4;

  preload () {

    this.world.setBounds(0,0,1280, 600);

    this.load.image('ground', 'assets/tests/ground-2x.png');
    this.load.image('river', 'assets/tests/river-2x.png');
    this.load.image('sky', 'assets/tests/sky-2x.png');
    this.load.image('cloud0', 'assets/tests/cloud-big-2x.png');
    this.load.image('cloud1', 'assets/tests/cloud-narrow-2x.png');
    this.load.image('cloud2', 'assets/tests/cloud-small-2x.png');

    this.load.spritesheet('button', 'assets/buttons/arrow-button.png', 112, 95);

    this.load.image('ufo', 'assets/sprites/ufo.png');

  }

  create () {

    this.add.tileSprite(0, 0,1280,600, 'sky');
    this.add.sprite(0, 360, 'ground');
    this.add.sprite(0, 400, 'river');
    this.add.sprite(200, 120, 'cloud0');
    this.add.sprite(-60, 120, 'cloud1');
    this.add.sprite(900, 170, 'cloud2');

    this.ufo = this.add.sprite(320, 240, 'ufo');
    this.ufo.anchor.setTo(0.5);

    this.camera.follow(this.ufo);

    this.leftBtn = this.add.sprite(160 - 112, 200, 'button', 0);
    this.leftBtn.alpha = 0;
    this.rightBtn = this.add.sprite(640 - 112, 200, 'button', 1);
    this.rightBtn.alpha = 0;

  }

  update () {

    // http://localhost:3000/Phaser.Keyboard.html#isDown
    // isDown(keycode) → {boolean}
    // Returns true of the key is currently pressed down. Note that it can only detect key presses on the web browser.
    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.ufo.x -= this.speed;
      this.ufo.angle = -15;
      this.leftBtn.alpha = 0.6;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.ufo.x += this.speed;
      this.ufo.angle = 15;
      this.rightBtn.alpha = 0.6;
    }
    else {
      this.ufo.rotation = 0;
      this.leftBtn.alpha = this.rightBtn.alpha = 0;
    }

  }

  render () {

    this.game.debug.text('Hold left/right to move the ufo.', 32, 32);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class OverrideDefaultControlsState extends BootState {
  sky: Phaser.Sprite;
  ufo: Phaser.Sprite;
  leftBtn: Phaser.Sprite;
  rightBtn: Phaser.Sprite;
  spaceBtn: Phaser.Sprite;
  speed = 4;



  preload () {

    this.world.setBounds(0, 0, 1280, 600);
    this.load.image('ground', 'assets/tests/ground-2x.png');
    this.load.image('river', 'assets/tests/river-2x.png');
    this.load.image('sky', 'assets/tests/sky-2x.png');
    this.load.image('cloud0', 'assets/tests/cloud-big-2x.png');
    this.load.image('cloud1', 'assets/tests/cloud-narrow-2x.png');
    this.load.image('cloud2', 'assets/tests/cloud-small-2x.png');

    this.load.spritesheet('button', 'assets/buttons/arrow-button.png', 112, 95);
    this.load.image('spacebar', 'assets/buttons/spacebar.png');

    this.load.image('ufo', 'assets/sprites/ufo.png');

  }

  create () {

    this.sky = this.add.sprite(0, 0, 'sky');
    this.add.sprite(0, 360, 'ground');
    this.add.sprite(0, 400, 'river');
    this.add.sprite(200, 120, 'cloud0');
    this.add.sprite(-60, 120, 'cloud1');
    this.add.sprite(900, 170, 'cloud2');

    this.ufo = this.add.sprite(320, 240, 'ufo');
    this.ufo.anchor.set(0.5);

    this.sky.scale.setTo(2, 1);

    this.camera.follow(this.ufo);

    // Add 2 sprite to display hold direction.
    this.leftBtn = this.add.sprite(160 - 112, 200, 'button', 0);
    this.leftBtn.alpha = 0;
    this.rightBtn = this.add.sprite(640 - 112, 200, 'button', 1);
    this.rightBtn.alpha = 0;

    // Add a sprite to display spacebar press.
    this.spaceBtn = this.add.sprite(400 - 112, 100, 'spacebar');
    this.spaceBtn.alpha = 0;

    // Prevent directions and space key events bubbling up to browser,
    // since these keys will make web page scroll which is not
    // expected.
    //  Stop the following keys from propagating up to the browser
    // http://localhost:3000/Phaser.Keyboard.html#addKeyCapture
    // addKeyCapture(keycode)
    // By default when a key is pressed Phaser will not stop the event from propagating up to the browser.
    // There are some keys this can be annoying for, like the arrow keys or space bar, which make the browser window scroll.
    // The addKeyCapture method enables consuming keyboard event for specific keys so it doesn't bubble up to the the browser
    // and cause the default browser behavior.
    // Pass in either a single keycode or an array/hash of keycodes.
    this.input.keyboard.addKeyCapture([
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN,
      Phaser.Keyboard.SPACEBAR,
    ]);

  }

  update () {

    // Check key states every frame.
    // Move ONLY one of the left and right key is hold.
    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.ufo.x -= this.speed;
        this.ufo.angle = -15;
        this.leftBtn.alpha = 0.6;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.ufo.x += this.speed;
        this.ufo.angle = 15;
        this.rightBtn.alpha = 0.6;
    }
    else
    {
        this.ufo.rotation = 0;
        this.leftBtn.alpha = this.rightBtn.alpha = 0;
    }

    // 50 as a second parameter is a good choice if you are running 60FPS.
    if (this.input.keyboard.downDuration(Phaser.Keyboard.SPACEBAR, 50))
    {
        console.log('space bar pressed');
        this.spaceBtn.alpha = 1;
    }

    if (this.spaceBtn.alpha > 0)
    {
        this.spaceBtn.alpha -= 0.03;
    }

  }

  render () {

    this.game.debug.text('Hold left/right to move the ufo.', 16, 32);
    this.game.debug.text('Direction and Space key events are stopped by Phaser now,', 16, 48);
    this.game.debug.text('so they will no longer be sent to the browser', 16, 64);
    this.game.debug.text('Now you can press UP/DOWN or SPACE to see what happened.', 16, 80);


  }

}

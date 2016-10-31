import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;

export class KeyboardJustpressedState extends BootState {
  bullets: Phaser.Group;
  sprite: Phaser.Sprite;
  bullet: Phaser.Sprite;
  bulletTime = 0;

  leftKey: Phaser.Key;
  rightKey: Phaser.Key;
  spaceKey: Phaser.Key;

  textLeft: Phaser.Text;
  textRight: Phaser.Text;
  textSpace: Phaser.Text;

  textLeft2: Phaser.Text;
  textRight2: Phaser.Text;
  textSpace2: Phaser.Text;

  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');
    this.load.image('bullet', 'assets/misc/bullet0.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#2d2d2d';

    this.bullets = this.add.group();

    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    this.bullets.createMultiple(10, 'bullet');
    this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.resetBullet, this);
    this.bullets.setAll('checkWorldBounds', true);

    this.sprite = this.add.sprite(400, 550, 'phaser');
    this.physics.enable(this.sprite, Phaser.Physics.ARCADE);

	  //  Register the keys.
    //  In this example we'll create 4 specific keys (up, down, left, right) and monitor them in our update function
    // http://localhost:3000/Phaser.Keyboard.html#addKey
    // addKey(keycode) → {Phaser.Key}
    // If you need more fine-grained control over a Key you can create a new Phaser.Key object via this method.
    // The Key object can then be polled, have events attached to it, etc.
    this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

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
      Phaser.Keyboard.SPACEBAR,
    ]);

    this.textLeft = this.add.text(20, 20, "Left was pressed 250 ms ago? NO", { font: "16px Arial", fill: "#ffffff", align: "center" });
    this.textRight = this.add.text(20, 60, "Right was pressed 500 ms ago? NO", { font: "16px Arial", fill: "#ffffff", align: "center" });
    this.textSpace = this.add.text(20, 100, "Space was pressed 1000 ms ago? NO", { font: "16px Arial", fill: "#ffffff", align: "center" });

    this.textLeft2 = this.add.text(600, 20, "Is left still down? NO", { font: "16px Arial", fill: "#ffffff", align: "center" });
    this.textRight2 = this.add.text(600, 60, "Is right still down? NO", { font: "16px Arial", fill: "#ffffff", align: "center" });
    this.textSpace2 = this.add.text(600, 100, "Is space still down? NO", { font: "16px Arial", fill: "#ffffff", align: "center" });

  }

  update () {

    const body = this.sprite.body as Body;

    body.velocity.x = 0;
    body.velocity.y = 0;

    if (this.leftKey.isDown) {
      body.velocity.x = -200;
      this.textLeft2.text = 'Is left still down? YES';
    }
    else {
      this.textLeft2.text = 'Is left still down? NO';
    }

    if (this.rightKey.isDown) {
      body.velocity.x = 200;
		  this.textRight2.text = "Is right still down? YES";
    } else
    {
      this.textRight2.text = "Is right still down? NO";
    }

    if (this.spaceKey.isDown) {
      this.fireBullet();
		  this.textSpace2.text = "Is space still down? YES";
    } else {
		  this.textSpace2.text = "Is space still down? NO";
	  }

    // http://localhost:3000/Phaser.Key.html#downDuration
    // downDuration(duration) → {boolean}
    // Returns true if the Key was pressed down within the duration value given, or false if it either isn't down,
    // or was pressed down longer ago than then given duration.
    if (this.leftKey.downDuration(250)) {
      this.textLeft.text = "Left was pressed 250 ms ago? YES";
    }  else {
      this.textLeft.text = "Left was pressed 250 ms ago? NO";
    }

    if (this.rightKey.downDuration(500)) {
      this.textRight.text = "Right was pressed 500 ms ago? YES";
    } else {
      this.textRight.text = "Right was pressed 500 ms ago? NO";
    }

    if (this.spaceKey.downDuration(1000)) {
      this.textSpace.text = "Space was pressed 1000 ms ago? YES";
    } else {
      this.textSpace.text = "Space was pressed 1000 ms ago? NO";
    }

  }

  fireBullet () {

    if (this.time.now > this.bulletTime) {
      this.bullet = this.bullets.getFirstExists(false);
      if (this.bullet) {
        this.bullet.reset(this.sprite.x + 6, this.sprite.y - 8);
        (this.bullet.body as Body).velocity.y = -300;
        this.bulletTime = this.game.time.now + 250;
      }
    }

  }

  resetBullet (bullet: Phaser.Sprite) {

    bullet.kill();

  }

}

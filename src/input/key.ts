import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class KeyState extends BootState {
  sprite: Phaser.Sprite;
  upKey: Phaser.Key;
  downKey: Phaser.Key;
  leftKey: Phaser.Key;
  rightKey: Phaser.Key;

  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');

  }

  create () {

    this.stage.backgroundColor = '#736357';

    this.sprite = this.add.sprite(300, 300, 'phaser');

    //  In this example we'll create 4 specific keys (up, down, left, right) and monitor them in our update function
    // http://localhost:3000/Phaser.Keyboard.html#addKey
    // addKey(keycode) → {Phaser.Key}
    // If you need more fine-grained control over a Key you can create a new Phaser.Key object via this method.
    // The Key object can then be polled, have events attached to it, etc.
    this.upKey = this.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downKey = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

  }

  update () {

    if (this.upKey.isDown) {
      this.sprite.y--;
    }
    else if (this.downKey.isDown) {
      this.sprite.y++;
    }
    else if (this.leftKey.isDown) {
      this.sprite.x--;
    }
    else if (this.rightKey.isDown) {
      this.sprite.x++;
    }

  }

}

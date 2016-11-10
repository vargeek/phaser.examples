import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CameraViewState extends BootState {
  card: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  moving = 0;

  preload () {

    this.load.image('backdrop', 'assets/pics/remember-me.jpg');
    this.load.image('card', 'assets/sprites/mana_card.png');

  }

  create () {

    this.world.setBounds(0, 0, 1920, 1920);
    this.add.sprite(0, 0, 'backdrop');

    this.card = this.add.sprite(200, 200, 'card');

    this.cursors = this.input.keyboard.createCursorKeys();

    this.input.onDown.add(this.toggle, this);

  }

  toggle () {

    this.moving = 1 - this.moving;

  }

  update () {

    if (this.moving === 0) {
      if (this.cursors.up.isDown) {
        this.camera.y -= 4;
      }
      else if (this.cursors.down.isDown) {
        this.camera.y += 4;
      }

      if (this.cursors.left.isDown) {
        this.camera.x -= 4;
      }
      else if (this.cursors.right.isDown) {
        this.camera.x += 4;
      }
    }
    else {
      if (this.cursors.up.isDown) {
        this.card.y -= 4;
      }
      else if (this.cursors.down.isDown) {
        this.card.y += 4;
      }

      if (this.cursors.left.isDown) {
        this.card.x -= 4;
      }
      else if (this.cursors.right.isDown) {
        this.card.x += 4;
      }

    }

  }

  render () {

    this.game.debug.cameraInfo(this.camera, 500, 32);
    this.game.debug.spriteInfo(this.card, 32, 32);
    this.game.debug.text('Click to toggle sprite / camera movement with cursors', 32, 550);

  }


}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CameraShakeState extends BootState {
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('background','assets/tests/debug-grid-1920x1920.png');
    this.load.image('player','assets/sprites/phaser-dude.png');

  }

  create () {

    this.add.tileSprite(0, 0, 1920, 1920, 'background');

    this.world.setBounds(0, 0, 1920, 1920);

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.player = this.add.sprite(this.world.centerX, this.world.centerY, 'player');

    this.physics.p2.enable(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    this.input.onDown.add(this.shake, this);

  }

  shake () {

    // http://localhost:3000/Phaser.Camera.html#shake
    // shake(intensity, duration, force, direction, shakeBounds) → {boolean}
    // intensity{float=0.05}    The intensity of the camera shake. Given as a percentage of the camera size representing the maximum distance that the camera can move while shaking.
    // direction{number=Phaser.Camera.SHAKE_BOTH}     The directions in which the camera can shake. Either Phaser.Camera.SHAKE_BOTH, Phaser.Camera.SHAKE_HORIZONTAL or Phaser.Camera.SHAKE_VERTICAL.
    // shakeBounds{boolean=true}      Is the effect allowed to shake the camera beyond its bounds (if set?).

    // This creates a camera shake effect. It works by applying a random amount of additional
    // spacing on the x and y axis each frame. You can control the intensity and duration
    // of the effect, and if it should effect both axis or just one.

    // When the shake effect ends the signal Camera.onShakeComplete is dispatched.
    this.camera.shake(0.05, 500);

  }

  update () {

    this.player.body.setZeroVelocity();

    if (this.cursors.up.isDown) {
      this.player.body.moveUp(300);
    }
    else if (this.cursors.down.isDown) {
      this.player.body.moveDown(300);
    }

    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -300;
    }
    else if (this.cursors.right.isDown) {
      this.player.body.moveRight(300);
    }

  }

  render () {

    this.game.debug.text("Arrows to move. Click to shake", 32, 32);

  }

}

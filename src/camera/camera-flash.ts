import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CameraFlashState extends BootState {
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

    this.input.onDown.add(this.flash, this);

    // http://localhost:3000/Phaser.Camera.html#onFlashComplete
    // onFlashComplete :Phaser.Signal
    // This signal is dispatched when the camera flash effect completes.
    this.camera.onFlashComplete.add(this.onFlashComplete, this);

  }

  flash () {

    // http://localhost:3000/Phaser.Camera.html#flash
    // flash(color, duration, force) → {boolean}
    // force{boolean=false}     If a camera flash or fade effect is already running and force is true it will replace the previous effect, resetting the duration.

    // This creates a camera flash effect. It works by filling the game with the solid fill color specified, and then fading it away to alpha 0 over the duration given.

    // You can use this for things such as hit feedback effects.

    // When the effect ends the signal Camera.onFlashComplete is dispatched.
    this.camera.flash(0xff0000, 500);

  }

  onFlashComplete () {

    console.log('under attack');

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

    this.game.debug.text("Arrows to move. Click to flash", 32, 32);

  }

}

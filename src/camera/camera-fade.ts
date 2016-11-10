import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CameraFadeState extends BootState {
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

    // http://localhost:3000/Phaser.Camera.html#onFadeComplete
    // onFadeComplete :Phaser.Signal

    // This signal is dispatched when the camera fade effect completes.
    // When the fade effect completes you will be left with the screen black (or whatever color you faded to).
    // In order to reset this call Camera.resetFX. This is called automatically when you change State.
    this.camera.onFadeComplete.add(this.resetFade, this);

    this.input.onDown.add(this.fade, this);


  }

  resetFade () {

    // http://localhost:3000/Phaser.Camera.html#resetFX
    // resetFX()
    // Resets any active FX, such as a fade or flash and immediately clears it.
    // Useful to calling after a fade in order to remove the fade from the Stage.
    this.camera.resetFX();

  }

  fade () {

    // http://localhost:3000/Phaser.Camera.html#fade
    // fade(color, duration, force) → {boolean}
    // force{boolean=false}     If a camera flash or fade effect is already running and force is true it will replace the previous effect, resetting the duration.

    // This creates a camera fade effect. It works by filling the game with the
    // color specified, over the duration given, ending with a solid fill.

    // You can use this for things such as transitioning to a new scene.

    // The game will be left 'filled' at the end of this effect, likely obscuring everything.
    // In order to reset it you can call Camera.resetFX and it will clear the fade.
    // Or you can call Camera.flash with the same color as the fade, and it will
    // reverse the process, bringing the game back into view again.

    // When the effect ends the signal Camera.onFadeComplete is dispatched.
    this.camera.fade(0x000000, 4000);

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

    this.game.debug.text("Arrows to move. Click to fade", 32, 32);

  }


}

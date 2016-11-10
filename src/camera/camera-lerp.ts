import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CameraLerpState extends BootState {
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
    this.player.body.fixedRotation = true;

    this.cursors = this.input.keyboard.createCursorKeys();

    this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

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

    this.game.debug.cameraInfo(this.camera, 32, 32);
    this.game.debug.spriteCoords(this.player, 32, 32);

  }

}

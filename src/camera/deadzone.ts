import { BootState, IBootInfo } from '../boot.state';
import { AssetID } from '../constant';

export class DeadzoneState extends BootState {
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  static bootInfo: IBootInfo = {
    states: [],
    renderer: Phaser.CANVAS,
    bounds: {
      width: 800,
      height: 600
    }
  }


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

    this.camera.follow(this.player);

    // http://localhost:3000/Phaser.Camera.html#deadzone
    // deadzone :Phaser.Rectangle
    // Moving inside this Rectangle will not cause the camera to move.
    // deadzone是一个相对于相机静止的矩形范围。相机follow精灵时，当精灵要超出这个范围，相机就会开始移动，使精灵保持在这个范围内可见。
    this.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);

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
      this.player.body.moveLeft(300);
    }
    else if (this.cursors.right.isDown) {
      this.player.body.moveRight(300);
    }

  }

  render () {

    let zone = this.camera.deadzone;

    this.game.debug.geom(new Phaser.Rectangle(zone.x + this.camera.x, zone.y + this.camera.y, zone.width, zone.height));
    this.game.debug.cameraInfo(this.camera, 32, 32);
    this.game.debug.spriteCoords(this.player, 32,  500);

  }

}

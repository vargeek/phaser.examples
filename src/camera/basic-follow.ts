import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BasicFollowState extends BootState {
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

    // http://localhost:3000/Phaser.Camera.html#follow
    // follow(target, style, lerpX, lerpY)
    // style{number?}
    //        deadzone是一个相对于相机静止的矩形范围。相机follow精灵时，当精灵要超出这个范围，相机就会开始移动，使精灵保持在这个范围内可见。
    //        使用一个默认的deadzone. Leverage one of the existing "deadzone"() presets. If you use a custom deadzone, ignore this parameter and manually specify the deadzone after calling follow().
    //        默认的deadzone:
    // Phaser.Camera.FOLLOW_LOCKON:         中心点 (默认值)
    // Phaser.Camera.FOLLOW_PLATFORMER:     一个竖直长方形
    // Phaser.Camera.FOLLOW_TOPDOWN:        一个正方形
    // Phaser.Camera.FOLLOW_TOPDOWN_TIGHT:  一个小一点的正方形
    // lerpX{float=1}     A value between 0 and 1. This value specifies the amount of linear interpolation to use when horizontally tracking the target. The closer the value to 1, the faster the camera will track. 表现为相机跟踪精灵 的速度

    // Tell the camera which sprite to follow.
    // You can set the follow type and a linear interpolation value.
    // Use low lerp values (such as 0.1) to automatically smooth the camera motion.
    // If you find you're getting a slight "jitter" effect when following a Sprite it's probably to do with sub-pixel rendering of the Sprite position.
    // This can be disabled by setting game.renderer.renderSession.roundPixels = true to force full pixel rendering.
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

    if (this.camera.deadzone) {
      let zone = new Phaser.Rectangle(this.camera.x + this.camera.deadzone.x, this.camera.y + this.camera.deadzone.y, this.camera.deadzone.width, this.camera.deadzone.height);
      this.game.debug.geom(zone);
    }
    else {
      let zone = new Phaser.Rectangle(this.camera.x + (this.camera.width - 4)/2, this.camera.y + (this.camera.height - 4)/ 2, 4, 4);
      this.game.debug.geom(zone);
    }

    this.game.debug.cameraInfo(this.camera, 32, 32);
    this.game.debug.spriteCoords(this.player, 32, 32);

  }

}

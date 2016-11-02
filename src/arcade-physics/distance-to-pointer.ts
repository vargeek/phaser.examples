import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class DistanceToPointerState extends BootState {
  ball: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('backdrop', 'assets/pics/remember-me.jpg');
    this.load.image('ball', 'assets/sprites/shinyball.png');

  }

  create () {

    this.world.setBounds(0, 0, 1920, 1200);

    this.add.sprite(0, 0, 'backdrop');
    this.ball = this.add.sprite(this.world.randomX, 200, 'ball');
    this.ball.anchor.set(0.5);


    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.enable(this.ball);
    (this.ball.body as Body).collideWorldBounds = true;

    this.camera.follow(this.ball);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    (this.ball.body as Body).velocity.x = 0;
    (this.ball.body as Body).velocity.y = 0;

    if (this.cursors.left.isDown) {
      (this.ball.body as Body).velocity.x = -240;
    }
    else if (this.cursors.right.isDown) {
      (this.ball.body as Body).velocity.x = 240;
    }

    if (this.cursors.up.isDown) {
      (this.ball.body as Body).velocity.y = -240;
    }
    else if (this.cursors.down.isDown) {
      (this.ball.body as Body).velocity.y = 240;
    }

  }

  render () {

    // http://localhost:3000/Phaser.Physics.Arcade.html#distanceToPointer
    // distanceToPointer(displayObject, pointer, world) → {number}
    // Find the distance between a display object (like a Sprite) and a Pointer. If no Pointer is given the Input.activePointer is used.

    // The calculation is made from the display objects x/y coordinate. This may be the top-left if its anchor hasn't been changed.
    // If you need to calculate from the center of a display object instead use the method distanceBetweenCenters()
    // The optional world argument allows you to return the result based on the Game Objects world property,  instead of its x and y values. This is useful of the object has been nested inside an offset Group, or parent Game Object.
    this.game.debug.text(`Distance to pointer: ${this.physics.arcade.distanceToPointer(this.ball).toFixed(1)}`, 32, 32);

  }

}

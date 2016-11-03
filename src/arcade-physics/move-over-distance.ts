import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MoveOverDistanceState extends BootState {
  sprite: Phaser.Sprite;
  block: Phaser.Sprite;
  startTime = 0;
  endTime = 0;
  duration = 0;

  preload () {

    this.load.image('clown', 'assets/sprites/clown.png');
    this.load.image('block', 'assets/sprites/block.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.sprite = this.add.sprite(200, 300, 'clown');
    this.block = this.add.sprite(600, 280, 'block');

    this.physics.arcade.enable(this.sprite);
    this.physics.arcade.enable(this.block);

    this.sprite.body.bounce.set(1);
    this.sprite.body.collideWorldBounds = true;

    this.block.body.immovable = true;

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#onMoveComplete
    // onMoveComplete :Phaser.Signal
    // Listen for the completion of moveTo or moveFrom events.
    this.sprite.body.onMoveComplete.add(this.moveOver, this);
    this.input.onDown.addOnce(this.move, this);

  }

  move () {
    //  Move the Body 300 pixels to the right, over 2000 ms
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#moveTo
    // moveTo(duration, distance, direction) → {boolean}
    // Note: This method is experimental, and may be changed or removed in a future release.

    // This method moves the Body in the given direction, for the duration specified.
    // It works by setting the velocity on the Body, and an internal distance counter.
    // The distance is monitored each frame. When the distance equals the distance
    // specified in this call, the movement is stopped, and the Body.onMoveComplete
    // signal is dispatched.

    // Movement also stops if the Body collides or overlaps with any other Body.

    // stop manually:
    // You can control if the velocity should be reset to zero on collision, by using
    // the property Body.stopVelocityOnCollide.

    // Stop the movement at any time by calling Body.stopMovement.

    // 精确性:
    // Please note that due to browser timings you should allow for a variance in
    // when the distance will actually expire.

    // 不受其他力影响:
    // Note: This method doesn't take into consideration any other forces acting
    // on the Body, such as Gravity, drag or maxVelocity, all of which may impact the
    // movement.
    this.sprite.body.moveTo(2000, 300, Phaser.ANGLE_RIGHT);
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#stopVelocityOnCollide
    // stopVelocityOnCollide :boolean
    // Set by the moveTo and moveFrom methods.

    this.startTime = this.time.time;
    this.duration = 0;

  }

  moveOver () {

    this.endTime = this.time.time;
    this.duration = this.endTime - this.startTime;

  }

  moveCallback(body: any, velocity:any, percent: any) {

  }

  update () {

    this.physics.arcade.collide(this.sprite, this.block);

  }

  render () {

    this.game.debug.text("expire: " + this.sprite.body.moveTimer, 32, 32);
    this.game.debug.text("vx: " + this.sprite.body.velocity.x, 300, 32);
    this.game.debug.text("vy: " + this.sprite.body.velocity.y, 600, 32);
    this.game.debug.text("duration: " + this.duration, 32, 64);
    this.game.debug.text("m: " + this.sprite.body.isMoving, 300, 64);
    this.game.debug.text("sx: 200", 32, 96);

  }

}

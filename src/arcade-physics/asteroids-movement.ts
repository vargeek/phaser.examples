import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class AsteroidsMovementState extends BootState {
  sprite: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  bullet: Phaser.Sprite;
  bullets: Phaser.Group;
  bulletTime = 0;

  preload () {

    this.load.image('space', 'assets/skies/deep-space.jpg');
    this.load.image('bullet', 'assets/games/asteroids/bullets.png');
    this.load.image('ship', 'assets/games/asteroids/ship.png');

  }

  create () {

    //  We need arcade physics
    this.physics.startSystem(Phaser.Physics.ARCADE);

    //  A spacey background
    this.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');

    //  Our ships bullets
    this.bullets = this.add.group();

    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    //  All 40 of them
    this.bullets.createMultiple(40, 'bullet');
    this.bullets.setAll('anchor.x', 0.5);
    this.bullets.setAll('anchor.y', 0.5);

    //  Our player ship
    this.sprite = this.add.sprite(300, 300, 'ship');
    this.sprite.anchor.set(0.5);

    //  and its physics settings
    this.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#drag
    // drag :Phaser.Point
    // 阻力
    // The drag applied to the motion of the Body.
    this.sprite.body.drag.set(100);
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#maxVelocity
    // maxVelocity :Phaser.Point
    // The maximum velocity in pixels per second sq. that the Body can reach.
    this.sprite.body.maxVelocity.set(200);

    //  Game input
    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

  }

  update () {

    if (this.cursors.up.isDown) {
      // http://localhost:3000/Phaser.Physics.Arcade.html#accelerationFromRotation
      // accelerationFromRotation(rotation, speed, point) → {Phaser.Point}
      // Given the rotation (in radians) and speed calculate the acceleration and return it as a Point object, or set it to the given point object.

      // One way to use this is: accelerationFromRotation(rotation, 200, sprite.acceleration) which will set the values directly to the sprites acceleration and not create a new Point object.

      // point: 可选，保存计算结果
      // The Point object in which the x and y properties will be set to the calculated acceleration.
      this.physics.arcade.accelerationFromRotation(this.sprite.rotation, 200, this.sprite.body.accelerationFromRotation);
    }
    else {
      this.sprite.body.acceleration.set(0);
    }

    if (this.cursors.left.isDown) {
      (this.sprite.body as Body).angularVelocity = -300;
    }
    else if (this.cursors.right.isDown) {
      (this.sprite.body as Body).angularVelocity = 300;
    }
    else {
      (this.sprite.body as Body).angularVelocity = 0;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.fireBullet();
    }

    this.screenWrap(this.sprite);

    this.bullets.forEachExists(this.screenWrap, this);

  }

  fireBullet () {

    if (this.time.now > this.bulletTime) {
      this.bullet = this.bullets.getFirstExists(false);
      if (this.bullet) {
        this.bullet.reset((this.sprite.body as Body).x + 16, (this.sprite.body as Body).y + 16);
        this.bullet.lifespan = 2000;
        this.bullet.rotation = this.sprite.rotation;
        this.physics.arcade.velocityFromRotation(this.sprite.rotation, 400, (this.bullet.body as Body).velocity);
        this.bulletTime = this.time.now + 50;
      }
    }

  }

  screenWrap (sprite: Phaser.Sprite) {

    if (sprite.x < 0) {
      sprite.x = this.game.width;
    }
    else if (sprite.x > this.game.width) {
      sprite.x = 0;
    }

    if (sprite.y < 0) {
      sprite.y = this.game.height;
    }
    else if (sprite.y > this.game.height) {
      sprite.y = 0;
    }

  }

}

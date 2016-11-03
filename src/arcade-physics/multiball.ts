import { BootState } from '../boot.state';
import { AssetID } from '../constant';


type Body = Phaser.Physics.Arcade.Body;
export class MultiballState extends BootState {
  atari: Phaser.Sprite;
  balls: Phaser.Group;
  cursors: Phaser.CursorKeys;

  preload () {
    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.spritesheet('bullets', 'assets/sprites/balls.png', 17, 17);
  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#2d2d2d';

    this.balls = this.add.group();

    this.balls.createMultiple(250, 'bullets', 0, false);

    this.atari = this.add.sprite(300, 450, 'atari');

    this.physics.arcade.gravity.y = 400;
    this.physics.arcade.enable(this.world, true);

    (this.atari.body as Body).allowGravity = false;
    (this.atari.body as Body).immovable = true;

    this.cursors = this.input.keyboard.createCursorKeys();

    this.time.events.loop(150, this.fire, this);

    this.add.text(16, 16, 'Left / Right to move', {font: '18px Arial', fill: '#ffffff'});


  }

  fire () {
    let ball = this.balls.getFirstDead() as Phaser.Sprite;

    if (ball) {
      ball.frame = this.rnd.integerInRange(0, 6);
      ball.exists = true;
      ball.reset(this.world.randomX, 0);
      ball.body.bounce.y = 0.8;
    }

  }

  reflect (atari:Phaser.Sprite, ball: Phaser.Sprite) {

    if (ball.y > (atari.y + 5)) {
      return true;
    }
    else {
      (ball.body as Body).velocity.x = (atari.body as Body).velocity.x;
      (ball.body as Body).velocity.y *= -(ball.body as Body).bounce.y;
      return false;
    }

  }

  update () {

    this.physics.arcade.collide(this.atari, this.balls, null, this.reflect, this);

    this.atari.body.velocity.x = 0;
    if (this.cursors.left.isDown) {
      this.atari.body.velocity.x = -200;
    }
    else if (this.cursors.right.isDown) {
      this.atari.body.velocity.x = 200;
    }
    this.balls.forEachAlive(this.checkBounds, this);

  }

  checkBounds(ball: Phaser.Sprite) {
    if (ball.y > 600) {
      ball.kill();
    }
  }

}

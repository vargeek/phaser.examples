import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LauncherState extends BootState {
  arrow: Phaser.Sprite;
  analog: Phaser.Sprite;
  ball: Phaser.Sprite;
  catchFlag = false;
  launchVelocity = 0;

  preload () {

    this.load.image('analog', 'assets/tests/fusia.png');
    this.load.image('arrow', 'assets/sprites/longarrow2.png');
    this.load.image('ball', 'assets/sprites/pangball.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.physics.arcade.gravity.y = 200;
    this.stage.backgroundColor = '#0072bc';

    let graphics = this.add.graphics(0, 0);
    graphics.beginFill(0x049e0c);
    graphics.drawRect(395, 350, 10, 250);

    this.analog = this.add.sprite(400, 350, 'analog');
    this.physics.enable(this.analog, Phaser.Physics.ARCADE);

    this.analog.body.allowGravity = false;
    this.analog.width = 8;
    this.analog.rotation = 220;
    this.analog.alpha = 0;
    this.analog.anchor.setTo(0.5, 0.0);

    this.arrow = this.add.sprite(400, 350, 'arrow');

    this.physics.enable(this.arrow, Phaser.Physics.ARCADE);

    this.arrow.anchor.setTo(0.1, 0.5);
    this.arrow.body.moves = false;
    this.arrow.body.allowGravity = false;
    this.arrow.alpha = 0;

    this.ball = this.game.add.sprite(100, 400, 'ball');
    this.game.physics.enable(this.ball, Phaser.Physics.ARCADE);
    this.ball.anchor.setTo(0.5, 0.5);
    this.ball.body.collideWorldBounds = true;
    this.ball.body.bounce.setTo(0.9, 0.9);

    // Enable input.
    this.ball.inputEnabled = true;
    this.ball.input.start(0, true);
    this.ball.events.onInputDown.add(this.setBall, this);
    this.ball.events.onInputUp.add(this.launchBall, this);

  }

  setBall (ball: Phaser.Sprite, pointer: Phaser.Pointer) {
    ball.body.moves = false;
    ball.body.velocity.setTo(0);
    ball.body.allowGravity = false;
    this.catchFlag = true;
  }

  launchBall () {

    this.catchFlag = false;
    this.ball.body.moves = true;
    this.arrow.alpha = 0;
    this.analog.alpha = 0;
    let Xvector = (this.arrow.x - this.ball.x) * 3;
    let Yvector = (this.arrow.y - this.ball.y) * 3;
    this.ball.body.allowGravity = true;
    this.ball.body.velocity.setTo(Xvector, Yvector);

  }

  update () {

    this.arrow.rotation = this.physics.arcade.angleBetween(this.arrow, this.ball);

    if (this.catchFlag === true) {
      this.ball.x = this.input.activePointer.worldX;
      this.ball.y = this.input.activePointer.worldY;

      this.arrow.alpha = 1;
      this.analog.alpha = 0.5;
      this.analog.rotation = this.arrow.rotation - 3.14 / 2;
      this.analog.height = this.physics.arcade.distanceToPointer(this.arrow);
      this.launchVelocity = this.analog.height;
    }

  }

  render () {

    this.game.debug.text("Drag the ball and release to launch", 32, 32);

    this.game.debug.bodyInfo(this.ball, 32, 64);

    // this.game.debug.geom(this.analog.getBounds(), '#ff00ff');

  }

}

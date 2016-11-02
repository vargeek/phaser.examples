import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class MoveToPointerState extends BootState {
  ball: Phaser.Sprite;

  preload () {

    this.load.image('backdrop', 'assets/pics/remember-me.jpg');
    this.load.image('ball', 'assets/sprites/shinyball.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.world.setBounds(0, 0, 1920, 1200);

    this.add.sprite(0, 0, 'backdrop');

    this.ball = this.add.sprite(this.world.randomX, 200, 'ball');

    this.physics.arcade.enable(this.ball);
    (this.ball.body as Body).collideWorldBounds = true;

    this.camera.follow(this.ball);

    this.input.onDown.add(this.moveBall, this);

  }

  moveBall () {

    this.physics.arcade.moveToPointer(this.ball, 100);

  }

  render () {

    this.game.debug.text(`distance: ${this.physics.arcade.distanceToPointer(this.ball).toFixed(1)}`, 32, 32);

  }

}

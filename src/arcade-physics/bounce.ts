import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BounceState extends BootState {
  ball: Phaser.Sprite;

  preload () {

    this.load.image('ball', 'assets/sprites/yellow_ball.png');

  }

  create () {

    this.ball = this.add.sprite(300, 0, 'ball');
    this.startBounceTween();

  }

  startBounceTween () {

    this.ball.y = 0;

    let bounce = this.add.tween(this.ball);

    bounce.to({y: this.world.height - this.ball.height}, 1000 + Math.random() * 3000, Phaser.Easing.Bounce.In);
    bounce.onComplete.add(this.startBounceTween, this);
    bounce.start();

  }

}

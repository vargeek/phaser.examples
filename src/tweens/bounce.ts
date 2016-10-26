import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BounceState extends BootState {
  ball: Phaser.Sprite;

  preload () {

    this.load.image(AssetID.ball, 'assets/sprites/yellow_ball.png');

  }

  create () {

    this.ball = this.add.sprite(300, 0, AssetID.ball);
    this.startBounceTween();

  }

  startBounceTween () {

    this.ball.y = 0;

    // Phaser.Easing.Bounce.In
    let bounce = this.add.tween(this.ball);
    bounce.to({y: this.world.height - this.ball.height}, 1000 + Math.random() * 3000, Phaser.Easing.Bounce.In);

    // The onComplete event is fired when the Tween and all of its children completes. Does not fire if the Tween is set to loop or repeatAll(-1).
    // It will be sent 2 parameters: the target object and this tween.
    bounce.onComplete.add(this.startBounceTween, this);

    // Starts the tween running. Can also be called by the autoStart parameter of Tween.to or Tween.from.
    // This sets the Tween.isRunning property to true and dispatches a Tween.onStart signal.
    // If the Tween has a delay set then nothing will start tweening until the delay has expired.
    bounce.start();

  }

}

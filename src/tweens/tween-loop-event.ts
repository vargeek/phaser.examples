import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TweenLoopEventsState extends BootState {
  ball: Phaser.Sprite;
  tween: Phaser.Tween;
  bounces = 10;

  preload () {

    this.load.spritesheet(AssetID.ball, 'assets/sprites/balls.png', 17, 17);

  }

  create () {

    this.ball = this.add.sprite(400, 0, AssetID.ball, 0);

    this.tween = this.add.tween(this.ball).to({y: this.world.height - this.ball.height}, 1500, Phaser.Easing.Bounce.Out, true, 2500, this.bounces);

    // onStart(target, tween)
    this.tween.onStart.add(this.onTweenStart, this);
    this.tween.onRepeat.add(this.onTweenLoop, this);
    this.tween.onComplete.add(this.onTweenComplete, this);

  }

  onTweenStart (target: Phaser.Sprite, tween: Phaser.Tween) {

    console.log('onTweenStart');
    tween.delay(0);

  }

  onTweenLoop (target: Phaser.Sprite, tween: Phaser.Tween) {

    console.log('onTweenLoop');
    this.bounces--;

    if (this.ball.frame === 5) {
      this.ball.frame = 0;
    }
    else {
      this.ball.frame = (this.ball.frame as number) + 1;
    }

  }

  onTweenComplete (target: Phaser.Sprite, tween: Phaser.Tween) {

    console.log('onTweenComplete');
    this.tween = this.add.tween(this.ball).to({x: this.world.width - this.ball.width}, 2000, Phaser.Easing.Exponential.Out, true);

  }

  render () {

    this.game.debug.text(`Bounces: ${this.bounces}`, 32, 32)

  }

}

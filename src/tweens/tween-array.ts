import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TweenArrayState extends BootState {
  sprite: Phaser.Sprite;
  tween: Phaser.Tween;

  preload () {

    this.load.image(AssetID.ball, 'assets/sprites/pangball.png');

  }

  create () {

    this.stage.backgroundColor = '#2384e7';

    this.sprite = this.add.sprite(100, 250, AssetID.ball);

    this.tween = this.add.tween(this.sprite);
    this.tween.to({x:[500, 500, 100, 100], y:[250, 150, 150, 250]}, 3000, Phaser.Easing.Linear.None);
    this.tween.start();

    this.input.onDown.add(this.again, this);

  }

  again () {

    // If the tween is running this is set to true, otherwise false. Tweens that are in a delayed state or waiting to start are considered as being running.
    if (!this.tween.isRunning) {
      this.sprite.position.setTo(100, 200);
      this.tween.start();
    }

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SingleTweenReuseState extends BootState {
  sprite: Phaser.Sprite;
  tween: Phaser.Tween;

  preload () {

    this.load.image(AssetID.bikkuriman, 'assets/sprites/bikkuriman.png');

  }

  create () {

    this.game.stage.backgroundColor = '#2384e7';

    this.sprite = this.add.sprite(400, 100, AssetID.bikkuriman);

    this.tween = this.add.tween(this.sprite).to({y: 500}, 200, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.addOnce(this.tween2, this);

    //  Notice the use of addOnce above. If you don't use that then you *must* do:
    // tween.onComplete.removeAll();
    //  before using the tween again, or it will fire both onComplete callbacks.
  }

  tween2 () {

    // .to({y:500}).to({alpha: 0.5})
    this.tween.to({alpha: 0.5}, 2000, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.addOnce(this.tween3, this);
  }

  tween3 () {
    // .to({y:500}).to({alpha: 0.5}).to({x:2,y:2})
    this.tween.to({x: 2, y: 2}, 2000, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.addOnce(this.tween4, this);

  }

  tween4 () {

    this.tween.to( { y: 500, alpha: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.addOnce(this.tween5, this);

  }

  tween5 () {
    this.tween.to( { x: 400, y: 100, alpha: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
    this.tween.onComplete.addOnce(this.tween2, this);

  }

}

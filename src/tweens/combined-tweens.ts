import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CombinedTweensState extends BootState {
  mushroom: Phaser.Sprite;
  pig: Phaser.Sprite;
  pigArrives: Phaser.Tween;
  scaleTween: Phaser.Tween;
  endTween: Phaser.Tween;

  preload () {

    this.load.spritesheet(AssetID.pig, 'assets/sprites/invaderpig.png', 124, 104);
    this.load.image(AssetID.starfield, 'assets/misc/starfield.jpg');
    this.load.image(AssetID.mushroom, 'assets/sprites/mushroom2.png');

  }

  create () {

    this.add.tileSprite(0, 0, 800, 600, AssetID.starfield);
    this.pig = this.add.sprite(-50, 200, AssetID.pig, 1);

    this.pig.scale.setTo(0.5);

    this.mushroom = this.add.sprite(380, 200, AssetID.mushroom);
    this.mushroom.anchor.setTo(0.5);

    this.pigArrives = this.add.tween(this.pig);

    this.pigArrives.to({x: 150}, 1000, Phaser.Easing.Bounce.Out);
    this.pigArrives.onComplete.add(this.firstTween, this);
    this.pigArrives.start();

  }

  firstTween () {

    this.scaleTween = this.add.tween(this.mushroom.scale);
    this.scaleTween.to({x: 2, y: 2}, 1000, Phaser.Easing.Linear.None);
    this.scaleTween.onComplete.add(this.theEnd, this);
    this.scaleTween.start();

  }

  theEnd () {

    this.endTween = this.add.tween(this.pig);
    this.endTween.to({x: -150}, 1000, Phaser.Easing.Bounce.Out);
    this.endTween.start();

  }

}

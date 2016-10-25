/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class AnimationEventsState extends BootState {
  back: Phaser.Image;
  mummy: Phaser.Sprite;
  animation: Phaser.Animation;
  loopText: Phaser.Text;

  preload () {

    this.load.image(AssetID.lazur, 'assets/pics/thorn_lazur.png');
    this.load.spritesheet(AssetID.mummy, 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

  }

  create () {

    this.back = this.add.image(0, -400, AssetID.lazur);
    this.back.scale.set(2);
    this.back.smoothed = false;

    this.mummy = this.add.sprite(200, 360, AssetID.mummy, 5);
    this.mummy.scale.set(4);
    this.mummy.smoothed = false;
    this.animation = this.mummy.animations.add(Animation.walk);

    this.animation.onStart.add(this.onAnimationStart, this);
    this.animation.onLoop.add(this.onAnimationLoop, this);
    this.animation.onComplete.add(this.onAnimationStop, this);

    this.animation.play(10, true);

  }

  onAnimationStart (sprite: Phaser.Sprite, animation: Phaser.Animation) {

    this.add.text(32, 32, 'Animation Started', {fill: 'white'} );

  }

  onAnimationLoop (sprite: Phaser.Sprite, animation: Phaser.Animation) {

    if (animation.loopCount === 1) {
      this.loopText = this.add.text(32, 64, 'Animation looped', {fill: 'white'});
    }
    else {
      this.loopText.text = 'Animation looped x2'
      this.animation.loop = false;
    }

  }

  onAnimationStop (sprite: Phaser.Sprite, animation: Phaser.Animation) {
    this.add.text(32, 96, 'Animation stopped', {fill: 'white'});
  }

  update () {

    if (this.animation.isPlaying) {
      this.back.x -= 1;
    }

  }

}

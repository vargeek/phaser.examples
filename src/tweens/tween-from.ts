import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TweenFromState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.image(AssetID.phaser, 'assets/sprites/phaser1.png');

  }

  create () {

    this.stage.backgroundColor = '#2384e7';

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.phaser);
    this.sprite.anchor.set(0.5);

    // GameObjectFactory.tween(obj: any): Phaser.Tween;

    //	It will end up at the middle of the game, as it's tweening FROM the value given below to its current position.
    this.game.add.tween(this.sprite).from({y: -200}, 2000, Phaser.Easing.Bounce.Out, true);
    // this.tweens.create(this.sprite).from({y: -200}, 2000, Phaser.Easing.Bounce.Out, true);
    // this.make.tween(this.sprite).from({y: -200}, 2000, Phaser.Easing.Bounce.Out, true);
    // new Phaser.Tween(this.sprite, this.game, this.tweens).from({y: -200}, 2000, Phaser.Easing.Bounce.Out, true);

    // from(properties: any, duration?: number, ease?: string, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Phaser.Tween;
    // Sets this tween to be a from tween on the properties given. A from tween sets the target to the destination value and tweens to its current value.
    // For example a Sprite with an x coordinate of 100 tweened from x 500 would be set to x 500 and then tweened to x 100 by giving a properties object of { x: 500 }.
    // The ease function allows you define the rate of change. You can pass either a function such as Phaser.Easing.Circular.Out or a string such as "Circ".
    // ".easeIn", ".easeOut" and "easeInOut" variants are all supported for all ease types.

  }

}

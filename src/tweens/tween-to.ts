import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TweenToState extends BootState {

  preload () {

    this.load.image(AssetID.phaser, 'assets/sprites/phaser1.png');

  }

  create () {

    this.stage.backgroundColor = '#2384e7';

    let sprite = this.add.sprite(this.world.centerX, -200, AssetID.phaser);
    sprite.anchor.set(0.5);

    // to(properties: any, duration?: number, ease?: string, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Phaser.Tween;
    this.add.tween(sprite).to({y: this.world.centerY}, 4000, Phaser.Easing.Bounce.Out, true);

  }

}

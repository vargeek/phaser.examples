import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class YoyoState extends BootState {

  preload () {

    this.load.image(AssetID.space, 'assets/misc/starfield.png');
    this.load.image(AssetID.phaser, 'assets/sprites/phaser2.png');

  }

  create () {

    this.add.tileSprite(0, 0, 800, 600, AssetID.space);

    let sprite = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.phaser);

    sprite.anchor.set(0.5);
    sprite.alpha = 0;

    // delay=0, repeat=-1
    let tween = this.add.tween(sprite).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true, 0, -1);

    // And this tells it to yoyo, i.e. fade back to zero again before repeating.
    // The 3000 tells it to wait for 3 seconds before starting the fade back.

    // yoyo(enable: boolean, yoyoDelay?: number, index?: number): Phaser.Tween;
    // start v.s. yoyo
    tween.yoyo(true, 3000);

  }

}

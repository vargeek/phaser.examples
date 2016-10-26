import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FadingInASpriteState extends BootState {

  preload () {

    this.load.image(AssetID.space, 'assets/misc/starfield.png');
    this.load.image(AssetID.phaser, 'assets/sprites/phaser2.png');


  }

  create () {

    this.add.tileSprite(0, 0, 800, 600, AssetID.space);

    let sprite = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.phaser);

    sprite.anchor.set(0.5);
    sprite.alpha = 0;

    this.add.tween(sprite).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

  }

}

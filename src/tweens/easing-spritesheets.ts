import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class EasingSpritesheetsState extends BootState {

  preload () {

    this.load.spritesheet(AssetID.phaser, 'assets/tests/tween/phaser.png', 70, 90);
    this.load.image(AssetID.starfield, 'assets/misc/starfield.jpg');

  }

  create () {

    this.add.tileSprite(0, 0, 800, 600, AssetID.starfield);

    for (let index = 0; index < 6; index++) {

      let item = this.add.sprite(190 + 69 * index, -90, AssetID.phaser, index);

      this.add.tween(item).to({y: 240}, 2400, Phaser.Easing.Bounce.Out, true);

    }

  }

}

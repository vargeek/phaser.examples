import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TweenSeveralPropertiesState extends BootState {

  preload () {

    this.load.image(AssetID.sky, 'assets/skies/sky4.png');
    this.load.spritesheet(AssetID.phaser, 'assets/tests/tween/phaser.png', 70, 90);

  }

  create () {

    this.add.sprite(0, 0, AssetID.sky);

    for (let index = 0; index < 6; index++) {

      let item = this.add.sprite(190 + 69 * index, -100, AssetID.phaser, index);
      item.anchor.set(0.5);

      this.add.tween(item).to({y: 240}, 2000, Phaser.Easing.Bounce.Out, true, 1000 + 400 * index);
      this.add.tween(item).to({angle: 360}, 2400, Phaser.Easing.Cubic.In, true, 1000 + 400 * index);

    }

  }

}

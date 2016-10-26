import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class EasingState extends BootState {

  preload () {

    this.load.image(AssetID.shadow, 'assets/tests/tween/shadow.png');
    this.load.spritesheet(AssetID.phaser, 'assets/tests/tween/phaser.png', 70, 90);

  }

  create () {

    this.stage.backgroundColor = '#ffffff';

    for (let index = 0; index < 6; index++) {

      let shadow = this.add.sprite(190 + 69 * index, 284, AssetID.shadow);

      shadow.scale.setTo(0.0);

      shadow.anchor.setTo(0.5)

      this.add.tween(shadow.scale).to({x: 1.0, y: 1.0}, 2400, Phaser.Easing.Bounce.Out, true);

      let item = this.add.sprite(190 + 69 * index, -50, AssetID.phaser, index);

      item.anchor.setTo(0.5, 0.5);

      let tween = this.add.tween(item).to({y: 245}, 2400, Phaser.Easing.Bounce.Out, true);

    }

  }

}

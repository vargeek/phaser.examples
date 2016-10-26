import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AlphaTextState extends BootState {

  preload () {

    this.load.image(AssetID.space, 'assets/misc/starfield.png');
    this.load.image(AssetID.phaser, 'assets/sprites/phaser2.png');

  }

  create () {

    let logo = this.add.tileSprite(0, 0, 800, 600, AssetID.phaser);
    logo.alpha = 0.1;

    let style = {
      font: '65px Arial',
      fill: '#ff0044',
      align: 'center'
    }

    let text = this.add.text(this.world.centerX, this.world.centerY, '- Phaser -\nwith a sprinkle of \npixi dust', style);
    text.anchor.set(0.5);
    text.alpha = 0.1;

    this.add.tween(text).to({alpha: 1}, 3000, Phaser.Easing.Linear.None, true, 0, -1, true);

  }

}

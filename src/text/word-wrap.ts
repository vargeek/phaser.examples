import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class WordWrapState extends BootState {

  preload () {

  }

  create () {

    this.stage.backgroundColor = '#0072bc';

    let style = {
      font: 'bold 60pt Arial',
      fill: 'white',
      align: 'left',
      wordWrap: true,
      wordWrapWidth: 450,
    }

    let text = this.add.text(this.world.centerX, this.world.centerY, 'phaser with a sprinkle of pixi dust', style);

    text.anchor.set(0.5);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LineColorState extends BootState {

  create () {

    let textGroup = this.add.group();

    for (let index = 0; index < 10; index++) {
      textGroup.add(this.make.text(100, 64 + index * 32, 'here is a colored line of text', {font: '32px Arial', fill: this.randomHexColor()}))
    }

  }

  randomHexColor () {
    return `#${(0.5 + 0.5 * Math.random() * 0xffffff << 0).toString(16)}`;
  }

}

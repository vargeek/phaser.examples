import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextShadowStrokeState extends BootState {

  preload () {

    this.load.image('lulu', 'assets/pics/shocktroopers_lulu2.png');

  }

  create () {

    this.stage.backgroundColor = 0xbdbdbd;
    this.add.image(660, 412, 'lulu');

    let text1 = this.add.text(20, 50, 'Shadow Stroke', {
      font: '74px Arial Black',
      fill: '#c51b7d',
    })
    text1.stroke = '#de77ae';
    text1.strokeThickness = 16;
    text1.setShadow(2, 2, '#333333', 2, true, false);

    let text2 = this.add.text(20, 180, 'Shadow Fill', {
      font: '74px Arial Black',
      fill: '#c51b7d',
    })
    text2.stroke = '#de77ae';
    text2.strokeThickness = 16;
    text2.setShadow(2, 2, '#333333', 2, false, true);

    let text3 = this.add.text(20, 310, 'Shadow Both', {
      font: '74px Arial Black',
      fill: '#c51b7d',
    })
    text3.stroke = '#de77ae';
    text3.strokeThickness = 16;
    text3.setShadow(2, 2, '#333333', 2, true, true);

    let text4 = this.add.text(20, 440, 'Shadow None', {
      font: '74px Arial Black',
      fill: '#c51b7d',
    })
    text4.stroke = '#de77ae',
    text4.strokeThickness = 16;
    text4.setShadow(2, 2, '#333333', 2, false, false);

  }

}

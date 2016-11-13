import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GraphicsChildState extends BootState {

  preload () {

    this.load.image('atari', 'assets/demoscene/atari.png');

  }

  create () {

    let graphics = this.add.graphics(260, 260);

    graphics.beginFill(0x027a71);
    graphics.lineStyle(4, 0x02fdeb, 1);

    graphics.moveTo(0, 0);
    graphics.lineTo(250, 0);
    graphics.lineTo(250, 200);
    graphics.lineTo(125, 100);
    graphics.lineTo(0, 200);
    graphics.lineTo(0, 0);
    graphics.endFill();

    var sprite = this.make.sprite(32, -48, 'atari');

    // http://localhost:3000/Phaser.Graphics.html#addChild
    // addChild(child) → {DisplayObject}
    // Adds a child to the container.
    graphics.addChild(sprite);

  }

}

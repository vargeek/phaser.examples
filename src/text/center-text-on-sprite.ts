import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CenterTextOnSpriteState extends BootState {
  sprite: Phaser.Sprite;
  text: Phaser.Text;

  preload () {

    this.load.image('pic', 'assets/pics/fof_background.png');

  }

  create () {

    this.stage.backgroundColor = 0x5d5d5d;

    this.sprite = this.add.sprite(200, 200, 'pic');
    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();

    let style: Phaser.PhaserTextStyle = {
      font: '32px Arial',
      fill: '#ff0044',
      wordWrap: true,
      wordWrapWidth: this.sprite.width,
      align: 'center',
      backgroundColor: '#ffff00'
    };

    this.text = this.add.text(0, 0, '- text on a sprite -\n drag me', style);
    this.text.anchor.set(0.5);

  }

  update () {

    this.text.x = Math.floor(this.sprite.x + this.sprite.width / 2);
    this.text.y = Math.floor(this.sprite.y + this.sprite.height / 2);

  }

}

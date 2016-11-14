import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SpriteTextureState extends BootState {
  sprite: Phaser.Sprite;
  bmd: Phaser.BitmapData;

  preload () {

    this.load.image('pic', 'assets/pics/questar.png');

  }

  create () {

    this.bmd = this.make.bitmapData(320, 256);

    this.bmd.copy('pic');

    this.bmd.circle(100, 100, 32, 'rgba(255,0,0,0.8)');
    this.bmd.rect(100, 40, 64, 120, 'rgba(255,0,255,0.8)');

    this.sprite = this.add.sprite(300, 300, this.bmd);
    this.sprite.anchor.set(0.5);

  }

  update () {

    this.sprite.rotation += 0.01;

  }

}

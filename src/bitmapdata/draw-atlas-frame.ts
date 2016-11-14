import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DrawAtlasFrameState extends BootState {
  bmd: Phaser.BitmapData;
  sprite: Phaser.Sprite;

  preload () {

    this.load.atlas('atlas', 'assets/sprites/atlas_hash_trim.png', 'assets/sprites/atlas_json_hash_trim.json');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    this.bmd = this.add.bitmapData(800, 600);
    this.bmd.addToWorld(8, 8);

    this.sprite = this.add.sprite(100, 64, 'atlas', 'contra3');
    this.sprite.tint = 0;

    this.bmd.draw(this.sprite);

    this.sprite.tint = 0xffffff;

  }


}

/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TilingAtlasTrimState extends BootState {

  sprite: Phaser.Sprite;
  tilesprite: Phaser.TileSprite;

  preload () {

    this.load.atlas(AssetID.tstrim, '/assets/sprites/tstrim.png', '/assets/sprites/tstrim.json');

  }

  create () {

    this.sprite = this.add.sprite(0, 0, AssetID.tstrim, 'ts-trim');
    this.tilesprite = this.add.tileSprite(100, 0, 500, 600, AssetID.tstrim, 'ts-trim');

  }

}

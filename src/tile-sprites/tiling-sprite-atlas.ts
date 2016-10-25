/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TilingSpriteAtlasState extends BootState {
  sprite: Phaser.TileSprite;
  count = 0;

  preload () {

    this.load.atlas(AssetID.seacreatures, 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');

  }

  create () {

    this.stage.backgroundColor = '#0072bc';
    this.sprite = this.add.tileSprite(0, 0, 800, 600, AssetID.seacreatures, 'octopus0002');

  }

  update () {

    this.count += 0.005;

    this.sprite.tileScale.x = 2 + Math.sin(this.count);
    this.sprite.tileScale.y = 2 + Math.cos(this.count);

    this.sprite.tilePosition.x += 1;
    this.sprite.tilePosition.y += 1;

  }

}

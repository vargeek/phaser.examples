/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AlignMultipleSpriteState extends BootState {

  preload () {

    this.load.image(AssetID.block, '/assets/sprites/block.png');

  }

  addSprite (x = 0, y = 0) {

    return this.add.sprite(x, y, AssetID.block);

  }

  create () {

    let sprite1 = this.addSprite(70, 250);
    let sprite2 = this.addSprite().alignTo(sprite1, Phaser.RIGHT_CENTER, 16);
    let sprite3 = this.addSprite().alignTo(sprite2, Phaser.RIGHT_CENTER, 16);
    let sprite4 = this.addSprite().alignTo(sprite3, Phaser.RIGHT_CENTER, 16);
    let sprite5 = this.addSprite().alignTo(sprite4, Phaser.RIGHT_CENTER, 16);
    let sprite6 = this.addSprite().alignTo(sprite5, Phaser.RIGHT_CENTER, 16);

  }

}

/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Atlas: 'Atlas',
}

export class SharedSpriteTexturesState extends BootState {

  preload () {

    this.load.atlas(AssetID.Atlas, '/assets/pics/texturepacker_test.png','/assets/pics/texturepacker_test.json');

  }

  create () {

    this.stage.backgroundColor = '#404040';

    let chick = this.add.sprite(64, 64, AssetID.Atlas);
    chick.frameName = 'budbrain_chick.png';
    // or
    // chick.frame = 0;

    let cop = this.add.sprite(600, 64, AssetID.Atlas);
    cop.frameName = 'ladycop.png';

  }

}

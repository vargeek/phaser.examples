/// <reference path="../phaser.d.ts" />

import { BootState } from '../boot.state';

const AssetID = {
  Atari1: 'Atari1',
  Atari2: 'Atari2',
  Atari4: 'Atari4',
  Sonic: 'Sonic'
}

export class PickImagesFromCacheState extends BootState {

  preload () {

    this.load.image(AssetID.Atari1, '/assets/sprites/atari130xe.png');
    this.load.image(AssetID.Atari2, '/assets/sprites/atari1200xl.png');
    this.load.image(AssetID.Atari4, '/assets/sprites/atari800.png');
    this.load.image(AssetID.Sonic, '/assets/sprites/sonic_havok_sanity.png');

  }

  create () {

    let images = this.cache.getKeys(Phaser.Cache.IMAGE);

    console.log(images);

    for (let index = 0; index < 20; index++) {
      let img = this.rnd.pick(images);
      let tempSprite = this.add.sprite(this.world.randomX, this.world.randomY, img);

      tempSprite.inputEnabled = true;
      // lockCenter: 鼠标锁定到物体中心
      // bringToTop: 拖拽后移到最上层
      tempSprite.input.enableDrag(false, true);
    }

  }

  render () {
    this.game.debug.inputInfo(32, 32);
  }

}

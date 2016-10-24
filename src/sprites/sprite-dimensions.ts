/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Disk: 'Disk',
  Bot: 'Bot'
}

export class SpriteDimensionsState extends BootState {

  preload () {

    this.load.image(AssetID.Disk, '/assets/sprites/darkwing_crazy.png');
    this.load.atlas(AssetID.Bot, '/assets/sprites/running_bot.png', '/assets/sprites/running_bot.json');

  }

  create () {

    let sprite1 = this.add.sprite(0, 0, AssetID.Disk);
    console.log(`sprite1: w:${sprite1.width}, h:${sprite1.height}`);

    let sprite2 = this.add.sprite(200, 0, AssetID.Disk);
    sprite2.scale.set(0.5);
    console.log(`sprite2: w:${sprite2.width}, h:${sprite2.height}`);
    console.log(`texture: w:${sprite2.texture.width}, h:${sprite2.texture.height}`);

    let sprite3 = this.add.sprite(400, 0, AssetID.Disk);
    sprite3.scale.set(2);
    console.log(`sprite2: w:${sprite3.width}, h:${sprite3.height}`);
    console.log(`texture: w:${sprite3.texture.width}, h:${sprite3.texture.height}`);


  }

}

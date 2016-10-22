/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Undersea: 'Undersea',
  Coral: 'Coral',
  Seacreatures: 'Seacreatures',
  Test: 'Test',
}

const Animation = {
  Swim: 'Swim'
}

export class LoadTextureAtlasState extends BootState {

  preload () {

    this.load.image(AssetID.Undersea, '/assets/pics/undersea.jpg');
    this.load.image(AssetID.Coral, '/assets/pics/seabed.png');

    //  Note that the JSON file should be saved with UTF-8 encoding or some browsers (such as Firefox) won't load it.
    this.load.atlas(AssetID.Seacreatures, '/assets/sprites/seacreatures_json.png', '/assets/sprites/seacreatures_json.json');
    // {frames:[{filename:blueJellyfish0000,...},..{filename:octopus0000},...],...}
    // format 默认为 Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY

    this.load.atlas(AssetID.Test, '/assets/sprites/atlas_hash_trim.png','/assets/sprites/atlas_json_array_trim.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);



  }

  create () {

    this.add.sprite(0, 0, AssetID.Undersea);

    this.add.sprite(0, 466, AssetID.Coral);

    let octopus = this.add.sprite(330, 100, AssetID.Seacreatures);

    let frameNames = Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4); // ["octopus0000","octopus0001",...,"octopus0024"]
    octopus.animations.add(Animation.Swim, frameNames, 30, true);

    // or
    // let frames: number[] = [];
    // for (let index = 0; index <= 24; index++) {
    //   frames.push(104 + index);
    // }
    // octopus.animations.add(Animation.Swim, frames, 30, true);

    octopus.animations.play(Animation.Swim);
    this.add.tween(octopus).to({y: 250}, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 10000, true);

    this.add.sprite(0, 0, AssetID.Test);
    // 相当于
    // this.add.sprite(0, 0, AssetID.Test, 0);
    // or
    // this.add.sprite(0, 0, AssetID.Test, 'cactuar');

    // this.add.sprite(0, 0, AssetID.Test, 1);
    // 相当于
    // this.add.sprite(0, 0, AssetID.Test, 'carrot');

  }


}

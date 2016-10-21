/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Image: 'Image',
  Html: 'Html',
  Tilemap: 'Tilemap',
  Audio: 'Audio',
  PlayerHead: 'PlayerHead'
}

export class CheckCacheState extends BootState {

  preload () {

    this.load.image(AssetID.Image, '/assets/sprites/phaser2.png');
    this.load.text(AssetID.Html, '../../index.html');
    this.load.tilemap(AssetID.Tilemap, '/assets/tilemaps/maps/super_mario.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.audio(AssetID.Audio, [
      '/assets/audio/SoundEffects/squit.mp3',
      '/assets/audio/SoundEffects/squit.ogg'
    ]);

  }

  create () {

    let image = this.cache.checkImageKey(AssetID.Image);
    let text = this.cache.checkTextKey(AssetID.Html);
    let tilemap = this.cache.checkTilemapKey(AssetID.Tilemap);
    let audio = this.cache.checkSoundKey(AssetID.Audio);

    let broken = this.cache.checkImageKey(AssetID.PlayerHead);

    const style = {
      fill: '#ffffff'
    }

    this.add.text(40, 40, `Check Image Key: ${image}`, style);
    this.add.text(40, 80, `Check text Key: ${text}`, style);
    this.add.text(40, 120, `Check tilemap Key: ${tilemap}`, style);
    this.add.text(40, 160, `Check audio Key: ${audio}`, style);
    this.add.text(40, 200, `Check image2 Key: ${broken}`, style);


  }

}

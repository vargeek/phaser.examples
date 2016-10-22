/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Level1: {
    key: 'level1',
    Starwars: 'starwars',
    Spaceship: 'spaceship',
    Boden: 'boden',
    Desyrel: 'desyrel',
    Mummy: 'mummy'
  },
  Test: 'Test',
}

const Animations = {
  Walk: 'Walk'
}

export class AssetPackState extends BootState {

  music: Phaser.Sound;

  preload () {

    /**
     * asset-pack.json
     * {
     *    level1: [
     *      {type:image,key,url,overwrite},
     *      {type:audio,key,urls,autoDecode},
     *      {type:spritesheet,key,url,frameWidth,frameHeight,frameMax,margin,spacing},
     *      {type:bitmapFont,key,textureURL:xxx.png,atlasURL:xxx.xml,atlasData,xSpacing,ySpacing}
     *    ],
     *    meta: {
     *    }
     * }
     */
    this.load.pack(AssetID.Level1.key, '/assets/asset-pack1.json', null, this);
    this.load.image(AssetID.Test, '/assets/sprites/ilkke.png');

  }

  create () {

    this.stage.backgroundColor = '#182d3b';

    this.add.image(0, 0, AssetID.Level1.Starwars);
    this.add.image(0, 300, AssetID.Level1.Spaceship);
    this.add.image(700, 360, AssetID.Test);

    this.music = this.sound.play(AssetID.Level1.Boden);

    this.add.bitmapText(300, 150, AssetID.Level1.Desyrel, 'Bitmap Fonts', 48);

    let mummy = this.add.sprite(370, 232, AssetID.Level1.Mummy);
    mummy.animations.add(Animations.Walk);
    mummy.animations.play(Animations.Walk, 20, true);

  }

  render () {

    this.game.debug.soundInfo(this.music, 370, 32);

    if (this.music.isDecoding) {
      this.game.debug.text('Decoding MP3...', 32, 200);
    }

  }

}

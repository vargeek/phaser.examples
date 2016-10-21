/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Boden: 'Boden'
}

export class LoadAudioState extends BootState {

  music: Phaser.Sound;

  preload () {

    this.load.audio(AssetID.Boden, [
      '/assets/audio/bodenstaendig_2000_in_rock_4bit.mp3',
      '/assets/audio/bodenstaendig_2000_in_rock_4bit.ogg'
    ])

  }

  create () {

    this.stage.backgroundColor = '#182d3b';

    this.music = this.sound.play(AssetID.Boden);

  }

  render () {

    this.game.debug.soundInfo(this.music, 32, 32);

    if (this.music.isDecoding) {
      this.game.debug.text(`Decoding MP3...`, 32, 200);
    }

  }

}

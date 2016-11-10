import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class IosState extends BootState {
  music: Phaser.Sound;

  preload () {

    this.load.audio('music', 'assets/audio/goaman_intro.mp3');

  }

  create () {

    this.stage.backgroundColor = '#182d3b';
    this.music = this.add.audio('music');
    // this.input.onDown.addOnce(()=>{this.music.play()});
    this.music.onDecoded.add(()=>{this.music.play()});

  }

  render () {

    this.game.debug.soundInfo(this.music, 20, 32);

  }

}

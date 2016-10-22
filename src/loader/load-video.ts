/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Chrome: 'Chrome'
}

export class LoadVideoState extends BootState {

  video: Phaser.Video;

  preload () {

    this.load.video(AssetID.Chrome, '/assets/video/chrome.webm');

  }

  create () {

    this.stage.backgroundColor = '#232323';

    this.video = this.add.video(AssetID.Chrome);
    this.video.addToWorld(this.world.centerX, this.world.centerY, 0.5, 0.5, 2, 2);

    this.video.play(true);

    this.input.onDown.add(this.onClickPause, this);
  }

  onClickPause () {

    console.log('click pause');
    this.video.paused = this.video.paused ? false : true;

  }

  render () {

    this.game.debug.text(`Video Time: ${this.video.currentTime}`, 32, 20);
    this.game.debug.text(`Video Duration: ${this.video.duration}`, 550, 20);
    this.game.debug.text(`Video Progress: ${Math.round(this.video.progress * 100)} %`, 32, 590);
    this.game.debug.text(`Video Playing: ${this.video.playing}`, 550, 590);

  }

}

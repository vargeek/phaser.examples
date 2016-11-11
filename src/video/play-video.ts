import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PlayVideoState extends BootState {

  preload () {

    this.add.text(100, 100, "Loading videos ...", { font: "65px Arial", fill: "#ff0044" });

    this.load.video('space', 'assets/video/wormhole.mp4', 'canplaythrough', true);
  }

  create () {

    let video = this.add.video('space');

    video.play(true)

    video.addToWorld();
  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DolbyDigitalPlusState extends BootState {

  preload () {

    this.add.text(100, 100, "Loading videos ...", { font: "65px Arial", fill: "#ff0044" });

    this.load.video('dolby', 'assets/video/MP4_HPL40_30fps_channel_id_51.mp4');

  }

  create () {

    let video = this.add.video('dolby');
    video.play(true);
    video.addToWorld(400, 300, 0.5, 0.5, 0.5, 0.5);

  }

}

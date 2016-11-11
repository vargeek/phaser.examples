import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MultipleVideosState extends BootState {

  preload () {

    this.add.text(100, 100, "Loading videos ...", { font: "65px Arial", fill: "#ff0044" });

    this.load.video('liquid', 'assets/video/skull.mp4');
    this.load.video('space', 'assets/video/wormhole.mp4');


  }

  create () {

    let video1 = this.add.video('space');
    let video2 = this.add.video('liquid');

    video1.play(true);
    video2.play(true);

    video1.addToWorld(400, 300, 0.5, 0.5);
    video2.addToWorld(780, 580, 1, 1, 0.5, 0.5);

  }

}

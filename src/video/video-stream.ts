import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class VideoStreamState extends BootState {
  video: Phaser.Video;
  sprite: Phaser.Image;

  create () {

    this.video = this.add.video();

    this.video.onAccess.add(this.camAllowed, this);

    this.video.onError.add(this.camBlocked, this);

    this.video.startMediaStream();

  }

  camAllowed (video: Phaser.Video) {

    console.log('--> camera was allowed', video);
    this.sprite = this.video.addToWorld();
    this.input.onDown.add(this.stopCam, this);

  }

  camBlocked (video: Phaser.Video, error: any) {

    console.log('camera was blocked', video, error);

  }

  stopCam () {

    console.log('camera stopped');

    // http://localhost:3000/Phaser.Video.html#stop
    // stop() → {Phaser.Video}

    // Stops the video playing.

    // This removes all locally set signals.

    // If you only wish to pause playback of the video, to resume at a later time, use Video.paused = true instead.
    // If the video hasn't finished downloading calling Video.stop will not abort the download. To do that you need to
    // call Video.destroy instead.

    // If you are using a video stream from a webcam then calling Stop will disconnect the MediaStream session and disable the webcam.
    this.video.stop();

  }

}

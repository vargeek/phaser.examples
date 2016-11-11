import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ChangeSourceState extends BootState {
  video: Phaser.Video;
  sprite: Phaser.Image;

  preload () {

    this.load.video('liquid', 'assets/video/liquid2.mp4');

  }

  create () {

    this.video = this.add.video('liquid');
    // http://localhost:3000/Phaser.Video.html#onPlay
    // onPlay :Phaser.Signal
    // This signal is dispatched when the Video starts to play. It sends 3 parameters: a reference to the Video object, if the video is set to loop or not and the playback rate.
    this.video.onPlay.addOnce(this.start, this);
    this.sprite = this.video.addToWorld(400, 300, 0.5, 0.5);
    this.video.play();

  }

  start () {

    this.time.events.add(5000, this.changeSource, this);

  }

  changeSource () {

    // http://localhost:3000/Phaser.Video.html#changeSource
    // changeSource(src, autoplay) → {Phaser.Video}

    // On some mobile browsers you cannot play a video until the user has explicitly touched the video to allow it.
    // Phaser handles this via the setTouchLock method. However if you have 3 different videos, maybe an "Intro", "Start" and "Game Over"
    // split into three different Video objects, then you will need the user to touch-unlock every single one of them.

    // You can avoid this by using just one Video object and simply changing the video source. Once a Video element is unlocked it remains
    // unlocked, even if the source changes. So you can use this to your benefit to avoid forcing the user to 'touch' the video yet again.

    // As you'd expect there are limitations. So far we've found that the videos need to be in the same encoding format and bitrate.
    // This method will automatically handle a change in video dimensions, but if you try swapping to a different bitrate we've found it
    // cannot render the new video on iOS (desktop browsers cope better).

    // When the video source is changed the video file is requested over the network. Listen for the onChangeSource signal to know
    // when the new video has downloaded enough content to be able to be played. Previous settings such as the volume and loop state
    // are adopted automatically by the new video.

    // Note: So far we've found that the videos need to be in the same encoding format and bitrate.
    this.video.changeSource('assets/video/skull.mp4');

  }

  render () {

    this.game.debug.text("Video width: " + this.video.video.videoWidth, 600, 32);
    this.game.debug.text("Video height: " + this.video.video.videoHeight, 600, 64);

    this.game.debug.text("Video Time: " + this.video.currentTime, 32, 32);
    this.game.debug.text("Video Duration: " + this.video.duration, 32, 64);

  }

}

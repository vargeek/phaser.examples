import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LoadAsBlobState extends BootState {

  preload () {

    this.add.text(100, 100, "Loading videos ...", { font: "65px Arial", fill: "#ff0044" });

    // http://localhost:3000/Phaser.Loader.html#video
    // video(key, urls, loadEvent, asBlob) → {Phaser.Loader}
    // Adds a video file to the current load queue.

    // The file is not loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.

    // The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.

    // Retrieve the file via Cache.getVideo(key).

    // The URL can be relative or absolute. If the URL is relative the Loader.baseURL and Loader.path values will be prepended to it.

    // You don't need to preload a video in order to play it in your game. See Video.createVideoFromURL for details.
    this.load.video('space', 'assets/video/wormhole.mp4', 'canplaythrough', true);

  }

  create () {

    // http://localhost:3000/Phaser.GameObjectFactory.html#video
    // video(key, url) → {Phaser.Video}
    // Create a Video object.
    // This will return a Phaser.Video object which you can pass to a Sprite to be used as a texture.
    let video = this.add.video('space');
    // http://localhost:3000/Phaser.Video.html#play
    // play(loop, playbackRate) → {Phaser.Video}
    // playbackRate{number=1}     The playback rate of the video. 1 is normal speed, 2 is x2 speed, and so on. You cannot set a negative playback rate.
    // Starts this video playing if it's not already doing so.
    video.play(true)
    // http://localhost:3000/Phaser.Video.html#addToWorld
    // addToWorld(x, y, anchorX, anchorY, scaleX, scaleY) → {Phaser.Image}
    // Creates a new Phaser.Image object, assigns this Video to be its texture, adds it to the world then returns it.
    video.addToWorld();

  }

}

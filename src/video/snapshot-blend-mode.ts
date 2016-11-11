import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SnapshotBlendModeState extends BootState {
  video: Phaser.Video;
  bmd: Phaser.BitmapData;
  alpha = { alpha: 0.2 };


  preload () {

    this.load.image('swirl', 'assets/pics/swirl1.jpg');

  }

  create () {

    this.video = this.add.video();

    // http://localhost:3000/Phaser.Video.html#onAccess
    // onAccess :Phaser.Signal
    // This signal is dispatched if the user allows access to their webcam.
    this.video.onAccess.add(this.camAllowed, this);

    // http://localhost:3000/Phaser.Video.html#onError
    // onError :Phaser.Signal
    // This signal is dispatched if an error occurs either getting permission to use the webcam (for a Video Stream) or when trying to play back a video file.
    this.video.onError.add(this.camBlocked, this);

    // http://localhost:3000/Phaser.Video.html#startMediaStream
    // startMediaStream(captureAudio, width, height) → {Phaser.Video}
    // captureAudio{boolean=false}      Controls if audio should be captured along with video in the video stream.

    // Instead of playing a video file this method allows you to stream video data from an attached webcam.

    // As soon as this method is called the user will be prompted by their browser to "Allow" access to the webcam.
    // If they allow it the webcam feed is directed to this Video. Call Video.play to start the stream.

    // If they block the webcam the onError signal will be dispatched containing the NavigatorUserMediaError or MediaStreamError event.

    // You can optionally set a width and height for the stream. If set the input will be cropped to these dimensions.
    // If not given then as soon as the stream has enough data the video dimensions will be changed to match the webcam device.
    // You can listen for this with the onChangeSource signal.
    this.video.startMediaStream();

  }

  camAllowed () {

    this.bmd = this.add.bitmapData(this.video.width, this.video.height);
    this.bmd.addToWorld(this.world.centerX, this.world.centerY, 0.5, 0.5);

    this.time.events.loop(50, this.takeSnapshot, this);

    this.add.tween(this.alpha).to({alpha: 0.5}, 1000, Phaser.Easing.Cubic.InOut, true, 0, -1, true);


  }

  camBlocked (video: Phaser.Video, error: any) {

    console.log(`Camera was blocked ${video}  ${error}`)

  }

  takeSnapshot () {

    if (this.bmd.width !== this.video.width || this.bmd.height !== this.video.height) {
      this.bmd.resize(this.video.width, this.video.height);
    }

    // http://localhost:3000/Phaser.Video.html#grab
    // grab(clear, alpha, blendMode) → {Phaser.BitmapData}
    // clear{boolean=false}     Should the BitmapData be cleared before the Video is grabbed? Unless you are using alpha or a blend mode you can usually leave this set to false.
    // alpha{boolean=1}         The alpha that will be set on the video before drawing. A value between 0 (fully transparent) and 1, opaque.
    // blendMode{string=null}   The composite blend mode that will be used when drawing. The default is no blend mode at all. This is a Canvas globalCompositeOperation value such as 'lighter' or 'xor'.

    // Grabs the current frame from the Video or Video Stream and renders it to the Video.snapshot BitmapData.
    // You can optionally set if the BitmapData should be cleared or not, the alpha and the blend mode of the draw.
    // If you need more advanced control over the grabbing them call Video.snapshot.copy directly with the same parameters as BitmapData.copy.
    this.video.grab(true, this.alpha.alpha);

    // http://localhost:3000/Phaser.Video.html#snapshot
    // <readonly> snapshot :Phaser.BitmapData
    // A snapshot grabbed from the video. This is initially black. Populate it by calling Video.grab().
    // When called the BitmapData is updated with a grab taken from the current video playing or active video stream.
    // If Phaser has been compiled without BitmapData support this property will always be null.
    this.bmd.draw(this.video.snapshot);

    this.bmd.draw('swirl', 0, 0, this.video.width, this.video.height, 'color');

  }

}

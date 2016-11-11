import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TakeSnapshotFromStreamState extends BootState {
  video: Phaser.Video;

  create () {

    this.video = this.add.video();

    this.video.onAccess.add(this.camAllowed, this);

    this.video.onError.add(this.camBlocked, this);

    // http://localhost:3000/Phaser.Video.html#onChangeSource
    // onChangeSource :Phaser.Signal
    // This signal is dispatched if the Video source is changed. It sends 3 parameters: a reference to the Video object and the new width and height of the new video source.
    (this.video as any).onChangeSource.add(this.takeSnapshot, this);

    this.video.startMediaStream();

  }

  camAllowed () {

    let cam = this.video.addToWorld();
    cam.scale.set(0.5);

    let grab = this.video.snapshot.addToWorld(this.game.width, this.game.height);
    grab.anchor.set(1);

    this.add.text(400, 32, 'click to grab', {
      font: 'bold 26px Arial',
      fill: '#fff'
    });

    this.input.onDown.add(this.takeSnapshot, this);

  }

  camBlocked (video: Phaser.Video, error: any) {

    console.log('Camera was blocked', video, error);

  }

  takeSnapshot () {

    this.video.grab();

  }

}

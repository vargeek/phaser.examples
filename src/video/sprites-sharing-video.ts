import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SpritesSharingVideoState extends BootState {
  video: Phaser.Video;
  group: Phaser.Group;

  preload () {

    this.load.video('liquid', 'assets/video/liquid512x512.mp4');

  }

  create () {

    this.group = this.add.group();

    this.video = this.add.video('liquid');

    for (var i = 0; i < 10; i++)
    {
        var sprite = this.group.create(this.world.randomX, this.world.randomY, this.video) as Phaser.Sprite;
        sprite.anchor.set(0.5);
        sprite.scale.set(this.rnd.realInRange(0.2, 0.5));
        this.add.tween(sprite).to( { angle: 360 }, this.rnd.between(4000, 8000), "Sine.easeInOut", true, 0, -1, true);
    }

    this.video.play(true);

  }

}

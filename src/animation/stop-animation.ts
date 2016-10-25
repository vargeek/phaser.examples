/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class StopAnimationState extends BootState {
  greenJellyfish: Phaser.Sprite;

  preload () {

    this.load.atlas(AssetID.seacreatures, 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');

    this.load.image(AssetID.undersea, 'assets/pics/undersea.jpg');
    this.load.image(AssetID.coral, 'assets/pics/seabed.png');

  }

  create () {

    this.add.image(0, 0, AssetID.undersea);

    this.add.sprite(32, 32, AssetID.seacreatures, 'greenJellyfish0000');

    this.greenJellyfish = this.add.sprite(330, 100, AssetID.seacreatures);
    this.greenJellyfish.animations.add(Animation.swim, Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4), 30, true);
    this.greenJellyfish.animations.play(Animation.swim);

    this.add.image(0, 466, AssetID.coral);
    this.add.tween(this.greenJellyfish).to({y: 250}, 4000, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

    this.input.onDown.addOnce(this.stopAnimation, this);

  }

  stopAnimation () {

    //  This will just top the animation from running, freezing it at its current frame
    // greenJellyfish.animations.stop();

    //  This method will reset the frame to frame 1 after stopping
    this.greenJellyfish.animations.stop(null, true);

  }
}

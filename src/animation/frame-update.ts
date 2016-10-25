/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class FrameUpdateState extends BootState {
  text: Phaser.Text;
  preload () {

    this.load.spritesheet(AssetID.mummy, 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

  }

  create () {

    let mummy = this.add.sprite(300, 200, AssetID.mummy);
    let walk = mummy.animations.add(Animation.walk);

    // Gets or sets if this animation will dispatch the onUpdate events upon changing frame.
    walk.enableUpdate = true;
    // This event is dispatched when the Animation changes frame.
    // By default this event is disabled due to its intensive nature. Enable it with: Animation.enableUpdate = true.
    // Note that the event is only dispatched with the current frame. In a low-FPS environment Animations
    // will automatically frame-skip to try and claw back time, so do not base your code on expecting to
    // receive a perfectly sequential set of frames from this event.
    walk.onUpdate.add(this.onAnimationUpdate, this);

    mummy.animations.play(Animation.walk, 5, true);

    this.text = this.add.text(300, 264, 'Frame 1', {font: '28px Arial', fill: '#ff0044'});

  }

  onAnimationUpdate (animations: Phaser.Animation, frame: Phaser.Frame) {

    this.text.text = `Frame ${frame.index}`;

  }
}

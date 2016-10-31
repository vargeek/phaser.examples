import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class OnTapState extends BootState {
  pic: Phaser.Sprite;

  preload () {

    this.load.image('TheEnd', 'assets/pics/TheEnd_by_Iloe_and_Made.jpg');
    this.load.image('BountyHunter', 'assets/pics/Bounty_Hunter_by_Anathematixs_Desire.png');

  }

  create () {

    this.pic = this.add.sprite(this.world.centerX, this.world.centerY, 'TheEnd');
    this.pic.alpha = 0.5;
    this.pic.anchor.set(0.5);
    this.pic.scale.set(0.6);

    this.add.text(16, 16, 'tap or double-tap the image', {font: '32px Arial', fill: '#ffffff'});

    // http://localhost:3000/Phaser.Input.html#onTap
    // onTap :Phaser.Signal
    // A Signal that is dispatched each time a pointer is tapped.
    this.input.onTap.add(this.onTap, this);

  }

  onTap (sprite: Phaser.Sprite, doubleTap: boolean) {

    if (doubleTap) {
      if (this.pic.key === 'TheEnd') {
        this.pic.loadTexture('BountyHunter');
      }
      else {
        this.pic.loadTexture('TheEnd');
      }
    }
    else {
      this.pic.alpha = (this.pic.alpha === 0.5) ? 1 : 0.5;
    }

  }

}

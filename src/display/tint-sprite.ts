import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TintSpriteState extends BootState {
  pic: Phaser.Sprite;

  preload () {

    this.load.image('pic', 'assets/pics/barbarian_loading.png');

  }

  create () {

    this.pic = this.add.sprite(this.world.centerX, this.world.centerY, 'pic');
    this.pic.anchor.set(0.5);

    this.time.events.loop(Phaser.Timer.SECOND * 2, this.changeTint, this);


  }

  changeTint () {

    // http://localhost:3000/Phaser.Sprite.html#tint
    // tint :Number
    // The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
    this.pic.tint = Math.random() * 0xffffff;

  }

}

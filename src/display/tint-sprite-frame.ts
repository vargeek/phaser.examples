import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TintSpriteFrameState extends BootState {
  greenJellyfish: Phaser.Sprite;
  stingray: Phaser.Sprite

  preload () {

    this.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');
    this.load.image('undersea', 'assets/pics/undersea.jpg');
    this.load.image('coral', 'assets/pics/seabed.png');

  }

  create () {

    this.add.image(0, 0, 'undersea');

    this.greenJellyfish = this.add.sprite(330, 100, 'seacreatures');
    this.greenJellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4), 30, true);
    this.greenJellyfish.animations.play('swim');

    this.stingray = this.add.sprite(80, 190, 'seacreatures');
    this.stingray.animations.add('swim', Phaser.Animation.generateFrameNames('stingray', 0, 23, '', 4), 30, true);
    this.stingray.animations.play('swim');

    this.add.image(0, 466, 'coral');

    this.add.tween(this.greenJellyfish).to({y: 250}, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
    this.time.events.loop(Phaser.Timer.SECOND * 2, this.changeTint, this);


  }

  changeTint () {

    this.greenJellyfish.tint = Math.random() * 0xffffff;
    this.stingray.tint = Math.random() * 0xffffff;

  }

}

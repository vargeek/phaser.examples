import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TweenRotationState extends BootState {

  arrow: Phaser.Sprite;
  arrow2: Phaser.Sprite;
  lemming: Phaser.Sprite;

  preload () {

    this.load.image(AssetID.arrows, 'assets/sprites/longarrow-white.png');
    this.load.image(AssetID.lemming, 'assets/sprites/lemming.png');

  }

  create () {

    this.stage.backgroundColor = '#00aeef';

    this.arrow2 = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.arrows);
    this.arrow2.anchor.set(0, 0.5);
    this.arrow2.tint = 0x000044;
    this.arrow2.alpha = 0.5;

    this.arrow = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.arrows);
    this.arrow.anchor.set(0, 0.5);

    this.lemming = this.add.sprite(this.world.randomX, this.world.randomY, AssetID.lemming);
    this.lemming.anchor.set(0.5);

    this.setNewLocation();

    this.input.onDown.add(this.setNewLocation, this);

  }

  setNewLocation () {

    this.arrow2.angle = this.arrow.angle;

    this.lemming.x = this.world.randomX;
    this.lemming.y = this.world.randomY;

    let angleTo = this.arrow.position.angle(this.lemming.position, true);
    let shortesAngle = (this.game.math as any).getShortestAngle(angleTo, this.arrow.angle);
    let newAngle = this.arrow.angle - shortesAngle;
    let time = Math.abs(shortesAngle) * 10;
    this.add.tween(this.arrow).to({angle: newAngle}, time, Phaser.Easing.Linear.None, true);


  }

}

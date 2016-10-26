import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BubblesState extends BootState {
  bg: Phaser.TileSprite;

  preload () {

    this.load.image(AssetID.space, 'assets/pics/thalion-rain.png');
    this.load.image(AssetID.ball, 'assets/particles/bubble256.png');

  }

  create () {

    this.bg = this.add.tileSprite(0, 0, 800, 600, AssetID.space);

    let delay = 0;

    for (let index = 0; index < 40; index++) {
      let sprite = this.add.sprite(-100 + this.world.randomX, 600, AssetID.ball);
      sprite.scale.set(this.rnd.realInRange(0.1, 0.6));
      let speed = this.rnd.between(4000, 6000);
      this.add.tween(sprite).to({y: -356}, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);
      delay += 200;
    }

  }


  update () {

    this.bg.tilePosition.y += 0.4;

  }

}

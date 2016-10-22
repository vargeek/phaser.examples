/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Mummy: 'Mummy'
}

const Animation = {
  Walk: 'wakk'
}

export class AddSeveralSprites extends BootState {

  timer = 0;
  total = 0;

  preload () {

    this.load.spritesheet(AssetID.Mummy, '/assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

  }

  create () {

    this.releaseMummy();

  }

  releaseMummy () {

    let mummy = this.add.sprite(-(Math.random() * 800), this.world.randomY, AssetID.Mummy);
    mummy.scale.set(2);

    mummy.angle = this.rnd.angle();

    mummy.animations.add(Animation.Walk);
    mummy.animations.play(Animation.Walk, 20, true);

    this.add.tween(mummy).to({x: this.game.width + (1600 + mummy.x)}, 20000, Phaser.Easing.Linear.None, true);

    this.total++;
    this.timer = this.time.now + 100;

  }

  update () {

    if (this.total < 200 && this.game.time.now > this.timer) {
      this.releaseMummy();
    }

  }

}

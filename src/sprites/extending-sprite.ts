/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Bunny: 'Bunny'
}

export class MonsterBunny extends Phaser.Sprite {

  constructor (game: Phaser.Game, x: number, y: number, public rotateSpeed: number) {

    super(game, x, y, AssetID.Bunny);

  }

  update () {

    this.angle += this.rotateSpeed;

  }

}

export class MonsterBunny2 extends Phaser.Sprite {

  constructor (game: Phaser.Game,public rotateSpeed: number) {

    super(game, game.world.randomX, game.world.randomY, AssetID.Bunny);
    this.anchor.set(0.5);

    let randomScale = 0.1 + Math.random();
    this.scale.set(randomScale);

    game.add.existing(this);

  }

  update () {

    this.angle += this.rotateSpeed;

  }


}



export class ExtendingSpriteState extends BootState {

  preload () {

    this.load.image(AssetID.Bunny, '/assets/sprites/bunny.png');

  }

  create () {

    let wabbit = new MonsterBunny(this.game, 200, 300, 1);
    wabbit.anchor.set(0.5);

    this.add.existing(wabbit);

    let wabbit2 = new MonsterBunny2(this.game, 0.5);


  }


}

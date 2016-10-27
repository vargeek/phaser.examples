import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MonsterGroup extends Phaser.Group {

  constructor (game: Phaser.Game, image: string, action: string) {
    super(game);

    for (let index = 0; index < 30; index++) {

      let sprite = this.create(game.world.randomX, game.world.randomY, image);

      if (action === 'bounce') {
        game.add.tween(sprite).to({y: sprite.y - 100}, 2000, Phaser.Easing.Elastic.Out, true, 0, -1, true);
      }
      else if (action === 'slide') {
        game.add.tween(sprite).to({x: sprite.x + 200}, 4000, Phaser.Easing.Elastic.Out, true, 0, -1, true);
      }
    }

  }

}

export class ExtendingAGroupState extends BootState {

  preload () {

    this.load.image(AssetID.ufo, 'assets/sprites/ufo.png');
    this.load.image(AssetID.baddie, 'assets/sprites/space-baddie.png');

  }

  create () {

    let customGroup1 = new MonsterGroup(this.game, AssetID.ufo, 'bounce');
    let customGroup2 = new MonsterGroup(this.game, AssetID.baddie, 'slide');

  }

}

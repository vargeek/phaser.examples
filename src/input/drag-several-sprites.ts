import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DragSeveralSpritesState extends BootState {

  preload () {

    this.load.image('atari1', 'assets/sprites/atari130xe.png');
    this.load.image('atari2', 'assets/sprites/atari800xl.png');
    this.load.image('atari4', 'assets/sprites/atari800.png');
    this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
    this.load.image('duck', 'assets/sprites/darkwing_crazy.png');
    this.load.image('firstaid', 'assets/sprites/firstaid.png');
    this.load.image('diamond', 'assets/sprites/diamond.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');

  }

  create () {

    let images = this.cache.getKeys(Phaser.Cache.IMAGE);
    let group = this.add.group();

    for (let index = 0; index < images.length; index++) {

      let sprite = group.create(this.world.randomX, this.world.randomY, this.rnd.pick(images)) as Phaser.Sprite;
      sprite.inputEnabled = true;
      sprite.input.enableDrag(false, true);

    }

  }

  render () {

    this.game.debug.inputInfo(32, 32);

  }

}

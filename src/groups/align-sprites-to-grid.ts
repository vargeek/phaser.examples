import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AlignSpriteToGridState extends BootState {

  preload () {

    this.load.spritesheet(AssetID.diamond, 'assets/sprites/diamonds32x24x5.png', 32, 24);

  }

  create () {

    let group = this.add.group();

    group.createMultiple(24, AssetID.diamond, [0, 1, 2, 3, 4], true);

    group.align(12, -1, 48, 48);

    group.x = 100;
    group.y = 64;


  }

}

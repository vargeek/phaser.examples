/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class CreatureDragonState extends BootState {

  preload () {

    this.load.image(AssetID.sky, 'assets/skies/deepblue.png');
    this.load.image(AssetID.dragonTexture, 'assets/creature/dragon.png');
    this.load.json(AssetID.dragonMesh, 'assets/creature/dragon.json');

  }

  create () {

    this.add.image(0, 0, AssetID.sky);

    let dragon = (this.add as any).creature(450, 350, AssetID.dragonTexture, AssetID.dragonMesh);

    dragon.scale.set(10);

    dragon.play(true);

  }

}

/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Undersea: 'Undersea',
  Coral: 'Coral',
  Seacreatures: 'Seacreatures'
}

const Animations = {
  Swim: 'Swim'
}

export class LoadStarlingAtlasState extends BootState {

  preload () {

    this.load.image(AssetID.Undersea, '/assets/pics/undersea.jpg');
    this.load.image(AssetID.Coral, '/assets/pics/seabed.png');

    this.load.atlasXML(AssetID.Seacreatures, '/assets/sprites/seacreatures.png', '/assets/sprites/seacreatures.xml');

  }

  create () {

    this.add.sprite(0, 0, AssetID.Undersea);
    this.add.sprite(0, 466, AssetID.Coral);

    let jellyfish = this.add.sprite(330, 100, AssetID.Seacreatures);
    let frameNames = Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4);
    jellyfish.animations.add(Animations.Swim, frameNames, 30, true);

    jellyfish.animations.play(Animations.Swim);
    this.add.tween(jellyfish).to({y: 250}, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 10000, true);

  }


}

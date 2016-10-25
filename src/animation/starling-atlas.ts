/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class StarlingAtlasState extends BootState {

  preload () {

    //  Here we load the Starling Texture Atlas and XML file
    this.load.atlasXML(AssetID.octopus, 'assets/sprites/octopus.png', 'assets/sprites/octopus.xml');

  }

  create () {

    this.stage.backgroundColor = '#1873CE';

    let octopus = this.add.sprite(300, 200, AssetID.octopus);

    octopus.animations.add(Animation.swim);
    octopus.animations.play(Animation.swim, 30, true);

    this.add.tween(octopus).to({y: 300}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

  }

}

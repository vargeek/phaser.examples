/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Octopus: 'Octopus'
}

export class LoadXmlState extends BootState {

  text: string[];

  preload () {

    this.load.xml(AssetID.Octopus, '/assets/sprites/octopus.xml');

  }

  create () {

    this.stage.backgroundColor = '#0072bc';

    let xml = this.cache.getXML(AssetID.Octopus) as XMLDocument;

    console.log(xml);

  }

}

/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Version: 'Version'
}

interface VersionJSON {
  version: string;
  name: string;
  released: string;
}

export class LoadJsonState extends BootState {

  preload () {

    this.load.json(AssetID.Version, '/assets/version.json');

  }

  create () {

    this.stage.backgroundColor = '#0072bc';

    let phaserJSON = this.cache.getJSON(AssetID.Version) as VersionJSON;

    let text = this.add.text(100, 100, `Current Phaser version: ${phaserJSON.version}`, {fill: '#ffffff'});
    text.setShadow(2, 2, 'rgba(0,0,0,0.5), 0');

    let text2 = this.add.text(100, 200, `Name: ${phaserJSON.name}`, {fill: '#ffffff'});
    text2.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

    let text3 = this.add.text(100, 300, `Released: ${phaserJSON.released}`, {fill: '#ffffff'});
    text3.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

  }

}

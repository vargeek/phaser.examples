/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Html: 'Html'
}

export class LoadTextFileState extends BootState {

  text: string[];

  preload () {

    this.load.text(AssetID.Html, '/index.html');

  }

  create () {

    this.stage.backgroundColor = '#0072bc';

    let html = this.cache.getText(AssetID.Html);

    this.text = html.split('\n');

  }

  render () {

    for (let index = 0; index < 30; index++) {
      if (index >= this.text.length) {
        break;
      }
      this.game.debug.text(this.text[index], 32, index * 20);
    }

  }

}

/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Mod: 'Mod'
}

export class LoadBinaryState extends BootState {

  preload () {

    this.load.binary(AssetID.Mod, '/assets/audio/protracker/global_trash_3_v2.mod', this.binaryLoadCallback, this);

  }

  create () {

    this.stage.backgroundColor = '#0072bc';

    let buffer = this.cache.getBinary(AssetID.Mod) as Uint8Array;

    let signature = this.getString(buffer, 1080, 1084);

    let text = this.add.text(32, 32, `Signature: ${signature}`, {fill: '#ffffff'});
    text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

    let title = this.getString(buffer, 0, 20);
    let text2 = this.add.text(32, 64, `Title: ${title}`, {fill: '#ffffff'});
    text2.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

  }

  binaryLoadCallback (key: string, data: ArrayBuffer) {

    return new Uint8Array(data);

  }

  getString (buffer: Uint8Array, start: number, end: number) {

    let output = '';
    for (let i = start; i < end; i++) {
      output += String.fromCharCode(buffer[i]);
    }

    return output;

  }




}

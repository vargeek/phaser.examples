/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Desyrel: 'Desyrel'
}

export class LoadBitmapFontState extends BootState {
  text: Phaser.BitmapText;

  preload () {

    this.load.bitmapFont(AssetID.Desyrel, '/assets/fonts/bitmapFonts/desyrel-pink.png', '/assets/fonts/bitmapFonts/desyrel-pink.xml');

  }

  create () {

    this.stage.backgroundColor = '#0072bc';

    this.text = this.add.bitmapText(200, 100, AssetID.Desyrel, 'Bitmap fonts', 64);

  }

  update () {

    this.text.setText(`Bitmap Fonts!\nx: ${Math.round(this.input.x)} y: ${Math.round(this.input.y)}`);

  }

}

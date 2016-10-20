/// <reference path="../phaser.d.ts" />

import { BootState } from '../boot.state';

const AssetID = {
  Einstein: 'Einstein'
}

export class ClickAnImageState extends BootState {
  image: Phaser.Sprite;
  text: Phaser.Text;

  private count = 0;
  preload () {
    this.load.image(AssetID.Einstein, '/assets/pics/ra_einstein.png');
  }

  create () {

    this.image = this.add.sprite(this.game.world.centerX, this.game.world.centerY, AssetID.Einstein);
    this.image.anchor.set(0.5);

    this.image.inputEnabled = true;
    this.image.events.onInputDown.add(this.onClickImage, this);

    this.text = this.add.text(256, 16, this.textString, {fill: '#ffffff'});

  }

  onClickImage () {

    this.count++;
    this.text.text = this.textString;

  }

  get textString () {

    return `You clicked ${this.count} times!`;

  }
}

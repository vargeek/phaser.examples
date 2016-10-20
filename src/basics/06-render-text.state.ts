/// <reference path="../phaser.d.ts" />

import { BootState } from '../boot.state';

export class RenderTextState extends BootState {

  create () {

    const text = '- phaser -\n with a sprinkle of \n pixi dust.';
    const style = {font: '65px Arial', fill: '#ff0044', align: 'center'};
    const t = this.add.text(this.world.centerX - 300, 0, text, style);

  }
}

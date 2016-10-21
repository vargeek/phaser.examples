/// <reference path="../phaser.d.ts" />

import { BootState } from '../boot.state';

const AssetID = {
  Mushroom: 'Mushroom',
  Sonic: 'Sonic',
  Phaser: 'Phaser'
}

export class FixedToCamera extends BootState {

  logo1: Phaser.Sprite;
  logo2: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.stage.backgroundColor = '#007236';

    this.load.image(AssetID.Mushroom, '/assets/sprites/mushroom2.png');
    this.load.image(AssetID.Sonic, '/assets/sprites/sonic_havok_sanity.png');
    this.load.image(AssetID.Phaser, '/assets/sprites/phaser1.png');

  }

  create () {
    this.world.setBounds(-1000, -1000, 2000, 2000);

    for (let index = 0; index < 200; index++) {
      this.add.sprite(this.world.randomX, this.world.randomY, AssetID.Mushroom);
    }

    this.add.text(0, 0, 'this text scrolls\nwith the background', {font: '32px Arial', fill: '#f26c4f', align: 'center'});

    this.logo1 = this.add.sprite(0, 0, AssetID.Phaser);
    this.logo1.fixedToCamera = true;
    this.logo1.cameraOffset.setTo(100, 100);

    this.logo2 = this.add.sprite(0, 0, AssetID.Phaser);
    this.logo2.fixedToCamera = true;
    this.logo2.cameraOffset.setTo(500, 100);

    let fixedText = this.add.text(0, 0, 'this text is fixed to the camera', {font: '32px Arial', fill: '#ffffff', align: 'center'});
    fixedText.fixedToCamera = true;
    fixedText.cameraOffset.setTo(200, 500);

    this.add.tween(this.logo2.cameraOffset).to({y: 400}, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.up.isDown) {
      this.camera.y -= 4;
    }
    else if (this.cursors.down.isDown) {
      this.camera.y += 4;
    }
    else if (this.cursors.left.isDown) {
      this.camera.x -= 4;
    }
    else if (this.cursors.right.isDown) {
      this.camera.x += 4;
    }
  }

  render () {
    this.game.debug.cameraInfo(this.camera, 32, 32);
  }

}

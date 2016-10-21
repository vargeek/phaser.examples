/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Mushroom: 'Mushroom',
  Phaser: 'Phaser'
}

export class MoveAroundWorldState extends BootState {

  cursors: Phaser.CursorKeys;
  sprite: Phaser.Sprite;

  preload () {

    this.stage.backgroundColor = '#007236';

    this.load.image(AssetID.Mushroom, '/assets/sprites/mushroom2.png');
    this.load.image(AssetID.Phaser, '/assets/sprites/sonic_havok_sanity.png');

  }

  create () {

    this.world.resize(3000, 600);

    for (let index = 0; index < 100; index++) {
      this.add.sprite(this.world.randomX, this.world.randomY, AssetID.Mushroom);
    }

    this.add.text(600, 800, '- phaser -', {font: '32px Arial', fill: '#330088', align: 'center'});

    const group = this.add.group();
    group.x = 500;

    this.sprite = group.create(100, 300, AssetID.Phaser);
    this.sprite.anchor.set(0.5);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.sprite.angle++;

    if (this.cursors.up.isDown) {
      if (this.cursors.up.shiftKey) {
        this.sprite.angle++;
      }
      else {
        this.camera.y -= 4;
      }
    }
    else if (this.cursors.down.isDown) {
      if (this.cursors.down.shiftKey) {
        this.sprite.angle--;
      }
      else {
        this.camera.y += 4;
      }
    }

    if (this.cursors.left.isDown) {
      if (this.cursors.left.shiftKey) {
        this.world.rotation -= 0.05;
      }
      else {
        this.camera.x -= 4;
      }
    }
    else if (this.cursors.right.isDown) {
      if (this.cursors.right.shiftKey) {
        this.world.rotation += 0.05;
      }
      else {
        this.camera.x += 4;
      }
    }

  }

  render () {
    this.game.debug.cameraInfo(this.camera, 32, 32);
  }

}

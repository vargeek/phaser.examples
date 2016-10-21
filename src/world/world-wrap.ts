/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Backdrop: 'Backdrop',
  Card: 'Card'
}


export class WorldWrapState extends BootState {

  card: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image(AssetID.Backdrop, '/assets/pics/remember-me.jpg');
    this.load.image(AssetID.Card, '/assets/sprites/mana_card.png');

  }

  create () {

    this.world.setBounds(0, 0, 1920, 1200);

    this.add.sprite(0, 0, AssetID.Backdrop);

    this.card = this.add.sprite(0, 0, AssetID.Card);

    this.camera.follow(this.card);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown) {
      this.card.x -= 4;
    }
    else if (this.cursors.right.isDown) {
      this.card.x += 4;
    }

    if (this.cursors.up.isDown) {
      this.card.y -= 4;
    }
    else if (this.cursors.down.isDown) {
      this.card.y += 4;
    }

    this.world.wrap(this.card, 0, true);

  }

  render () {

    this.game.debug.cameraInfo(this.camera, 500, 32);
    this.game.debug.spriteCoords(this.card, 32, 32);

  }

}

/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TileSpriteState extends BootState {
  tilesprite: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image(AssetID.starfield, 'assets/misc/starfield.jpg');

  }

  create () {

    this.tilesprite = this.add.tileSprite(0, 0, 800, 600, AssetID.starfield);
    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown) {
      // The offset position of the image that is being tiled
      this.tilesprite.tilePosition.x += 8;
    }
    else if (this.cursors.right.isDown) {
      this.tilesprite.tilePosition.x -= 8;
    }
    else if (this.cursors.up.isDown) {
      this.tilesprite.tilePosition.y += 8;
    }
    else if (this.cursors.down.isDown) {
      this.tilesprite.tilePosition.y -= 8;
    }

  }

  render () {

    this.game.debug.text(`x: ${this.tilesprite.x}, y: ${this.tilesprite.y}`, 32, 32);
    this.game.debug.text(`w: ${this.tilesprite.width}, h:${this.tilesprite.height}`, 32, 64);
    this.game.debug.text(`tile-position x: ${this.tilesprite.tilePosition.x}, y: ${this.tilesprite.tilePosition.y}`, 32, 96);

  }

}

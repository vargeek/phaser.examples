/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AnimatedTilingSpriteState extends BootState {
  tilesprite: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;
  count = 0;

  preload () {

    this.load.image(AssetID.disk, 'assets/sprites/p2.jpeg');

  }

  create () {

    this.tilesprite = this.add.tileSprite(0, 0, 512, 512, AssetID.disk);
    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.count += 0.005;

    this.tilesprite.tileScale.x = 2 + Math.sin(this.count);
    this.tilesprite.tileScale.y = 2 + Math.cos(this.count);

    this.tilesprite.tilePosition.x += 1;
    this.tilesprite.tilePosition.y += 1;

    if (this.cursors.left.isDown) {
      this.tilesprite.x -= 4;
    }
    else if (this.cursors.right.isDown) {
      this.tilesprite.x += 4;
    }
    else if (this.cursors.up.isDown) {
      this.tilesprite.y -= 4;
    }
    else if (this.cursors.down.isDown) {
      this.tilesprite.y += 4;
    }

  }

}

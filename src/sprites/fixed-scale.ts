/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Disk: 'Disk',
  Ball: 'Ball'
}

export class FixedScaleState extends BootState {
  child: Phaser.Sprite;
  parent: Phaser.Sprite;

  preload () {

    this.load.image(AssetID.Disk, '/assets/sprites/copy-that-floppy.png');
    this.load.image(AssetID.Ball, '/assets/sprites/mushroom2.png');

  }

  create () {

    this.parent = this.add.sprite(100, 100, AssetID.Disk);
    this.parent.name = 'disk';

    this.child = this.make.sprite(0, 0, AssetID.Ball);
    this.parent.addChild(this.child);

    this.child.setScaleMinMax(1, 2);

    this.add.tween(this.parent.scale).to({x: 3, y:3}, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);

  }

}

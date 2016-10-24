/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AlignWithinSpriteState extends BootState {

  preload () {

    this.load.image(AssetID.spaceship, '/assets/pics/spaceship.png');
    this.load.image(AssetID.block, '/assets/sprites/block.png');

  }

  create () {

    let pic = this.add.sprite(0, 0, AssetID.spaceship);
    pic.alignIn(this.world.bounds, Phaser.CENTER);
    let sprite1 = this.add.sprite(0, 0, AssetID.block);
    let sprite2 = this.add.sprite(0, 0, AssetID.block);
    let sprite3 = this.add.sprite(0, 0, AssetID.block);

    /**
     *               TOP_LEFT     TOP_CENTER     TOP_RIGHT
     * LEFT_TOP     |-------------------------------------| RIGHT_TOP
     *              |                                     |
     * LEFT_CENTER  |                                     | RIGHT_CENTER
     *              |                                     |
     * LEFT_BOTTOM  |                                     | RIGHT_BOTTOM
     *              |-------------------------------------|
     *              BOTTOM_LEFT   BOTTOM_CENTER  BOTTOM_RIGHT
     */
    sprite1.alignIn(pic, Phaser.BOTTOM_RIGHT);
    sprite2.alignIn(pic, Phaser.BOTTOM_LEFT);
    sprite3.alignIn(pic, Phaser.TOP_CENTER, 0, -10);

  }

}

/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AlignToSpriteState extends BootState {

  preload () {

    this.load.image(AssetID.spaceship, '/assets/pics/spaceship.png');
    this.load.image(AssetID.pangball, '/assets/sprites/32x32.png');

  }

  create () {

    let pic = this.add.sprite(0, 0, AssetID.spaceship);
    pic.alignIn(this.world.bounds, Phaser.CENTER);

    this.world.createMultiple(12, AssetID.pangball, 0, true);

    (this.world.getChildAt(1) as Phaser.Sprite).alignTo(pic, Phaser.TOP_LEFT);
    (this.world.getChildAt(2) as Phaser.Sprite).alignTo(pic, Phaser.TOP_CENTER);
    (this.world.getChildAt(3) as Phaser.Sprite).alignTo(pic, Phaser.TOP_RIGHT);
    (this.world.getChildAt(4) as Phaser.Sprite).alignTo(pic, Phaser.LEFT_TOP);
    (this.world.getChildAt(5) as Phaser.Sprite).alignTo(pic, Phaser.LEFT_CENTER);
    (this.world.getChildAt(6) as Phaser.Sprite).alignTo(pic, Phaser.LEFT_BOTTOM);
    (this.world.getChildAt(7) as Phaser.Sprite).alignTo(pic, Phaser.RIGHT_TOP);
    (this.world.getChildAt(8) as Phaser.Sprite).alignTo(pic, Phaser.RIGHT_CENTER);
    (this.world.getChildAt(9) as Phaser.Sprite).alignTo(pic, Phaser.RIGHT_BOTTOM);
    (this.world.getChildAt(10) as Phaser.Sprite).alignTo(pic, Phaser.BOTTOM_LEFT);
    (this.world.getChildAt(11) as Phaser.Sprite).alignTo(pic, Phaser.BOTTOM_CENTER);
    (this.world.getChildAt(12) as Phaser.Sprite).alignTo(pic, Phaser.BOTTOM_RIGHT);


    let style = {font: '14px Courier', fill: '#00ff44'};
    let text1 = this.add.text(0, 0, 'Phaser', style);
    let text2 = this.add.text(0, 0, '2.6.2', style);
    let text3 = this.add.text(0, 0, 'Aliging Text', style);

    text1.alignTo(pic, Phaser.RIGHT_TOP, 16);
    text2.alignTo(pic, Phaser.RIGHT_CENTER, 16);
    text3.alignTo(pic, Phaser.BOTTOM_CENTER, 0);

  }

}

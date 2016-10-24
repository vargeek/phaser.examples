/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AlignToRectangleState extends BootState {
  rect: Phaser.Rectangle;
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  sprite3: Phaser.Sprite;


  preload () {

    this.load.image(AssetID.mushroom, '/assets/sprites/mushroom2.png');
    this.load.image(AssetID.orb, '/assets/sprites/orb-red.png');

  }

  create () {

    this.stage.backgroundColor = '#3433bb';

    this.rect = new Phaser.Rectangle(200, 200, 400, 300);


    this.sprite1 = this.add.sprite(200, 150, AssetID.mushroom);
    this.sprite1.anchor.set(0.5);

    this.sprite2 = this.add.sprite(200, 250, AssetID.orb);

    this.sprite3 = this.add.sprite(200, 400, AssetID.mushroom);
    this.sprite3.anchor.set(0.5);
    this.sprite3.scale.set(2);

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
    this.sprite1.alignTo(this.rect, Phaser.TOP_CENTER);
    this.sprite2.alignTo(this.rect, Phaser.BOTTOM_RIGHT);
    this.sprite3.alignTo(this.rect, Phaser.LEFT_CENTER);

  }

  render () {
    this.game.debug.rectangle(this.rect, '#ffffff', false);

    this.game.debug.geom(this.rect.getPoint(Phaser.TOP_LEFT, undefined), '#ff00ff');
    this.game.debug.geom(this.rect.getPoint(Phaser.TOP_CENTER, undefined), '#ff00ff');
    this.game.debug.geom(this.rect.getPoint(Phaser.TOP_RIGHT, undefined), '#ff00ff');

    this.game.debug.geom(this.rect.getPoint(Phaser.LEFT_CENTER, undefined), '#ff00ff');
    this.game.debug.geom(this.rect.getPoint(Phaser.CENTER, undefined), '#ff00ff');
    this.game.debug.geom(this.rect.getPoint(Phaser.RIGHT_CENTER, undefined), '#ff00ff');

    this.game.debug.geom(this.rect.getPoint(Phaser.BOTTOM_LEFT, undefined), '#ff00ff');
    this.game.debug.geom(this.rect.getPoint(Phaser.BOTTOM_CENTER, undefined), '#ff00ff');
    this.game.debug.geom(this.rect.getPoint(Phaser.BOTTOM_RIGHT, undefined), '#ff00ff');

  }

}

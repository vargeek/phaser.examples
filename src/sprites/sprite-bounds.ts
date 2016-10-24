/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SpriteBoundsState extends BootState {
  rect: Phaser.Rectangle;
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  sprite3: Phaser.Sprite;

  preload () {

    this.load.image(AssetID.mushroom, '/assets/sprites/mushroom2.png');

  }

  create () {

    this.stage.backgroundColor = '#3433bb';
    this.rect = new Phaser.Rectangle(100, 50, 600, 500);

    this.sprite1 = this.add.sprite(200, 150, AssetID.mushroom);
    this.sprite1.anchor.set(0.5);

    this.sprite2 = this.add.sprite(200, 250, AssetID.mushroom);

    this.sprite3 = this.add.sprite(200, 400, AssetID.mushroom);
    this.sprite3.anchor.set(0.5);
    this.sprite3.scale.set(2);

    this.sprite1.centerX = this.rect.centerX;
    this.sprite2.centerX = this.rect.centerX;
    this.sprite3.centerX = this.rect.centerX;


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

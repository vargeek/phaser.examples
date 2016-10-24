/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MovementMaskState extends BootState {
  box: Phaser.Sprite;
  platform: Phaser.Sprite;

  preload () {

    this.load.image(AssetID.box, '/assets/sprites/block.png');
    this.load.image(AssetID.platform, '/assets/sprites/platform.png');

  }

  create () {

    let platform = this.add.sprite(150, this.world.centerY, AssetID.platform);
    platform.height = 8;
    this.platform = platform;

    this.box = this.add.sprite(570, 400, AssetID.box);
    this.box.anchor.set(0.5);

    let mask = this.add.graphics(0, 0);
    mask.beginFill(0xffffff);
    mask.drawRect(platform.x, platform.y - 200, platform.width, 200);

    this.box.mask = mask;

    this.add.tween(this.box).to({y: 200}, 500, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
    this.add.tween(this.box).to({x: 232}, 3000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);

  }

  update () {

    this.box.rotation += 0.04;

  }

  render () {

    let rectangle = new Phaser.Rectangle(this.platform.x, this.platform.y - 200, this.platform.width, 200);

    this.game.debug.rectangle(rectangle, '#ffffff', false);
    this.game.debug.geom(this.box.getBounds(), undefined, false);

  }

}

/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SpriteGroupMaskState extends BootState {
  group: Phaser.Group;

  preload () {

    this.load.image(AssetID.box, '/assets/sprites/block.png');
    this.load.image(AssetID.platform, '/assets/sprites/platform.png');

  }

  create () {

    let platform = this.add.sprite(0, this.world.centerY, AssetID.platform);
    platform.width = this.game.width;
    platform.height = 8;

    this.group = this.add.group();

    let box1 = this.group.create(200, 300, AssetID.box);
    let box2 = this.group.create(400, 300, AssetID.box);
    let box3 = this.group.create(600, 300, AssetID.box);

    this.group.setAll('anchor.x', 0.5);
    this.group.setAll('anchor.y', 0.5);

    let mask = this.add.graphics(0, 100);
    mask.beginFill(0xffffff);
    mask.drawRect(130, 0, 140, 200);
    mask.drawRect(330, 0, 140, 200);
    mask.drawRect(530, 0, 140, 200);

    this.group.mask = mask;

    this.add.tween(box1).to({y: 200}, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
    this.add.tween(box2).to({y: 200}, 1000, Phaser.Easing.Sinusoidal.InOut, true, 500, -1, true);
    this.add.tween(box3).to({y: 200}, 1000, Phaser.Easing.Sinusoidal.InOut, true, 1000, -1, true);

  }

  update () {

    this.group.forEach(function (box: Phaser.Sprite) {
      box.rotation += 0.04;
    }, this);

  }

  render () {

    this.game.debug.geom(this.group.getBounds(), undefined, false);
    this.game.debug.rectangle(new Phaser.Rectangle(130, 300, 140, 200), undefined, false);
    this.game.debug.rectangle(new Phaser.Rectangle(330, 300, 140, 200), undefined, false);
    this.game.debug.rectangle(new Phaser.Rectangle(530, 300, 140, 200), undefined, false);

  }

}

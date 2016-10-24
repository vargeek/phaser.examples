/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {

  Mushroom: 'Mushroom',
  Mummy: 'Mummy'

}

export class ChildSpritesState extends BootState {

  parent: Phaser.Sprite;
  child: PIXI.DisplayObject;

  preload () {

    this.load.image(AssetID.Mushroom, '/assets/sprites/mushroom2.png');
    this.load.spritesheet(AssetID.Mummy, '/assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

  }

  create () {

    this.parent = this.add.sprite(100, 100, AssetID.Mushroom);

    this.parent.addChild(this.game.make.sprite(-50, -50, AssetID.Mummy));
    this.parent.addChild(this.game.make.sprite(100, 0, AssetID.Mummy));
    this.parent.addChild(this.game.make.sprite(200, 200, AssetID.Mummy));

    this.child = this.parent.addChild(this.game.make.sprite(0, 100, AssetID.Mummy));

  }

  update () {

    this.parent.x += 0.1;
    this.child.x += 0.1;

  }

  render () {

    this.game.debug.text(this.parent.width.toString(), 32, 32);
    this.game.debug.geom(this.parent.getBounds());

  }

}

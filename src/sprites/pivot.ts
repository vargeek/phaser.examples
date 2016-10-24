/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';

const AssetID = {
  Arrow: '/assets/sprites/arrow.png'
}

export class PivotState extends BootState {

  arrow0: Phaser.Sprite;
  arrow1: Phaser.Sprite;
  arrow2: Phaser.Sprite;
  arrow3: Phaser.Sprite;
  arrow4: Phaser.Sprite;

  preload () {

    this.load.image(AssetID.Arrow, '/assets/sprites/arrow.png');

  }

  create () {

    this.stage.backgroundColor = '#3e5f96';

    this.arrow0 = this.add.sprite(this.world.centerX, this.world.centerY, AssetID.Arrow);

    this.arrow1 = this.add.sprite(200, 150, AssetID.Arrow);
    this.arrow1.pivot.x = 100;

    this.arrow2 = this.add.sprite(600, 150, AssetID.Arrow);
    this.arrow2.anchor.set(0.5);
    this.arrow2.pivot.x = 100;

    this.arrow3 = this.add.sprite(200, 450, AssetID.Arrow);
    this.arrow3.pivot.x = 100;
    this.arrow3.pivot.y = 100;

    this.arrow4 = this.add.sprite(600, 450, AssetID.Arrow);
    this.arrow4.anchor.set(0.5);
    this.arrow4.pivot.x = 100;
    this.arrow4.pivot.y = 100;



  }

  update () {

    // this.arrow0.rotation += 0.05;
    // this.arrow1.rotation += 0.05;
    // this.arrow2.rotation += 0.05;
    // this.arrow3.rotation += 0.05;
    // this.arrow4.rotation += 0.05;

  }

  render () {

    this.game.debug.geom(new Phaser.Point(this.arrow0.x, this.arrow0.y), '#ffff00');
    this.game.debug.geom(new Phaser.Point(this.arrow1.x, this.arrow1.y), '#ffff00');
    this.game.debug.geom(new Phaser.Point(this.arrow2.x, this.arrow2.y), '#ffff00');
    this.game.debug.geom(new Phaser.Point(this.arrow3.x, this.arrow3.y), '#ffff00');
    this.game.debug.geom(new Phaser.Point(this.arrow4.x, this.arrow4.y), '#ffff00');

  }

}

/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class OverlapWithoutPhysicsState extends BootState {
sprite1: Phaser.Sprite;
sprite2: Phaser.Sprite;
text: Phaser.Text;

  preload () {

    this.load.image(AssetID.atari1, 'assets/sprites/atari130xe.png');
    this.load.image(AssetID.atari2, 'assets/sprites/atari800xl.png');

  }

  create () {

    this.sprite1 = this.add.sprite(100, 200, AssetID.atari1);
    this.sprite1.inputEnabled = true;
    this.sprite1.input.enableDrag();

    this.sprite2 = this.add.sprite(400, 400, AssetID.atari1);
    this.sprite2.inputEnabled = true;
    this.sprite2.input.enableDrag();

    this.text = this.add.text(16, 16, 'Drag the sprites. Overlapping: false', {fill: '#ffffff'});

  }

  update () {

    if (this.checkOverlap(this.sprite1, this.sprite2)) {
      this.text.text = 'Drag the sprites. Overlapping: true';
    }
    else {
      this.text.text = 'Drag the sprites. Overlapping: false';
    }

  }

  checkOverlap (sprite1: Phaser.Sprite, sprite2: Phaser.Sprite) {

    return Phaser.Rectangle.intersects(
      sprite1.getBounds() as any as Phaser.Rectangle,
      sprite2.getBounds() as any as Phaser.Rectangle
    );

  }

}

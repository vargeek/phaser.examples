import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DrawSpriteState extends BootState {
  bmd: Phaser.BitmapData;
  loop: Phaser.Sprite;
  crab: Phaser.Sprite;

  preload () {

    this.load.image('loop', 'assets/sprites/loop.png');
    this.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');

  }

  create () {

    this.loop = this.make.sprite(0, 0, 'loop');
    this.loop.anchor.set(0.5);

    this.crab = this.make.sprite(0, 0, 'seacreatures', 'crab10015');

    this.bmd = this.add.bitmapData(this.game.width, this.game.height);
    this.bmd.addToWorld();

    this.bmd.smoothed = false;

    this.bmd.draw(this.crab, 10, 10);

    this.input.addMoveCallback(this.paint, this);

  }

  paint (pointer: Phaser.Pointer, x: number, y: number) {

    if (pointer.isDown) {
      this.bmd.draw(this.loop, x, y);
    }

  }

  update () {

    this.loop.rotation += 0.1;

  }

}

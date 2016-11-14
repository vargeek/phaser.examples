import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class HsvColorWheelState extends BootState {
  math: typeof Phaser.Math;
  bmd: Phaser.BitmapData;
  index = 0;
  colors: Phaser.ColorComponents[];

  create () {

    this.bmd = this.add.bitmapData(800, 600);

    this.add.sprite(0, 0, this.bmd);

    // http://localhost:3000/Phaser.Color.html#HSVColorWheel
    // <static> HSVColorWheel(s, v) → {array}
    // Get HSV color wheel values in an array which will be 360 elements in size.
    this.colors = Phaser.Color.HSVColorWheel();

    this.input.addMoveCallback(this.paint, this);
    this.input.addMoveCallback(this.paint2, this);
    this.input.addMoveCallback(this.paint3, this);
    this.input.addMoveCallback(this.paint4, this);
	  this.input.addMoveCallback(this.paint5, this);


    this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(this.remove, this);

  }

  remove () {

    this.input.deleteMoveCallback(this.paint3, this);

  }

  paint (pointer: Phaser.Pointer, x: number, y: number) {
    if (pointer.isDown) {
      this.bmd.circle(x, y, 16, this.colors[this.index].rgba);
      this.index = this.math.wrapValue(this.index, 1, 359);
      this.bmd.dirty = true;
    }

  }

  paint2 (pointer: Phaser.Pointer, x: number, y: number) {

    if (pointer.isDown) {
      this.bmd.circle(x, y + 64, 8, this.colors[this.index].rgba);
      this.index = this.math.wrapValue(this.index, 1, 359);
    }

  }
  paint3 (pointer: Phaser.Pointer, x: number, y: number) {

    if (pointer.isDown) {
      this.bmd.circle(x, y - 64, 8, this.colors[this.index].rgba);
    }

  }
  paint4 (pointer: Phaser.Pointer, x: number, y: number) {

    if (pointer.isDown) {
      this.bmd.circle(x - 64, y, 8, this.colors[this.index].rgba);
    }

  }

  paint5 (pointer: Phaser.Pointer, x: number, y: number) {

    if (pointer.isDown) {
      this.bmd.circle(x + 64, y, 8, this.colors[this.index].rgba);
    }

  }

}

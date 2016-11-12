import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LineBoundsState extends BootState {
  line: Phaser.Line;
  setting = false;

  create () {

    this.line = new Phaser.Line(64, 64, 200, 300);
    this.game.input.onDown.add(this.onInputDown, this);

  }

  update () {

    if (this.setting) {
      if (this.input.activePointer.isDown) {
        this.line.end.set(this.input.activePointer.x, this.input.activePointer.y);
      }
      else {
        this.setting = false;
      }
    }

  }

  onInputDown (pointer: Phaser.Pointer) {

    this.setting = true;
    this.line.start.set(pointer.x, pointer.y);

  }

  render () {

    this.game.debug.geom(this.line);
    this.game.debug.rectangle(this.line as any);

  }

}

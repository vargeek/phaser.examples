import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DynamicTextShadowState extends BootState {
  text: Phaser.Text;

  create () {

    this.stage.setBackgroundColor(0xfbf6d5);

    this.text = this.add.text(this.world.centerX, 250, '  dynamic shadows  ', null);
    this.text.anchor.set(0.5);
    // http://localhost:3000/Phaser.Text.html#align
    // align :string
    // Controls the horizontal alignment for multiline text.
    // Can be: 'left', 'center' or 'right'.
    // Note: Does not affect single lines of text. For that please see setTextBounds.
    this.text.align = 'center';

    this.text.font = 'Arial Black';
    this.text.fontSize = 70;
    this.text.fontWeight = 'bold';
    this.text.fill = '#ec008c';

    this.text.setShadow(0, 0, 'rbga(0, 0, 0, 0.5)', 0);

  }

  update () {

    let offset = this.moveToXY(this.input.activePointer, this.text.x, this.text.y, 8);
    this.text.setShadow(offset.x, offset.y, 'rgba(0,0,0,0.5)');
  }

  distanceToPointer(displayObject: Phaser.Sprite, pointer: Phaser.Pointer) {



  }

  moveToXY(pointer: Phaser.Pointer, x: number, y: number, speed: number): Phaser.Point {
    let angle = Math.atan2(y - pointer.y, x - pointer.x);
    let mx = Math.cos(angle) * speed;
    let my = Math.sin(angle) * speed;

    return new Phaser.Point(mx, my);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CircleState extends BootState {

  create () {

    // http://localhost:3000/Phaser.GameObjectFactory.html#graphics
    // graphics(x, y, group) → {Phaser.Graphics}
    // Creates a new Graphics object.
    let graphics = this.add.graphics(0, 0);

    // http://localhost:3000/Phaser.Graphics.html#beginFill
    // beginFill(color, alpha) → {PIXI.Graphics}
    // Specifies a simple one-color fill that subsequent calls to other Graphics methods
    // (such as lineTo() or drawCircle()) use when drawing.
    graphics.beginFill(0xff0000, 1);
    // http://localhost:3000/Phaser.Graphics.html#drawCircle
    // drawCircle(x, y, diameter) → {PIXI.Graphics}
    // Draws a circle.
    graphics.drawCircle(300, 300, 100);
    // http://localhost:3000/Phaser.Graphics.html#endFill
    // endFill() → {PIXI.Graphics}
    // Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
    graphics.endFill();

  }

}

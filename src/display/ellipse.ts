import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class EllipseState extends BootState {

  create () {

    let graphics = this.add.graphics(this.world.centerX, this.world.centerY);

    // http://localhost:3000/Phaser.Graphics.html#lineStyle
    // lineStyle(lineWidth, color, alpha) → {PIXI.Graphics}
    // Specifies the line style used for subsequent calls to Graphics methods such as the lineTo() method or the drawCircle() method.
    graphics.lineStyle(8, 0xffd900);
    // http://localhost:3000/Phaser.Graphics.html#drawEllipse
    // drawEllipse(x, y, width, height) → {PIXI.Graphics}
    // Draws an ellipse.
    graphics.drawEllipse(100, 100, 200, 60);

  }

}

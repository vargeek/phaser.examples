import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GraphicsState extends BootState {

  create () {

    let graphics = this.add.graphics(100, 100);

    // set a fill and line style
    graphics.beginFill(0xff3300);
    graphics.lineStyle(10, 0xffd900, 1);

    // draw a shape
    // http://localhost:3000/Phaser.Graphics.html#moveTo
    // moveTo(x, y) → {PIXI.Graphics}
    // Moves the current drawing position to x, y.
    graphics.moveTo(50,50);

    // http://localhost:3000/Phaser.Graphics.html#lineTo
    // lineTo(x, y) → {PIXI.Graphics}
    // Draws a line using the current line style from the current drawing position to (x, y);
    // The current drawing position is then set to (x, y).
    graphics.lineTo(250, 50);
    graphics.lineTo(100, 100);
    graphics.lineTo(250, 220);
    graphics.lineTo(50, 220);
    graphics.lineTo(50, 50);
    graphics.endFill();

    // set a fill and line style again
    graphics.lineStyle(10, 0xFF0000, 0.8);
    graphics.beginFill(0xFF700B, 1);

    // draw a second shape
    graphics.moveTo(210,300);
    graphics.lineTo(450,320);
    graphics.lineTo(570,350);
    // http://localhost:3000/Phaser.Graphics.html#quadraticCurveTo
    // quadraticCurveTo(cpX, cpY, toX, toY) → {PIXI.Graphics}
    // Calculate the points for a quadratic bezier curve and then draws it.
    // Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
    graphics.quadraticCurveTo(600, 0, 480,100);
    graphics.lineTo(330,120);
    graphics.lineTo(410,200);
    graphics.lineTo(210,300);
    graphics.endFill();

    // draw a rectangle
    graphics.lineStyle(2, 0x0000FF, 1);
    // http://localhost:3000/Phaser.Graphics.html#drawRect
    // drawRect(x, y, width, height) → {PIXI.Graphics}
    graphics.drawRect(50, 250, 100, 100);

    // draw a circle
    graphics.lineStyle(0);
    graphics.beginFill(0xFFFF0B, 0.5);
    graphics.drawCircle(470, 200, 200);
    graphics.endFill();

    graphics.lineStyle(20, 0x33FF00);
    graphics.moveTo(30,30);
    graphics.lineTo(600, 300);



  }

}

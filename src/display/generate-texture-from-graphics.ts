import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GenerateTextureFromGraphicsState extends BootState {
  sprite: Phaser.Sprite;

  create () {

    //  Create a nice and complex graphics object
    var graphics = this.add.graphics(0, 0);

    graphics.beginFill(0xFF3300);
    graphics.lineStyle(10, 0xffd900, 1);

    graphics.moveTo(50,50);
    graphics.lineTo(250, 50);
    graphics.lineTo(100, 100);
    graphics.lineTo(250, 220);
    graphics.lineTo(50, 220);
    graphics.lineTo(50, 50);
    graphics.endFill();

    graphics.lineStyle(10, 0xFF0000, 0.8);
    graphics.beginFill(0xFF700B, 1);

    graphics.moveTo(210,300);
    graphics.lineTo(450,320);
    graphics.lineTo(570,350);
    graphics.quadraticCurveTo(600, 0, 480,100);
    graphics.lineTo(330,120);
    graphics.lineTo(410,200);
    graphics.lineTo(210,300);
    graphics.endFill();

    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.drawRect(50, 250, 100, 100);

    graphics.lineStyle(0);
    graphics.beginFill(0xFFFF0B, 0.5);
    graphics.drawCircle(470, 200, 200);
    graphics.endFill();

    graphics.lineStyle(20, 0x33FF00);
    graphics.moveTo(30,30);
    graphics.lineTo(600, 300);

    // http://localhost:3000/Phaser.Graphics.html#generateTexture
    // generateTexture(resolution, scaleMode, padding) → {PIXI.Texture}
    // Useful function that returns a texture of the graphics object that can then be used to create sprites
    // This can be quite useful if your geometry is complicated and needs to be reused multiple times.
    this.sprite = this.add.sprite(400, 300, graphics.generateTexture());
    this.sprite.anchor.set(0.5);

    //  And destroy the original graphics object
    // http://localhost:3000/Phaser.Graphics.html#destroy
    // destroy(destroyChildren)
    // Destroy this Graphics instance.
    graphics.destroy();

    // http://localhost:3000/Phaser.Graphics.html#pendingDestroy
    // pendingDestroy :boolean
    // A Game Object is that is pendingDestroy is flagged to have its destroy method called on the next logic update.
    // You can set it directly to allow you to flag an object to be destroyed on its next update.
    // This is extremely useful if you wish to destroy an object from within one of its own callbacks
    // such as with Buttons or other Input events.


  }

  update () {

    this.sprite.rotation += 0.01;

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PixelPerfectClickDetectionState extends BootState {
  bunny: Phaser.Sprite;

  preload () {

    this.load.image('bunny', 'assets/sprites/bunny.png');

  }

  create () {

    this.bunny = this.add.sprite(this.world.centerX, this.world.centerY, 'bunny');
    this.bunny.anchor.set(0.5);
    this.bunny.inputEnabled = true;

    // 注意光标在什么区域开始变成手型光标
    // http://localhost:3000/Phaser.InputHandler.html#pixelPerfectOver
    // pixelPerfectOver :boolean
    // Set to true to use pixel perfect hit detection when checking if the pointer is over this Sprite.
    // The x/y coordinates of the pointer are tested against the image in combination with the InputHandler.pixelPerfectAlpha value.
    // This feature only works for display objects with image based textures such as Sprites. It won't work on BitmapText or Rope.
    // Warning: This is expensive, especially on mobile (where it's not even needed!) so only enable if required. Also see the less-expensive InputHandler.pixelPerfectClick. Use a pixel perfect check when testing for pointer over.
    this.bunny.input.pixelPerfectOver = true;
    this.bunny.input.useHandCursor = true;

  }

  update () {

    this.bunny.angle += 0.05;

  }

  render () {

    this.game.debug.spriteInputInfo(this.bunny, 32, 32);
    this.game.debug.geom(this.bunny.getBounds());

  }

}

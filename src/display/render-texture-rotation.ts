import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RenderTextureRotationState extends BootState {
  sprite: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  conair: Phaser.Group;
  texture: Phaser.RenderTexture;

  preload () {

    this.load.image('diver', 'assets/sprites/treasure_trap.png');
    this.load.image('ball', 'assets/sprites/spinObj_01.png');

  }

  create () {

    this.texture = this.add.renderTexture(this.game.width, this.game.height);
    this.game.add.sprite(0, 0, this.texture);

    this.conair = this.add.group();
    this.sprite = this.conair.create(256, 256, 'diver');
    this.sprite.anchor.set(0.5);

    this.sprite2 = this.game.make.sprite(200, 200, 'ball');
    this.sprite2.anchor.set(0.5);

    this.add.tween(this.sprite.scale).to({x: 0.2, y: 0.2}, 2000, Phaser.Easing.Sinusoidal.InOut, true, 500, -1, true);

    this.input.onDown.add(this.drawSprite, this);

  }

  drawSprite () {

    // http://localhost:3000/Phaser.RenderTexture.html#render
    // render(displayObject, matrix, clear)
    // matrix{Phaser.Matrix}      Optional matrix to apply to the display object before rendering. If null or undefined it will use the worldTransform matrix of the given display object.
    // This function will draw the display object to the RenderTexture.
    // In versions of Phaser prior to 2.4.0 the second parameter was a Phaser.Point object.
    // This is now a Matrix allowing you much more control over how the Display Object is rendered.
    // If you need to replicate the earlier behavior please use Phaser.RenderTexture.renderXY instead.
    // If you wish for the displayObject to be rendered taking its current scale, rotation and translation into account then either
    // pass null, leave it undefined or pass displayObject.worldTransform as the matrix value.
    this.texture.render(this.conair);
    this.texture.renderXY(this.sprite2, this.world.centerX, this.world.centerY);

  }

  update () {

    this.sprite.rotation += 0.01;
    this.sprite2.rotation += 0.01;

    this.sprite.x = this.input.activePointer.x;
    this.sprite.y = this.input.activePointer.y;

  }

}

import { BootState, IBootInfo } from '../boot.state';
import { AssetID } from '../constant';

export class RoundPixelsState extends BootState {
  static bootInfo: IBootInfo = {
    states: [],
    renderer: Phaser.CANVAS,
    bounds: {
      width: 800,
      height: 600
    }
  }
  boss: Phaser.Sprite;
  melon: Phaser.Sprite;
  button: Phaser.Button;

  preload () {

    this.load.image('boss', 'assets/misc/boss1.png');
    this.load.image('melon', 'assets/sprites/melon.png');
    this.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);

  }

  create () {

    this.game.renderer.renderSession.roundPixels = true;

    this.boss = this.add.sprite(this.world.centerX, this.world.centerY, 'boss');
    this.boss.anchor.set(0.5);
    this.boss.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

    // this.boss.smoothed = false;
    this.boss.smoothed = true;

    // this.stage.smoothed = false;
    // this.stage.smoothed = true;

    this.input.onDown.add(this.changeScale, this);

  }

  changeScale (pointer: Phaser.Pointer) {
    let scale = this.boss.scale.x;

    if (pointer.x <= this.world.centerX) {
      scale -= 0.5
      if (scale <= 0.5 ) {
        scale = 0.5;
      }
    }
    else {
      scale += 0.5;
    }
    this.boss.scale.x = this.boss.scale.y = scale;

  }

  render () {

    let line = new Phaser.Line(this.world.centerX, 0, this.world.centerX, this.world.height);
    this.game.debug.geom(line);

  }

}

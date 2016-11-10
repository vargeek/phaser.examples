import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CameraCullState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.image('disk', 'assets/sprites/ra_dont_crack_under_pressure.png');

  }

  create () {

    this.stage.backgroundColor = '#182d3b';

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'disk');
    this.sprite.anchor.set(0.5);

  }

  update () {

    this.sprite.rotation += 0.01;

    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.sprite.x -= 4;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.sprite.x += 4;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.sprite.y -= 4;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.sprite.y += 4;
    }

  }

  render () {

    this.game.debug.spriteBounds(this.sprite);
    this.game.debug.spriteInfo(this.sprite, 20, 20);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RenderCrispState extends BootState {
  boss: Phaser.Sprite;
  melon: Phaser.Sprite;
  button: Phaser.Button;

  preload () {

    this.load.image('boss', 'assets/misc/boss1.png');
    this.load.image('melon', 'assets/sprites/melon.png');
    this.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);

  }

  create () {

    this.boss = this.add.sprite(this.world.centerX, this.world.centerY, 'boss');
    this.boss.anchor.set(0.5);

    this.melon = this.add.sprite(500, this.world.centerX, 'melon');
    this.melon.anchor.set(0.5);

    // http://localhost:3000/Phaser.Sprite.html#smoothed
    // smoothed :boolean
    // Enable or disable texture smoothing for this Game Object.
    // It only takes effect if the Game Object is using an image based texture.
    // Smoothing is enabled by default.
    this.boss.smoothed = false;

    this.button = this.add.button(32, 32, 'button', this.clickedIt, this, 2, 1, 0);

  }

  clickedIt () {

    this.boss.scale.x += 0.5;
    this.boss.scale.y += 0.5;

    this.melon.scale.x += 0.5;
    this.melon.scale.y += 0.5;

  }

}

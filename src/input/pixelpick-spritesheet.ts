import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PixelpickSpritesheetState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

  }

  create () {

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'mummy');

    this.sprite.anchor.set(0.5);
    this.sprite.scale.set(6);
    this.sprite.smoothed = false;

    this.sprite.animations.add('walk');
    this.sprite.animations.play('walk', 5, true);

    this.sprite.inputEnabled = true;
    this.sprite.input.pixelPerfectOver = true;
    this.sprite.input.useHandCursor = true;

  }

  render () {

    this.game.debug.spriteInputInfo(this.sprite, 32, 32);
    this.game.debug.geom(this.sprite.getBounds());

  }

}

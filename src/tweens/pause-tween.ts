import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PauseTweenState extends BootState {
  sprite: Phaser.Sprite;
  tween: Phaser.Tween;
  button: Phaser.Button;
  flag = true;

  preload () {

    this.load.image(AssetID.diamond, 'assets/sprites/diamond.png');
    this.load.spritesheet(AssetID.button, 'assets/buttons/button_sprite_sheet.png', 193, 71);

  }

  create () {

    this.stage.backgroundColor = 0x2d2d2d;

    this.sprite = this.add.sprite(100, 100, AssetID.diamond);

    this.tween = this.add.tween(this.sprite).to({x: 600}, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    this.button = this.add.button(this.world.centerX, 400, AssetID.button, this.onClickButton, this, 2, 1, 0);


  }

  onClickButton () {

    if (this.flag) {
      this.tween.pause();
    }
    else {
      this.tween.resume();
    }

    this.flag = !this.flag;

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MotionLockHorizontalState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.image('sprite', 'assets/sprites/parsec.png');

  }

  create () {

    this.stage.backgroundColor = 'rgb(85, 85, 85)';

    this.sprite = this.add.sprite(200, 400, 'sprite');

    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();

    // http://localhost:3000/Phaser.InputHandler.html#allowVerticalDrag
    // allowVerticalDrag :boolean
    // Controls if the Sprite is allowed to be dragged vertically.
    this.sprite.input.allowVerticalDrag = false;

  }

  render () {

    this.game.debug.inputInfo(32, 32);
    this.game.debug.spriteInputInfo(this.sprite, 300, 32);

  }

}

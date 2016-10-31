import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MotionLockVerticalState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.image('sprite', 'assets/sprites/darkwing_crazy.png');

  }

  create () {

    this.stage.backgroundColor = 'rgb(85,85,85)';

    this.sprite = this.add.sprite(200, 200, 'sprite');
    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();

    // http://localhost:3000/Phaser.InputHandler.html#allowHorizontalDrag
    // allowHorizontalDrag :boolean
    // Controls if the Sprite is allowed to be dragged horizontally.
    this.sprite.input.allowHorizontalDrag = false;

  }

  render () {

    this.game.debug.inputInfo(32, 32);
    this.game.debug.spriteInputInfo(this.sprite, 300, 32);

  }

}

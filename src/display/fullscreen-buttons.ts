import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FullscreenButtonsState extends BootState {
  sprite: Phaser.Sprite;
  button: Phaser.Button;

  preload () {

    this.load.image('dragon', 'assets/pics/cougar_dragonsun.png');
    this.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);

  }

  create () {

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'dragon');
    this.sprite.anchor.set(0.5);

    this.stage.backgroundColor = '#000';

    // Keep original size
    // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

    // Maintain aspect ratio
    // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.button = this.add.button(this.world.centerX - 95, 500, 'button', this.actionOnClick, this, 2, 1, 0);
    this.button.visible = false;

    this.input.onDown.add(this.gofull, this);

  }

  gofull () {

    this.scale.startFullScreen();

  }

  onEnterFullScreen () {

    this.button.visible = true;

  }

  onLeaveFullScreen () {



  }
  actionOnClick () {

    this.sprite.tint = Math.random() * 0xffffff;

  }

  update () {

    this.button.visible = this.scale.isFullScreen;

  }

  render () {

    if (this.scale.isFullScreen) {
      this.game.debug.text('ESC to leave fullscreen', 270, 16);
    }
    else {
      this.game.debug.text('Click / Tap to go fullscreen', 270, 16);
    }

  }

}

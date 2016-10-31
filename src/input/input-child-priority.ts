import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class InputChildPriorityState extends BootState {
  popup: Phaser.Sprite;
  tween: Phaser.Tween;

  preload () {

    this.load.image('background', 'assets/pics/bubble-on.png');
    this.load.image('close', 'assets/sprites/orb-red.png');

  }

  create () {

    this.stage.backgroundColor = '#4b0049';

    this.popup = this.add.sprite(this.world.centerX, this.world.centerY, 'background');
    this.popup.anchor.set(0.5);
    this.popup.inputEnabled = true;
    this.popup.input.enableDrag();

    let pw = this.popup.width / 2 - 30;
    let ph = this.popup.height / 2 - 8;

    let closeButton = this.make.sprite(pw, -ph, 'close');
    closeButton.inputEnabled = true;
    closeButton.input.priorityID = 1;
    closeButton.events.onInputDown.add(this.closeWindow, this);

    this.popup.addChild(closeButton);
    this.popup.scale.set(0);

    this.input.onDown.add(this.openWindow, this);

  }

  openWindow () {

    if (this.tween && this.tween.isRunning || this.popup.scale.x === 1) {
      return;
    }

    this.tween = this.add.tween(this.popup.scale).to({x: 1, y: 1}, 1000, Phaser.Easing.Elastic.Out, true);

  }

  closeWindow () {

    if (this.tween && this.tween.isRunning || this.popup.x === 0) {
      return;
    }

    this.tween = this.add.tween(this.popup.scale).to({x: 0, y: 0}, 500, Phaser.Easing.Elastic.In, true);

  }

  render () {

    this.game.debug.text('Click to open window + drag + close', 32, 32);

  }

}

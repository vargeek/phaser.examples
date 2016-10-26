import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ChainedTweensState extends BootState {

  text: Phaser.Text;
  tweenA: Phaser.Tween;
  tweenB: Phaser.Tween;

  preload () {

    this.load.image(AssetID.kirito, 'assets/sprites/kirito_by_vali233.png');
    this.load.image(AssetID.asuna, 'assets/sprites/asuna_by_vali233.png');

  }

  create () {

    this.game.renderer.renderSession.roundPixels = true;
    this.stage.backgroundColor = '#124184';

    this.add.text(16, 16, 'Tween Chain Demo', {font: '16px Arial', fill: '#ffffff'});

    this.text = this.add.text(680, 16, 'Click to Start', {font: '16px Arial', fill: '#ffffff'});

    let spriteA = this.add.sprite(64, 100, AssetID.kirito);
    let spriteB = this.add.sprite(64, 300, AssetID.asuna);

    this.tweenA = this.add.tween(spriteA).to({x: 600}, 2000, 'Quart.easeOut');
    this.tweenB = this.add.tween(spriteB).to({x: 600}, 2000, 'Quart.easeOut');
    this.tweenA.chain(this.tweenB);

    this.input.onDown.addOnce(this.start, this);

  }

  start () {

    this.tweenA.start();

    this.text.visible = false;

  }

}

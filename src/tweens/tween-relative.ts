import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TweenRelativeState extends BootState {
  arrowStart: Phaser.Sprite;
  arrowEnd: Phaser.Sprite;
  sprite: Phaser.Sprite;


  preload () {

    this.load.image(AssetID.phaser, 'assets/sprites/phaser1.png');
    this.load.spritesheet(AssetID.arrows, 'assets/sprites/arrows.png', 23, 31);

  }

  create () {

    this.stage.backgroundColor = '#2384e7';
    this.arrowStart = this.add.sprite(100, 100, AssetID.arrows, 0);
    this.arrowEnd = this.add.sprite(400, 100, AssetID.arrows, 1);

    this.sprite = this.add.sprite(100, 164, AssetID.phaser);
    this.sprite.inputEnabled = true;

    this.sprite.events.onInputDown.add(this.move, this);

  }

  move () {

    if (this.sprite.x === 100) {

      this.add.tween(this.sprite).to({x: '+300'}, 2000, Phaser.Easing.Linear.None, true);

    }

    else if (this.sprite.x === 400 ) {
      this.add.tween(this.sprite).to({x: '-300'}, 2000, Phaser.Easing.Linear.None, true);
    }

  }

  render () {

    if (this.sprite.x === 100 || this.sprite.x === 400) {

      this.game.debug.text('Click sprite to tween', 32, 32);

    }

    this.game.debug.text(`x: ${this.arrowStart.x}`, this.arrowStart.x, this.arrowStart.y - 4);
    this.game.debug.text(`x: ${this.arrowEnd.x}`, this.arrowEnd.x, this.arrowEnd.y - 4);

  }


}

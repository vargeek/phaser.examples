import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class OutOfGameState extends BootState {
  bubble: Phaser.Image;

  preload () {

    this.load.image('rain', 'assets/pics/thalion-rain.png');
    this.load.image('bubble', 'assets/pics/bubble-on.png');

  }

  create () {

    this.add.tileSprite(0, 0, 800, 600, 'rain');

    this.bubble = this.add.image(this.world.centerX, this.world.centerY, 'bubble');
    this.bubble.anchor.set(0.5);

  }

  update () {

    // http://localhost:3000/Phaser.Pointer.html#withinGame
    // withinGame :boolean
    // true if the Pointer is over the game canvas, otherwise false.
    if (this.input.activePointer.withinGame) {
      this.bubble.alpha = 1;
    }
    else {
      this.bubble.alpha = 0.3;
    }

  }

  render () {

    this.game.debug.inputInfo(32, 32);
    this.game.debug.pointer(this.input.activePointer);

  }

}

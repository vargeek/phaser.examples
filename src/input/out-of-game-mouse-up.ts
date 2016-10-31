import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class OutOfGameMouseUpState extends BootState {
  bubble: Phaser.Image;

  preload () {

    this.load.image('rain', 'assets/pics/thalion-rain.png');
    this.load.image('bubble', 'assets/pics/bubble-on.png');

  }

  create () {

    this.add.tileSprite(0, 0, 800, 600, 'rain');

    this.bubble = this.add.image(this.world.centerX, this.world.centerY, 'bubble');
    this.bubble.anchor.set(0.5);

    this.bubble.inputEnabled = true;

    //  Even if you release the mouse button outside of the game window
    //  the 'onUp' function will still be called.
    this.bubble.events.onInputDown.add(this.onDown, this);
    this.bubble.events.onInputUp.add(this.onUp, this);

  }

  onDown () {

    this.bubble.alpha = 0.3;

  }

  onUp () {

    this.bubble.alpha = 1;

  }

}

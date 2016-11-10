import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ElapsedSecondsState extends BootState {

  preload () {

    this.load.image('picture7', 'assets/pics/slayer-sorry_im_the_beast.png');

  }

  create () {

    this.stage.backgroundColor = '#000';

  }

  render () {

    // http://localhost:3000/Phaser.Time.html#totalElapsedSeconds
    // totalElapsedSeconds() → {number}
    // The number of seconds that have elapsed since the game was started.
    this.game.debug.text(`Elapsed seconds: ${this.game.time.totalElapsedSeconds().toFixed(1)}`, 32, 32);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CustomTimerState extends BootState {
  timer: Phaser.Timer;
  total = 0;

  preload () {

    this.load.image('picture7', 'assets/pics/slayer-sorry_im_the_beast.png');

  }

  create () {

    this.stage.backgroundColor = '#000';

    // http://localhost:3000/Phaser.Time.html#create
    // create(autoDestroy) → {Phaser.Timer}
    // autoDestroy{boolean=true}    A Timer that is set to automatically destroy itself will do so after all of its events have been dispatched (assuming no looping events).
    // Creates a new stand-alone Phaser.Timer object.
    this.timer = this.time.create(false);

    this.timer.loop(2000, this.updateCounter, this);

    // http://localhost:3000/Phaser.Timer.html#start
    // start(delay)
    // Starts this Timer running.
    this.timer.start();

  }

  updateCounter () {

    this.total++;

  }

  render () {

    this.game.debug.text(`Time until event: ${this.timer.duration.toFixed(0)}`, 32, 32);
    this.game.debug.text(`Loop Count: ${this.total}`, 32, 64);

  }

}

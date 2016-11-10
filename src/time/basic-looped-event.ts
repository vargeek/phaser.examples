import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BasicLoopedEventState extends BootState {
  counter = 0;
  text: Phaser.Text;

  preload () {

    this.load.image('ball', 'assets/sprites/pangball.png');

  }

  create () {

    this.stage.backgroundColor = '#6688ee';

    this.text = this.add.text(this.world.centerX, this.world.centerY, 'Couner: 0', {
      font: '64px Arial',
      fill: '#fff',
      align: 'cener',
    });

    // http://localhost:3000/Phaser.Time.html#events
    // events :Phaser.Timer
    // A Phaser.Timer object bound to the master clock (this Time object) which events can be added to.

    // http://localhost:3000/Phaser.Timer.html#loop
    // loop(delay, callback, callbackContext, arguments) → {Phaser.TimerEvent}

    // Adds a new looped Event to this Timer that will repeat forever or until the Timer is stopped.

    // The event will fire after the given amount of delay in milliseconds has passed, once the Timer has started running.
    // The delay is in relation to when the Timer starts, not the time it was added. If the Timer is already running the delay will be calculated based on the timers current time.

    // Make sure to call start after adding all of the Events you require for this Timer.
    this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

  }

  updateCounter () {

    this.counter++;
    this.text.setText(`Counter: ${this.counter}`);

  }

  render () {

    this.game.debug.text(`Time until event: ${this.time.events.duration.toFixed(0)}`, 32, 32);
    this.game.debug.text(`Next tick: ${this.time.events.next.toFixed(0)}`, 32, 64);

  }

}

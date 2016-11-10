import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BasicTimedEventState extends BootState {
  picture: Phaser.Sprite;

  preload () {

    this.load.image('bisley', 'assets/pics/alex-bisleys_horsy_5.png');

  }

  create () {

    this.stage.backgroundColor = '#68e';

    this.picture = this.add.sprite(this.world.centerX, this.world.centerY, 'bisley');
    this.picture.anchor.set(0.5);

    // http://localhost:3000/Phaser.Timer.html#add
    // add(delay, callback, callbackContext, arguments) → {Phaser.TimerEvent}

    // Adds a new Event to this Timer.

    // The event will fire after the given amount of delay in milliseconds has passed, once the Timer has started running.
    // The delay is in relation to when the Timer starts, not the time it was added. If the Timer is already running the delay will be calculated based on the timers current time.

    // Make sure to call start after adding all of the Events you require for this Timer.
    this.time.events.add(Phaser.Timer.SECOND * 4, this.fadePicture, this);

  }

  fadePicture () {

    this.add.tween(this.picture).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true);

  }

  render () {

    this.game.debug.text(`Time until event: ${this.time.events.duration}`, 32, 32);

  }

}

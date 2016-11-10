import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BasicRepeatEventState extends BootState {

  preload () {

    this.load.image('ball', 'assets/sprites/pangball.png');

  }

  create () {

    this.stage.backgroundColor = '#6688ee';

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.physics.arcade.gravity.y = 150;

    // http://localhost:3000/Phaser.Timer.html#repeat
    // repeat(delay, repeatCount, callback, callbackContext, arguments) → {Phaser.TimerEvent}
    // Adds a new TimerEvent that will always play through once and then repeat for the given number of iterations.

    // The event will fire after the given amount of delay in milliseconds has passed, once the Timer has started running.
    // The delay is in relation to when the Timer starts, not the time it was added.
    // If the Timer is already running the delay will be calculated based on the timers current time.

    // Make sure to call start after adding all of the Events you require for this Timer.
    this.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.createBall, this);

  }

  createBall () {

    let ball = this.add.sprite(this.world.randomX, 0, 'ball');

    this.physics.enable(ball, Phaser.Physics.ARCADE);

    ball.body.bounce.y = 0.9;
    ball.body.collideWorldBounds = true;

  }

  render () {

    this.game.debug.text("Time until event: " + this.time.events.duration.toFixed(0), 32, 32);
    this.game.debug.text("Next tick: " + this.time.events.next.toFixed(0), 32, 64);


  }

}

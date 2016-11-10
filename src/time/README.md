# basic-looped-event
  - time.events>
    ```js
    // http://localhost:3000/Phaser.Time.html#events
    // events :Phaser.Timer
    // A Phaser.Timer object bound to the master clock (this Time object) which events can be added to.
    this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

    ```
  - time.events.loop>
    ```js
    // http://localhost:3000/Phaser.Timer.html#loop
    // loop(delay, callback, callbackContext, arguments) → {Phaser.TimerEvent}

    // Adds a new looped Event to this Timer that will repeat forever or until the Timer is stopped.

    // The event will fire after the given amount of delay in milliseconds has passed, once the Timer has started running.
    // The delay is in relation to when the Timer starts, not the time it was added. If the Timer is already running the delay will be calculated based on the timers current time.

    // Make sure to call start after adding all of the Events you require for this Timer.
    this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

    ```
# basic-repeat-event
  - time.events.repeat>
    ```js
    // http://localhost:3000/Phaser.Timer.html#repeat
    // repeat(delay, repeatCount, callback, callbackContext, arguments) → {Phaser.TimerEvent}
    // Adds a new TimerEvent that will always play through once and then repeat for the given number of iterations.

    // The event will fire after the given amount of delay in milliseconds has passed, once the Timer has started running.
    // The delay is in relation to when the Timer starts, not the time it was added.
    // If the Timer is already running the delay will be calculated based on the timers current time.

    // Make sure to call start after adding all of the Events you require for this Timer.
    this.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.createBall, this);

    ```
# basic-timed-event
  - time.events.add>
    ```js
    // http://localhost:3000/Phaser.Timer.html#add
    // add(delay, callback, callbackContext, arguments) → {Phaser.TimerEvent}

    // Adds a new Event to this Timer.

    // The event will fire after the given amount of delay in milliseconds has passed, once the Timer has started running.
    // The delay is in relation to when the Timer starts, not the time it was added. If the Timer is already running the delay will be calculated based on the timers current time.

    // Make sure to call start after adding all of the Events you require for this Timer.
    this.time.events.add(Phaser.Timer.SECOND * 4, this.fadePicture, this);

    ```
# custom-timer
  - time.create>
    ```js
    // http://localhost:3000/Phaser.Time.html#create
    // create(autoDestroy) → {Phaser.Timer}
    // autoDestroy{boolean=true}    A Timer that is set to automatically destroy itself will do so after all of its events have been dispatched (assuming no looping events).
    // Creates a new stand-alone Phaser.Timer object.
    this.timer = this.time.create(false);

    ```
  - timer.start>
    ```js
    // http://localhost:3000/Phaser.Timer.html#start
    // start(delay)
    // Starts this Timer running.
    this.timer.start();

    ```
# elapsed-seconds
  - time.totalElapsedSeconds()>
    ```js
    // http://localhost:3000/Phaser.Time.html#totalElapsedSeconds
    // totalElapsedSeconds() → {number}
    // The number of seconds that have elapsed since the game was started.
    this.game.debug.text(`Elapsed seconds: ${this.game.time.totalElapsedSeconds().toFixed(1)}`, 32, 32);

    ```
# multiple-timers
  - time.events.add
# remove-event
  - events.remove>
    ```js
    // http://localhost:3000/Phaser.Timer.html#remove
    // remove(event)
    // event{Phaser.TimerEvent}   The event to remove from the queue.
    // Removes a pending TimerEvent from the queue.
    this.time.events.remove(this.timerEvents[this.index]);

    ```
# slow-down-time
# timed-slideshow
  - time.advancedTiming>
    ```js
    // http://localhost:3000/Phaser.Time.html#advancedTiming
    // advancedTiming :boolean
    // If true then advanced profiling, including the fps rate, fps min/max, suggestedFps and msMin/msMax are updated.
    this.time.advancedTiming = true;

    ```
  - time.desiredFps>
    ```js
    // http://localhost:3000/Phaser.Time.html#desiredFps
    // desiredFps :integer = 60
    // The desired frame rate of the game.
    // This is used is used to calculate the physic / logic multiplier and how to apply catch-up logic updates. The desired frame rate of the game. Defaults to 60.
    this.time.desiredFps = 60;

    ```
  - time.slowMotion>
    ```js
    // http://localhost:3000/Phaser.Time.html#slowMotion
    // slowMotion :number
    // Scaling factor to make the game move smoothly in slow motion
    // 1.0 = normal speed
    // 2.0 = half speed
    this.time.slowMotion = 1.0;

    ```
  - game.fpsProblemNotifier>
    ```js
    // http://localhost:3000/Phaser.Game.html#fpsProblemNotifier
    // fpsProblemNotifier :Phaser.Signal
    // If the game is struggling to maintain the desired FPS, this signal will be dispatched.
    // The desired/chosen FPS should probably be closer to the Phaser.Time#suggestedFps value.
    this.game.fpsProblemNotifier.add(this.handleFpsProblem, this);

    ```
  - time.suggestedFps>
    ```js
    // http://localhost:3000/Phaser.Time.html#suggestedFps
    // suggestedFps :number
    // The suggested frame rate for your game, based on an averaged real frame rate.
    // This value is only populated if Time.advancedTiming is enabled.
    // Note: This is not available until after a few frames have passed; until then
    // it's set to the same value as desiredFps.
    this.game.time.desiredFps = this.time.suggestedFps;

    ```

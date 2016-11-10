import { BootState } from '../boot.state';
import { AssetID } from '../constant';
import * as dat from './dat';

export class SlowDownTimeState extends BootState {
  ballMovement: Phaser.Sprite;
  ballTween: Phaser.Sprite;
  emitter: Phaser.Particles.Arcade.Emitter;
  vy = 0;

  wasteTime = 0;

  preload () {

    this.load.image('ball', 'assets/sprites/pangball.png');

  }

  create () {

    // http://localhost:3000/Phaser.Time.html#advancedTiming
    // advancedTiming :boolean
    // If true then advanced profiling, including the fps rate, fps min/max, suggestedFps and msMin/msMax are updated.
    this.time.advancedTiming = true;
    // http://localhost:3000/Phaser.Time.html#desiredFps
    // desiredFps :integer = 60
    // The desired frame rate of the game.
    // This is used is used to calculate the physic / logic multiplier and how to apply catch-up logic updates. The desired frame rate of the game. Defaults to 60.
    this.time.desiredFps = 60;
    // http://localhost:3000/Phaser.Time.html#slowMotion
    // slowMotion :number
    // Scaling factor to make the game move smoothly in slow motion
    // 1.0 = normal speed
    // 2.0 = half speed
    this.time.slowMotion = 1.0;

    this.ballMovement = this.add.sprite(200, 100, 'ball');
    this.ballMovement.anchor.set(0.5);

    this.ballTween = this.add.sprite(150, 100, 'ball');
    this.ballTween.anchor.set(0.5);
    this.startFall(this.ballTween);


    this.emitter = this.add.emitter(this.world.centerX, 200, 200);
    this.emitter.makeParticles('ball');
    this.emitter.start(false, 5000, 20);

    let gui = new dat.GUI();
    gui.add(this.time, 'slowMotion', 1, 16).step(1);
    gui.add(this, 'wasteTime', 0, 10).step(1);
    gui.add(this.time, 'desiredFps', 10, 60).step(5);

    // http://localhost:3000/Phaser.Game.html#fpsProblemNotifier
    // fpsProblemNotifier :Phaser.Signal
    // If the game is struggling to maintain the desired FPS, this signal will be dispatched.
    // The desired/chosen FPS should probably be closer to the Phaser.Time#suggestedFps value.
    this.game.fpsProblemNotifier.add(this.handleFpsProblem, this);

  }

  update () {

    this.ballMovement.y += this.vy;

    if (this.ballMovement.y > 400) {
      this.vy = -this.vy;
    }
    else {
      this.vy++;
    }

    // 耗时计算
    let r = 0;
    for (let index = 0; index < this.wasteTime * 500000; index++) {
      let a = Math.sqrt(index);
      r += a * a;
    }

  }

  handleFpsProblem () {

    // http://localhost:3000/Phaser.Time.html#suggestedFps
    // suggestedFps :number
    // The suggested frame rate for your game, based on an averaged real frame rate.
    // This value is only populated if Time.advancedTiming is enabled.
    // Note: This is not available until after a few frames have passed; until then
    // it's set to the same value as desiredFps.
    this.game.time.desiredFps = this.time.suggestedFps;

  }

  startFall (sprite: Phaser.Sprite) {

    this.add.tween(sprite).to({y: 400}, 500, Phaser.Easing.Quadratic.InOut, true).onComplete.addOnce(this.bounceTween, this, undefined, sprite);

  }

  bounceTween(sprite: Phaser.Sprite) {

    this.add.tween(sprite).to({y: 100}, 500, Phaser.Easing.Quadratic.InOut, true).onComplete.addOnce(this.startFall, this, undefined, sprite);

  }

}

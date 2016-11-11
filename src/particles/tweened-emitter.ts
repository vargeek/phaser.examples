import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TweenedEmitterState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('bubble', 'assets/particles/bubble.png');
    this.load.image('water', 'assets/demoscene/blue-raster-floor.png');

  }

  create () {

    this.add.tileSprite(0, 344, 800, 256, 'water');

    this.emitter = this.add.emitter(this.world.centerX, 32, 250);

    this.emitter.makeParticles('bubble');

    this.emitter.setXSpeed(0, 0);
    this.emitter.setYSpeed(200, 200);

    this.emitter.particleBringToTop = true;
    this.emitter.setRotation(0, 0);
    this.emitter.setAlpha(0.1, 1, 2000);
    this.emitter.setScale(0.1, 2, 0.1, 2, 4000);
    this.emitter.gravity = 100;

    this.emitter.start(false, 5000, 50);

    this.emitter.emitX = 200;

    //game.add.tween(emitter).to( { emitX: 700 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
    this.add.tween(this.emitter).to( { emitX: 600 }, 2000, Phaser.Easing.Back.InOut, true, 0, Number.MAX_VALUE, true);

  }

}

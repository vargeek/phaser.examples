import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GlassState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('glass', 'assets/particles/glass.png');
    this.load.image('water', 'assets/demoscene/blue-raster-floor.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.add.tileSprite(0, 344, 800, 256, 'water');

    this.emitter = this.add.emitter(this.world.centerX, 200);
    this.emitter.makeParticles('glass');

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#setXSpeed
    // setXSpeed(min, max) → {Phaser.Particles.Arcade.Emitter}
    // A more compact way of setting the X velocity range of the emitter.
    this.emitter.setXSpeed(-200, 200);
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#setYSpeed
    // setYSpeed(min, max) → {Phaser.Particles.Arcade.Emitter}
    // A more compact way of setting the Y velocity range of the emitter.
    this.emitter.setYSpeed(-150, -250);

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#particleBringToTop
    // particleBringToTop :boolean
    // If this is true then when the Particle is emitted it will be bought to the top of the Emitters display list.
    this.emitter.particleBringToTop = true;
    this.emitter.setAlpha(0.1, 1, 500);
    this.emitter.setScale(-2, 2, 1, 1, 3000, Phaser.Easing.Sinusoidal.InOut, true);
    this.emitter.gravity = 300;

    this.emitter.start(false, 5000, 700, 50);


  }

}

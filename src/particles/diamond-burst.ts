import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DiamondBurstState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('diamond', 'assets/sprites/diamond.png');

  }

  create () {

    this.stage.backgroundColor = '#379';

    // http://localhost:3000/Phaser.GameObjectFactory.html#emitter
    // emitter(x, y, maxParticles) → {Phaser.Particles.Arcade.Emitter}
    // maxParticles{number=50}    The total number of particles in this emitter.
    // Create a new Emitter.

    // A particle emitter can be used for one-time explosions or for continuous effects like rain and fire.
    // All it really does is launch Particle objects out at set intervals,
    // and fixes their positions and velocities accordingly.
    this.emitter = this.add.emitter(this.world.centerX, 200, 200);
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#makeParticles
    // makeParticles(keys, frames, quantity, collide, collideWorldBounds) → {Phaser.Particles.Arcade.Emitter}
    // keys{string|string[]}        A string or an array of strings that the particle sprites will use as their texture. If an array one is picked at random.
    // frames{number|number[]=0}    A frame number, or array of frames that the sprite will use. If an array one is picked at random.
    // quantity{number}             The number of particles to generate. If not given it will use the value of Emitter.maxParticles. If the value is greater than Emitter.maxParticles it will use Emitter.maxParticles as the quantity.
    // collide{boolean=false}       If you want the particles to be able to collide with other Arcade Physics bodies then set this to true.
    // collideWorldBounds{boolean=false}    A particle can be set to collide against the World bounds automatically and rebound back into the World if this is set to true. Otherwise it will leave the World.

    // This function generates a new set of particles for use by this emitter.
    // The particles are stored internally waiting to be emitted via Emitter.start.
    this.emitter.makeParticles('diamond');

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#start
    // start(explode, lifespan, frequency, quantity, forceQuantity) → {Phaser.Particles.Arcade.Emitter}
    // explode{boolean=true}      Whether the particles should all burst out at once (true) or at the frequency given (false).
    // lifespan{number=0}         How long each particle lives once emitted in ms. 0 = forever.
    // frequency{number=250}      Ignored if Explode is set to true. Frequency is how often to emit 1 particle. Value given in ms.
    // quantity{number=0}         How many particles to launch. 0 = "all of the particles" which will keep emitting until Emitter.maxParticles is reached.
    // forceQuantity{boolean=false}   If true and creating a particle flow, the quantity emitted will be forced to the be quantity given in this call. This can never exceed Emitter.maxParticles.

    this.emitter.start(false, 5000, 20);
    // this.emitter.start(true, 5000, null); // explode

  }

}

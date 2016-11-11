import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FlowState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('sky', 'assets/skies/sky4.png');
    this.load.image('leaf', 'assets/particles/leaf1.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.emitter = this.add.emitter(this.world.centerX, 0, 100);

    this.emitter.makeParticles('leaf');

    this.emitter.minParticleSpeed.setTo(-300, 30);
    this.emitter.maxParticleSpeed.setTo(300, 100);
    this.emitter.minParticleScale = 0.1;
    this.emitter.maxParticleScale = 0.5;
    this.emitter.gravity = 250;

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#flow
    // flow(lifespan, frequency, quantity, total, immediate) → {Phaser.Particles.Arcade.Emitter}
    // total{number=-1}     How many particles to launch in total. If -1 it will carry on indefinitely.
    // immediate{boolean=true}    Should the flow start immediately (true) or wait until the first frequency event? (false)

    // Call this function to start emitting a flow of particles at the given frequency.
    // It will carry on going until the total given is reached.
    // Each time the flow is run the quantity number of particles will be emitted together.
    // If you set the total to be 20 and quantity to be 5 then flow will emit 4 times in total (4 x 5 = 20 total)
    // If you set the total to be -1 then no quantity cap is used and it will keep emitting.
    this.emitter.flow(2000, 500, 5, -1);

  }

}

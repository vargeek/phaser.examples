import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class NoRotationState extends BootState {

  preload () {

    this.load.image('alien', 'assets/sprites/space-baddie.png');

  }

  create () {

    var emitter = this.add.emitter(this.world.centerX, this.world.centerY, 250);

    emitter.makeParticles('alien');

    emitter.minParticleSpeed.setTo(-300, -300);
    emitter.maxParticleSpeed.setTo(300, 300);

    //  By setting the min and max rotation to zero, you disable rotation on the particles fully
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#minRotation
    // minRotation :number
    // The minimum possible angular velocity of a particle.
    emitter.minRotation = 0;
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#maxRotation
    // maxRotation :number
    // The maximum possible angular velocity of a particle.
    emitter.maxRotation = 0;

    emitter.start(false, 4000, 15);

  }

}

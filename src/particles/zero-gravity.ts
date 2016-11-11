import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ZeroGravityState extends BootState {

  preload () {

    this.load.spritesheet('balls', 'assets/sprites/balls.png', 17, 17);

  }

  create () {

    let emitter = this.add.emitter(this.world.centerX, this.world.centerY, 250);

    emitter.makeParticles('balls', [0, 1, 2, 3, 4, 5]);

    emitter.minParticleSpeed.set(-400, 400);
    emitter.maxParticleSpeed.set(400, 400);
    emitter.gravity = 0;
    emitter.start(false, 4000, 15);

  }

}

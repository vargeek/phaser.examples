import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RainState extends BootState {

  preload () {

	  this.load.image('sky', 'assets/skies/underwater3.png');
	  this.load.spritesheet('rain', 'assets/sprites/rain.png', 17, 17);

  }

  create () {

    this.add.image(0, 0, 'sky');

    let emitter = this.add.emitter(this.world.centerX, 0, 400);
    emitter.width = this.world.width;

    emitter.makeParticles('rain');

    emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 0.5;

    emitter.setYSpeed(300, 500);
    emitter.setXSpeed(-5, 5);

    emitter.minRotation = 0;
    emitter.maxRotation = 0;

    emitter.start(false, 1600, 5, 0);

  }

}

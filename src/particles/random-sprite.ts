import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RandomSpriteState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('carrot', 'assets/sprites/carrot.png');
    this.load.image('star', 'assets/misc/star_particle.png');
    this.load.image('diamond', 'assets/sprites/diamond.png');

  }

  create () {

    this.stage.backgroundColor = 0x337799;

    this.emitter = this.add.emitter(this.world.centerX, 200, 200);

    //  Here we're passing an array of image keys. It will pick one at random when emitting a new particle.
    this.emitter.makeParticles(['diamond', 'carrot', 'star']);

    this.emitter.start(false, 5000, 20);

  }

}

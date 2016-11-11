import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ParticleAlphaState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('corona', 'assets/particles/blue.png');

  }

  create () {

    this.stage.backgroundColor = '#000';

    this.emitter = this.add.emitter(this.world.centerX, 500, 200);

    this.emitter.makeParticles('corona');

    this.emitter.setRotation(0, 0);
    this.emitter.setAlpha(0.3, 0.8);
    this.emitter.setScale(0.5, 1);
    this.emitter.gravity = -200;

    this.emitter.start(false, 5000, 100);

  }

  render () {

    this.game.debug.text(this.emitter.total.toString(), 32, 32);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SmokeTrailState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('smoke', 'assets/particles/smoke-puff.png');

  }

  create () {

    this.stage.backgroundColor = '#03273e';

    this.emitter = this.add.emitter(this.world.centerX, 500, 400);

    this.emitter.makeParticles('smoke');

    this.emitter.setXSpeed(0, 0);
    this.emitter.setYSpeed(0, 0);

    this.emitter.setRotation(0, 0);
    this.emitter.setAlpha(0.1, 1, 3000);
    this.emitter.setScale(0.4, 2, 0.4, 2, 6000, Phaser.Easing.Quartic.Out);
    this.emitter.gravity = -100;

    this.emitter.start(false, 4000, 20);

    this.emitter.emitX = 64;
    this.emitter.emitY = 500;

    this.add.tween(this.emitter).to({emitX: 800-64}, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
    this.add.tween(this.emitter).to({emitY: 200}, 4000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);


  }

  update () {

    this.emitter.customSort(this.scaleSort, this);

  }

  scaleSort (a: Phaser.Particle, b: Phaser.Particle) {

    return a.scale.x - b.scale.x;

  }

  render () {

    this.game.debug.text(this.emitter.total.toString(), 32, 32);

  }

}

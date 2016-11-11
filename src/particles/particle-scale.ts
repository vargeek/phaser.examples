import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ParticleScaleState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('sky', 'assets/skies/sky4.png');
    this.load.spritesheet('veggies', 'assets/sprites/fruitnveg32wh37.png', 32, 32);

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.emitter = this.add.emitter(this.world.centerX, this.world.centerY, 20);

    this.emitter.makeParticles('veggies', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20, true, true);

    this.emitter.setXSpeed(-200, 200);
    this.emitter.setYSpeed(-300, -400);
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#minParticleScale
    // minParticleScale :number
    // The minimum possible scale of a particle. This is applied to the X and Y axis. If you need to control each axis see minParticleScaleX.
    this.emitter.minParticleScale = 0.5;
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#maxParticleScale
    // maxParticleScale :number
    // The maximum possible scale of a particle. This is applied to the X and Y axis. If you need to control each axis see maxParticleScaleX.
    this.emitter.maxParticleScale = 2;
    this.emitter.gravity = 150;
    this.emitter.bounce.set(0.5);
    this.emitter.angularDrag = 30;

    this.emitter.start(false, 6000, 100);

  }

  update () {

    this.physics.arcade.collide(this.emitter);

  }

  render () {

    for (let index = 0; index < this.emitter.total; index++) {
      if (this.emitter.children[index].visible) {
        this.game.debug.body(this.emitter.children[index] as Phaser.Sprite);
      }
    }

    this.game.debug.text(this.emitter.total.toString(), 32, 32);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CollisionState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('sky', 'assets/skies/sky4.png');
    this.load.spritesheet('veggies', 'assets/sprites/fruitnveg32wh37.png', 32, 32);

  }

  create () {

    this.add.image(0, 0, 'sky');
    this.emitter = this.add.emitter(this.world.centerX, this.world.centerY, 250);
    this.emitter.makeParticles('veggies', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 200, true, true);
    this.emitter.minParticleSpeed.set(-200, -300);
    this.emitter.maxParticleSpeed.set(200, -400);
    this.emitter.gravity = 150;
    this.emitter.bounce.set(0.5);
    this.emitter.angularDrag = 30;

    this.emitter.start(false, 8000, 400);

  }

  update () {

    this.physics.arcade.collide(this.emitter);

  }

  render () {

    this.game.debug.text(this.emitter.total.toString(), 32, 32);

  }

}

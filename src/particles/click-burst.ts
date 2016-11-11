import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ClickBurstState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('diamond', 'assets/sprites/diamond.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#379';

    this.emitter = this.add.emitter(0, 0, 100);
    this.emitter.makeParticles('diamond');
    this.emitter.gravity = 200;

    this.input.onDown.add(this.particleBurst, this);

  }

  particleBurst (pointer: Phaser.Pointer) {

    this.emitter.x = pointer.x;
    this.emitter.y = pointer.y;

    this.emitter.start(true, 2000, null, 10);

  }

}

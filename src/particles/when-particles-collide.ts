import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class WhenParticlesCollideState extends BootState {
  leftEmitter: Phaser.Particles.Arcade.Emitter;
  rightEmitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('sky', 'assets/skies/cavern2.png');
    this.load.spritesheet('balls', 'assets/sprites/balls.png', 17, 17);

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.leftEmitter = this.add.emitter(50, this.world.centerY - 200);
    this.leftEmitter.bounce.setTo(0.5, 0.5);
    this.leftEmitter.setXSpeed(100, 200);
    this.leftEmitter.setYSpeed(-50, 50);
    this.leftEmitter.makeParticles('balls', 0, 250, true, true);

    this.rightEmitter = this.add.emitter(this.world.width - 50, this.world.centerY - 200);
    this.rightEmitter.bounce.setTo(0.5, 0.5);
    this.rightEmitter.setXSpeed(-100, -200);
    this.rightEmitter.setYSpeed(-50, 50);
    this.rightEmitter.makeParticles('balls', 1, 250, true, true);

    this.leftEmitter.start(false, 5000, 20);
    this.rightEmitter.start(false, 5000, 20);

  }

  update () {

    this.physics.arcade.collide(this.leftEmitter, this.rightEmitter, this.change, null, this);

  }

  change (a: Phaser.Particle, b: Phaser.Particle) {

    a.frame = 3;
    b.frame = 3;

  }

}

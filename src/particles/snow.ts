import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SnowState extends BootState {

  front_emitter: Phaser.Particles.Arcade.Emitter;
  mid_emitter: Phaser.Particles.Arcade.Emitter;
  back_emitter: Phaser.Particles.Arcade.Emitter;
  max = 0;
  update_interval = 4 * 60;
  index = 0;

  preload () {

    this.load.image('sky', 'assets/skies/sky3.png');
    this.load.spritesheet('snowflakes', 'assets/sprites/snowflakes.png', 17, 17);
    this.load.spritesheet('snowflakes_large', 'assets/sprites/snowflakes_large.png', 64, 64);

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.back_emitter = this.add.emitter(this.world.centerX, -32, 600);
    this.back_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
    this.back_emitter.maxParticleScale = 0.6;
    this.back_emitter.minParticleScale = 0.2;
    this.back_emitter.setYSpeed(20, 100);
    this.back_emitter.gravity = 0;
    this.back_emitter.width = this.world.width * 1.5;
    this.back_emitter.minRotation = 0;
    this.back_emitter.maxRotation = 40;

    this.mid_emitter = this.add.emitter(this.world.centerX, -32, 250);
    this.mid_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
    this.mid_emitter.maxParticleScale = 1.2;
    this.mid_emitter.minParticleScale = 0.8;
    this.mid_emitter.setYSpeed(50, 150);
    this.mid_emitter.gravity = 0;
    this.mid_emitter.width = this.world.width * 1.5;
    this.mid_emitter.minRotation = 0;
    this.mid_emitter.maxRotation = 40;

    this.front_emitter = this.add.emitter(this.world.centerX, -32, 50);
    this.front_emitter.makeParticles('snowflakes_large', [0, 1, 2, 3, 4, 5]);
    this.front_emitter.maxParticleScale = 1;
    this.front_emitter.minParticleScale = 0.5;
    this.front_emitter.setYSpeed(100, 200);
    this.front_emitter.gravity = 0;
    this.front_emitter.width = this.world.width * 1.5;
    this.front_emitter.minRotation = 0;
    this.front_emitter.maxRotation = 40;

    this.changeWindDirection();

    this.back_emitter.start(false, 14000, 20);
    this.mid_emitter.start(false, 12000, 40);
    this.front_emitter.start(false, 6000, 1000);

  }


  update () {

    this.index++;

    if (this.index === this.update_interval) {
      this.changeWindDirection();
      this.update_interval = Math.floor(Math.random() * 20) * 60;
      this.index = 0;
    }

  }

  changeWindDirection () {

    let multi = Math.floor((this.max + 200) / 4),
        frag = (Math.floor(Math.random() * 100) - multi);

    this.max = this.max + frag;

    if (this.max > 200) {
      this.max = 150;
    }
    if (this.max < -200) {
      this.max = -150;
    }

    this.setXSpeed(this.back_emitter, this.max);
    this.setXSpeed(this.mid_emitter, this.max);
    this.setXSpeed(this.front_emitter, this.max);

  }

  setXSpeed (emitter: Phaser.Particles.Arcade.Emitter, max: number) {

    emitter.setXSpeed(max - 20, max);
    emitter.forEachAlive(this.setParticleXSpeed, this, max);

  }

  setParticleXSpeed (particle: Phaser.Particle, max: number) {

    particle.body.velocity.x = max - Math.floor(Math.random() * 30);

  }

}

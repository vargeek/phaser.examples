import { BootState, IBootInfo } from '../boot.state';
import { AssetID } from '../constant';


export class MonsterParticle extends Phaser.Particle {

  constructor (game: Phaser.Game, x: number, y: number) {

    super(game, x, y, game.cache.getBitmapData('particleShade'));

  }
}



export class ParticleClassState extends BootState {
  static bootInfo: IBootInfo = {
    states: [],
    renderer: Phaser.CANVAS,
    bounds: {
      width: 800,
      height: 600
    }
  }

  emitter: Phaser.Particles.Arcade.Emitter;

  create () {

    this.stage.backgroundColor = '#003663';

    let bmd = this.add.bitmapData(64, 64);
    let radgrad = bmd.ctx.createRadialGradient(32, 32, 4, 32, 32, 32);

    radgrad.addColorStop(0, 'rgba(1, 159, 98, 1)');
    radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');

    bmd.context.fillStyle = radgrad;
    bmd.context.fillRect(0, 0, 64, 64);

    this.cache.addBitmapData('particleShade', bmd);

    this.emitter = this.add.emitter(this.world.centerX, 200, 200);
    this.emitter.width = this.game.width;

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#particleClass
    // particleClass :any
    // For emitting your own particle class types. They must extend Phaser.Particle.
    this.emitter.particleClass = MonsterParticle;
    this.emitter.makeParticles(undefined);

    this.emitter.minParticleSpeed.set(0, 300);
    this.emitter.maxParticleSpeed.set(0, 400);

    this.emitter.setRotation(0, 0);;
    this.emitter.setScale(0.1, 1, 0.1, 1, 12000, Phaser.Easing.Quartic.Out);
    this.emitter.gravity = -200;

    this.emitter.start(false, 5000, 100);

    this.input.onDown.add(this.updateBitmapDataTexture, this);


  }

  updateBitmapDataTexture () {

    let bmd = this.cache.getBitmapData('particleShade');
    bmd.context.clearRect(0, 0, 64, 64);

    let radgrad = bmd.ctx.createRadialGradient(32, 32, 4, 32, 32, 32);
    let c = Phaser.Color.getRGB(Phaser.Color.getRandomColor(0, 255, 255));

    radgrad.addColorStop(0, Phaser.Color.getWebRGB(c));
    c.a = 0;
    radgrad.addColorStop(1, Phaser.Color.getWebRGB(c));

    bmd.context.fillStyle = radgrad;
    bmd.context.fillRect(0, 0, 64, 64);
    bmd.dirty = true;

  }

  render () {

    this.game.debug.text('Click to regenerate the texture', 16, 28);

  }

}

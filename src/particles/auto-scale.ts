import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AutoScaleState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;
  x: number;

  preload () {

    this.load.image('bubble', 'assets/particles/bubble.png');
    this.load.image('water', 'assets/skies/underwater2.png');

  }

  create () {

    this.add.image(0, 0, 'water');

    this.emitter = this.add.emitter(this.world.centerX, 400, 400);

    this.emitter.makeParticles('bubble');

    this.emitter.setRotation(0, 0);
    this.emitter.setScale(0.1, 1, 0.1, 1, 6000, Phaser.Easing.Quintic.Out);
    this.emitter.gravity = -200;

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#emitX
    // emitX :number
    // The point the particles are emitted from.
    // Emitter.x and Emitter.y control the containers location, which updates all current particles
    // Emitter.emitX and Emitter.emitY control the emission location relative to the x/y position.
    this.emitter.emitX = 0;

    this.emitter.start(false, 5000, 10);

    this.add.tween(this.emitter).to({emitX: 800}, 2000, Phaser.Easing.Linear.None, true, 0, -1, true);

  }

  update () {

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#customSort
    // customSort(sortHandler, context)
    // Sort the children in the group according to custom sort function.
    // The sortHandler is provided the two parameters: the two children involved in the comparison (a and b).
    // It should return -1 if a > b, 1 if a < b or 0 if a === b.
    this.emitter.customSort(this.scaleSort, this);

  }

  scaleSort (a: Phaser.Particle, b: Phaser.Particle) {

    // if (a.scale.x > b.scale.x) {
    //   return 1
    // }
    // else if (a.scale.x < b.scale.x) {
    //   return -1;
    // }
    // else {
    //   return 0;
    // }
    return a.scale.x - b.scale.x;

  }

  render () {

    this.game.debug.text(this.emitter.total.toString(), 32, 32);

  }

}

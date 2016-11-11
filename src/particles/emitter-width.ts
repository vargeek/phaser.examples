import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class EmitterWidthState extends BootState {
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('bubble', 'assets/particles/bubble.png');
    this.load.image('water', 'assets/skies/sunset.png');

  }

  create () {

    this.add.image(0, 0, 'water');

    this.emitter = this.add.emitter(this.world.centerX, 200, 200);

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#width
    // width :number
    // Gets or sets the width of the Emitter. This is the region in which a particle can be emitted.
    this.emitter.width = this.game.width;

    this.emitter.makeParticles('bubble');

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#minParticleSpeed
    // minParticleSpeed :Phaser.Point
    // The minimum possible velocity of a particle.
    this.emitter.minParticleSpeed.set(0, 300);
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#maxParticleSpeed
    // maxParticleSpeed :Phaser.Point
    // The maximum possible velocity of a particle.
    this.emitter.maxParticleSpeed.set(0, 400);

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#setRotation
    // setRotation(min, max) → {Phaser.Particles.Arcade.Emitter}
    // min{number=0}      The minimum value for this range.
    // max{number=0}      The maximum value for this range.
    // A more compact way of setting the angular velocity constraints of the particles.
    this.emitter.setRotation(0, 0);

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#setAlpha
    // setAlpha(min, max, rate, ease, yoyo) → {Phaser.Particles.Arcade.Emitter}
    // rate{number=0}     The rate (in ms) at which the particles will change in alpha from min to max, or set to zero to pick a random alpha between the two.
    // ease{function=Phaser.Easing.Linear.None}     If you've set a rate > 0 this is the easing formula applied between the min and max values.
    // yoyo{boolean=false}      If you've set a rate > 0 you can set if the ease will yoyo or not (i.e. ease back to its original values)
    // A more compact way of setting the alpha constraints of the particles.
    // The rate parameter, if set to a value above zero, lets you set the speed at which the Particle change in alpha from min to max.
    // If rate is zero, which is the default, the particle won't change alpha - instead it will pick a random alpha between min and max on emit.
    this.emitter.setAlpha(0.3, 0.8);
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#setScale
    // setScale(minX, maxX, minY, maxY, rate, ease, yoyo) → {Phaser.Particles.Arcade.Emitter}
    // rate{number=0}         The rate (in ms) at which the particles will change in scale from min to max, or set to zero to pick a random size between the two.
    // ease{function=Phaser.Easing.Linear.None}     If you've set a rate > 0 this is the easing formula applied between the min and max values.
    // yoyo{boolean=false}    If you've set a rate > 0 you can set if the ease will yoyo or not (i.e. ease back to its original values)

    // A more compact way of setting the scale constraints of the particles.
    // The rate parameter, if set to a value above zero, lets you set the speed and ease which the Particle uses to change in scale from min to max across both axis.
    // If rate is zero, which is the default, the particle won't change scale during update, instead it will pick a random scale between min and max on emit.
    this.emitter.setScale(0.5, 0.5, 1, 1);
    this.emitter.gravity = -200;

    this.emitter.start(false, 5000, 100);

  }

  render () {

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#total
    // <readonly> total :integer
    // Total number of existing children in the group.
    this.game.debug.text(this.emitter.total.toString(), 32, 32);


  }

}

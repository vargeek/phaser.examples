# diamond-burst
  - add.emitter>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#emitter
    // emitter(x, y, maxParticles) → {Phaser.Particles.Arcade.Emitter}
    // maxParticles{number=50}    The total number of particles in this emitter.
    // Create a new Emitter.

    // A particle emitter can be used for one-time explosions or for continuous effects like rain and fire.
    // All it really does is launch Particle objects out at set intervals,
    // and fixes their positions and velocities accordingly.
    this.emitter = this.add.emitter(this.world.centerX, 200, 200);

    ```
  - emitter.maxParticles>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#makeParticles
    // makeParticles(keys, frames, quantity, collide, collideWorldBounds) → {Phaser.Particles.Arcade.Emitter}
    // keys{string|string[]}        A string or an array of strings that the particle sprites will use as their texture. If an array one is picked at random.
    // frames{number|number[]=0}    A frame number, or array of frames that the sprite will use. If an array one is picked at random.
    // quantity{number}             The number of particles to generate. If not given it will use the value of Emitter.maxParticles. If the value is greater than Emitter.maxParticles it will use Emitter.maxParticles as the quantity.
    // collide{boolean=false}       If you want the particles to be able to collide with other Arcade Physics bodies then set this to true.
    // collideWorldBounds{boolean=false}    A particle can be set to collide against the World bounds automatically and rebound back into the World if this is set to true. Otherwise it will leave the World.

    // This function generates a new set of particles for use by this emitter.
    // The particles are stored internally waiting to be emitted via Emitter.start.
    this.emitter.makeParticles('diamond');

    ```
  - emitter.start>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#start
    // start(explode, lifespan, frequency, quantity, forceQuantity) → {Phaser.Particles.Arcade.Emitter}
    // explode{boolean=true}      Whether the particles should all burst out at once (true) or at the frequency given (false).
    // lifespan{number=0}         How long each particle lives once emitted in ms. 0 = forever.
    // frequency{number=250}      Ignored if Explode is set to true. Frequency is how often to emit 1 particle. Value given in ms.
    // quantity{number=0}         How many particles to launch. 0 = "all of the particles" which will keep emitting until Emitter.maxParticles is reached.
    // forceQuantity{boolean=false}   If true and creating a particle flow, the quantity emitted will be forced to the be quantity given in this call. This can never exceed Emitter.maxParticles.

    this.emitter.start(false, 5000, 20);
    // this.emitter.start(true, 5000, null); // explode

    ```
# click-burst
  - add.emitter
  - emitter.makeParticles
  - emitter.start
# destroy-emitter
  - emitter.destroy>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#destroy
    // destroy()
    // Destroys this Emitter, all associated child Particles and then removes itself from the Particle Manager.
    this.emitter.destroy();

    ```
# emitter-width
  - emitter.width>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#width
    // width :number
    // Gets or sets the width of the Emitter. This is the region in which a particle can be emitted.
    this.emitter.width = this.game.width;

    ```
  - emitter.minParticleSpeed>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#minParticleSpeed
    // minParticleSpeed :Phaser.Point
    // The minimum possible velocity of a particle.
    this.emitter.minParticleSpeed.set(0, 300

    ```
  - emitter.maxParticleSpeed>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#maxParticleSpeed
    // maxParticleSpeed :Phaser.Point
    // The maximum possible velocity of a particle.
    this.emitter.maxParticleSpeed.set(0, 400);

    ```
  - emitter.setRotation>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#setRotation
    // setRotation(min, max) → {Phaser.Particles.Arcade.Emitter}
    // min{number=0}      The minimum value for this range.
    // max{number=0}      The maximum value for this range.
    // A more compact way of setting the angular velocity constraints of the particles.
    this.emitter.setRotation(0, 0);

    ```
  - emitter.setAlpha>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#setAlpha
    // setAlpha(min, max, rate, ease, yoyo) → {Phaser.Particles.Arcade.Emitter}
    // rate{number=0}     The rate (in ms) at which the particles will change in alpha from min to max, or set to zero to pick a random alpha between the two.
    // ease{function=Phaser.Easing.Linear.None}     If you've set a rate > 0 this is the easing formula applied between the min and max values.
    // yoyo{boolean=false}      If you've set a rate > 0 you can set if the ease will yoyo or not (i.e. ease back to its original values)
    // A more compact way of setting the alpha constraints of the particles.
    // The rate parameter, if set to a value above zero, lets you set the speed at which the Particle change in alpha from min to max.
    // If rate is zero, which is the default, the particle won't change alpha - instead it will pick a random alpha between min and max on emit.
    this.emitter.setAlpha(0.3, 0.8);

    ```
  - emitter.setScale>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#setScale
    // setScale(minX, maxX, minY, maxY, rate, ease, yoyo) → {Phaser.Particles.Arcade.Emitter}
    // rate{number=0}         The rate (in ms) at which the particles will change in scale from min to max, or set to zero to pick a random size between the two.
    // ease{function=Phaser.Easing.Linear.None}     If you've set a rate > 0 this is the easing formula applied between the min and max values.
    // yoyo{boolean=false}    If you've set a rate > 0 you can set if the ease will yoyo or not (i.e. ease back to its original values)

    // A more compact way of setting the scale constraints of the particles.
    // The rate parameter, if set to a value above zero, lets you set the speed and ease which the Particle uses to change in scale from min to max across both axis.
    // If rate is zero, which is the default, the particle won't change scale during update, instead it will pick a random scale between min and max on emit.
    this.emitter.setScale(0.5, 0.5, 1, 1);

    ```
  - emitter.total>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#total
    // <readonly> total :integer
    // Total number of existing children in the group.
    this.game.debug.text(this.emitter.total.toString(), 32, 32);

    ```
# auto-scale
  - emitter.emitX>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#emitX
    // emitX :number
    // The point the particles are emitted from.
    // Emitter.x and Emitter.y control the containers location, which updates all current particles
    // Emitter.emitX and Emitter.emitY control the emission location relative to the x/y position.
    this.emitter.emitX = 0;

    ```
  - emitter.customSort>
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#customSort
    // customSort(sortHandler, context)
    // Sort the children in the group according to custom sort function.
    // The sortHandler is provided the two parameters: the two children involved in the comparison (a and b).
    // It should return -1 if a > b, 1 if a < b or 0 if a === b.
    this.emitter.customSort(this.scaleSort, this);

    ```
# collision
  - makeParticles(collide, collideWorldBounds)
  - arcade.collide(emitter)
# firestarter
  - emitter.makeParticles(['fire1', 'fire2', 'fire3', 'smoke']
  - emitter.setAlpha(1, 0, 3000)
  - emitter.setScale(0.8, 0, 0.8, 0, 3000)
  - emitter.minParticleSpeed.set(-spriteVX, -spriteVY)
  - emitter.maxParticleSpeed.set(-sprteVX, -spriteVY)
  - emitter.emitX = spriteX
  - emitter.emitY = spriteY
# flow
# glass
# no-rotation
# particle-alpha
# particle-class
# particle-scale
# rain
# random-sprite
# smoke-trail
# snow
# tweened-emitter
# when-particles-collide
# world-particles
# zero-gravity

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MaskedCollisionState extends BootState {
  saws: Phaser.Group;
  platform1: Phaser.Sprite;
  platform2: Phaser.Sprite;
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  jumpButton: Phaser.Key;
  emitter: Phaser.Particles.Arcade.Emitter;

  facing = 'left';
  jumpTimer = 0;



  preload () {

    this.load.image('saw', 'assets/sprites/saw.png');
    this.load.image('platform', 'assets/sprites/platform.png');
    this.load.image('blood', 'assets/sprites/chunk.png');
    this.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);

  }

  create() {

    this.stage.backgroundColor = '#362f2d';

    this.physics.arcade.gravity.y = 500;

    //  Two platforms for the player to run across
    this.platform1 = this.add.sprite(0, 160, 'platform');
    this.platform1.width = this.game.width - 100;
    this.platform1.height = 32;

    this.platform2 = this.add.sprite(0, 430, 'platform');
    this.platform2.width = this.game.width;
    this.platform2.height = 32;

    this.physics.arcade.enable([this.platform1, this.platform2]);

    //  Platforms don't move or get influenced by gravity
    this.platform1.body.immovable = true;
    this.platform1.body.allowGravity = false;

    this.platform2.body.immovable = true;
    this.platform2.body.allowGravity = false;

    //  Our saws group
    this.saws = this.add.physicsGroup();

    //  The saw sprite is 128x128

    //  Some saws for platform1
    var saw1 = this.saws.create(200, this.platform1.y + 128, 'saw');
    var saw2 = this.saws.create(400, this.platform1.y + 128, 'saw');
    var saw3 = this.saws.create(600, this.platform1.y + 128, 'saw');

    //  And let's link the saw to the platform
    // http://localhost:3000/Phaser.Image.html#data
    // data :Object
    // An empty Object that belongs to this Game Object.
    // This value isn't ever used internally by Phaser, but may be used by your own code, or
    // by Phaser Plugins, to store data that needs to be associated with the Game Object,
    // without polluting the Game Object directly.
    saw1.data.platform = this.platform1;
    saw2.data.platform = this.platform1;
    saw3.data.platform = this.platform1;

    //  And some saws for platform2
    var saw4 = this.saws.create(200, this.platform2.y + 128, 'saw');
    var saw5 = this.saws.create(400, this.platform2.y + 128, 'saw');
    var saw6 = this.saws.create(600, this.platform2.y + 128, 'saw');

    //  And let's link the saw to the platform
    saw4.data.platform = this.platform2;
    saw5.data.platform = this.platform2;
    saw6.data.platform = this.platform2;

    //  ^ You could encapsulate all the above in a simple class, but for this example it'll do

    //  All saws share the same body properties
    //  We're using a circle because, well, they're circular, and colliding with the corners of a box would be unfair :)
    this.saws.callAll('body.setCircle', 'body', 64);
    this.saws.setAll('anchor.x', 0.5);
    this.saws.setAll('anchor.y', 0.5);
    this.saws.setAll('body.immovable', true);
    this.saws.setAll('body.allowGravity', false);

    //  Let's create a mask that covers all of our saws

    //  A mask is a Graphics object
    var mask = this.add.graphics(0, 0);

    //  Shapes drawn to the Graphics object must be filled.
    mask.beginFill(0xffffff);

    //  Here we'll draw a rectangle for each saw sprite
    //  The area of the rectangle is where the saw will be visible, outside of it, it's hidden

    this.saws.forEach(function(saw: Phaser.Sprite) {

        //  Draw a rectangle that shows the saw
        //  We're positioning it 64 pixels above the platform that the saw rises out of
        //  If you need the saws to move higher, give it more space
        mask.drawRect(saw.left, saw.data.platform.top - 64, saw.width, 64 + saw.data.platform.height);

    }, undefined);

    //  And apply the mask to the saws group
    //  If you comment-out this line it's much easier to debug the mask rects :)
    this.saws.mask = mask;

    //  Bring the platforms to the top, otherwise the saws appear over them
    this.platform1.bringToTop();
    this.platform2.bringToTop();

    //  Tween the saws so they 'peak' up above the platforms

    this.add.tween(saw1).to({ y: saw1.data.platform.y }, 1000, "Sine.easeInOut", true, 1000, -1, true);
    this.add.tween(saw2).to({ y: saw2.data.platform.y }, 1000, "Sine.easeInOut", true, 1500, -1, true);
    this.add.tween(saw3).to({ y: saw3.data.platform.y }, 1000, "Sine.easeInOut", true, 2000, -1, true);

    this.add.tween(saw4).to({ y: saw4.data.platform.y }, 1000, "Sine.easeInOut", true, 1000, -1, true);
    this.add.tween(saw5).to({ y: saw5.data.platform.y }, 1000, "Sine.easeInOut", true, 1500, -1, true);
    this.add.tween(saw6).to({ y: saw6.data.platform.y }, 1000, "Sine.easeInOut", true, 2000, -1, true);

    //  Create our Player sprite

    this.player = this.add.sprite(32, this.platform1.y - 64, 'dude');

    this.physics.arcade.enable(this.player);

    this.player.body.bounce.y = 0.2;
    this.player.body.collideWorldBounds = true;
    this.player.body.setSize(20, 32, 5, 16);

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('turn', [4], 20, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    //  Particle emitter

    // http://localhost:3000/Phaser.GameObjectFactory.html#emitter
    // emitter(x, y, maxParticles) → {Phaser.Particles.Arcade.Emitter}
    // Create a new Emitter.
    // A particle emitter can be used for one-time explosions or for
    // continuous effects like rain and fire. All it really does is launch Particle objects out
    // at set intervals, and fixes their positions and velocities accordingly.
    this.emitter = this.add.emitter(0, 0, 64);
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#makeParticles
    // makeParticles(keys, frames, quantity, collide, collideWorldBounds) → {Phaser.Particles.Arcade.Emitter}
    // This function generates a new set of particles for use by this emitter.
    // The particles are stored internally waiting to be emitted via Emitter.start.
    this.emitter.makeParticles('blood');

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#minParticleSpeed
    // minParticleSpeed :Phaser.Point
    // The minimum possible velocity of a particle.
    this.emitter.minParticleSpeed.set(-200, -200);
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#maxParticleSpeed
    // maxParticleSpeed :Phaser.Point
    // The maximum possible velocity of a particle.
    this.emitter.maxParticleSpeed.set(200, -300);
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#bounce
    // bounce :Phaser.Point
    // How much each particle should bounce on each axis. 1 = full bounce, 0 = no bounce.
    this.emitter.bounce.set(0.5);

    //  Controls

    this.cursors = this.input.keyboard.createCursorKeys();
    this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  }

  update () {

    this.physics.arcade.collide(this.player, this.platform1);
    this.physics.arcade.collide(this.player, this.platform2);
    this.physics.arcade.collide(this.emitter, this.platform1);
    this.physics.arcade.collide(this.emitter, this.platform2);

    this.physics.arcade.overlap(this.player, this.saws, this.splat,  this.sawProcessCallback, this);

    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -150;

        if (this.facing !== 'left')
        {
            this.player.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 150;

        if (this.facing !== 'right')
        {
            this.player.animations.play('right');
            this.facing = 'right';
        }
    }
    else
    {
        if (this.facing !== 'idle')
        {
            this.player.animations.stop();

            if (this.facing === 'left')
            {
                this.player.frame = 0;
            }
            else
            {
                this.player.frame = 5;
            }

            this.facing = 'idle';
        }
    }

    if (this.jumpButton.isDown && this.player.body.touching.down && this.time.now > this.jumpTimer)
    {
        this.player.body.velocity.y = -250;
        this.jumpTimer = this.time.now + 750;
    }

    //  Rotate the saws

    this.saws.forEach(function(saw: Phaser.Sprite) {
        saw.rotation -= 0.06;
    }, undefined);


  }

  splat (player: Phaser.Sprite, saw: Phaser.Sprite) {

    this.emitter.x = this.player.centerX;
    this.emitter.y = this.player.centerY;

    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#start
    // start(explode, lifespan, frequency, quantity, forceQuantity) → {Phaser.Particles.Arcade.Emitter}
    // Call this function to start emitting particles.
    this.emitter.start(true, 2000, null, 10);

    this.player.reset(32, this.platform1.y - 64);

  }

  sawProcessCallback (player: Phaser.Sprite, saw: Phaser.Sprite) {

    if (player.top > saw.data.platform.bottom || saw.top >= saw.data.platform.top) {
      return false;
    }
    else {
      return true;
    }

  }

  render () {


  }


}

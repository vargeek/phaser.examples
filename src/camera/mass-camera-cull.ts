import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MassCameraCullState extends BootState {
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('backdrop', 'assets/pics/remember-me.jpg');
    this.load.image('baddie1', 'assets/sprites/shmup-baddie.png');
    this.load.image('baddie2', 'assets/sprites/shmup-baddie2.png');
    this.load.image('baddie3', 'assets/sprites/shmup-baddie3.png');

  }

  create () {

    this.world.setBounds(0, 0, 1920, 1200);

    this.add.sprite(0, 0, 'backdrop');

    //  Generate 100 random sprites

    for (var i = 0; i < 100; i++)
    {
        var s = this.add.sprite(this.rnd.between(800, 1100), this.world.randomY, 'baddie' + this.rnd.between(1, 3));
        this.physics.arcade.enable(s);
        s.body.velocity.x = this.rnd.between(-25, -50);
        // http://localhost:3000/Phaser.Sprite.html#autoCull
        // A Game Object with autoCull set to true will check its bounds against the World Camera every frame.
        // If it is not intersecting the Camera bounds at any point then it has its renderable property set to false.
        // This keeps the Game Object alive and still processing updates, but forces it to skip the render step entirely.

        // This is a relatively expensive operation, especially if enabled on hundreds of Game Objects. So enable it only if you know it's required,
        // or you have tested performance and find it acceptable.
        s.autoCull = true;

        // http://localhost:3000/Phaser.Sprite.html#checkWorldBounds
        // checkWorldBounds :boolean
        // If this is set to true the Game Object checks if it is within the World bounds each frame.

        // When it is no longer intersecting the world bounds it dispatches the onOutOfBounds event.

        // If it was previously out of bounds but is now intersecting the world bounds again it dispatches the onEnterBounds event.

        // It also optionally kills the Game Object if outOfBoundsKill is true.

        // When checkWorldBounds is enabled it forces the Game Object to calculate its full bounds every frame.

        // This is a relatively expensive operation, especially if enabled on hundreds of Game Objects. So enable it only if you know it's required,
        // or you have tested performance and find it acceptable.
        s.checkWorldBounds = true;
        s.events.onOutOfBounds.add(this.resetSprite, this);
    }

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  resetSprite (sprite: Phaser.Sprite) {

    sprite.x = this.world.bounds.right;

  }

  update () {

    if (this.cursors.up.isDown)
    {
        this.camera.y -= 4;
    }
    else if (this.cursors.down.isDown)
    {
        this.camera.y += 4;
    }

    if (this.cursors.left.isDown)
    {
        this.camera.x -= 4;
    }
    else if (this.cursors.right.isDown)
    {
        this.camera.x += 4;
    }

  }

  render () {

    this.game.debug.cameraInfo(this.camera, 32, 32);

  }

}

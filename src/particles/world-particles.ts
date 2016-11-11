import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class WorldParticlesState extends BootState {
  cursors: Phaser.CursorKeys;
  emitter: Phaser.Particles.Arcade.Emitter;

  preload () {

    this.load.image('sky', 'assets/pics/remember-me.jpg');
    this.load.image('leaf', 'assets/particles/leaf1.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');

  }

  create () {

    this.world.setBounds(0, 0, 1920, 1200);

    this.physics.arcade.gravity.y = 100;

    var sky = this.add.image(0, 0, 'sky');

    this.cursors = this.input.keyboard.createCursorKeys();

    this.emitter = this.add.emitter(400, 100, 100);

    this.emitter.makeParticles('leaf');
    this.emitter.minParticleSpeed.setTo(-300, 30);
    this.emitter.maxParticleSpeed.setTo(300, 100);
    this.emitter.minParticleScale = 0.1;
    this.emitter.maxParticleScale = 0.5;
    this.emitter.gravity = 250;
    this.emitter.flow(2000, 500, 5, -1);

    this.input.onDown.add(this.dropSprite, this);

  }

  dropSprite (pointer: Phaser.Pointer) {

    let m = this.add.sprite(pointer.worldX, pointer.worldY, 'mushroom');
    this.physics.arcade.enable(m);
    m.body.collideWorldBounds = true;

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

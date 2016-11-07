import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SciFlyState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  cursors: Phaser.CursorKeys;
  sprite: Phaser.Sprite;
  emitter: Phaser.Particles.Arcade.Emitter;
  preload () {

    this.load.tilemap('level3', 'assets/tilemaps/maps/cybernoid.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/tilemaps/tiles/cybernoid.png');
    this.load.image('phaser', 'assets/sprites/phaser-ship.png');
    this.load.image('chunk', 'assets/sprites/chunk.png');

  }

  create () {

    this.map = this.add.tilemap('level3');

    this.map.addTilesetImage('CybernoidMap3BG_bank.png', 'tiles');

    this.layer = this.map.createLayer(0);

    this.map.setCollisionByExclusion([7, 32, 35, 36, 47]);

    this.layer.resizeWorld();

    this.cursors = this.input.keyboard.createCursorKeys();

    this.emitter = this.add.emitter(0, 0, 200);
    this.emitter.makeParticles('chunk');
    this.emitter.minRotation = 0;
    this.emitter.maxRotation = 0;
    this.emitter.gravity = 150;
    this.emitter.bounce.set(0.5);

    this.sprite = this.add.sprite(300, 90, 'phaser');
    this.sprite.anchor.set(0.5);

    this.physics.arcade.enable(this.sprite);

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#tilePadding
    // tilePadding :Phaser.Point

    // If this is an especially small or fast moving object then it can sometimes skip over tilemap collisions if it moves through a tile in a step.
    // Set this padding value to add extra padding to its bounds. tilePadding.x applied to its width, y to its height. Extra padding to be added to this sprite's dimensions when checking for tile collision.
    this.sprite.body.tilePadding.set(32);

    this.camera.follow(this.sprite);

  }

  particleBurst () {

    this.emitter.x = this.sprite.x;
    this.emitter.y = this.sprite.y;

    this.emitter.start(true, 2000, null, 1);

  }

  update () {

    this.physics.arcade.collide(this.sprite, this.layer);
    this.physics.arcade.collide(this.emitter, this.layer);

    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.up.isDown)
    {
        this.sprite.body.velocity.y = -200;
        this.particleBurst();
    }
    else if (this.cursors.down.isDown)
    {
        this.sprite.body.velocity.y = 200;
        this.particleBurst();
    }

    if (this.cursors.left.isDown)
    {
        this.sprite.body.velocity.x = -200;
        this.sprite.scale.x = -1;
        this.particleBurst();
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite.body.velocity.x = 200;
        this.sprite.scale.x = 1;
        this.particleBurst();
    }

  }

  render () {

    this.game.debug.body(this.sprite);

  }

}

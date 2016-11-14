import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RenderTextureTilemapState extends BootState {
  math: typeof Phaser.Math;
  map: Phaser.Tilemap;
  texture: Phaser.RenderTexture;
  stamp: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  sprite: Phaser.Sprite;
  emitter: Phaser.Particles.Arcade.Emitter;
  tx = 0;
  ty = 0;


  preload () {

    this.load.tilemap('level3', 'assets/tilemaps/maps/cybernoid.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.spritesheet('tiles', 'assets/tilemaps/tiles/cybernoid.png', 16, 16);
    this.load.image('phaser', 'assets/sprites/phaser-ship.png');
    this.load.image('chunk', 'assets/sprites/chunk.png');

  }

  create () {

    this.map = this.add.tilemap('level3');
    this.map.setCollisionByExclusion([7, 32, 35, 36, 47]);

    this.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

    this.stamp = this.add.sprite(0, 0, 'tiles', 3);

    this.texture = this.add.renderTexture(this.game.width, this.game.height);

    let rtMap = this.add.sprite(0, 0, this.texture);
    rtMap.fixedToCamera = true;

    this.cursors = this.input.keyboard.createCursorKeys();

    this.emitter = this.add.emitter(0, 0, 200);
    this.emitter.makeParticles('chunk');
    this.emitter.minRotation = 0;
    this.emitter.maxRotation = 0;
    this.emitter.gravity = 150;
    this.emitter.bounce.setTo(0.5);

    this.sprite = this.add.sprite(300, 90, 'phaser');
    this.sprite.anchor.set(0.5);

    this.physics.enable(this.sprite);

    this.sprite.body.tilePadding.set(32, 32);

    this.camera.follow(this.sprite);

    this.renderMap();

  }

  renderMap () {

    let cx = this.math.snapToFloor(this.camera.x, 16) / 16;
    let cy = this.math.snapToFloor(this.camera.y, 16) / 16;

    let w = cx + 50;
    let h = cy + 38;
    let dx = 0;
    let dy = 0;
    let cls = true;

    for (let y = cy; y < h; y++) {
      for (let x = cx; x < w; x++) {

        let tile = this.map.getTile(x, y);

        if (tile) {
          this.stamp.frame = tile.index - 1;
          this.texture.renderXY(this.stamp, dx, dy, cls);
          cls = false;
        }

        dx += 16;

      }
      dx = 0;
      dy += 16;
    }

    this.tx = this.camera.x;
    this.ty = this.camera.y;

  }

  update () {

    if (this.camera.x !== this.tx || this.camera.y !== this.ty ) {
      this.renderMap();
    }

    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.up.isDown) {
      this.sprite.body.velocity.y = -200;
      this.particleBurst();
    }
    else if (this.cursors.down.isDown) {
      this.sprite.body.velocity.y = 200;
      this.particleBurst();
    }
    if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -200;
      this.sprite.scale.x = -1;
      this.particleBurst();
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.velocity.x = 200;
      this.sprite.scale.x = 1;
      this.particleBurst();
    }

  }

  particleBurst () {

    this.emitter.x = this.sprite.x;
    this.emitter.y = this.sprite.y;
    this.emitter.start(true, 2000, null, 1);

  }

}

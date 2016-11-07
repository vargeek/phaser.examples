import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MapBounceState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  cursors: Phaser.CursorKeys;
  sprite: Phaser.Sprite;

  preload () {

    this.load.tilemap('map', 'assets/tilemaps/maps/collision_test.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    this.load.image('phaser', 'assets/sprites/phaser-dude.png');

  }

  create () {

    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('ground_1x1');

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.map.setCollisionBetween(1, 12);

    this.sprite = this.add.sprite(260, 70, 'phaser');

    this.physics.enable(this.sprite);

    this.sprite.body.bounce.set(0.6);
    this.sprite.body.tilePadding.set(32);

    this.camera.follow(this.sprite);

    this.physics.arcade.gravity.y = 200;

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.physics.arcade.collide(this.sprite, this.layer);

    if (this.cursors.up.isDown) {
      this.sprite.body.velocity.y = -150;
    }
    else if (this.cursors.down.isDown) {
      this.sprite.body.velocity.y = 150;
    }

    if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -150;
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.velocity.x = 150;
    }

  }

  render () {

    this.game.debug.bodyInfo(this.sprite, 32, 32);

  }

}

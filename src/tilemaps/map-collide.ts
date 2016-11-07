import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MapCollideState extends BootState {
  map: Phaser.Tilemap;
  tileset: Phaser.Tileset;
  layer: Phaser.TilemapLayer;
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.tilemap('mario', 'assets/tilemaps/maps/super_mario.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/tilemaps/tiles/super_mario.png');
    this.load.image('player', 'assets/sprites/phaser-dude.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE)

    this.stage.backgroundColor = '#787878';

    this.map = this.add.tilemap('mario');

    this.map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');

    this.map.setCollisionBetween(15, 16);
    this.map.setCollisionBetween(20, 25);
    this.map.setCollisionBetween(27, 29);
    this.map.setCollision(40);

    this.layer = this.map.createLayer('World1');

    this.layer.resizeWorld();

    this.player = this.add.sprite(32, 32, 'player');
    this.physics.enable(this.player);

    this.physics.arcade.gravity.y = 250;

    this.player.body.bounce.y = 0.2;
    this.player.body.linearDamping = 1;
    this.player.body.collideWorldBounds = true;

    this.camera.follow(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.physics.arcade.collide(this.player, this.layer);

    this.player.body.velocity.x = 0;

    if (this.cursors.up.isDown) {
      if (this.player.body.onFloor()) {
        this.player.body.velocity.y = -200;
      }
    }

    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -150;
    }
    else if (this.cursors.right.isDown ) {
      this.player.body.velocity.x = 150;
    }

  }
  render () {

    this.game.debug.bodyInfo(this.player, 32, 320);

  }

}

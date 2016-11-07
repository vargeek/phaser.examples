import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DetachFromCameraState extends BootState {
  map: Phaser.Tilemap;
  tileset: Phaser.Image;
  layer: Phaser.TilemapLayer;
  layer2: Phaser.TilemapLayer;
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  controlSprite = true;

  preload () {

    this.load.tilemap('mario', 'assets/tilemaps/maps/super_mario.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/tilemaps/tiles/super_mario.png');
    this.load.image('player', 'assets/sprites/phaser-dude.png');

  }

  create () {

    this.stage.backgroundColor = '#787878';

    this.map = this.add.tilemap('mario');
    this.map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');

    this.map.setCollisionBetween(15, 16);
    this.map.setCollisionBetween(20, 25);
    this.map.setCollisionBetween(27, 29);
    this.map.setCollision(40);

    this.layer = this.map.createLayer('World1');

    this.layer.x = 50;
    this.layer.y = 300;

    this.layer.debug = true;

    // layer.removeCamera();

    this.layer.resizeWorld();

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.player = this.add.sprite(128, 100, 'player');

    this.physics.arcade.enable(this.player);
    this.physics.arcade.gravity.y = 300;

    this.player.body.linearDamping = 1;
    this.player.body.collideWorldBounds = true;

    this.camera.follow(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.input.onDown.add(this.toggle, this);

  }

  toggle () {

    this.controlSprite = !this.controlSprite;

  }

  update () {

    this.physics.arcade.collide(this.player, this.layer);

    this.player.body.velocity.x = 0;

    if (this.controlSprite) {
      if (this.cursors.up.isDown && this.player.body.onFloor()) {
        this.player.body.velocity.y = -300;
      }

      if (this.cursors.left.isDown) {
        this.player.body.velocity.x = -150;
      }
      else if (this.cursors.right.isDown) {
        this.player.body.velocity.x = 150;
      }

    }
    else {

      if (this.cursors.left.isDown) {
        this.layer.x--;
      }
      else if (this.cursors.right.isDown) {
        this.layer.x++;
      }

    }


  }

}

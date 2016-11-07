import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MarioState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.tilemap('mario', 'assets/tilemaps/maps/super_mario.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/tilemaps/tiles/super_mario.png');
    this.load.image('player', 'assets/sprites/phaser-dude.png');

  }

  create () {

    this.stage.backgroundColor = '#787878';

    this.map = this.add.tilemap('mario');
    this.map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');

    this.layer = this.map.createLayer('World1');
    this.layer.resizeWorld();

    this.layer.wrap = true;
    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown) {
      this.camera.x -= 8;
    }
    else if (this.cursors.right.isDown) {
      this.camera.x += 8;
    }

    if (this.cursors.up.isDown) {
      this.camera.y -= 8;
    }
    else if (this.cursors.down.isDown) {
      this.camera.y += 8;
    }

  }

}

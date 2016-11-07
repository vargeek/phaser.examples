import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CsvMapCollideState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  cursors: Phaser.CursorKeys;
  player: Phaser.Sprite;

  preload () {

    this.load.tilemap('map', 'assets/tilemaps/csv/catastrophi_level2.csv', null, Phaser.Tilemap.CSV);
    this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    this.load.spritesheet('player', 'assets/sprites/spaceman.png', 16, 16);

  }

  create () {

    this.map = this.add.tilemap('map', 16, 16);
    this.map.addTilesetImage('tiles');

    this.layer = this.map.createLayer(0);

    this.layer.resizeWorld();

    this.map.setCollisionBetween(54, 83);

    this.player = this.add.sprite(48, 48, 'player', 1);
    this.player.animations.add('left', [8, 9], 10, true);
    this.player.animations.add('right', [1, 2], 10, true);
    this.player.animations.add('up', [11, 12, 13], 10, true);
    this.player.animations.add('down', [4, 5, 6], 10, true);

    this.physics.enable(this.player, Phaser.Physics.ARCADE);

    this.player.body.setSize(10, 14, 2, 1);
    this.camera.follow(this.player)

    this.cursors = this.input.keyboard.createCursorKeys();

    let help = this.add.text(16, 16, 'Arrows to move', {
      font: '14px Arial',
      fill: '#ffffff'
    });
    help.fixedToCamera = true;


  }

  update () {

   this.physics.arcade.collide(this.player, this.layer);

    this.player.body.velocity.set(0);

    if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -100;
        this.player.play('left');
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 100;
        this.player.play('right');
    }
    else if (this.cursors.up.isDown)
    {
        this.player.body.velocity.y = -100;
        this.player.play('up');
    }
    else if (this.cursors.down.isDown)
    {
        this.player.body.velocity.y = 100;
        this.player.play('down');
    }
    else
    {
        this.player.animations.stop();
    }

  }

  render () {

    this.game.debug.body(this.player);

  }

}

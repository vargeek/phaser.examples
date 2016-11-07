import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TilesetFromBitmapdataState extends BootState {
  math: typeof Phaser.Math;
  bmd: Phaser.BitmapData;
  map: Phaser.Tilemap;
  layer: any;
  marker: Phaser.Graphics;
  currentTile = 0;
  cursors: Phaser.CursorKeys;
  player: Phaser.Sprite;
  facing = 'left';
  jumpTimer = 0;
  jumpButton: Phaser.Key;
  currentTileMarker: Phaser.Graphics;

  preload () {

    this.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.stage.backgroundColor = '#2d2d2d';

    this.map = this.add.tilemap();

    this.bmd = this.make.bitmapData(32 * 25, 32 * 2);

    // http://localhost:3000/Phaser.Color.html#HSVColorWheel
    // <static> HSVColorWheel(s, v) → {array}
    // s{number}    The saturation, in the range 0 - 1.
    // v{number}    The value, in the range 0 - 1.
    // Get HSV color wheel values in an array which will be 360 elements in size.
    let colors = Phaser.Color.HSVColorWheel();

    let index = 0;
    for (let y = 0; y < 2; y++) {
      for (let x = 0; x < 25; x++) {
        this.bmd.rect(x * 32, y * 32, 32, 32, colors[index].rgba);
        index += 6;
      }
    }

    this.map.addTilesetImage('tiles', this.bmd);

    this.layer = this.map.create('level1', 40, 30, 32, 32);

    this.map.putTile(30, 2, 10, this.layer);
    this.map.putTile(30, 3, 10, 'level1');
    this.map.putTile(30, 4, 10);

    this.map.setCollisionByExclusion([0]);

    this.createTileSelector();

    this.player = this.add.sprite(64, 100, 'dude');
    this.physics.arcade.enable(this.player);
    this.physics.arcade.gravity.y = 350;

    this.player.body.bounce.y = 0.1;
    this.player.body.collideWorldBounds = true;
    this.player.body.setSize(20, 32, 5, 16);

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('turn', [4], 20, true);
    this.player.animations.add('right', [5,6,7,8], 10, true);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.input.addMoveCallback(this.updateMarker, this);

  }

  createTileSelector () {

    //  Our tile selection window
    var tileSelector = this.add.group();

    var tileSelectorBackground = this.make.graphics();
    tileSelectorBackground.beginFill(0x000000, 0.8);
    tileSelectorBackground.drawRect(0, 0, 800, 66);
    tileSelectorBackground.endFill();

    tileSelector.add(tileSelectorBackground);

    var tileStrip = tileSelector.create(1, 1, this.bmd);
    tileStrip.inputEnabled = true;
    tileStrip.events.onInputDown.add(this.pickTile, this);

    //  Our painting marker
    this.marker = this.add.graphics(0, 0);
    this.marker.lineStyle(2, 0x000000, 1);
    this.marker.drawRect(0, 0, 32, 32);

    //  Our current tile marker
    this.currentTileMarker = this.add.graphics(0, 0);
    this.currentTileMarker.lineStyle(1, 0xffffff, 1);
    this.currentTileMarker.drawRect(0, 0, 32, 32);

    tileSelector.add(this.currentTileMarker);

  }


  pickTile (sprite: Phaser.Sprite, pointer: Phaser.Pointer ) {

    let x = this.math.snapToFloor(pointer.x, 32, 0);
    let y = this.math.snapToFloor(pointer.y, 32, 0);

    this.currentTileMarker.x = x;
    this.currentTileMarker.y = y;

    x /= 32;
    y /= 32;
    this.currentTile = x + (y * 25);

  }

  updateMarker () {

    this.marker.x = this.layer.getTileX(this.input.activePointer.worldX) * 32;
    this.marker.y = this.layer.getTileY(this.input.activePointer.worldY) * 32;

    if (this.input.mousePointer.leftButton.isDown && this.marker.y > 32) {
      this.map.putTile(this.currentTile, this.layer.getTileX(this.marker.x), this.layer.getTileY(this.marker.y), this.layer);
    }

  }

  update () {

    this.physics.arcade.collide(this.player, this.layer);

    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -150;

        if (this.facing != 'left')
        {
            this.player.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.velocity.x = 150;

        if (this.facing != 'right')
        {
            this.player.animations.play('right');
            this.facing = 'right';
        }
    }
    else
    {
        if (this.facing != 'idle')
        {
            this.player.animations.stop();

            if (this.facing == 'left')
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

    if (this.jumpButton.isDown && this.player.body.onFloor() && this.time.now > this.jumpTimer)
    {
        this.player.body.velocity.y = -250;
        this.jumpTimer = this.time.now + 750;
    }


  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TilemapRayCastState extends BootState {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  cursors: Phaser.CursorKeys;
  sprite: Phaser.Sprite;
  line: Phaser.Line;
  tileHits:any[] = [];
  plotting = false;


  preload () {

    this.load.tilemap('map', 'assets/tilemaps/maps/collision_test.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    this.load.image('phaser', 'assets/sprites/phaser-dude.png');

  }

  create () {

    this.line = new Phaser.Line();

    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('ground_1x1');

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.map.setCollisionBetween(1, 12);

    this.layer.debug = true;

    this.sprite = this.add.sprite(260, 70, 'phaser');

    this.physics.enable(this.sprite);

    this.camera.follow(this.sprite);

    this.cursors = this.input.keyboard.createCursorKeys();

    let help = this.add.text(10, 10, 'Arrows to move, click and drag to cast a ray', {font: '16px Arial', fill: '#ffffff'});
    help.fixedToCamera = true;

    this.input.onDown.add(this.startLine, this);
    this.input.onUp.add(this.raycast, this);


  }

  startLine (pointer: Phaser.Pointer) {

    if (this.tileHits.length > 0) {
      for (let index = 0; index < this.tileHits.length; index++) {
        this.tileHits[index].debug = false;
      }
      this.layer.dirty = true;
    }

    this.line.start.set(pointer.worldX, pointer.worldY);
    this.plotting = true;
  }

  raycast (pointer: Phaser.Pointer) {

    this.line.end.set(pointer.worldX, pointer.worldY);

    // http://localhost:3000/Phaser.TilemapLayer.html#getRayCastTiles
    // getRayCastTiles(line, stepRate, collides, interestingFace) → {Array.<Phaser.Tile>}
    // line{Phaser.Line}          The line used to determine which tiles to return.
    // stepRate{integer}=rayStepRate    How many steps through the ray will we check?
    // collides{boolean=false}    If true, only return tiles that collide on one or more faces.
    // interestingFace{boolean=false}   If true, only return tiles that have interesting faces.

    // Gets all tiles that intersect with the given line.
    this.tileHits = (this.layer as any).getRayCastTiles(this.line, 4, false, false);

    // http://localhost:3000/Phaser.TilemapLayer.html#rayStepRate
    // rayStepRate :integer = 4
    // When ray-casting against tiles this is the number of steps it will jump. For larger tile sizes you can increase this to improve performance.


    if (this.tileHits.length > 0) {
      for (let index = 0; index < this.tileHits.length; index++) {
        this.tileHits[index].debug = true;
      }
      this.layer.dirty = true;
    }

    this.plotting = false;

  }

  update () {

    if (this.plotting)
    {
        this.line.end.set(this.input.activePointer.worldX, this.input.activePointer.worldY);
    }

    this.physics.arcade.collide(this.sprite, this.layer);

    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.up.isDown)
    {
        this.sprite.body.velocity.y = -200;
    }
    else if (this.cursors.down.isDown)
    {
        this.sprite.body.velocity.y = 200;
    }

    if (this.cursors.left.isDown)
    {
        this.sprite.body.velocity.x = -200;
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite.body.velocity.x = 200;
    }

  }

  render () {

    this.game.debug.geom(this.line);

  }

}

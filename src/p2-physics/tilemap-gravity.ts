import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TilemapGravityState extends BootState {
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  jumpButton: Phaser.Key;
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  facing = 'left';
  jumpTimer = 0;

  preload () {

    this.load.tilemap('map', 'assets/tilemaps/maps/collision_test.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    this.load.image('walls_1x2', 'assets/tilemaps/tiles/walls_1x2.png');
    this.load.image('tiles2', 'assets/tilemaps/tiles/tiles2.png');
    this.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);

  }

  create () {

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.stage.backgroundColor = '#2d2d2d';

    this.map = this.add.tilemap('map');

    this.map.addTilesetImage('ground_1x1');
    this.map.addTilesetImage('walls_1x2');
    this.map.addTilesetImage('tiles2');

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    //  Set the tiles for collision.
    //  Do this BEFORE generating the p2 bodies below.
    this.map.setCollisionBetween(1, 12);

    //  Convert the tilemap layer into bodies. Only tiles that collide (see above) are created.
    //  This call returns an array of body objects which you can perform addition actions on if
    //  required. There is also a parameter to control optimising the map build.
    this.physics.p2.convertTilemap(this.map, this.layer);

    this.physics.p2.restitution = 0.5;
    this.physics.p2.gravity.y = 300;

    this.player = this.add.sprite(100, 200, 'dude');
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('turn', [4], 20, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.physics.p2.enable(this.player);

    this.player.body.fixedRotation = true;
    // player.body.setMaterial(characterMaterial);

    this.camera.follow(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  }

  update() {

    if (this.cursors.left.isDown)
    {
        this.player.body.moveLeft(200);

        if (this.facing != 'left')
        {
            this.player.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.moveRight(200);

        if (this.facing != 'right')
        {
            this.player.animations.play('right');
            this.facing = 'right';
        }
    }
    else
    {
        this.player.body.velocity.x = 0;

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

    if (this.jumpButton.isDown && this.time.now > this.jumpTimer && this.checkIfCanJump())
    {
        this.player.body.moveUp(300);
        this.jumpTimer = this.time.now + 750;
    }

  }

  checkIfCanJump () {

    var result = false;
    let yAxis = p2.vec2.fromValues(0, 1);

    // http://schteppe.github.io/p2.js/docs/classes/World.html#property_narrowphase
    // The narrowphase to use to generate contacts.

    // http://schteppe.github.io/p2.js/docs/classes/Narrowphase.html#property_contactEquations
    // narrowphase.contactEquations

    // http://schteppe.github.io/p2.js/docs/classes/ContactEquation.html
    // p2.ContactEquation
    for (var i=0; i < this.physics.p2.world.narrowphase.contactEquations.length; i++)
    {
        var c = this.physics.p2.world.narrowphase.contactEquations[i];

        if (c.bodyA === this.player.body.data || c.bodyB === this.player.body.data)
        {
            // http://schteppe.github.io/p2.js/docs/classes/vec2.html#method_dot
            // Calculates the dot product of two vec2's

            // http://schteppe.github.io/p2.js/docs/classes/ContactEquation.html#property_normalA
            // the normal vector, pointing out of body i
            var d = p2.vec2.dot(c.normalA, yAxis);

            if (c.bodyA === this.player.body.data)
            {
                d *= -1;
            }

            if (d > 0.5)
            {
                result = true;
            }
        }
    }

    return result;
  }



}

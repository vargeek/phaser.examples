import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class QuadtreeCollisionInfosState extends BootState {
  ship: Phaser.Sprite;
  aliens: Phaser.Group;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('ship', 'assets/sprites/xenon2_ship.png');
    this.load.image('baddie', 'assets/sprites/space-baddie.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    //  Enable the QuadTree
    // http://localhost:3000/Phaser.Physics.Arcade.html#skipQuadTree
    // skipQuadTree :boolean
    // If true the QuadTree will not be used for any collision. QuadTrees are great if objects are well spread out in your game, otherwise they are a performance hit. If you enable this you can disable on a per body basis via Body.skipQuadTree.
    this.physics.arcade.skipQuadTree = false;

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#skipQuadTree
    // skipQuadTree :boolean
    // If true and you collide this Sprite against a Group, it will disable the collision check from using a QuadTree.
    // sprite.body.skipQuadTree

    this.aliens = this.add.group();
    this.aliens.enableBody = true;

    for (var i = 0; i < 50; i++)
    {
        var s = this.aliens.create(this.world.randomX, this.world.randomY, 'baddie');
        s.body.collideWorldBounds = true;
        s.body.bounce.set(1);
        s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
    }

    this.ship = this.add.sprite(400, 400, 'ship');

    this.physics.enable(this.ship, Phaser.Physics.ARCADE);

    this.ship.body.collideWorldBounds = true;
    this.ship.body.bounce.set(1);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.physics.arcade.collide(this.ship, this.aliens);

    if (this.cursors.left.isDown)
    {
        this.ship.body.velocity.x -= 4;
    }
    else if (this.cursors.right.isDown)
    {
        this.ship.body.velocity.x += 4;
    }

    if (this.cursors.up.isDown)
    {
        this.ship.body.velocity.y -= 4;
    }
    else if (this.cursors.down.isDown)
    {
        this.ship.body.velocity.y += 4;
    }


  }

  render () {

    this.game.debug.quadTree(this.physics.arcade.quadTree);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SortDirectionVerticalState extends BootState {
  sprite: Phaser.Sprite;
  group: Phaser.Group;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');
    this.load.spritesheet('veggies', 'assets/sprites/fruitnveg32wh37.png', 32, 32);

  }

  create () {

    this.world.setBounds(0, 0, 800, 3000);
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#2d2d2d';

    this.sprite = this.add.sprite(400, 2900, 'phaser');

    // game.physics.arcade.sortDirection = Phaser.Physics.Arcade.TOP_BOTTOM;
    this.physics.arcade.sortDirection = Phaser.Physics.Arcade.BOTTOM_TOP;

    this.physics.arcade.enable(this.sprite);

    this.group = this.add.physicsGroup(Phaser.Physics.ARCADE);

    for (var i = 0; i < 500; i++)
    {
        var c = this.group.create(this.rnd.integerInRange(64, 800-64), this.rnd.integerInRange(100, 2900), 'veggies', this.rnd.integerInRange(0, 35));
        c.name = 'veg' + i;
        c.body.immovable = true;
    }

    for (var i = 0; i < 20; i++)
    {
        //  Here we'll create some chillis which the player can pick-up. They are still part of the same Group.
        var c = this.group.create(this.rnd.integerInRange(64, 800-64), this.rnd.integerInRange(0, 2000), 'veggies', 17);
        c.body.immovable = true;
    }

    this.camera.follow(this.sprite);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.physics.arcade.collide(this.sprite, this.group, this.collisionHandler, null, this);

    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.left.isDown)
    {
        this.sprite.body.velocity.x = -200;
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite.body.velocity.x = 200;
    }

    if (this.cursors.up.isDown)
    {
        this.sprite.body.velocity.y = -200;
    }
    else if (this.cursors.down.isDown)
    {
        this.sprite.body.velocity.y = 200;
    }

  }

  collisionHandler (player: Phaser.Sprite, veg: Phaser.Sprite) {

    if (veg.frame === 17) {
      veg.kill();
    }

  }

}

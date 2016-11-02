import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class SortDirectionState extends BootState {
  sprite: Phaser.Sprite;
  group: Phaser.Group;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');
    this.load.spritesheet('veggies', 'assets/sprites/fruitnveg32wh37.png', 32, 32);

  }

  create () {

    this.world.setBounds(0, 0, 2000, 1200)
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#2d2d2d';
    this.sprite = this.add.sprite(1960, 200, 'phaser');

    // http://localhost:3000/Phaser.Physics.Arcade.html#sortDirection
    // sortDirection :number
    // Used when colliding a Sprite vs. a Group, or a Group vs. a Group, this defines the direction the sort is based on. Default is Phaser.Physics.Arcade.LEFT_RIGHT.
    this.physics.arcade.sortDirection = Phaser.Physics.Arcade.RIGHT_LEFT;

    this.physics.arcade.enable(this.sprite);

    this.group = this.add.physicsGroup();

    for (let index = 0; index < 500; index++) {
      let c = this.group.create(this.rnd.integerInRange(200, 1900), this.rnd.integerInRange(0, 1100), 'veggies', this.rnd.integerInRange(0, 35)) as Phaser.Sprite;
      c.name = `veg${index}`;
      (c.body as Body).immovable = true;

    }

    for (let index = 0; index < 20; index++) {
      let c = this.group.create(this.rnd.integerInRange(100, 770), this.rnd.integerInRange(0, 570), 'veggies', 17);
      (c.body as Body).immovable = true;
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

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SpriteVsGroupState extends BootState {
  sprite: Phaser.Sprite;
  group: Phaser.Group;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');
    this.load.spritesheet('veggies', 'assets/sprites/fruitnveg32wh37.png', 32, 32);

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#2d2d2d';

    this.sprite = this.add.sprite(32, 200, 'phaser');

    this.physics.arcade.enable(this.sprite);

    this.group = this.add.physicsGroup();

    for (var i = 0; i < 50; i++)
    {
        var c = this.group.create(this.rnd.between(100, 770), this.rnd.between(0, 570), 'veggies', this.rnd.between(0, 35));
        c.body.mass = -100;
    }

    for (var i = 0; i < 20; i++)
    {
        var c = this.group.create(this.rnd.between(100, 770), this.rnd.between(0, 570), 'veggies', 17);
    }

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.physics.arcade.collide(this.sprite, this.group, this.collisionHandler, this.processHandler, this)) {
      console.log('boom');
    }

    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -200;
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.velocity.x = 200;
    }

    if (this.cursors.up.isDown) {
      this.sprite.body.velocity.y = -200;
    }
    else if (this.cursors.down.isDown) {
      this.sprite.body.velocity.y = 200;
    }

  }

  collisionHandler (player: Phaser.Sprite, veg: Phaser.Sprite) {

    if (veg.frame === 17) {
      veg.kill();
    }

  }

  processHandler () {

    return true;

  }

}

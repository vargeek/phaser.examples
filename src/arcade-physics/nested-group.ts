import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class NestedGroupState extends BootState {
  sprites: Phaser.Group;

  preload () {

    this.load.spritesheet('spinner', 'assets/sprites/bluemetal_32x32x4.png', 32, 32);
    this.load.image('phaser', 'assets/sprites/phaser.png');

  }

  create () {

    this.sprites = this.add.group();

    for (let index = 0; index < 30; index++) {
      let sprite = this.sprites.create(this.rnd.integerInRange(100, 700), this.rnd.integerInRange(32, 200), 'spinner') as Phaser.Sprite;
      sprite.animations.add('spin', [0,1,2,3]);
      sprite.play('spin', 20, true);
      this.physics.enable(sprite, Phaser.Physics.ARCADE);
      (sprite.body as Body).velocity.x = this.rnd.integerInRange(-200, 200);
      (sprite.body as Body).velocity.y = this.rnd.integerInRange(-200, 200);

    }

    //	Here we'll create a new group
    var groupB = this.make.group();

    //	And add a sprite into it
    groupB.create(16, 16, 'phaser');

    //	It becomes a child of the Sprites group
    this.sprites.add(groupB);

    //	This will set physics properties on all group children that have a 'body' (i.e. it will skip the groupB)
    this.sprites.setAll('body.collideWorldBounds', true);
    this.sprites.setAll('body.bounce.x', 1);
    this.sprites.setAll('body.bounce.y', 1);
    this.sprites.setAll('body.minBounceVelocity', 0);

  }

  update () {

    this.physics.arcade.collide(this.sprites);

  }

}

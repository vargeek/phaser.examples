import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class GroupVsSelfState extends BootState {
  sprites: Phaser.Group;

  preload () {

    this.load.spritesheet('spinner', 'assets/sprites/bluemetal_32x32x4.png', 32, 32);

  }

  create () {

    // http://localhost:3000/Phaser.GameObjectFactory.html#physicsGroup
    // physicsGroup(physicsBodyType, parent, name, addToStage) → {Phaser.Group}
    // A Group is a container for display objects that allows for fast pooling, recycling and collision checks.

    // A Physics Group is the same as an ordinary Group except that is has enableBody turned on by default, so any Sprites it creates are automatically given a physics body.
    this.sprites = this.add.physicsGroup(Phaser.Physics.ARCADE);

    for (let index = 0; index < 90; index++) {
      let sprite = this.sprites.create(this.rnd.integerInRange(100, 700), this.rnd.integerInRange(32, 200), 'spinner') as Phaser.Sprite;
      sprite.animations.add('spin', [0, 1, 2, 3]);
      sprite.play('spin', 20, true);
      (sprite.body as Body).velocity.set(this.rnd.integerInRange(-200, 200), this.rnd.integerInRange(-200, 200));
    }

    this.sprites.setAll('body.collideWorldBounds', true);
    this.sprites.setAll('body.bounce.x', 1);
    this.sprites.setAll('body.bounce.y', 1);

  }

  update () {

    this.physics.arcade.collide(this.sprites);

  }

}

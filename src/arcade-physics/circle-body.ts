import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class CircleBodyState extends BootState {
  ball1: Phaser.Sprite;
  ball2: Phaser.Sprite;

  preload () {

    this.load.image('wizball', 'assets/sprites/wizball.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.ball1 = this.add.sprite(100, 200, 'wizball');
    this.ball2 = this.add.sprite(700, 200, 'wizball');

    this.physics.arcade.enable([this.ball1, this.ball2]);

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#setCircle
    // setCircle(radius, offsetX, offsetY)
    // Sets this Body as using a circle, of the given radius, for all collision detection instead of a rectangle.

    // The radius is given in pixels and is the distance from the center of the circle to the edge.

    // You can also control the x and y offset, which is the position of the Body relative to the top-left of the Sprite.

    // To change a Body back to being rectangular again call Body.setSize.

    // Note: Circular collision only happens with other Arcade Physics bodies, it does not
    // work against tile maps, where rectangular collision is the only method supported.
    (this.ball1.body as Body).setCircle(45);
    (this.ball2.body as Body).setCircle(45);
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#setSize
    // setSize(width, height, offsetX, offsetY)
    // You can modify the size of the physics Body to be any dimension you need.
    // This allows you to make it smaller, or larger, than the parent Sprite.
    // You can also control the x and y offset of the Body. This is the position of the
    // Body relative to the top-left of the Sprite texture.

    // For example: If you have a Sprite with a texture that is 80x100 in size, and you want the physics body to be 32x32 pixels in the middle of the texture, you would do:
    // setSize(32, 32, 24, 34)
    // Where the first two parameters is the new Body size (32x32 pixels).
    // 24 is the horizontal offset of the Body from the top-left of the Sprites texture, and 34 is the vertical offset.

    // Calling setSize on a Body that has already had setCircle will reset all of the Circle properties, making this Body rectangular again.


    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#mass
    // mass :number
    // The mass of the Body. When two bodies collide their mass is used in the calculation to determine the exchange of velocity.
    this.ball2.body.mass = 3;


    (this.ball1.body as Body).collideWorldBounds = true;
    (this.ball2.body as Body).collideWorldBounds = true;

    (this.ball1.body as Body).bounce.set(1);
    (this.ball2.body as Body).bounce.set(1);

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#gravity
    // gravity :Phaser.Point
    // A local gravity applied to this Body. If non-zero this over rides any world gravity, unless Body.allowGravity is set to false.
    (this.ball1.body as Body).gravity.y = 100;
    (this.ball2.body as Body).gravity.y = 100;

    (this.ball1.body as Body).velocity.set(150);
    (this.ball2.body as Body).velocity.set(-200, 60);

  }

  update () {

    this.physics.arcade.collide(this.ball1, this.ball2);

  }

  render () {

    this.game.debug.body(this.ball1);
    this.game.debug.body(this.ball2);

  }

}

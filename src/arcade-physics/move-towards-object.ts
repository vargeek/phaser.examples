import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MoveTowardsObjectState extends BootState {
  balls: Phaser.Group;

  preload () {

    this.load.image('ball', 'assets/sprites/shinyball.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.balls = this.add.group();
    // http://localhost:3000/Phaser.Group.html#enableBody
    // enableBody :boolean
    // If true all Sprites created by, or added to this group, will have a physics body enabled on them.
    // If there are children already in the Group at the time you set this property, they are not changed.
    // The default body type is controlled with physicsBodyType.
    this.balls.enableBody = true;

    for (let index = 0; index < 50; index++) {
      this.balls.create(this.world.randomX, this.world.randomY, 'ball')
    }

  }

  update () {

    if (this.input.mousePointer.isDown) {
      this.balls.forEach(this.physics.arcade.moveToPointer, this.physics.arcade, false, 200);
    }
    else {
      this.balls.setAll('body.velocity.x', 0);
      this.balls.setAll('body.velocity.y', 0);
    }

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.P2.Body;
export class RevoluteConstraintState extends BootState {
  sprite: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('vu', 'assets/sprites/vu.png');
    this.load.image('ball', 'assets/sprites/arrow.png');
    this.load.image('sky', 'assets/skies/cavern2.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.sprite = this.add.sprite(400, 300, 'ball');

    let vu1 = this.add.sprite(400, 300, 'vu');

    this.physics.p2.enable([this.sprite, vu1]);

    // http://localhost:3000/Phaser.Physics.P2.Body.html#clearCollision
    // clearCollision(clearGroup, clearMask, shape)
    // clearGroup{boolean=true}   Clear the collisionGroup value from the shape/s?
    // clearMask{boolean=true}    Clear the collisionMask value from the shape/s?
    // shape{p2.Shape?}           If not provided the collision data will be cleared from all Shapes in this Body.

    // Clears the collision data from the shapes in this Body. Optionally clears Group and/or Mask.
    (this.sprite.body as Body).clearCollision(true, true);
    (vu1.body as Body).clearCollision(true, true);

    // http://localhost:3000/Phaser.Physics.P2.html#createRevoluteConstraint
    // createRevoluteConstraint(bodyA, pivotA, bodyB, pivotB, maxForce, worldPivot) → {Phaser.Physics.P2.RevoluteConstraint}
    // pivotA{[number,number]}    The point relative to the center of mass of bodyA which bodyA is constrained to. The value is an array with 2 elements matching x and y, i.e: [32, 32].
    // maxForce{number=0}         The maximum force that should be applied to constrain the bodies.
    // worldPivot{Float32Array=null}  A pivot point given in world coordinates. If specified, localPivotA and localPivotB are automatically computed from this value.

    // Connects two bodies at given offset points, letting them rotate relative to each other around this point.
    // The pivot points are given in world (pixel) coordinates.
    let constraint = this.physics.p2.createRevoluteConstraint(this.sprite, [50, 100], vu1, [0, 0]);

    let text = this.add.text(20, 20, 'rotate with arrow keys', { fill: '#ffffff' });

   this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown) {
      this.sprite.body.rotateLeft(50);
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.rotateRight(50);
    }

  }

}

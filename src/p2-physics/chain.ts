import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.P2.Body;
export class ChainState extends BootState {

  preload () {

    this.load.image('clouds', 'assets/misc/clouds.jpg');
    this.load.spritesheet('chain', 'assets/sprites/chain.png', 16, 26);

  }

  create () {

    this.add.tileSprite(0, 0, 800, 600, 'clouds');
    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.gravity.y = 1200;

    this.createRope(40, 400, 64);

  }

  createRope (length: number, xAnchor: number, yAnchor: number) {

    let lastRect: Phaser.Sprite;
    let height = 20;
    let width = 16;
    let maxForce = 20000;

    for (let index = 0; index <= length; index++) {
      let newRect: Phaser.Sprite;
      let x = xAnchor;
      let y = yAnchor + index * height;

      if (index % 2 === 0) {
        newRect = this.add.sprite(x, y, 'chain', 1);
      }
      else {
        newRect = this.add.sprite(x, y, 'chain', 0);
        lastRect.bringToTop();
      }

      this.physics.p2.enable(newRect, false);

      // http://localhost:3000/Phaser.Physics.P2.Body.html#setRectangle
      // setRectangle(width, height, offsetX, offsetY, rotation) → {p2.Rectangle}
      // Clears any previously set shapes. The creates a new Rectangle shape at the given size and offset, and adds it to this Body.
      // If you wish to create a Rectangle to match the size of a Sprite or Image see Body.setRectangleFromSprite.
      // If this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates.
      (newRect.body as Body).setRectangle(width, height);

      if (index === 0) {
        // http://localhost:3000/Phaser.Physics.P2.Body.html#static
        // static :boolean
        // Returns true if the Body is static. Setting Body.static to 'false' will make it dynamic.
        (newRect.body as Body).static = true;
      }
      else {
        // http://localhost:3000/Phaser.Physics.P2.Body.html#velocity
        // velocity :Phaser.Physics.P2.InversePointProxy
        // The velocity of the body. Set velocity.x to a negative value to move to the left, position to the right. velocity.y negative values move up, positive move down.
        (newRect.body as Body).velocity.x = 400;

        // http://localhost:3000/Phaser.Physics.P2.Body.html#mass
        // mass :number
        // The mass of the body.
        (newRect.body as Body).mass =  length / index;
      }

      if (lastRect) {
        // http://localhost:3000/Phaser.Physics.P2.html#createRevoluteConstraint
        // createRevoluteConstraint(bodyA, pivotA, bodyB, pivotB, maxForce, worldPivot) → {Phaser.Physics.P2.RevoluteConstraint}
        // pivotA{Array}        The point relative to the center of mass of bodyA which bodyA is constrained to. The value is an array with 2 elements matching x and y, i.e: [32, 32].
        // maxForce{number=0}   The maximum force that should be applied to constrain the bodies.
        // worldPivot{Float32Array=null}  A pivot point given in world coordinates. If specified, localPivotA and localPivotB are automatically computed from this value.
        // Connects two bodies at given offset points, letting them rotate relative to each other around this point.
        // The pivot points are given in world (pixel) coordinates.
        this.physics.p2.createRevoluteConstraint(newRect, [0, -10], lastRect, [0, 10], maxForce);
      }

      lastRect = newRect;
    }


  }


}

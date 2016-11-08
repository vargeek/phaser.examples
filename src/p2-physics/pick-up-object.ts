import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PickUpObjectState extends BootState {
  tetris1: Phaser.Sprite;
  tetris2: Phaser.Sprite;
  tetris3: Phaser.Sprite;
  mouseBody: p2.Body;
  mouseConstraint: Phaser.Physics.P2.RevoluteConstraint;

  preload () {

    this.load.image('tetrisblock1', 'assets/sprites/tetrisblock1.png');
    this.load.image('tetrisblock2', 'assets/sprites/tetrisblock2.png');
    this.load.image('tetrisblock3', 'assets/sprites/tetrisblock3.png');

    this.load.physics('physicsData', 'assets/physics/sprites.json');

  }

  create () {

    //  Enable p2 physics
    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.gravity.y = 1000;

    this.tetris1 = this.add.sprite(300, 100, 'tetrisblock1');
    this.tetris2 = this.add.sprite(375, 200, 'tetrisblock2');
    this.tetris3 = this.add.sprite(450, 300, 'tetrisblock3');

    //  Create collision group for the blocks
    var blockCollisionGroup = this.physics.p2.createCollisionGroup();

    //  This part is vital if you want the objects with their own collision groups to still collide with the world bounds
    //  (which we do) - what this does is adjust the bounds to use its own collision group.
    this.physics.p2.updateBoundsCollisionGroup();

    //  Enable the physics bodies on all the sprites
    this.physics.p2.enable([ this.tetris1, this.tetris2, this.tetris3 ], false);

    this.tetris1.body.clearShapes();
    this.tetris1.body.loadPolygon('physicsData', 'tetrisblock1');
    this.tetris1.body.setCollisionGroup(blockCollisionGroup);
    this.tetris1.body.collides([blockCollisionGroup]);

    this.tetris2.body.clearShapes();
    this.tetris2.body.loadPolygon('physicsData', 'tetrisblock2');
    this.tetris2.body.setCollisionGroup(blockCollisionGroup);
    this.tetris2.body.collides([blockCollisionGroup]);

    this.tetris3.body.clearShapes();
    this.tetris3.body.loadPolygon('physicsData', 'tetrisblock3');
    this.tetris3.body.setCollisionGroup(blockCollisionGroup);
    this.tetris3.body.collides([blockCollisionGroup]);

    // create physics body for mouse which we will use for dragging clicked bodies
    this.mouseBody = new p2.Body();
    this.physics.p2.world.addBody(this.mouseBody);

    // attach pointer events
    this.input.onDown.add(this.click, this);
    this.input.onUp.add(this.release, this);
    this.input.addMoveCallback(this.move, this);

  }

  click (pointer: Phaser.Pointer) {

    var bodies = this.physics.p2.hitTest(pointer.position, [ this.tetris1.body, this.tetris2.body, this.tetris3.body ]);

    // p2 uses different coordinate system, so convert the pointer position to p2's coordinate system
    var physicsPos = [this.physics.p2.pxmi(pointer.position.x), this.physics.p2.pxmi(pointer.position.y)];

    if (bodies.length)
    {
        var clickedBody = bodies[0];

        var localPointInBody = [0, 0];
        // this function takes physicsPos and coverts it to the body's local coordinate system
        // http://localhost:3000/Phaser.Physics.P2.Body.html#toLocalFrame
        // toLocalFrame(out, worldPoint)
        // out{Float32Array|Array}        The vector to store the result in.
        // worldPoint{Float32Array|Array} The input world vector.

        // Transform a world point to local body frame.
        clickedBody.toLocalFrame(localPointInBody, physicsPos);

        // use a revoluteContraint to attach mouseBody to the clicked body
        // createRevoluteConstraint(bodyA, pivotA, bodyB, pivotB, maxForce, worldPivot) → {Phaser.Physics.P2.RevoluteConstraint}
        this.mouseConstraint = this.physics.p2.createRevoluteConstraint(this.mouseBody, [0, 0], clickedBody, [this.physics.p2.mpxi(localPointInBody[0]), this.physics.p2.mpxi(localPointInBody[1]) ]);
    }

  }

  release () {

    // http://localhost:3000/Phaser.Physics.P2.html#removeConstraint
    // removeConstraint(constraint) → {Phaser.Physics.P2.Constraint}
    // Removes a Constraint from the world.
    this.physics.p2.removeConstraint(this.mouseConstraint);

  }

  move (pointer: Phaser.Pointer) {

    this.mouseBody.position[0] = this.physics.p2.pxmi(pointer.position.x);
    this.mouseBody.position[1] = this.physics.p2.pxmi(pointer.position.y);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.P2.Body;
export class CollideCustomBoundsState extends BootState {
  ship: Phaser.Sprite;
  balls: Phaser.Group;
  cursors: Phaser.CursorKeys;
  customBounds: {left: p2.Body, right: p2.Body, top: p2.Body, bottom: p2.Body} = {
    left: null,
    right: null,
    top: null,
    bottom: null
  };

  preload () {

    this.load.spritesheet('ship', 'assets/sprites/humstar.png', 32, 32);
    this.load.image('ball', 'assets/sprites/shinyball.png');

  }

  create () {

    let bounds = new Phaser.Rectangle(100, 100, 400, 400);

    this.physics.startSystem(Phaser.Physics.P2JS);

    // http://localhost:3000/Phaser.Physics.P2.html#restitution
    // restitution :number
    // 碰撞前后两物体接触点的法向相对分离速度与法向相对接近速度之比。
    // 恢复系数（符号为e）的取值为：弹性碰撞时e=1；完全非弹性碰撞时e=0。
    // e = (u_2n - u_1n)/(v_2n-v_1n)

    // Default coefficient of restitution between colliding bodies. This value is used if no matching ContactMaterial is found for a Material pair.
    this.physics.p2.restitution = 0.9;

    this.balls = this.add.physicsGroup(Phaser.Physics.P2JS);

    for (let index = 0; index < 20; index++) {
      let ball = this.balls.create(bounds.randomX, bounds.randomY, 'ball') as Phaser.Sprite;
      (ball.body as Body).setCircle(16);
    }

    this.ship = this.add.sprite(bounds.randomX, bounds.randomY, 'ship');
    this.ship.scale.set(2);
    this.ship.smoothed = false;
    this.ship.animations.add('fly', [0, 1, 2, 3, 4, 5], 10, true);
    this.ship.play('fly');

    this.physics.p2.enable(this.ship);
    (this.ship.body as Body).setCircle(28);

    this.createPreviewBounds(bounds);

    let graphics = this.add.graphics(bounds.x, bounds.y);
    graphics.lineStyle(4, 0xffd900, 1);
    graphics.drawRect(0, 0, bounds.width, bounds.height);

    this.cursors = this.input.keyboard.createCursorKeys();


  }

  createPreviewBounds(bounds: Phaser.Rectangle) {

    let sim = this.physics.p2;

    // http://schteppe.github.io/p2.js/docs/classes/Body.html
    // Body ( [options] )
    // A rigid body. Has got a center of mass, position, velocity and a number of shapes that are used for collisions.
    this.customBounds.left = new p2.Body(<p2.BodyOptions>{
      mass: 0,
      // http://localhost:3000/Phaser.Physics.P2.html#pxmi
      // pxmi(v) → {number}
      // Convert pixel value to p2 physics scale (meters) and inverses it.
      // By default Phaser uses a scale of 20px per meter.
      // If you need to modify this you can over-ride these functions via the Physics Configuration object.
      position: [sim.pxmi(bounds.x), sim.pxmi(bounds.y)],
      angle: Math.PI/2,
    });
    // http://schteppe.github.io/p2.js/docs/classes/Body.html
    // addShape ( shape  [offset]  [angle] )
    // shape{Shape}
    // offset{number[]}     Local body offset of the shape.
    // angle{number}        Local body angle.
    // Add a shape to the body. You can pass a local transform when adding a shape, so that the shape gets an offset and angle relative to the body center of mass. Will automatically update the mass properties and bounding radius.
    this.customBounds.left.addShape(new p2.Plane(undefined));

    this.customBounds.right = new p2.Body(<p2.BodyOptions>{
      mass: 0,
      position: [sim.pxmi(bounds.x + bounds.width), sim.pxmi(bounds.y)],
      // 左右面都朝向盒子里面，所有这里为-Math.PI/2
      angle: -Math.PI/2
    });
    this.customBounds.right.addShape(new p2.Plane(undefined));


    this.customBounds.top = new p2.Body(<p2.BodyOptions>{
      mass: 0,
      position: [sim.pxmi(bounds.x), sim.pxmi(bounds.y)],
      angle: -Math.PI,
    });
    this.customBounds.top.addShape(new p2.Plane(undefined));


    this.customBounds.bottom = new p2.Body(<p2.BodyOptions>{
      mass: 0,
      position: [sim.pxmi(bounds.x), sim.pxmi(bounds.y + bounds.height)],
      angle: 0,
    });
    this.customBounds.bottom.addShape(new p2.Plane(undefined));

    // http://localhost:3000/Phaser.Physics.P2.html#world
    // <internal> world :p2.World
    // The p2 World in which the simulation is run.
    sim.world.addBody(this.customBounds.left);
    sim.world.addBody(this.customBounds.right)
    sim.world.addBody(this.customBounds.top);
    sim.world.addBody(this.customBounds.bottom);

    //  If you want to use your own collision group then set it here and un-comment the lines below
    // http://localhost:3000/Phaser.Physics.P2.html#boundsCollisionGroup
    // boundsCollisionGroup :Phaser.Physics.P2.CollisionGroup
    // A default collision group.
    // http://localhost:3000/Phaser.Physics.P2.CollisionGroup.html#mask
    // mask :number
    // The CollisionGroup bitmask.
    let mask = sim.boundsCollisionGroup.mask;
    // this.customBounds.left.shapes[0].collisionGroup = mask;
    // this.customBounds.right.shapes[0].collisionGroup = mask;
    // this.customBounds.top.shapes[0].collisionGroup = mask;
    // this.customBounds.bottom.shapes[0].collisionGroup = mask;

  }

  update () {

    this.ship.body.setZeroVelocity();

    if (this.cursors.left.isDown)
    {
        this.ship.body.moveLeft(200);
    }
    else if (this.cursors.right.isDown)
    {
        this.ship.body.moveRight(200);
    }

    if (this.cursors.up.isDown)
    {
        this.ship.body.moveUp(200);
    }
    else if (this.cursors.down.isDown)
    {
        this.ship.body.moveDown(200);
    }

  }

}

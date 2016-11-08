# accelerate-to-object
  - p2.enable>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#enable
    // enable(object, debug, children)
    // debug{boolean=false}     Create a debug object to go with this body?
    // children{boolean=true}   Should a body be created on all children of this object? If true it will recurse down the display list as far as it can go.

    // This will create a P2 Physics body on the given game object or array of game objects.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    // Note: When the game object is enabled for P2 physics it has its anchor x/y set to 0.5 so it becomes centered.
    this.physics.p2.enable(bullet, false);

    ```
  - body.rotateLeft>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#rotateLeft
    // rotateLeft(speed)
    // This will rotate the Body by the given speed to the left (counter-clockwise).

    ```
  - body.rotateRight>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#rotateRight
    // rotateRight(speed)
    // This will rotate the Body by the given speed to the left (clockwise).
    this.ship.body.rotateRight(100);

    ```
  - body.setZeroRotation>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#setZeroRotation
    // If this Body is dynamic then this will zero its angular velocity.
    this.ship.body.setZeroRotation();

    ```
  - body.thrust>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#thrust
    // thrust(speed)
    // Applies a force to the Body that causes it to 'thrust' forwards, based on its current angle and the given speed.
    // The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
    this.ship.body.thrust(400);

    ```
  - body.reverse>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#reverse
    // reverse(speed)

    // Applies a force to the Body that causes it to 'thrust' backwards (in reverse), based on its current angle and the given speed.
    // The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
    this.ship.body.reverse(400);

    ```
  - body.rotation>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#rotation
    // rotation :number
    // The angle of the Body in radians.
    // If you wish to work in degrees instead of radians use the Body.angle property instead. Working in radians is faster as it doesn't have to convert values. The angle of this Body in radians.
    obj1.body.rotation = angle + this.math.degToRad(90);

    ```
  - body.angle>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#angle
    // angle :number
    // The angle of the Body in degrees from its original orientation. Values from 0 to 180 represent clockwise rotation; values from 0 to -180 represent counterclockwise rotation.
    // Values outside this range are added to or subtracted from 360 to obtain a value within the range. For example, the statement Body.angle = 450 is the same as Body.angle = 90.
    // If you wish to work in radians instead of degrees use the property Body.rotation instead. Working in radians is faster as it doesn't have to convert values. The angle of this Body in degrees.

    ```
  - body.force>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#force
    // force :Phaser.Physics.P2.InversePointProxy
    // The force applied to the body.
    obj1.body.force.x = Math.cos(angle) * speed;

    ```
# basic-movement
  - body.setZeroDamping>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#setZeroDamping
    // setZeroDamping()
    // Sets the Body damping and angularDamping to zero.

    ```
  - body.damping>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#damping
    // damping :number
    // Damping is specified as a value between 0 and 1, which is the proportion of velocity lost per second. The linear damping acting on the body in the velocity direction.

    ```
  - body.angularDamping>
    ```js

    // http://localhost:3000/Phaser.Physics.P2.Body.html#angularDamping
    // angularDamping :number
    // Damping is specified as a value between 0 and 1, which is the proportion of velocity lost per second. The angular damping acting acting on the body.

    ```
  - body.fixedRotation>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#fixedRotation
	  this.sprite.body.fixedRotation = true;

    ```
  - body.setZeroVelocity>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#setZeroVelocity
    // setZeroVelocity()
    // If this Body is dynamic then this will zero its velocity on both axis.

    ```
  - body.moveLeft>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#moveLeft
    // moveLeft(speed)
    // If this Body is dynamic then this will move it to the left by setting its x velocity to the given speed.
    // The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
    this.sprite.body.moveLeft(400);

    ```
  - body.moveRight>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#moveRight

    ```
  - body.moveUp>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#moveUp

    ```
  - body.moveDown>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#moveDown

    ```
# body-click
  - load.physics>
    ```js
    // http://localhost:3000/Phaser.Loader.html#physics
    // Adds a physics data file to the current load queue.
    // The data must be in Lime + Corona JSON format. Physics Editor by code'n'web exports in this format natively.

    // You can choose to either load the data externally, by providing a URL to a json file.
    // Or you can pass in a JSON object or String via the data parameter.
    // If you pass a String the data is automatically run through JSON.parse and then immediately added to the Phaser.Cache.

    // If a URL is provided the file is not loaded immediately after calling this method, but is added to the load queue.

    // The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.

    // Retrieve the file via Cache.getJSON(key). JSON files are automatically parsed upon load.
    // If you need to control when the JSON is parsed then use Loader.text instead and parse the text file as needed.

    // The URL can be relative or absolute. If the URL is relative the Loader.baseURL and Loader.path values will be prepended to it.

    // If the URL isn't specified and no data is given then the Loader will take the key and create a filename from that.
    // For example if the key is "alien" and no URL or data is given then the Loader will set the URL to be "alien.json".
    // It will always use .json as the extension.
    this.load.physics('physicsData', 'assets/physics/sprites.json');

    ```
  - body.clearShapes>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#clearShapes
    // clearShapes()
    // Removes all Shapes from this Body.

    ```
  - body.loadPolygon>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#loadPolygon
    // loadPolygon(key, object) → {boolean}
    // key{string}    The key of the Physics Data file as stored in Game.Cache. Alternatively set to null and pass the data as the 2nd argument.
    // object{string|object}    The key of the object within the Physics data file that you wish to load the shape data from, or if key is null pass the actual physics data object itself as this parameter.

    // Reads the shape data from a physics data file stored in the Game.Cache and adds it as a polygon to this Body.
    // As well as reading the data from the Cache you can also pass null as the first argument and a physics data object as the second.
    // When doing this you must ensure the structure of the object is correct in advance.
    // For more details see the format of the Lime / Corona Physics Editor export.
    this.contra.body.loadPolygon('physicsData', 'contra2');

    ```
  - body.setCircle>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#setCircle
    // setCircle(radius, offsetX, offsetY, rotation)
    // Clears any previously set shapes. Then creates a new Circle shape and adds it to this Body.
    // If this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates.
    this.wizball.body.setCircle(45);

    ```
  - p2.hitTest>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#hitTest
    // hitTest(worldPoint, bodies, precision, filterStatic) → {Array}
    // precision{number=5}          Used for matching against particles and lines. Adds some margin to these infinitesimal objects.
    // filterStatic{number=false}   If true all Static objects will be removed from the results array.

    // Test if a world point overlaps bodies. You will get an array of actual P2 bodies back.
    // You can find out which Sprite a Body belongs to (if any) by checking the Body.parent.sprite property.
    // Body.parent is a Phaser.Physics.P2.Body property.
    let bodies = this.physics.p2.hitTest(pointer.position, [this.contra, this.bunny, this.block, this.wizball]);

    ```
  - body.parent.sprite
# body-debug
# chain
  - body.setRectangle>
    ```js
     // http://localhost:3000/Phaser.Physics.P2.Body.html#setRectangle
      // setRectangle(width, height, offsetX, offsetY, rotation) → {p2.Rectangle}
      // Clears any previously set shapes. The creates a new Rectangle shape at the given size and offset, and adds it to this Body.
      // If you wish to create a Rectangle to match the size of a Sprite or Image see Body.setRectangleFromSprite.
      // If this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates.
      newRect.body.setRectangle(width, height);

    ```
  - body.static>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#static
    // static :boolean
    // Returns true if the Body is static. Setting Body.static to 'false' will make it dynamic.
    (newRect.body as Body).static = true;

    ```
  - body.velocity>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#velocity
    // velocity :Phaser.Physics.P2.InversePointProxy
    // The velocity of the body. Set velocity.x to a negative value to move to the left, position to the right. velocity.y negative values move up, positive move down.
    (newRect.body as Body).velocity.x = 400;

    ```
  - body.mass>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#mass
    // mass :number
    // The mass of the body.
    (newRect.body as Body).mass =  length / index;

    ```
  - p2.createRevoluteConstraint>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#createRevoluteConstraint
    // createRevoluteConstraint(bodyA, pivotA, bodyB, pivotB, maxForce, worldPivot) → {Phaser.Physics.P2.RevoluteConstraint}
    // pivotA{Array}        The point relative to the center of mass of bodyA which bodyA is constrained to. The value is an array with 2 elements matching x and y, i.e: [32, 32].
    // maxForce{number=0}   The maximum force that should be applied to constrain the bodies.
    // worldPivot{Float32Array=null}  A pivot point given in world coordinates. If specified, localPivotA and localPivotB are automatically computed from this value.
    // Connects two bodies at given offset points, letting them rotate relative to each other around this point.
    // The pivot points are given in world (pixel) coordinates.
    this.physics.p2.createRevoluteConstraint(newRect, [0, -10], lastRect, [0, 10], maxForce);

    ```
  - createRope>
    ```js
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

        (newRect.body as Body).setRectangle(width, height);

        if (index === 0) {
          (newRect.body as Body).static = true;
        }
        else {
          (newRect.body as Body).velocity.x = 400;
          (newRect.body as Body).mass =  length / index;
        }

        if (lastRect) {
          this.physics.p2.createRevoluteConstraint(newRect, [0, -10], lastRect, [0, 10], maxForce);
        }

        lastRect = newRect;
      }
    }

    ```
# collide-custom-bounds
  - p2.restitution>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#restitution
    // restitution :number
    // 碰撞前后两物体接触点的法向相对分离速度与法向相对接近速度之比。
    // 恢复系数（符号为e）的取值为：弹性碰撞时e=1；完全非弹性碰撞时e=0。
    // e = (u_2n - u_1n)/(v_2n-v_1n)

    // Default coefficient of restitution between colliding bodies. This value is used if no matching ContactMaterial is found for a Material pair.
    this.physics.p2.restitution = 0.9;

    ```
  - p2.pxmi>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#pxmi
    // pxmi(v) → {number}
    // Convert pixel value to p2 physics scale (meters) and inverses it.
    // By default Phaser uses a scale of 20px per meter.
    // If you need to modify this you can over-ride these functions via the Physics Configuration object.

    ```
  - p2.world.addBody>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#world
    // <internal> world :p2.World
    // The p2 World in which the simulation is run.
    sim.world.addBody(this.customBounds.left);

    ```
  - p2.Body (p2js库里的p2)>
    ```js
    // http://schteppe.github.io/p2.js/docs/classes/Body.html
    // Body ( [options] )
    // A rigid body. Has got a center of mass, position, velocity and a number of shapes that are used for collisions.
    this.customBounds.left = new p2.Body(<p2.BodyOptions>{
      mass: 0,
      position: [sim.pxmi(bounds.x), sim.pxmi(bounds.y)],
      // 面朝向左边
      angle: Math.PI/2,
    });

    ```
  - body.addShape(p2js库里的p2.Body)>
    ```js
    // http://schteppe.github.io/p2.js/docs/classes/Body.html
    // addShape ( shape  [offset]  [angle] )
    // shape{Shape}
    // offset{number[]}     Local body offset of the shape.
    // angle{number}        Local body angle.
    // Add a shape to the body. You can pass a local transform when adding a shape, so that the shape gets an offset and angle relative to the body center of mass. Will automatically update the mass properties and bounding radius.
    this.customBounds.left.addShape(new p2.Plane(undefined));

    ```
  - customBounds>
    ```js
    createPreviewBounds(bounds: Phaser.Rectangle) {

      let sim = this.physics.p2;
      this.customBounds.left = new p2.Body(<p2.BodyOptions>{
        mass: 0,
        position: [sim.pxmi(bounds.x), sim.pxmi(bounds.y)],
        angle: Math.PI/2,
      });
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

      sim.world.addBody(this.customBounds.left);
      sim.world.addBody(this.customBounds.right)
      sim.world.addBody(this.customBounds.top);
      sim.world.addBody(this.customBounds.bottom);

      //  If you want to use your own collision group then set it here and un-comment the lines below
      let mask = sim.boundsCollisionGroup.mask;
      // this.customBounds.left.shapes[0].collisionGroup = mask;
      // this.customBounds.right.shapes[0].collisionGroup = mask;
      // this.customBounds.top.shapes[0].collisionGroup = mask;
      // this.customBounds.bottom.shapes[0].collisionGroup = mask;

    }

    ```
# collide-world-bounds
  - p2.restitution
  - body.collideWorldBounds>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#collideWorldBounds
    // collideWorldBounds :boolean
    // A Body can be set to collide against the World bounds automatically if this is set to true. Otherwise it will leave the World.
    // Note that this only applies if your World has bounds! The response to the collision should be managed via CollisionMaterials.
    // Also note that when you set this it will only effect Body shapes that already exist. If you then add further shapes to your Body
    // after setting this it will not proactively set them to collide with the bounds. Should the Body collide with the World bounds?
    this.ship.body.collideWorldBounds = true;

    ```
# collision-groups
  - p2.setImpactEvents>
    ```js
    //  Turn on impact events for the world, without this we get no collision callbacks
    // http://localhost:3000/Phaser.Physics.P2.html#setImpactEvents
    // setImpactEvents(state)
    // Impact event handling is disabled by default. Enable it before any impact events will be dispatched.
    // In a busy world hundreds of impact events can be generated every step, so only enable this if you cannot do what you need via beginContact or collision masks.
    this.physics.p2.setImpactEvents(true);

    ```
  - p2.createCollisionGroup>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#createCollisionGroup
    // createCollisionGroup(object)
    // object{Group|Sprite}   An optional Sprite or Group to apply the Collision Group to. If a Group is given it will be applied to all top-level children.
    // Creates a new Collision Group and optionally applies it to the given object.
    // Collision Groups are handled using bitmasks, therefore you have a fixed limit you can create before you need to re-use older groups.
    let playerCollisionGroup = this.physics.p2.createCollisionGroup();

    ```
  - p2.boundsCollisionGroup>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#boundsCollisionGroup
    // boundsCollisionGroup :Phaser.Physics.P2.CollisionGroup
    // A default collision group.
    console.log(this.physics.p2.boundsCollisionGroup.mask);

    ```
  - collisionGroup.mask>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.CollisionGroup.html#mask
    // mask :number
    // The CollisionGroup bitmask.
    console.log(playerCollisionGroup.mask);

    ```
  - p2.updateBoundsCollisionGroup>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#updateBoundsCollisionGroup
    // updateBoundsCollisionGroup(setCollisionGroup)
    // By default the World will be set to collide everything with everything. The bounds of the world is a Body with 4 shapes, one for each face.
    // If you start to use your own collision groups then your objects will no longer collide with the bounds.
    // To fix this you need to adjust the bounds to use its own collision group first BEFORE changing your Sprites collision group.
    this.physics.p2.updateBoundsCollisionGroup();

    ```
  - body.setCollisionGroup>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#setCollisionGroup
    // setCollisionGroup(group, shape)
    // shape{p2.Shape}  An optional Shape. If not provided the collision group will be added to all Shapes in this Body.

    // Sets the given CollisionGroup to be the collision group for all shapes in this Body, unless a shape is specified.
    // This also resets the collisionMask.
    (panda.body as Body).setCollisionGroup(pandaCollisionGroup);

    ```
  - body.collides>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#collides
    // collides(group, callback, callbackContext, shape)

    // Adds the given CollisionGroup, or array of CollisionGroups, to the list of groups that this body will collide with and updates the collision masks.
    (panda.body as Body).collides([pandaCollisionGroup, playerCollisionGroup]);

    ```

# contact-events
  - body.onBeginContact>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#onBeginContact
    // onBeginContact :Phaser.Signal
    // Dispatched when a first contact is created between shapes in two bodies.
    // This event is fired during the step, so collision has already taken place.

    // The event will be sent 5 arguments in this order:
    // The Phaser.Physics.P2.Body it is in contact with. This might be null if the Body was created directly in the p2 world.
    // The p2.Body this Body is in contact with.
    // The Shape from this body that caused the contact.
    // The Shape from the contact body.
    // The Contact Equation data array.
    this.block.body.onBeginContact.add(this.blockHit, this);

    blockHit (body: Body, bodyB: Body, shape: p2.Shape, shapeb: p2.Shape, equation:p2.Equation) {}

    ```
# contact-material
  - p2.gravity>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#gravity
    // gravity :Phaser.Physics.P2.InversePointProxy
    // The gravity applied to all bodies each step.
    this.physics.p2.gravity.y = 100;

    ```
  - p2.createMaterial
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#createMaterial
    // createMaterial(name, body) → {Phaser.Physics.P2.Material}
    // name{string?}     Each Material has a unique ID but string names are handy for debugging.
    // body{Body?}       If given it will assign the newly created Material to the Body shapes.

    // Creates a Material. Materials are applied to Shapes owned by a Body and can be set with Body.setMaterial().
    // Materials are a way to control what happens when Shapes collide. Combine unique Materials together to create Contact Materials.
    // Contact Materials have properties such as friction and restitution that allow for fine-grained collision control between different Materials.
    let spriteMaterial = this.physics.p2.createMaterial('spriteMaterial', this.sprite.body);

    ```
  - p2.setWorldMaterial>
    ```js
    this.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

    ```
  - p2.createContactMaterial>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#createContactMaterial
    // createContactMaterial(materialA, materialB, options) → {Phaser.Physics.P2.ContactMaterial}
    // Creates a Contact Material from the two given Materials. You can then edit the properties of the Contact Material directly.
    let contactMaterial = this.physics.p2.createContactMaterial(spriteMaterial, worldMaterial);

    // 摩擦力
    // Friction to use in the contact of these two materials.
    contactMaterial.friction = 0.3;
    // 恢复系数
    // Restitution (i.e. how bouncy it is!) to use in the contact of these two materials.
    contactMaterial.restitution = 1.0;
    // 刚度: 指材料或结构在受力时抵抗弹性变形的能力。
    // Stiffness of the resulting ContactEquation that this ContactMaterial generate.
    contactMaterial.stiffness = 1e7;
    // Relaxation of the resulting ContactEquation that this ContactMaterial generate.
    contactMaterial.relaxation = 3;
    //  Stiffness of the resulting FrictionEquation that this ContactMaterial generate.
    (contactMaterial as any).frictionStiffness = 1e7;
    // Relaxation of the resulting FrictionEquation that this ContactMaterial generate.
    contactMaterial.frictionRelaxation = 3;
    // Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.
    contactMaterial.surfaceVelocity = 0;

    ```
# distance-constraint
  - p2.createDistanceConstraint
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#createDistanceConstraint
    // createDistanceConstraint(bodyA, bodyB, distance, localAnchorA, localAnchorB, maxForce) → {Phaser.Physics.P2.DistanceConstraint}
    // Creates a constraint that tries to keep the distance between two bodies constant.
    let constraint = this.physics.p2.createDistanceConstraint(this.sprite1, this.sprite2, 150);

    ```
# gear-constraint
  - p2.createGearConstraint>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#createGearConstraint
    // createGearConstraint(bodyA, bodyB, angle, ratio) → {Phaser.Physics.P2.GearConstraint}
    // angle{number=0}    The relative angle
    // ratio{number=1}    The gear ratio.
    // Creates a constraint that tries to keep the distance between two bodies constant.
    let constraint1 = this.physics.p2.createGearConstraint(this.sprite, sonic1, 0, 1);

    ```
# gravity
# gravity-scale
  - body.data>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#data
    // <internal> data :p2.Body
    // The p2 Body data.
    // This member is internal (protected) and may be modified or removed in the future.
    this.sprite1.body.data.gravityScale = 1;

    ```
# impact-events
  - p2.setImpactEvents
  - p2.createBodyCallback>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#createBodyCallback
    // createBodyCallback(object, callback, callbackContext)

    // Sets a callback to be fired any time a shape in this Body impacts with a shape in the given Body. The impact test is performed against body.id values.
    // The callback will be sent 4 parameters: This body, the body that impacted, the Shape in this body and the shape in the impacting body.

    // Note that the impact event happens after collision resolution, so it cannot be used to prevent a collision from happening.
    // It also happens mid-step. So do not destroy a Body during this callback, instead set safeDestroy to true so it will be killed on the next preUpdate.

    ```
  - sprite.pendingDestroy = true;
  - p2.createBodyCallback v.s. body.collides
# kill-and-revive
# kinematic-body
  - body.kinematic>
    ```js
    //  Make kinematic - Kinematic means that the body will not be effected by
    //  physics such as gravity and collisions, but can still move and
    //  will fire collision events
    // http://localhost:3000/Phaser.Physics.P2.Body.html#kinematic
    // kinematic :boolean
    // Returns true if the Body is kinematic. Setting Body.kinematic to 'false' will make it static.
    this.kinematic1.body.kinematic = true;

    ```
  - p2.mpxi>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#mpxi
    // mpxi(v) → {number}
    // Convert p2 physics value (meters) to pixel scale and inverses it.
    // By default Phaser uses a scale of 20px per meter.
    // If you need to modify this you can over-ride these functions via the Physics Configuration object.
    this.kinematic1.body.velocity.x = -this.physics.p2.mpxi(this.kinematic1.body.velocity.x);

    ```
  - p2.pxmi v.s. p2.mpxi
# load-polygon-1
# load-polygon-2
# load-polygon-3
  - body.addPolygon>
    ```js
   // http://localhost:3000/Phaser.Physics.P2.Body.html#addPolygon
    // addPolygon(options, points) → {boolean}
    // Reads a polygon shape path, and assembles convex shapes from that and puts them at proper offset points. The shape must be simple and without holes.
    // This function expects the x.y values to be given in pixels. If you want to provide them at p2 world scales then call Body.data.fromPolygon directly.
    this.contra.body.addPolygon( {} , 10, 191  ,  26, 158  ,  25, 186  ,  13, 204  );
    // this.contra.body.addPolygon( {} , [   10, 191  ,  26, 158  ,  25, 186  ,  13, 204  ]);
    // this.contra.body.addPolygon( {} , [   [10, 191]  ,  [26, 158]  ,  [25, 186]  ,  [13, 204]  ]);

    ```
# lock-constraint
  - p2.createLockConstraint>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#createLockConstraint
    // createLockConstraint(bodyA, bodyB, offset, angle, maxForce) → {Phaser.Physics.P2.LockConstraint}
    // Locks the relative position between two bodies.
    let constraint = this.physics.p2.createLockConstraint(this.sprite, vu1, [0, 80], 0);

    ```
# mouse-spring
  - p2.Shape.sensor>
    ```js
    // http://schteppe.github.io/p2.js/docs/classes/Shape.html
    // sensor Boolean
    // Set to true if you want this shape to be a sensor. A sensor does not generate contacts, but it still reports contact events. This is good if you want to know if a shape is overlapping another shape, without them generating contacts.
    this.mouseBody.body.data.shapes[0].sensor = true;

    ```
  - p2.createSpring>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#createSpring
    // createSpring(bodyA, bodyB, restLength, stiffness, damping, worldA, worldB, localA, localB) → {Phaser.Physics.P2.Spring}
    // restLength{number=1}   Rest length of the spring. A number > 0.
    // worldA{[number,number]}  Where to hook the spring to body A in world coordinates. This value is an array by 2 elements, x and y, i.e: [32, 32].
    // localA{[number,number]}  Where to hook the spring to body A in local body coordinates. This value is an array by 2 elements, x and y, i.e: [32, 32].
    // Creates a linear spring, connecting two bodies. A spring can have a resting length, a stiffness and damping.
    this.mouseSpring = this.physics.p2.createSpring(this.mouseBody, bodies[0], 0, 30, 1);

    ```
  - p2.removeSpring>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#removeSpring
    // removeSpring(spring) → {Phaser.Physics.P2.Spring}
    // Removes a Spring from the world.
    this.physics.p2.removeSpring(this.mouseSpring);

    ```
# springs
# remove-spring
# movement-constraint
  - p2.createLockConstraint(maxForce:80)
# physics-group
# pick-up-object
# platformer-material
# postbroadphase-callback
# prismatic-constraint
  - p2.createPrismaticConstraint>
    ```js
    // See http://www.iforce2d.net/b2dtut/joints-prismatic
    // The prismatic joint is probably more commonly known as a slider joint.
    // The two joined bodies have their rotation held fixed relative to each other, and they can only move along a specified axis.
    // Prismatic joints can be given limits so that the bodies can only move along the axis within a specific range.
    // They can also be given a motor so that the bodies will try to move at a given speed, with a given force.
    // Common uses for prismatic joints include: elevators, moving platforms, sliding doors, pistons
    // localAxis1: the axis (line) of movement (relative to bodyA)
    // the axis itself is not related to any particular point in the body, it only specifies a direction for the sliding movement.
    // since this only specifies a direction for sliding, the negative of this vector is an equivalent direction
    // localAnchorA: a point in body A to keep on the axis line
    // localAnchorB: a point in body B to keep on the axis line

    // http://localhost:3000/Phaser.Physics.P2.html#createPrismaticConstraint
    // createPrismaticConstraint(bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce) → {Phaser.Physics.P2.PrismaticConstraint}
    // lockRotation{boolean=true}     If set to false, bodyB will be free to rotate around its anchor point.
    // anchorA{[number,number]}       Body A's anchor point, defined in its own local frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
    // axis{number,number}            An axis, defined in body A frame, that body B's anchor point may slide along. The value is an array with 2 elements matching x and y, i.e: [32, 32].

    // Constraint that only allows bodies to move along a line, relative to each other.
    let constraint = this.physics.p2.createPrismaticConstraint(this.sprite, this.vu1, false, [150, 0], [-15, 0], new Float32Array([0, 1]));

    ```
# revolute-constraint
  - p2.clearCollision>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.Body.html#clearCollision
    // clearCollision(clearGroup, clearMask, shape)
    // clearGroup{boolean=true}   Clear the collisionGroup value from the shape/s?
    // clearMask{boolean=true}    Clear the collisionMask value from the shape/s?
    // shape{p2.Shape?}           If not provided the collision data will be cleared from all Shapes in this Body.

    // Clears the collision data from the shapes in this Body. Optionally clears Group and/or Mask.
    (this.sprite.body as Body).clearCollision(true, true);

    ```
  - p2.createRevoluteConstraint>
    ```js
    // http://localhost:3000/Phaser.Physics.P2.html#createRevoluteConstraint
    // createRevoluteConstraint(bodyA, pivotA, bodyB, pivotB, maxForce, worldPivot) → {Phaser.Physics.P2.RevoluteConstraint}
    // pivotA{[number,number]}    The point relative to the center of mass of bodyA which bodyA is constrained to. The value is an array with 2 elements matching x and y, i.e: [32, 32].
    // maxForce{number=0}         The maximum force that should be applied to constrain the bodies.
    // worldPivot{Float32Array=null}  A pivot point given in world coordinates. If specified, localPivotA and localPivotB are automatically computed from this value.

    // Connects two bodies at given offset points, letting them rotate relative to each other around this point.
    // The pivot points are given in world (pixel) coordinates.
    let constraint = this.physics.p2.createRevoluteConstraint(this.sprite, [50, 100], vu1, [0, 0]);

    ```
# state-reset
# static-body
# thrust-left-right
# thrust
# tilemap-gravity
# tilemap
# tilesprite
# world-boundary
# world-move

# arcade
  * arcade:
    * collide
    * overlap
    * motion
  * sprite.body:
    The Physics Body is linked to a single Sprite. All physics operations should be performed against the body rather than the Sprite itself.
    * x(left), y(top)
    * velocity
    * acceleration
    * drag
    * rotation(angle)
    * angularVelocity
    * angularAcceleration
    * angularDrag
    * mass
    * gravity
    * setSize(width, height, offsetX, offsetY)
    * setCircle(radius, offsetX, offsetY)

# body-enable
  - physics.startSystem
    ```js
    // http://localhost:3000/Phaser.Physics.html#startSystem
    // startSystem(system)
    // This will create an instance of the requested physics simulation.

    // 类型:
    // Phaser.Physics.Arcade is running by default, but all others need activating directly.
    // You can start the following physics systems:
    // Phaser.Physics.P2JS - A full-body advanced physics system by Stefan Hedman.
    // Phaser.Physics.NINJA - A port of Metanet Softwares N+ physics system.
    // Phaser.Physics.BOX2D - A commercial Phaser Plugin (see http://phaser.io)
    // Both Ninja Physics and Box2D require their respective plugins to be loaded before you can start them.
    // They are not bundled into the core Phaser library.

    // If the physics world has already been created (i.e. in another state in your game) then calling startSystem will reset the physics world, not re-create it.
    // If you need to start them again from their constructors then set Phaser.Physics.p2 (or whichever system you want to recreate) to null before calling startSystem.
    this.physics.startSystem(Phaser.Physics.ARCADE);

    ```
  - physics.enable
    ```js
    //  Enable Arcade Physics for the sprite
    // http://localhost:3000/Phaser.Physics.html#enable
    // enable(object, system, debug)
    // This will create a default physics body on the given game object or array of objects.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.

    // It can be for any of the physics systems that have been started:
    // Phaser.Physics.Arcade - A light weight AABB based collision system with basic separation.
    // Phaser.Physics.P2JS - A full-body advanced physics system supporting multiple object shapes, polygon loading, contact materials, springs and constraints.
    // Phaser.Physics.NINJA - A port of Metanet Softwares N+ physics system. Advanced AABB and Circle vs. Tile collision.
    // Phaser.Physics.BOX2D - A port of https://code.google.com/p/box2d-html5
    // Phaser.Physics.MATTER - A full-body and light-weight advanced physics system (still in development)
    // Phaser.Physics.CHIPMUNK is still in development.

    // If you require more control over what type of body is created, for example to create a Ninja Physics Circle instead of the default AABB, then see the individual physics systems enable methods instead of using this generic one.
    this.physics.enable([this.sprite, this.sprite2], Phaser.Physics.ARCADE);

    ```
  - arcade.enable
    ```js
    //  Enable Arcade Physics for the sprite
    // http://localhost:3000/Phaser.Physics.html#enable
    // enable(object, system, debug)
    // This will create a default physics body on the given game object or array of objects.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.

    // It can be for any of the physics systems that have been started:
    // Phaser.Physics.Arcade - A light weight AABB based collision system with basic separation.
    // Phaser.Physics.P2JS - A full-body advanced physics system supporting multiple object shapes, polygon loading, contact materials, springs and constraints.
    // Phaser.Physics.NINJA - A port of Metanet Softwares N+ physics system. Advanced AABB and Circle vs. Tile collision.
    // Phaser.Physics.BOX2D - A port of https://code.google.com/p/box2d-html5
    // Phaser.Physics.MATTER - A full-body and light-weight advanced physics system (still in development)
    // Phaser.Physics.CHIPMUNK is still in development.

    // If you require more control over what type of body is created, for example to create a Ninja Physics Circle instead of the default AABB, then see the individual physics systems enable methods instead of using this generic one.
    this.physics.arcade.enable([this.sprite, this.sprite2]);

    ```
  - arcade.gravity
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.html#gravity
    // gravity :Phaser.Point
    // The World gravity setting. Defaults to x: 0, y: 0, or no gravity.
    this.physics.arcade.gravity.y = 200;

    ```
  - arcade.collide
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.html#collide
    // collide(object1, object2, collideCallback, processCallback, callbackContext) → {boolean}
    // 检测碰撞
    // Checks for collision between two game objects. You can perform Sprite vs. Sprite, Sprite vs. Group, Group vs. Group, Sprite vs. Tilemap Layer or Group vs. Tilemap Layer collisions.

    // Both the first and second parameter can be arrays of objects, of differing types.
    // If two arrays are passed, the contents of the first parameter will be tested against all contents of the 2nd parameter.
    // The objects are also automatically separated. If you don't require separation then use ArcadePhysics.overlap instead.

    // An optional processCallback can be provided. If given this function will be called when two sprites are found to be colliding. It is called before any separation takes place, giving you the chance to perform additional checks. If the function returns true then the collision and separation is carried out. If it returns false it is skipped.

    // The collideCallback is an optional function that is only called if two sprites collide. If a processCallback has been set then it needs to return true for collideCallback to be called.

    //NOTE: This function is not recursive, and will not test against children of objects passed (i.e. Groups or Tilemaps within other Groups).
    this.physics.arcade.collide(this.sprite, this.sprite2);

    ```
  - arcade.overlap
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.html#overlap
    // overlap(object1, object2, overlapCallback, processCallback, callbackContext) → {boolean}
    // Checks for overlaps between two game objects. The objects can be Sprites, Groups or Emitters. You can perform Sprite vs. Sprite, Sprite vs. Group and Group vs. Group overlap checks.

    // Unlike collide the objects are NOT automatically separated or have any physics applied, they merely test for overlap results.
    // Both the first and second parameter can be arrays of objects, of differing types.
    // If two arrays are passed, the contents of the first parameter will be tested against all contents of the 2nd parameter.

    // NOTE: This function is not recursive, and will not test against children of objects passed (i.e. Groups within Groups).

    ```
  - body.bounce
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#bounce
    // bounce :Phaser.Point
    // The elasticity of the Body when colliding. bounce.x/y = 1 means full rebound, bounce.x/y = 0.5 means 50% rebound velocity.
    (this.sprite.body as Body).bounce.y = 0.95;

    ```
  - body.collideWorldBounds
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#collideWorldBounds
    // collideWorldBounds :boolean
    // A Body can be set to collide against the World bounds automatically and rebound back into the World if this is set to true. Otherwise it will leave the World. Should the Body collide with the World bounds?
    (this.sprite.body as Body).collideWorldBounds = true;

    ```
  - body.allowGravity
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#allowGravity
    // allowGravity :boolean
    // Allow this Body to be influenced by gravity? Either world or local.
    (this.sprite2.body as Body).allowGravity = false;

    ```
  - body.immovable
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#immovable
    // 不受其他游戏对象的相互作用
    // immovable :boolean
    // An immovable Body will not receive any impacts from other bodies.
    (this.sprite2.body as Body).immovable = true;

    ```
  - body.enable
    ```js
    //	Here we simply disable the body entirely
    //	This stops all motion and collision checks against it
    //	without actually destroying the body object itself.

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#enable
    // enable :boolean
    // 使能/禁用游戏对象的实体
    //  disabled body won't be checked for any form of collision or overlap or have its pre/post updates run.

    ```
# circle-body
  - body.setCircle
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#setCircle
    // setCircle(radius, offsetX, offsetY)
    // Sets this Body as using a circle, of the given radius, for all collision detection instead of a rectangle.

    // The radius is given in pixels and is the distance from the center of the circle to the edge.

    // You can also control the x and y offset, which is the position of the Body relative to the top-left of the Sprite.

    // To change a Body back to being rectangular again call Body.setSize.

    // Note: Circular collision only happens with other Arcade Physics bodies, it does not
    // work against tile maps, where rectangular collision is the only method supported.
    (this.ball1.body as Body).setCircle(45);

    ```
  - body.setSize
    ```js
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

    ```
  - body.mess
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#mass
    // mass :number
    // The mass of the Body. When two bodies collide their mass is used in the calculation to determine the exchange of velocity.
    this.ball2.body.mass = 3;

    ```
  - body.gravity
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#gravity
    // gravity :Phaser.Point
    // A local gravity applied to this Body. If non-zero this over rides any world gravity, unless Body.allowGravity is set to false.
    (this.ball1.body as Body).gravity.y = 100;

    ```
# gravity
  - world gravity(arcade.gravity) v.s. local gravity(body.gravity)
# accelerate-to-pointer
  - arcade.moveToPointer
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.html#moveToPointer
    // moveToPointer(displayObject, speed, pointer, maxTime) → {number}
    // Move the given display object towards the pointer at a steady velocity. If no pointer is given it will use Phaser.Input.activePointer.

    // If you specify a maxTime then it will adjust the speed (over-writing what you set) so it arrives at the destination in that number of seconds.

    // Timings are approximate due to the way browser timers work. Allow for a variance of +- 50ms.

    // Note: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.
    // Note: The display object doesn't stop moving once it reaches the destination coordinates.
    // Returns:
    // The angle (in radians) that the object should be visually set to in order to match its new velocity.
    // 只是给个初速度，到达目的地后不会自动停止;
    // 移动过程中改变对象的位置，不会自动改变速度方向来重新朝向目的地。
    // 速度的方向指向目的地，但是精灵本身没有面向目的地，需要根据返回值的角度自己设置精灵的rotation
    this.sprite.rotation = this.physics.arcade.moveToPointer(this.sprite, 60, this.input.activePointer, 500);

    ```
# move-to-pointer
  - arcade.moveToPointer
  - arcade.distanceToPointer
# distance-to-pointer
  - arcade.distanceToPointer
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.html#distanceToPointer
    // distanceToPointer(displayObject, pointer, world) → {number}
    // Find the distance between a display object (like a Sprite) and a Pointer. If no Pointer is given the Input.activePointer is used.

    // The calculation is made from the display objects x/y coordinate. This may be the top-left if its anchor hasn't been changed.
    // If you need to calculate from the center of a display object instead use the method distanceBetweenCenters()
    // The optional world argument allows you to return the result based on the Game Objects world property,  instead of its x and y values. This is useful of the object has been nested inside an offset Group, or parent Game Object.
    this.game.debug.text(`Distance to pointer: ${this.physics.arcade.distanceToPointer(this.ball).toFixed(1)}`, 32, 32);

    ```
# move-towards-object
  - group.enableBody
    ```js
    // http://localhost:3000/Phaser.Group.html#enableBody
    // enableBody :boolean
    // If true all Sprites created by, or added to this group, will have a physics body enabled on them.
    // If there are children already in the Group at the time you set this property, they are not changed.
    // The default body type is controlled with physicsBodyType.
    this.balls.enableBody = true;

    ```
# angle-between
  - arcade.angleBetween
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.html#angleBetween
    // angleBetween(source, target, world) → {number}
    // Find the angle in radians between two display objects (like Sprites).
    // 以source为原点，求target所在的角度

    // source, target: The Display Object to test from, to

    // world: boolean (false)
    // Calculate the angle using World coordinates (true), or Object coordinates (false, the default)
    // The optional world argument allows you to return the result based on the Game Objects world property, instead of its x and y values. This is useful of the object has been nested inside an offset Group, or parent Game Object.
    this.arrow.rotation = this.physics.arcade.angleBetween(this.arrow, this.target);

    ```
# angle-to-pointer
  - arcade.angleToPointer
    ```js
    //  This will update the sprite.rotation so that it points to the currently active pointer
    //  On a Desktop that is the mouse, on mobile the most recent finger press.

    // http://localhost:3000/Phaser.Physics.Arcade.html#angleToPointer
    // angleToPointer(displayObject, pointer, world) → {number}
    // Find the angle in radians between a display object (like a Sprite) and a Pointer, taking their x/y and center into account.

    // pointer: he Phaser.Pointer to test to. If none is given then Input.activePointer is used.

    // world: boolean (false)
    // Calculate the angle using World coordinates (true), or Object coordinates (false, the default)
    // The optional world argument allows you to return the result based on the Game Objects world property, instead of its x and y values. This is useful of the object has been nested inside an offset Group, or parent Game Object.
    this.sprite.rotation = this.physics.arcade.angleToPointer(this.sprite);

    ```
# multi-angle-to-pointer
# angular-velocity
  - body.velocity
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#velocity
    // velocity :Phaser.Point
    // The velocity, or rate of change in speed of the Body. Measured in pixels per second.
    (this.sprite.body as Body).velocity.x = 0;

    ```
  - body.angularVelocity
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#angularVelocity
    // angularVelocity :number
    // The angular velocity controls the rotation speed of the Body. It is measured in degrees per second.
    (this.sprite.body as Body).angularVelocity = 0;

    ```
  - arcade.velocityFromAngle
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.html#velocityFromAngle
    // velocityFromAngle(angle, speed, point) → {Phaser.Point}
    // 根据速度大小和角度，计算速度矢量
    // Given the angle (in degrees) and speed calculate the velocity and return it as a Point object, or set it to the given point object.
    // One way to use this is: velocityFromAngle(angle, 200, sprite.velocity) which will set the values directly to the sprites velocity and not create a new Point object.

    // point: 可选，保存计算结果
    // The Point object in which the x and y properties will be set to the calculated velocity.
    this.physics.arcade.velocityFromAngle(this.sprite.angle, 300, this.sprite.body.velocity);

    ```
  - body.angularAcceleration
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#angularAcceleration
    // angularAcceleration :number
    // The angular acceleration is the rate of change of the angular velocity. Measured in degrees per second squared.
    this.game.debug.text(`angularAcceleration: ${this.sprite.body.angularAcceleration}`, 23, 232);

    ```
  - body.angularDrag
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#angularDrag
    // angularDrag :number
    // The drag applied during the rotation of the Body. Measured in degrees per second squared.
    this.game.debug.text(`angularDrag: ${this.sprite.body.angularDrag}`, 32, 264);

    ```
  - body.deltaZ()
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#deltaZ
    // deltaZ() → {number}
    // Returns the delta z value. The difference between Body.rotation now and in the previous step.

    ```
# angular-acceleration
  - body.maxAngular
    ```js
    //  We'll set a lower max angular velocity here to keep it from going totally nuts
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#maxAngular
    // maxAngular :number
    // The maximum angular velocity in degrees per second that the Body can reach.
    (this.sprite.body as Body).maxAngular = 500;

    ```
  - body.angularDrag
    ```js
    //  Apply a drag otherwise the sprite will just spin and never slow down
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#angularDrag
    // 角阻力
    // angularDrag :number
    // The drag applied during the rotation of the Body. Measured in degrees per second squared.
    (this.sprite.body as Body).angularDrag = 50;

    ```
# rotate-to-sprite
  - math.rotateToAngle
    ```js
    // http://localhost:3000/Phaser.Math.html#rotateToAngle
    // rotateToAngle(currentAngle, targetAngle, lerp) → {number}
    // Rotates currentAngle towards targetAngle, taking the shortest rotation distance.
    // The lerp argument is the amount to rotate by in this call.

    ```
# shoot-the-pointer
  - group.countDead()
    ```js
    // http://localhost:3000/Phaser.Group.html#countDead
    // countDead() → {integer}
    // Get the number of dead children in this group.
    if (this.time.now > this.nextFire && this.bullets.countDead() > 0) { }

    ```
  - group.countLiving()
    ```js
    // http://localhost:3000/Phaser.Group.html#countLiving
    // countLiving() → {integer}
    // Get the number of living children in this group.
    this.game.debug.text(`Active Bullets: ${this.bullets.countLiving()} / ${this.bullets.total}`, 32, 32);

    ```
# mass-velocity-test
  - body.allowRotation
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#allowRotation
    // allowRotation :boolean (true)
    // Allow this Body to be rotated? (via angularVelocity, etc)
    (this.car.body as Body).allowRotation = true;

    ```
# asteroids-movement
  - body.drag
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#drag
    // drag :Phaser.Point
    // 阻力
    // The drag applied to the motion of the Body.
    this.sprite.body.drag.set(100);

    ```
  - body.maxVelocity
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#maxVelocity
    // maxVelocity :Phaser.Point
    // The maximum velocity in pixels per second sq. that the Body can reach.
    this.sprite.body.maxVelocity.set(200);

    ```
  - arcade.accelerationFromRotation
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.html#accelerationFromRotation
    // accelerationFromRotation(rotation, speed, point) → {Phaser.Point}
    // Given the rotation (in radians) and speed calculate the acceleration and return it as a Point object, or set it to the given point object.

    // One way to use this is: accelerationFromRotation(rotation, 200, sprite.acceleration) which will set the values directly to the sprites acceleration and not create a new Point object.

    // point: 可选，保存计算结果
    // The Point object in which the x and y properties will be set to the calculated acceleration.
    this.physics.arcade.accelerationFromRotation(this.sprite.rotation, 200,

    ```
# sprite-vs-sprite
# group-vs-self
  - add.physicsGroup
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#physicsGroup
    // physicsGroup(physicsBodyType, parent, name, addToStage) → {Phaser.Group}
    // A Group is a container for display objects that allows for fast pooling, recycling and collision checks.

    // A Physics Group is the same as an ordinary Group except that is has enableBody turned on by default, so any Sprites it creates are automatically given a physics body.
    this.sprites = this.add.physicsGroup(Phaser.Physics.ARCADE);

    ```
# sprite-vs-group
# custom-sprite-vs-group
# group-vs-group
  - sprite.events.onOutOfBounds
    ```js
    // http://localhost:3000/Phaser.Events.html#onOutOfBounds
    // onOutOfBounds :Phaser.Signal
    // This signal is dispatched when the Game Object leaves the Phaser.World bounds.
    // This signal is only if Sprite.checkWorldBounds is set to true.
    // It is sent one argument:
    // {any} The Game Object that left the World bounds.
    bullet.events.onOutOfBounds.add(this.resetBullet, this);

    ```
# direct-body-movement
# vertical-collision
# sort-direction, sort-direction-vertical
  - arcade.sortDirection
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.html#sortDirection
    // sortDirection :number
    // Used when colliding a Sprite vs. a Group, or a Group vs. a Group, this defines the direction the sort is based on. Default is Phaser.Physics.Arcade.LEFT_RIGHT.
    this.physics.arcade.sortDirection = Phaser.Physics.Arcade.RIGHT_LEFT;
    // this.physics.arcade.sortDirection = Phaser.Physics.Arcade.BOTTOM_TOP;

    ```
# nested-group
  - 碰撞时，不会自动检测子group里的元素
# one-way-collision
  - body.checkCollision
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#checkCollision
    // checkCollision :object
    // Set the checkCollision properties to control which directions collision is processed for this Body.
    // For example checkCollision.up = false means it won't collide when the collision happened while moving up.
    // If you need to disable a Body entirely, use body.enable = false, this will also disable motion.
    // If you need to disable just collision and/or overlap checks, but retain motion, set checkCollision.none = true. An object containing allowed collision.
    this.sprite.body.checkCollision.up = false;

    ```
# quadtree-collision-infos
  - arcade.skipQuadTree
    ```js
    //  Enable the QuadTree
    // http://localhost:3000/Phaser.Physics.Arcade.html#skipQuadTree
    // skipQuadTree :boolean
    // If true the QuadTree will not be used for any collision. QuadTrees are great if objects are well spread out in your game, otherwise they are a performance hit. If you enable this you can disable on a per body basis via Body.skipQuadTree.
    this.physics.arcade.skipQuadTree = false;

    ```
  - body.skipQuadTree
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#skipQuadTree
    // skipQuadTree :boolean
    // If true and you collide this Sprite against a Group, it will disable the collision check from using a QuadTree.
    // sprite.skipQuadTree

    ```
# bounding-box
  - arcade.collide
# larger-bounding-box
  - body.setSize
# offset-bounding-box
  - body.setSize
# on-collide-event
  - body.onCollide
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#onCollide
    // onCollide :Phaser.Signal
    // A Signal that is dispatched when this Body collides with another Body.

    // You still need to call game.physics.arcade.collide in your update method in order for this signal to be dispatched.

    // Usually you'd pass a callback to the collide method, but this signal provides for a different level of notification.

    // Due to the potentially high volume of signals this could create it is disabled by default.

    // To use this feature set this property to a Phaser.Signal: sprite.body.onCollide = new Phaser.Signal()
    // and it will be called when a collision happens, passing two arguments: the sprites which collided.
    // The first sprite in the argument is always the owner of this Body.

    // If two Bodies with this Signal set collide, both will dispatch the Signal.
    this.face1.body.onCollide = new Phaser.Signal();
    this.face1.body.onCollide.add(this.hitSprite, this);

    ```
  - body.onCollide v.s. arcade.collide(...,collideCallback,...)
# world-bounds-event
  - body.onWorldBounds
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#onWorldBounds
    // onWorldBounds :Phaser.Signal
    // A Signal that is dispatched when this Body collides with the world bounds.

    // Due to the potentially high volume of signals this could create it is disabled by default.
    // To use this feature set this property to a Phaser.Signal: sprite.body.onWorldBounds = new Phaser.Signal()
    // and it will be called when a collision happens, passing five arguments:
    // onWorldBounds(sprite, up, down, left, right)
    // where the Sprite is a reference to the Sprite that owns this Body, and the other arguments are booleans
    // indicating on which side of the world the Body collided.
    face.body.onWorldBounds = new Phaser.Signal();

    ```
# process-callback
  - arcade.collide(..., processCallback, ...)
# gravity-and-drag
  - body.moves
    ```js
    //  You can't have a sprite being moved by physics AND input, so we disable the physics while being dragged
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#moves
    // 不要同时使用物理引擎和手动控制游戏对象的移动：使用Tween等方法手动移动游戏对象时关掉body.moves。
    // moves :boolean
    // If you have a Body that is being moved around the world via a tween or a Group motion, but its local x/y position never actually changes, then you should set Body.moves = false. Otherwise it will most likely fly off the screen.
    // If you want the physics system to move the body around, then set moves to true. Set to true to allow the Physics system to move this Body, otherwise false to move it manually.
    this.sprite.body.moves = false;

    ```
  - sprite.events.onDragStart
    ```js
    // http://localhost:3000/Phaser.Events.html#onDragStart
    // onDragStart :Phaser.Signal

    // This signal is dispatched if the Game Object has been inputEnabled and enableDrag has been set.
    // It is sent when a Phaser.Pointer starts to drag the Game Object, taking into consideration the various
    // drag limitations that may be set.
    // It is sent four arguments:
    // {any} The Game Object that received the event.
    // {Phaser.Pointer} The Phaser.Pointer object that caused the event.
    // {number} The x coordinate that the drag started from.
    // {number} The y coordinate that the drag started from.
    this.sprite.events.onDragStart.add(this.startDrag, this);

    ```
  - sprite.events.onDragStop
    ```js
    // http://localhost:3000/Phaser.Events.html#onDragStop
    // onDragStop :Phaser.Signal

    // This signal is dispatched if the Game Object has been inputEnabled and enableDrag has been set.
    // It is sent when a Phaser.Pointer stops dragging the Game Object.
    // It is sent two arguments:
    // {any} The Game Object that received the event.
    // {Phaser.Pointer} The Phaser.Pointer object that caused the event.
    this.sprite.events.onDragStop.add(this.stopDrag, this);

    ```
# bounce
  - add.tween(Phaser.Easing.Bounce.In)
# bounce-accelerator
  - body.acceleration
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#acceleration
    // acceleration :Phaser.Point

    // The acceleration is the rate of change of the velocity. Measured in pixels per second squared.
    this.flyer.body.acceleration.y = -600;

    ```
# bounce-knock
  - body.bounce
# bounce-with-gravity
  - body.bounce
  - body.gravity
# global-pause
  - body.arcade
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.html#isPaused
    // isPaused :boolean
    // If true the Body.preUpdate method will be skipped, halting all motion for all bodies.
    // Note that other methods such as collide will still work, so be careful not to call them on paused bodies.
    this.physics.arcade.isPaused = !this.physics.arcade.isPaused;

    ```
# move-over-distance
  - body.moveTo
    ```js
    //  Move the Body 300 pixels to the right, over 2000 ms
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#moveTo
    // moveTo(duration, distance, direction) → {boolean}
    // Note: This method is experimental, and may be changed or removed in a future release.

    // This method moves the Body in the given direction, for the duration specified.
    // It works by setting the velocity on the Body, and an internal distance counter.
    // The distance is monitored each frame. When the distance equals the distance
    // specified in this call, the movement is stopped, and the Body.onMoveComplete
    // signal is dispatched.

    // Movement also stops if the Body collides or overlaps with any other Body.

    // stop manually:
    // You can control if the velocity should be reset to zero on collision, by using
    // the property Body.stopVelocityOnCollide.

    // Stop the movement at any time by calling Body.stopMovement.

    // 精确性:
    // Please note that due to browser timings you should allow for a variance in
    // when the distance will actually expire.

    // 不受其他力影响:
    // Note: This method doesn't take into consideration any other forces acting
    // on the Body, such as Gravity, drag or maxVelocity, all of which may impact the
    // movement.
    this.sprite.body.moveTo(2000, 300, Phaser.ANGLE_RIGHT);

    ```
  - body.stopVelocityOnCollide
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#stopVelocityOnCollide
    // stopVelocityOnCollide :boolean
    // Set by the moveTo and moveFrom methods.

    ```
  - body.onMoveComplete
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#onMoveComplete
    // onMoveComplete :Phaser.Signal
    // Listen for the completion of moveTo or moveFrom events.
    this.sprite.body.onMoveComplete.add(this.moveOver, this);

    ```
# platformer-basics
  - body.onFloor
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#onFloor
    // onFloor() → {boolean}
    // Returns true if the bottom of this Body is in contact with either the world bounds or a tile.
    if (this.jumpButton.isDown && this.player.body.onFloor() && this.time.now > this.jumpTimer) { }

    ```
  - time.desiredFps
    ```js
    // http://localhost:3000/Phaser.Time.html#desiredFps
    // desiredFps :integer
    // The desired frame rate of the game.

    // This is used is used to calculate the physic / logic multiplier and how to apply catch-up logic updates. The desired frame rate of the game. Defaults to 60.
    this.time.desiredFps = 30;

    ```
  - time.suggestedFps
    ```js
    // http://localhost:3000/Phaser.Time.html#suggestedFps
    // suggestedFps :number
    // The suggested frame rate for your game, based on an averaged real frame rate.
    // This value is only populated if Time.advancedTiming is enabled.

    // Note: This is not available until after a few frames have passed; until then
    // it's set to the same value as desiredFps.
    this.game.debug.text(this.time.suggestedFps.toString(), 32, 32);

    ```
  - time.physicsElapsed
    ```js
    // http://localhost:3000/Phaser.Time.html#physicsElapsed
    // physicsElapsed :number
    // The physics update delta, in fractional seconds.
    // This should be used as an applicable multiplier by all logic update steps (eg. preUpdate/postUpdate/update)
    // to ensure consistent game timing. Game/logic timing can drift from real-world time if the system
    // is unable to consistently maintain the desired FPS.
    // With fixed-step updates this is normally equivalent to 1.0 / desiredFps.
    this.game.debug.text(this.time.physicsElapsed.toString(), 32, 64);

    ```
# ship-trail
  - bitmapData.dirty
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#dirty
    // If dirty this BitmapData will be re-rendered.
    this.bmd.dirty = true;

    ```
# snake
# multiball
# masked-collision
  - sprite.data
    ```js
    //  And let's link the saw to the platform
    // http://localhost:3000/Phaser.Image.html#data
    // data :Object
    // An empty Object that belongs to this Game Object.
    // This value isn't ever used internally by Phaser, but may be used by your own code, or
    // by Phaser Plugins, to store data that needs to be associated with the Game Object,
    // without polluting the Game Object directly.
    saw1.data.platform = this.platform1;

    ```
  - add.emitter
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#emitter
    // emitter(x, y, maxParticles) → {Phaser.Particles.Arcade.Emitter}
    // Create a new Emitter.
    // A particle emitter can be used for one-time explosions or for
    // continuous effects like rain and fire. All it really does is launch Particle objects out
    // at set intervals, and fixes their positions and velocities accordingly.
    this.emitter = this.add.emitter(0, 0, 64);

    ```
  - emitter.makeParticles
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#makeParticles
    // makeParticles(keys, frames, quantity, collide, collideWorldBounds) → {Phaser.Particles.Arcade.Emitter}
    // This function generates a new set of particles for use by this emitter.
    // The particles are stored internally waiting to be emitted via Emitter.start.
    this.emitter.makeParticles('blood');

    ```
  - emitter.minParticleSpeed
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#minParticleSpeed
    // minParticleSpeed :Phaser.Point
    // The minimum possible velocity of a particle.
    this.emitter.minParticleSpeed.set(-200, -200);

    ```
  - emitter.maxParticleSpeed
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#maxParticleSpeed
    // maxParticleSpeed :Phaser.Point
    // The maximum possible velocity of a particle.
    this.emitter.maxParticleSpeed.set(200, -300);

    ```
  - emitter.bounce
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#bounce
    // bounce :Phaser.Point
    // How much each particle should bounce on each axis. 1 = full bounce, 0 = no bounce.
    this.emitter.bounce.set(0.5);

    ```
  - emitter
    ```js
    // http://localhost:3000/Phaser.Particles.Arcade.Emitter.html#start
    // start(explode, lifespan, frequency, quantity, forceQuantity) → {Phaser.Particles.Arcade.Emitter}
    // Call this function to start emitting particles.
    this.emitter.start(true, 2000, null, 10);

    ```
# launcher
# launcher-follow
# launcher-follow-world
# body-debug
# body-scale
# platformer-tight

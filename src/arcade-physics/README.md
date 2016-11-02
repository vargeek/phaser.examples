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

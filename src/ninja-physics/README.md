# ninja-physics
  - [Setting up Ninja Physics in Phaser](http://www.joshmorony.com/setting-up-ninja-physics-in-phaser/)
  - The Ninja Physics system is not actually included in Phaser by default anymore.
    > Ninja Physics is no longer included in the build files by default. Not enough people were using it, and not enough contributions were coming in to help polish it up, so we’ve saved the space and removed it. It’s still available in the grunt build files if you require it, but we’re deprecating it from the core library at this time. It will make a return in Phaser3 when we move to a modular class system.
  - build
    ```bash
    grunt build ninjaphysics

    # Now if you go to the build/custom folder you should find a JavaScript file called phaser-ninja-physics.js.

    ```
# ninja-aabb-vs-aabb
  - ninja.enableAABB>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.html#enableAABB
    // enableAABB(object, children)
    // children{boolean=true}   Should a body be created on all children of this object? If true it will recurse down the display list as far as it can go.

    // This will create a Ninja Physics AABB body on the given game object. Its dimensions will match the width and height of the object at the point it is created.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    this.physics.ninja.enableAABB([this.sprite1, this.sprite2]);

    ```
  - ninja.collide>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.html#collide
    // collide(object1, object2, collideCallback, processCallback, callbackContext) → {boolean}

    // Checks for collision between two game objects. You can perform Sprite vs. Sprite, Sprite vs. Group, Group vs. Group, Sprite vs. Tilemap Layer or Group vs. Tilemap Layer collisions.
    // The second parameter can be an array of objects, of differing types.
    // The objects are also automatically separated. If you don't require separation then use ArcadePhysics.overlap instead.
    // An optional processCallback can be provided. If given this function will be called when two sprites are found to be colliding. It is called before any separation takes place,
    // giving you the chance to perform additional checks. If the function returns true then the collision and separation is carried out. If it returns false it is skipped.
    // The collideCallback is an optional function that is only called if two sprites collide. If a processCallback has been set then it needs to return true for collideCallback to be called.
    this.physics.ninja.collide(this.sprite1, this.sprite2);

    ```
  - body.moveLeft, moveRight, moveUp, moveDown
  - body.touching>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#touching
    // touching :object
    // This object is populated with boolean values when the Body collides with another.
    // touching.up = true means the collision happened to the top of this Body for example. An object containing touching results.
    this.game.debug.text('left: ' + this.sprite1.body.touching.left, 32, 32);

    ```
# ninja-aabb-vs-tile
  - ninja.enableAABB
  - ninja.enableTile>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.html#enableTile
    // enableTile(object, id, children)
    // id{number=1}   The type of Tile this will use, i.e. Phaser.Physics.Ninja.Tile.SLOPE_45DEGpn, Phaser.Physics.Ninja.Tile.CONVEXpp, etc.

    // This will create a Ninja Physics Tile body on the given game object. There are 34 different types of tile you can create, including 45 degree slopes, convex and concave circles and more.
    // The id parameter controls which Tile type is created, but you can also change it at run-time.
    // Note that for all degree based tile types they need to have an equal width and height. If the given object doesn't have equal width and height it will use the width.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    this.physics.ninja.enableTile(this.tile, this.tile.frame as number);

    ```
# ninja-impact
# ninja-platforms
# ninja-tilemap


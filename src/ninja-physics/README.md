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
  - ninja.collide(collideCallback)
# ninja-platforms
  - ninja.gravity>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.html#gravity
    // gravity :number
    // The World gravity setting.
    this.physics.ninja.gravity = 1;

    ```
  - ninja.setBoundsToWorld>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.html#setBoundsToWorld
    // setBoundsToWorld()
    // Updates the size of this physics world to match the size of the game world.
    this.physics.ninja.setBoundsToWorld();

    ```
  - ninja.enable>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.html#enable
    // enable(object, type, id, radius, children)
    // This will create a Ninja Physics body on the given game object or array of game objects.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    this.physics.ninja.enable(ground);

    ```
  - body.immovable>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#immovable
    // immovable :boolean
    // An immovable Body will not receive any impacts from other bodies. Not fully implemented.
    ground.body.immovable = true;

    ```
  - body.gravityScale>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#gravityScale
    // How much of the world gravity should be applied to this object? 1 = all of it, 0.5 = 50%, etc.
    ground.body.gravityScale = 0;

    ```
  - body.bounce>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#bounce
    // bounce :number
    // The bounciness of this object when it collides. A value between 0 and 1. We recommend setting it to 0.999 to avoid jittering.
    this.player.body.bounce = 0.5;

    ```
  - body.friction>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#friction
    // riction :number
    // The friction applied to this object as it moves.
    this.player.body.friction = 0.5;

    ```
  - body.collideWorldBounds>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#collideWorldBounds
    // A Body can be set to collide against the World bounds automatically and rebound back into the World if this is set to true. Otherwise it will leave the World. Should the Body collide with the World bounds?
    this.player.body.collideWorldBounds = true;

    ```
# ninja-tilemap
  - ninja.convertTilemap>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.html#convertTilemap
    // convertTilemap(map, layer, slopeMap) → {array}
    // slopeMap{object}     The tilemap index to Tile ID map.

    // Goes through all tiles in the given Tilemap and TilemapLayer and converts those set to collide into physics tiles.
    // Only call this after you have specified all of the tiles you wish to collide with calls like Tilemap.setCollisionBetween, etc.
    // Every time you call this method it will destroy any previously created bodies and remove them from the world.
    // Therefore understand it's a very expensive operation and not to be done in a core game update loop.

    // In Ninja the Tiles have an ID from 0 to 33, where 0 is 'empty', 1 is a full tile, 2 is a 45-degree slope, etc. You can find the ID
    // list either at the very bottom of Tile.js, or in a handy visual reference in the resources/Ninja Physics Debug Tiles folder in the repository.
    // The slopeMap parameter is an array that controls how the indexes of the tiles in your tilemap data will map to the Ninja Tile IDs.
    // For example if you had 6 tiles in your tileset: Imagine the first 4 should be converted into fully solid Tiles and the other 2 are 45-degree slopes.
    // Your slopeMap array would look like this: [ 1, 1, 1, 1, 2, 3 ].
    // Where each element of the array is a tile in your tilemap and the resulting Ninja Tile it should create.
    this.tiles = this.physics.ninja.convertTilemap(this.map, this.layer, slopeMap);

    ```
  - ninja.enableCircle>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.html#enableCircle
    // enableCircle(object, radius, children)

    // This will create a Ninja Physics Circle body on the given game object.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    this.physics.ninja.enableCircle(this.sprite1, this.sprite1.width / 2);

    ```
  - body.circle>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.Body.html#circle
    // circle :Phaser.Physics.Ninja.Circle
    // The Circle object this body is using for collision.

    this.sprite1.body.circle.collideCircleVsTile(this.tiles[i].tile);

    ```
  - body.circle.collideCircleVsTile>
    ```js
    // http://localhost:3000/Phaser.Physics.Ninja.Circle.html#collideCircleVsTile
    // collideCircleVsTile(t) → {boolean}
    // Collides this Circle with a Tile.
    this.sprite1.body.circle.collideCircleVsTile(this.tiles[i].tile);

    ```

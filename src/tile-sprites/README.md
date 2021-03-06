# tiling sprite
  - tile sprite
    ```js
    this.tilesprite = this.add.tileSprite(0, 0, 800, 600, AssetID.starfield);

    // The offset position of the image that is being tiled
    // 超出范围会回到范围另一边。
    this.tilesprite.tilePosition.x += 8;
    ```
# sprite sheet tiling sprite
  - tilesprite from sprite sheet
    ```js
    // spritesheet picture file
    this.load.spritesheet(AssetID.mummy, 'xxx/xxx.png', w, h, maxframe);
    this.sprite = this.add.tileSprite(0, 0, 800, 600, AssetID.mummy);

    // spritesheet atlas file
    this.load.atlas(AssetID.seacreatures, 'xxx/xxx.png', 'xxx/xxx.json');
    this.sprite = this.add.tileSprite(0, 0, 800, 600, AssetID.seacreatures, 'octopus0002');
    ```
# tiling atlas trim
# tiling sprite atlas
# tiling sprite atlas 32x32
# animated tiling sprite
  - animated
    ```js
    // in update ()
    this.count += 0.005;

    this.tilesprite.tileScale.x = 2 + Math.sin(this.count);
    this.tilesprite.tileScale.y = 2 + Math.cos(this.count);

    this.tilesprite.tilePosition.x += 1;
    this.tilesprite.tilePosition.y += 1;

    ```
# tile sprite from animated sprite
  - tile sprite from animated sprite
    ```js
    // in preload()
    this.load.spritesheet(cacheKey, 'xxx/xxx.png', w, h, maxframe);

    // in create()
    // spritesheet 一帧宽度为w, tilesprite 把宽度扩展为64倍
    this.water = this.add.tileSprite(0, this.world.height - h, w * 64, h, cacheKey);
    this.water.animations.add('waves0', [0, 1, 2, 3, 2, 1]);
    this.water.animations.add('waves1', [4, 5, 6, 7, 6, 5]);
    this.water.animations.add('waves2', [8, 9, 10, 11, 10, 9]);
    this.water.animations.add('waves3', [12, 13, 14, 15, 14, 13]);
    this.water.animations.add('waves4', [16, 17, 18, 19, 18, 17]);
    this.water.animations.add('waves5', [20, 21, 22, 23, 22, 21]);
    this.water.animations.add('waves6', [24, 25, 26, 27, 26, 25]);
    this.water.animations.add('waves7', [28, 29, 30, 31, 30, 29]);

    ```
# colliding with tiling sprite
  - Physics.startSystem
    ```js
    // This will create an instance of the requested physics simulation.
    // Phaser.Physics.Arcade is running by default, but all others need activating directly.

    // You can start the following physics systems:

    // Phaser.Physics.P2JS - A full-body advanced physics system by Stefan Hedman.
    // Phaser.Physics.NINJA - A port of Metanet Softwares N+ physics system.
    // Phaser.Physics.BOX2D - A commercial Phaser Plugin (see http://phaser.io)

    // Both Ninja Physics and Box2D require their respective plugins to be loaded before you can start them.
    // They are not bundled into the core Phaser library.

    // If the physics world has already been created (i.e. in another state in your game) then
    // calling startSystem will reset the physics world, not re-create it. If you need to start them again from their constructors
    // then set Phaser.Physics.p2 (or whichever system you want to recreate) to null before calling startSystem.
    this.physics.startSystem(Phaser.Physics.ARCADE);

    ```
  - gravity
    ```js
    // The World gravity setting. Defaults to x: 0, y: 0, or no gravity.
    this.physics.arcade.gravity.y = 200;

    ```
  - enable physics
    ```js
    // This will create a default physics body on the given game object or array of objects.
    // A game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.
    // It can be for any of the physics systems that have been started:

    // Phaser.Physics.Arcade - A light weight AABB based collision system with basic separation.
    // Phaser.Physics.P2JS - A full-body advanced physics system supporting multiple object shapes, polygon loading, contact materials, springs and constraints.
    // Phaser.Physics.NINJA - A port of Metanet Softwares N+ physics system. Advanced AABB and Circle vs. Tile collision.
    // Phaser.Physics.BOX2D - A port of https://code.google.com/p/box2d-html5
    // Phaser.Physics.MATTER - A full-body and light-weight advanced physics system (still in development)
    // Phaser.Physics.CHIPMUNK is still in development.

    // If you require more control over what type of body is created, for example to create a Ninja Physics Circle instead of the default AABB, then see the
    // individual physics systems enable methods instead of using this generic one.
    this.physics.enable([this.ball, this.tilesprite], Phaser.Physics.ARCADE);

    ```
  - Body.immovable
    ```js
    // An immovable Body will not receive any impacts from other bodies.
    (this.tilesprite.body as Body).immovable = true;

    ```
  - Body.allowGravity
    ```js
    // Allow this Body to be influenced by gravity? Either world or local.
    // default: true
    (this.tilesprite.body as Body).allowGravity = false;

    ```
  - arcade.collide, check for collisi
    ```js
    // in update()

    // collide(object1, object2, collideCallback, processCallback, callbackContext) → {boolean}
    // Checks for collision between two game objects. You can perform Sprite vs. Sprite, Sprite vs. Group, Group vs. Group, Sprite vs. Tilemap Layer or Group vs. Tilemap Layer collisions.
    // Both the first and second parameter can be arrays of objects, of differing types.
    // If two arrays are passed, the contents of the first parameter will be tested against all contents of the 2nd parameter.
    // The objects are also automatically separated. If you don't require separation then use ArcadePhysics.overlap instead.
    // An optional processCallback can be provided. If given this function will be called when two sprites are found to be colliding. It is called before any separation takes place,
    // giving you the chance to perform additional checks. If the function returns true then the collision and separation is carried out. If it returns false it is skipped.
    // The collideCallback is an optional function that is only called if two sprites collide. If a processCallback has been set then it needs to return true for collideCallback to be called.
    // NOTE: This function is not recursive, and will not test against children of objects passed (i.e. Groups or Tilemaps within other Groups).
    this.physics.arcade.collide(this.ball, this.tilesprite);

    ```

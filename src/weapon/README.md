# asteroids
  - add.weapon>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#weapon
    // weapon(quantity, key, frame, group) → {Phaser.Weapon}
    // Weapons provide the ability to easily create a bullet pool and manager.

    // Weapons fire Phaser.Bullet objects, which are essentially Sprites with a few extra properties.
    // The Bullets are enabled for Arcade Physics. They do not currently work with P2 Physics.

    // The Bullets are created inside of Weapon.bullets, which is a Phaser.Group instance.
    //  Anything you can usually do with a Group, such as move it around the display list, iterate it, etc can be done to the bullets Group too.

    // Bullets can have textures and even animations. You can control the speed at which they are fired,
    // the firing rate, the firing angle, and even set things like gravity for them.
    this.weapon = this.add.weapon(30, 'bullet');

    ```
  - weapon.bulletKillType>
    ```js
    // http://localhost:3000/Phaser.Weapon.html#bulletKillType
    // bulletKillType :integer

    // This controls how the bullets will be killed. The default is Phaser.Weapon.KILL_WORLD_BOUNDS.

    // There are 7 different "kill types" available:

    // Phaser.Weapon.KILL_NEVER
    // The bullets are never destroyed by the Weapon. It's up to you to destroy them via your own code.

    // Phaser.Weapon.KILL_LIFESPAN
    // The bullets are automatically killed when their bulletLifespan amount expires.

    // Phaser.Weapon.KILL_DISTANCE
    // The bullets are automatically killed when they exceed bulletDistance pixels away from their original launch position.

    // Phaser.Weapon.KILL_WEAPON_BOUNDS
    // The bullets are automatically killed when they no longer intersect with the Weapon.bounds rectangle.

    // Phaser.Weapon.KILL_CAMERA_BOUNDS
    // The bullets are automatically killed when they no longer intersect with the Camera.bounds rectangle.

    // Phaser.Weapon.KILL_WORLD_BOUNDS
    // The bullets are automatically killed when they no longer intersect with the World.bounds rectangle.

    // Phaser.Weapon.KILL_STATIC_BOUNDS
    // The bullets are automatically killed when they no longer intersect with the Weapon.bounds rectangle.
    // The difference between static bounds and weapon bounds, is that a static bounds will never be adjusted to match the position of a tracked sprite or pointer.
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

    ```
  - weapon.bulletSpeed>
    ```js
    // http://localhost:3000/Phaser.Weapon.html#bulletSpeed
    // bulletSpeed :number
    // The speed at which the bullets are fired. This value is given in pixels per second, and is used to set the starting velocity of the bullets.
    //
    this.weapon.bulletSpeed = 600;

    ```
  - weapon.fireRate>
    ```js
    // http://localhost:3000/Phaser.Weapon.html#fireRate
    // fireRate :number
    // The rate at which this Weapon can fire. The value is given in milliseconds.
    this.weapon.fireRate = 100;

    ```
  - weapon.trackSprite>
    ```js
    // http://localhost:3000/Phaser.Weapon.html#trackSprite
    // trackSprite(sprite, offsetX, offsetY, trackRotation) → {Phaser.Weapon}
    // trackRotation{boolean=false}   Should the Weapon also track the Sprites rotation?

    // Sets this Weapon to track the given Sprite, or any Object with a public world Point object.
    // When a Weapon tracks a Sprite it will automatically update its fireFrom value to match the Sprites position within the Game World, adjusting the coordinates based on the offset arguments.

    // This allows you to lock a Weapon to a Sprite, so that bullets are always launched from its location.

    // Calling trackSprite will reset Weapon.trackedPointer to null, should it have been set, as you can only track either a Sprite, or a Pointer, at once, but not both.
    this.weapon.trackSprite(this.sprite, 0, 0, true);

    ```
  - weapon.debug>
    ```js
    // http://localhost:3000/Phaser.Weapon.html#debug
    // debug(x, y, debugBodies)
    // debugBodies{boolean=false}   Optionally draw the physics body of every bullet in-flight.
    // Uses Game.Debug to draw some useful information about this Weapon, including the number of bullets
    // both in-flight, and available. And optionally the physics debug bodies of the bullets.

    this.weapon.debug();

    ```
# asteroids-bullet-wrap
  - weapon.bulletLifespan>
    ```js
    // http://localhost:3000/Phaser.Weapon.html#bulletLifespan
    // bulletLifespan :number

    // If you've set bulletKillType to Phaser.Weapon.KILL_LIFESPAN this controls the amount of lifespan the Bullets have set on launch.
    // The value is given in milliseconds.
    // When a Bullet hits its lifespan limit it will be automatically killed.
    this.weapon.bulletLifespan = 2000;

    ```
  - weapon.bulletWorldWrap>
    ```js
    // http://localhost:3000/Phaser.Weapon.html#bulletWorldWrap
    // Should the Bullets wrap around the world bounds? This automatically calls
    // World.wrap on the Bullet each frame. See the docs for that method for details.
    this.weapon.bulletWorldWrap = true;

    ```
# autofire
# bullet-angle-variance
# bullet-frame-cycle
# bullet-speed-variance
# fire-many-from-tracked-sprite
# fire-many-with-variance
# fire-many
# fire-offset-position
# fire-rate
# multiple-bullets
# single-bullet

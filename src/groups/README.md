# create group
  - create group, create sprite
    ```js
      let group = this.add.group();

      // create(x, y, key, frame, exists, index) → {DisplayObject}

      // Creates a new Phaser.Sprite object and adds it to the top of this group.`
      // Use classType to change the type of object created.`
      // The child is automatically added to the top of the group, and is displayed above every previous child.`
      // Or if the optional index is specified, the child is added at the location specified by the index value,
      // this allows you to control child ordering.`

      // If Group.enableBody is set, then a physics body will be created on the object, so long as one does not already exist.`
      // If Group.inputEnableChildren is set, then an Input Handler will be created on the object, so long as one does not already exist.

      group.create(this.world.randomX, this.world.randomY, AssetID.sonic);

    ```
# create sprite in a group
# add a sprite to group
  - add a sprite to group
    ```js
    let ufo = this.add.sprite(200, 240, AssetID.ufo);
    this.friendAndFoe.add(ufo);

    // 相当于
    // this.friendAndFoe.create(200, 240, AssetID.ufo)

    ```
# extending a group
# group transform
  - 子元素的坐标是相对group的。
# group transform rotate
  - 子元素相对group静止时，group旋转时，子元素跟着group旋转。
# group transform tween
  - 子元素相对group直径时，group运动，子元素跟着group运动
# group scale
  - 子元素跟着group一起scale
# group bounds
  - group bounds是包围所有可见子元素的最小矩形。如，子元素相对group静止时，group旋转时，group的bounds可能会发生变化。
# align frames to grid
  - create multiple
    ```js
    // createMultiple(quantity, key, frame, exists) → {array}

    // Creates multiple Phaser.Sprite objects and adds them to the top of this Group.
    // This method is useful if you need to quickly generate a pool of sprites, such as bullets.
    // Use classType to change the type of object created.
    // You can provide an array as the key and / or frame arguments. When you do this
    // it will create quantity Sprites for every key (and frame) in the arrays.
    // By default the Sprites will have their exists property set to false, and they will be positioned at 0x0, relative to the Group.x / y values.

    // If Group.enableBody is set, then a physics body will be created on the objects, so long as one does not already exist.
    // If Group.inputEnableChildren is set, then an Input Handler will be created on the objects, so long as one does not already exist.

    // createMultiple(25, ['ball', 'carrot']) => 50 sprites
    // createMultiple(5, 'bricks', [0, 1, 2, 3]) => 20 sprites
    // createMultiple(20, ['diamonds', 'balls'], [0, 1, 2])  => 120 sprites
    group.createMultiple(5, AssetID.seacreatures, ['blueJellyfish0000', 'crab10000', 'flyingFish0000'], true);

    ```
    - align to grid
    ```js
    // align(width, height, cellWidth, cellHeight, position, offset) → {boolean}

    // This method iterates through all children in the Group (regardless if they are visible or exist)
    // and then changes their position so they are arranged in a Grid formation. Children must have
    // the alignTo method in order to be positioned by this call. All default Phaser Game Objects have
    // this.

    // The grid dimensions are determined by the first four arguments. The width and height arguments
    // relate to the width and height of the grid respectively.

    // Group.align(10, 10, 32, 32) => grid formation: 10 * 10, grid cell: 32 * 32
    // Group.align(-1, 8, 32, 32) => grid formation: n * 8 (n列，每列8个), grid cell: 32 * 32
    // Group.align(10, -1, 32, 32) => grid formation: 10 * n (n行，每行10个), grid cell: 32 * 32
    /**
     *               TOP_LEFT     TOP_CENTER     TOP_RIGHT
     * LEFT_TOP     |-------------------------------------| RIGHT_TOP
     *              |                                     |
     * LEFT_CENTER  |                                     | RIGHT_CENTER
     *              |                                     |
     * LEFT_BOTTOM  |                                     | RIGHT_BOTTOM
     *              |-------------------------------------|
     *              BOTTOM_LEFT   BOTTOM_CENTER  BOTTOM_RIGHT
     */
    group.align(5, 3, 160, 160, Phaser.CENTER);

    ```
# align sprites to grid
# display order
  - 同一个group中，两个元素重叠，z轴高度(在group中的索引越大)会遮住z轴低的。
# group as layers
  - 当group2的z轴高于group1的z轴， 则group2的子元素都高于group1的子元素。
# bring a group to top
  - 把一个layer拉到最顶层
    ```js
      // bringToTop(child) → {any}

      // Brings the given child to the top of this group so it renders above all other children.
      this.world.bringToTop(this.group1);

    ```
# sort
  - 将group中的所有元素按某个属性排序(排序后，index越大，z轴越高，越可以遮住其他元素)。 通常用y来排序。
    ```js
    // sort(key, order)

    // Sort the children in the group according to a particular key and ordering.
    // Call this function to sort the group according to a particular key value and order.
    // For example to depth sort Sprites for Zelda-style game you might call group.sort('y', Phaser.Group.SORT_ASCENDING) at the bottom of your State.update().
    // Internally this uses a standard JavaScript Array sort, so everything that applies there also applies here, including
    // alphabetical sorting, mixing strings and numbers, and Unicode sorting. See MDN for more details.
    group.sort('y', Phaser.Group.SORT_ASCENDING);

    ```
# depth sort
  - 将group中的所有子元素按照y排序，使y越大越能遮住其他子元素。
# get first (alive)
  - game object 的存活状态
    ```js
    // alive :boolean
    // A useful flag to control if the Game Object is alive or dead.
    // This is set automatically by the Health components damage method should the object run out of health.
    // Or you can toggle it via your game code.
    // This property is mostly just provided to be used by your game - it doesn't effect rendering or logic updates.
    // However you can use Group.getFirstAlive in conjunction with this property for fast object pooling and recycling.

    // health :number
    // The Game Objects health value. This is a handy property for setting and manipulating health on a Game Object.
    // It can be used in combination with the damage method or modified directly.

    // damage(amount: number): Phaser.Sprite;
    // Damages the Game Object. This removes the given amount of health from the health property.
    // If health is taken below or is equal to zero then the kill method is called.

    // heal(amount: number): Phaser.Sprite;
    // Heal the Game Object. This adds the given amount of health to the health property.

    // maxHealth :number
    // The Game Objects maximum health value. This works in combination with the heal method to ensure the health value never exceeds the maximum.

    // exists :Boolean
    // Controls if this Sprite is processed by the core Phaser game loops and Group loops.

    // <readonly> fresh :boolean
    // A Game Object is considered fresh if it has just been created or reset and is yet to receive a renderer transform update.
    // This property is mostly used internally by the physics systems, but is exposed for the use of plugins.

    ```
  - 获取第一个活的子元素
    ```js
      // getFirstAlive(createIfNull, x, y, key, frame) → {DisplayObject}

      // Get the first child that is alive (child.alive === true).
      // This is handy for choosing a squad leader, etc.
      // You can use the optional argument createIfNull to create a new Game Object if no alive ones were found in this Group.
      // It works by calling Group.create passing it the parameters given to this method, and returning the new child.
      // If a child was found , createIfNull is false and you provided the additional arguments then the child
      // will be reset and/or have a new texture loaded on it. This is handled by Group.resetChild
      let item = this.world.getFirstAlive() as Phaser.Sprite;

      if (item) {

        // kill() → {PIXI.DisplayObject}

        // Kills a Game Object. A killed Game Object has its alive, exists and visible properties all set to false.
        // It will dispatch the onKilled event. You can listen to events.onKilled for the signal.
        // Note that killing a Game Object is a way for you to quickly recycle it in an object pool,
        // it doesn't destroy the object or free it up from memory.
        // If you don't need this Game Object any more you should call destroy instead.
        item.kill();
      }

    ```
# get first dead
  - 定时器 game.time.events.repeat
    ```js
    // repeat(delay, repeatCount, callback, callbackContext, arguments) → {Phaser.TimerEvent}

    // Adds a new TimerEvent that will always play through once and then repeat for the given number of iterations.
    // The event will fire after the given amount of delay in milliseconds has passed, once the Timer has started running.
    // The delay is in relation to when the Timer starts, not the time it was added.
    // If the Timer is already running the delay will be calculated based on the timers current time.
    // Make sure to call start after adding all of the Events you require for this Timer.
    this.time.events.repeat(Phaser.Timer.SECOND, 20, this.resurrect, this);

    ```
  - 获取第一个死子元素
    ```js
    // getFirstDead(createIfNull, x, y, key, frame) → {DisplayObject}
    // Get the first child that is dead (child.alive === false).
    // This is handy for checking if everything has been wiped out and adding to the pool as needed.
    // You can use the optional argument createIfNull to create a new Game Object if no dead ones were found in this Group.
    // It works by calling Group.create passing it the parameters given to this method, and returning the new child.
    // If a child was found , createIfNull is false and you provided the additional arguments then the child
    // will be reset and/or have a new texture loaded on it. This is handled by Group.resetChild.
    let item = this.veg.getFirstDead() as Phaser.Sprite;

    ```
  - 重置(并复活)一个子元素
    ```js
    // reset(x, y, health) → {PIXI.DisplayObject}

    // Resets the Game Object.
    // This moves the Game Object to the given x/y world coordinates and sets fresh, exists,
    // visible and renderable to true.
    // If this Game Object has the LifeSpan component it will also set alive to true and health to the given value.
    // If this Game Object has a Physics Body it will reset the Body.
    item.reset(this.world.randomX, this.world.randomY);

    item.frame = this.rnd.integerInRange(0, 36);

    ```
# recycling
  - 重复使用子元素: 一个game object被kill时，并未被销毁，可以从对象池中取出并reset，重新使用。
# create if null
  - 如果对象池中已经没有dead对象，新建一个game object
    ```js
    // getFirstDead(createIfNull, x, y, key, frame) → {DisplayObject}

    // Get the first child that is dead (child.alive === false).
    // Get the first child that is dead (child.alive === false).
    // This is handy for checking if everything has been wiped out and adding to the pool as needed.
    // You can use the optional argument createIfNull to create a new Game Object if no dead ones were found in this Group.
    // It works by calling Group.create passing it the parameters given to this method, and returning the new child.
    // If a child was found , createIfNull is false and you provided the additional arguments then the child
    // will be reset and/or have a new texture loaded on it. This is handled by Group.resetChild.
    this.veg.getFirstDead(true, x, y, key, frame);

    ```

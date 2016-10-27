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

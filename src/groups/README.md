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

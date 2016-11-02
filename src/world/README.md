# fixed-to-camera
  - 固定到相机、设置相对相机的坐标
    ```js
    this.logo1.fixedToCamera = true;
    this.logo1.cameraOffset.setTo(100, 100); // 同set()

    ```
  - 相对相机的Tween
    ```js
    this.add.tween(this.logo2.cameraOffset).to({y: 400}, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);

    ```
  - 随机坐标
    ```js
    this.world.randomX, this.world.randomY

    ```
  - 键盘方向键
    ```js
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.up.isDown) {} // update()中

    ```

# move-around-world
  - 世界中的物体运动
  - 世界运动
  - 相机运动

# world-wrap

  - game size, world size, camera bounds, physics bounds

    [game.scale.setGameSize](http://localhost:3000/Phaser.ScaleManager.html#setGameSize)

      setGameSize(width, height)
      Set the actual Game size.
      Use this instead of directly changing game.width or game.height.

      The actual physical display (Canvas element size) depends on various settings including

      Scale mode
      Scaling factor
      Size of Canvas's parent element or CSS rules such as min-height/max-height;
      The size of the Window

    [game.world.resize](http://localhost:3000/Phaser.World.html#resize)

      resize(width, height)
      Updates the size of this world. Note that this doesn't modify the world x/y coordinates, just the width and height.

    [game.world.setBounds](http://localhost:3000/Phaser.World.html#setBounds)

      setBounds(x, y, width, height)
      Updates the size of this world and sets World.x/y to the given values
      The Camera bounds and Physics bounds (if set) are also updated to match the new World bounds.

    [game.camera.bounds](http://localhost:3000/Phaser.Camera.html#bounds)

      bounds :Phaser.Rectangle

      The Camera is bound to this Rectangle and cannot move outside of it. By default it is enabled and set to the size of the World.
      The Rectangle can be located anywhere in the world and updated as often as you like. If you don't wish the Camera to be bound
      at all then set this to null. The values can be anything and are in World coordinates, with 0,0 being the top-left of the world. The Rectangle in which the Camera is bounded. Set to null to allow for movement anywhere.

    [game.physics.arcade.bounds](http://localhost:3000/Phaser.Physics.Arcade.html#bounds)

      bounds :Phaser.Rectangle

      The bounds inside of which the physics world exists. Defaults to match the world bounds.

  - world.wrap
    当物体从一边走出世界的bounds时，会自动从另一边再进到世界里。
    ```js
    update () {
      this.world.wrap(this.card, padding, useBounds);
    }

    ```
  - debug
    ```js
    this.game.debug.cameraInfo(this.camera, 500, 32);
    this.game.debug.spriteCoords(this.card, 32, 32);

    ```

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
  - world.setBounds() 和 world.resize() 的区别
    + setBounds 设置世界的bounds，没设置固定size，物体可以走出这个范围，必要时，开发者要负责清除走出范围的物体。
    + resize设置世界的size，物体无法走出这个size。
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

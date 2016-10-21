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

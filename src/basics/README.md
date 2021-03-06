# 01-load-an-image
  - load image in preload()
    ```js
    this.load.image(key, path);
    
    ```
  - create sprite in create()
    ```js
      this.add.sprite(x, y, key);
      
    ```
# 02-click-an-image
  - sprite anchor
    ```js
    this.image.anchor.set(0.5);
    
    ```
  - input event on sprite
    ```js
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(this.onClickImage, this);
    
    ```
  - text sprite
    ```js
    this.text = this.add.text(x, y, 'foo', {fill: '#ffffff'});
    this.text.text = 'bar'
    
    ```
# 03-move-an-image
  - enable physics.arcade (arcade physics, ninja physics, p2 physics)
    ```js
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.enable(this.sprit);
    
    ```
  - velocity
    ```js
    this.sprit.body.velocity.x = 150;
    
    ```
  - world
    ```js
    this.world.width
    
    ```

# 04-image-follow-input
  - input.activePointer
    ```js
    this.input.activePointer
    this.game.debug.inputInfo(x,y); // 在render()中设置
    
    ```
  - distance
    ```js
    this.physics.arcade.distanceToPointer(sprit, point?, world?)
    // point默认值为 this.input.activePointer
    
    ```
  - movement
    ```js
    this.physics.arcade.moveToPointer(this.sprit, speed?, point?)
    // point默认值为 this.input.activePointer
    
    ```
# 05-load-an-animation
  - load a Texture Atlas file
    ```js
    this.load.atlasJSONHash(key, 'path/xxx.png', 'path/xxx.json');
    
    ```
  - animations
    ```js
    this.sprite.animations.add(key);
    this.srpite.animations.play(key, frameRate, loop);
    
    ```
# 06-render-text
  - text sprite
    ```js
    const style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    this.add.text(x, y, text, style)
    
    ```
# 07-tween-an-image
  - 手动设置坐标
  - 使用 Tween
    ```js
    this.add.tween(this.sprite);
    this.tween.to({ x: this.world.width}, duration, 'Linear', autoStart , delay);
    
    ```
# 08-sprite-rotation
  - 角度和弧度
    + `angle` is in degrees, from -180 to 180.
    + `rotation` is in radians, from -PI to PI.
    + 转换
      ```js
      Phaser.Math.degToRad(degree)
      Phaser.Math.radToDeg(radians)
      
      ```
  - Graphics
    + Graphics
    + BitmapData
    + RenderTexture
  - 设置 Graphics:
    ```js
    this.graphics = this.add.graphics(0, 0);
    this.graphics.lineStyle(2, 0x00ff00, 1);
    
    ```
  - 在 Graphics 上移动、画线、画圆
    ```js
    this.graphics.moveTo(x, y);
    this.graphics.lineTo(x, y);

    const circle = new Phaser.Circle(x, y, diameter);
    this.graphics.drawCircle(circle.x, circle.y, circle.diameter);
    ```
  - 获取圆周上一个点的坐标
    ```js
    circle.circumferencePoint(angle, asDegrees)
    
    ```

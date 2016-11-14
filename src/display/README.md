# game-background-color
  - stage.backgroundColor>
    ```js
    // http://localhost:3000/Phaser.Stage.html#backgroundColor
    // backgroundColor :number|string
    // Gets and sets the background color of the stage. The color can be given as a number: 0xff0000 or a hex string: '#ff0000'
    this.stage.backgroundColor = '#48a';

    ```
# circle
  - add.graphics>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#graphics
    // graphics(x, y, group) → {Phaser.Graphics}
    // Creates a new Graphics object.
    let graphics = this.add.graphics(0, 0);

    ```
  - graphics.beginFill>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#beginFill
    // beginFill(color, alpha) → {PIXI.Graphics}
    // Specifies a simple one-color fill that subsequent calls to other Graphics methods
    // (such as lineTo() or drawCircle()) use when drawing.
    graphics.beginFill(0xff0000, 1);

    ```
  - graphics.drawCircle>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#drawCircle
    // drawCircle(x, y, diameter) → {PIXI.Graphics}
    // Draws a circle.
    graphics.drawCircle(300, 300, 100);

    ```
  - graphics.endFill>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#endFill
    // endFill() → {PIXI.Graphics}
    // Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
    graphics.endFill();

    ```
# ellipse
  - graphics.lineStyle>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#lineStyle
    // lineStyle(lineWidth, color, alpha) → {PIXI.Graphics}
    // Specifies the line style used for subsequent calls to Graphics methods such as the lineTo() method or the drawCircle() method.
    graphics.lineStyle(8, 0xffd900);

    ```
  - graphics.drawEllipse>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#drawEllipse
    // drawEllipse(x, y, width, height) → {PIXI.Graphics}
    // Draws an ellipse.
    graphics.drawEllipse(100, 100, 200, 60);

    ```
# arc
  - graphics.arc>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#arc
    // arc(cx, cy, radius, startAngle, endAngle, anticlockwise, segments) → {PIXI.Graphics}
    // The arc method creates an arc/curve (used to create circles, or parts of circles).
    graphics.arc(0, 0, 135, 0, Math.PI / 2, false);

    ```
# arc-details
  - graphics.clear>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#clear
    // clear() → {PIXI.Graphics}
    // Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
    this.graphics1.clear();

    ```
# graphics
  - graphics.moveTo>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#moveTo
    // moveTo(x, y) → {PIXI.Graphics}
    // Moves the current drawing position to x, y.
    graphics.moveTo(50,50);

    ```
  - graphics.lineTo>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#lineTo
    // lineTo(x, y) → {PIXI.Graphics}
    // Draws a line using the current line style from the current drawing position to (x, y);
    // The current drawing position is then set to (x, y).
    graphics.lineTo(250, 50);

    ```
  - graphics.quadraticCurveTo>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#quadraticCurveTo
    // quadraticCurveTo(cpX, cpY, toX, toY) → {PIXI.Graphics}
    // Calculate the points for a quadratic bezier curve and then draws it.
    // Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
    graphics.quadraticCurveTo(600, 0, 480,100);

    ```
  - graphics.drawRect>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#drawRect
    // drawRect(x, y, width, height) → {PIXI.Graphics}
    graphics.drawRect(50, 250, 100, 100);

    ```
# graphics-2
  - add.graphics
  - graphics.lineStyle
  - graphics.moveTo
  - graphics.lineTo
# graphics-child
  - graphics.addChild>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#addChild
    // addChild(child) → {DisplayObject}
    // Adds a child to the container.
    graphics.addChild(sprite);

    ```
# graphics-input-events
  - graphics.events>
    ```js
   // http://localhost:3000/Phaser.Graphics.html#events
    // events :Phaser.Events
    // All Phaser Game Objects have an Events class which contains all of the events that are dispatched when certain things happen to this
    // Game Object, or any of its components.
    this.graphics.events.onInputDown.add(this.onInputDown, this);

    ```
# generate-texture-from-graphics
  - graphics.generateTexture>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#generateTexture
    // generateTexture(resolution, scaleMode, padding) → {PIXI.Texture}
    // Useful function that returns a texture of the graphics object that can then be used to create sprites
    // This can be quite useful if your geometry is complicated and needs to be reused multiple times.
    this.sprite = this.add.sprite(400, 300, graphics.generateTexture());

    ```
  - graphics.destroy>
    ```js
    //  And destroy the original graphics object
    // http://localhost:3000/Phaser.Graphics.html#destroy
    // destroy(destroyChildren)
    // Destroy this Graphics instance.
    graphics.destroy();

    ```
  - graphics.pendingDestroy>
    ```js
    // http://localhost:3000/Phaser.Graphics.html#pendingDestroy
    // pendingDestroy :boolean
    // A Game Object is that is pendingDestroy is flagged to have its destroy method called on the next logic update.
    // You can set it directly to allow you to flag an object to be destroyed on its next update.
    // This is extremely useful if you wish to destroy an object from within one of its own callbacks
    // such as with Buttons or other Input events.

    ```
# spritesheet-from-graphics
  - spritesheet>
    ```js
    let texture = graphics.generateTexture();
    this.cache.addSpriteSheet('digits', null, texture.baseTexture.source, frameWidth, frameHeight, frameMax, margin, spacing);

    ```
# arcade-physics-graphics-shape
  - arcade.enable>
    ```js
    this.physics.arcade.enable(graphics);
    graphics.body.velocity.x = 100;
    // ...

    ```
# render-crispc
  - sprite.smoothed>
    ```js
    // http://localhost:3000/Phaser.Sprite.html#smoothed
    // smoothed :boolean
    // Enable or disable texture smoothing for this Game Object.
    // It only takes effect if the Game Object is using an image based texture.
    // Smoothing is enabled by default.
    this.boss.smoothed = false;

    ```
# render-texture-image
  - add.renderTexture>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#renderTexture
    // renderTexture(width, height, key, addToCache) → {Phaser.RenderTexture}
    // key{string=''}                 Asset key for the RenderTexture when stored in the Cache (see addToCache parameter).
    // addToCache{boolean=false}      Should this RenderTexture be added to the Game.Cache? If so you can retrieve it with Cache.getTexture(key)
    // A dynamic initially blank canvas to which images can be drawn.
    this.texture = this.add.renderTexture(this.game.width, this.game.height);

    ```
  - texture.renderXY>
    ```js
    // http://localhost:3000/Phaser.RenderTexture.html#renderXY
    // renderXY(displayObject, x, y, clear)
    // This function will draw the display object to the RenderTexture at the given coordinates.
    // When the display object is drawn it takes into account scale and rotation.
    // If you don't want those then use RenderTexture.renderRawXY instead.
    this.texture.renderXY(this.ball, this.input.activePointer.x, this.input.activePointer.y, true);

    ```
  - texture.renderRawXY>
    ```js
    // http://localhost:3000/Phaser.RenderTexture.html#renderRawXY
    // renderRawXY(displayObject, x, y, clear)
    // This function will draw the display object to the RenderTexture at the given coordinates.
    // When the display object is drawn it doesn't take into account scale, rotation or translation.
    // If you need those then use RenderTexture.renderXY instead.

    ```
# render-texture-mirror
  - texture.renderXY(x,y);texture.renderXY(x,game.height - y);
# render-texture-rotation
  - texture.render>
    ```js
    // http://localhost:3000/Phaser.RenderTexture.html#render
    // render(displayObject, matrix, clear)
    // matrix{Phaser.Matrix}      Optional matrix to apply to the display object before rendering. If null or undefined it will use the worldTransform matrix of the given display object.
    // This function will draw the display object to the RenderTexture.
    // In versions of Phaser prior to 2.4.0 the second parameter was a Phaser.Point object.
    // This is now a Matrix allowing you much more control over how the Display Object is rendered.
    // If you need to replicate the earlier behavior please use Phaser.RenderTexture.renderXY instead.
    // If you wish for the displayObject to be rendered taking its current scale, rotation and translation into account then either
    // pass null, leave it undefined or pass displayObject.worldTransform as the matrix value.

    ```
# render-texture-starfield
  - 同一个displayObject在多个随机坐标进行render
    ```js
    texture.renderXY(displayObject,x1,y1,true);
    texture.renderXY(displayObject,x2,y2,false);

    ```
# render-texture-tilemap
  - 根据tilemap json数据渲染 texture
    ```js
    this.add.tilemap('level3')
    this.add.renderTexture()
    for x
      for y
        let tile = this.map.getTile(x, y);
        this.stamp.frame = tile.index - 1;
        this.texture.renderXY(this.stamp, dx, dy, cls);

    ```
# render-texture-to-tilesprite
  - texture.renderXY
# render-texture-trail
# extract-mask
# fullscreen
# fullscreen-buttons
# gradient
# hsv-color-wheel
# pixi-render-texture
# round-pixels
# sprite-shadow
# tint-sprite
# tint-sprite-frame
# viewport
# graphics-perf
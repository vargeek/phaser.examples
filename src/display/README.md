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
# graphics-2
# graphics-child
# graphics-input-events
# arcade-physics-graphics-shape
# extract-mask
# fullscreen
# fullscreen-buttons
# generate-texture-from-graphics
# gradient
# hsv-color-wheel
# pixi-render-texture
# render-crisp
# render-texture-image
# render-texture-mirror
# render-texture-rotation
# render-texture-starfield
# render-texture-tilemap
# render-texture-to-tilesprite
# render-texture-trail
# round-pixels
# sprite-shadow
# spritesheet-from-graphics
# tint-sprite
# tint-sprite-frame
# viewport
# graphics-perf

# camera-cull
# basic-follow
  - camera.follow>
    ```js
    // http://localhost:3000/Phaser.Camera.html#follow
    // follow(target, style, lerpX, lerpY)
    // style{number?}
    //        deadzone是一个相对于相机静止的矩形范围。相机follow精灵时，当精灵要超出这个范围，相机就会开始移动，使精灵保持在这个范围内可见。
    //        使用一个默认的deadzone. Leverage one of the existing "deadzone"() presets. If you use a custom deadzone, ignore this parameter and manually specify the deadzone after calling follow().
    //        默认的deadzone:
    // Phaser.Camera.FOLLOW_LOCKON:         中心点 (默认值)
    // Phaser.Camera.FOLLOW_PLATFORMER:     一个竖直长方形
    // Phaser.Camera.FOLLOW_TOPDOWN:        一个正方形
    // Phaser.Camera.FOLLOW_TOPDOWN_TIGHT:  一个小一点的正方形
    // lerpX{float=1}     A value between 0 and 1. This value specifies the amount of linear interpolation to use when horizontally tracking the target. The closer the value to 1, the faster the camera will track. 表现为相机跟踪精灵 的速度

    // Tell the camera which sprite to follow.
    // You can set the follow type and a linear interpolation value.
    // Use low lerp values (such as 0.1) to automatically smooth the camera motion.
    // If you find you're getting a slight "jitter" effect when following a Sprite it's probably to do with sub-pixel rendering of the Sprite position.
    // This can be disabled by setting game.renderer.renderSession.roundPixels = true to force full pixel rendering.
    this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    ```
# follow-styles
# camera-lerp
# smooth-follow
# deadzone
  - camera.deadzone>
    ```js
    // http://localhost:3000/Phaser.Camera.html#deadzone
    // deadzone :Phaser.Rectangle
    // Moving inside this Rectangle will not cause the camera to move.
    // deadzone是一个相对于相机静止的矩形范围。相机follow精灵时，当精灵要超出这个范围，相机就会开始移动，使精灵保持在这个范围内可见。
    this.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);

    ```
# camera-fade
  - camera.fade>
    ```js
    // http://localhost:3000/Phaser.Camera.html#fade
    // fade(color, duration, force) → {boolean}
    // force{boolean=false}     If a camera flash or fade effect is already running and force is true it will replace the previous effect, resetting the duration.

    // This creates a camera fade effect. It works by filling the game with the
    // color specified, over the duration given, ending with a solid fill.

    // You can use this for things such as transitioning to a new scene.

    // The game will be left 'filled' at the end of this effect, likely obscuring everything.
    // In order to reset it you can call Camera.resetFX and it will clear the fade.
    // Or you can call Camera.flash with the same color as the fade, and it will
    // reverse the process, bringing the game back into view again.

    // When the effect ends the signal Camera.onFadeComplete is dispatched.
    this.camera.fade(0x000000, 4000);

    ```
  - camera.onFadeComplete>
    ```js
    // http://localhost:3000/Phaser.Camera.html#onFadeComplete
    // onFadeComplete :Phaser.Signal

    // This signal is dispatched when the camera fade effect completes.
    // When the fade effect completes you will be left with the screen black (or whatever color you faded to).
    // In order to reset this call Camera.resetFX. This is called automatically when you change State.
    this.camera.onFadeComplete.add(this.resetFade, this);

    ```
  - camera.resetFX>
    ```js
    // http://localhost:3000/Phaser.Camera.html#resetFX
    // resetFX()
    // Resets any active FX, such as a fade or flash and immediately clears it.
    // Useful to calling after a fade in order to remove the fade from the Stage.
    this.camera.resetFX();

    ```
# camera-flash
  - camera.flash>
    ```js
    // http://localhost:3000/Phaser.Camera.html#flash
    // flash(color, duration, force) → {boolean}
    // force{boolean=false}     If a camera flash or fade effect is already running and force is true it will replace the previous effect, resetting the duration.

    // This creates a camera flash effect. It works by filling the game with the solid fill color specified, and then fading it away to alpha 0 over the duration given.

    // You can use this for things such as hit feedback effects.

    // When the effect ends the signal Camera.onFlashComplete is dispatched.
    this.camera.flash(0xff0000, 500);

    ```
  - camera.onFlashComplete>
    ```js
    // http://localhost:3000/Phaser.Camera.html#onFlashComplete
    // onFlashComplete :Phaser.Signal
    // This signal is dispatched when the camera flash effect completes.
    this.camera.onFlashComplete.add(this.onFlashComplete, this);

    ```
# camera-shake
  - camera.shake>
    ```js
    // http://localhost:3000/Phaser.Camera.html#shake
    // shake(intensity, duration, force, direction, shakeBounds) → {boolean}
    // intensity{float=0.05}    The intensity of the camera shake. Given as a percentage of the camera size representing the maximum distance that the camera can move while shaking.
    // direction{number=Phaser.Camera.SHAKE_BOTH}     The directions in which the camera can shake. Either Phaser.Camera.SHAKE_BOTH, Phaser.Camera.SHAKE_HORIZONTAL or Phaser.Camera.SHAKE_VERTICAL.
    // shakeBounds{boolean=true}      Is the effect allowed to shake the camera beyond its bounds (if set?).

    // This creates a camera shake effect. It works by applying a random amount of additional
    // spacing on the x and y axis each frame. You can control the intensity and duration
    // of the effect, and if it should effect both axis or just one.

    // When the shake effect ends the signal Camera.onShakeComplete is dispatched.
    this.camera.shake(0.05, 500);

    ```
# camera-view
# fixed-to-camera
  - sprite.fixedToCamera>
    ```js
    // http://localhost:3000/Phaser.Sprite.html#fixedToCamera
    // fixedToCamera :boolean

    // A Game Object that is "fixed" to the camera uses its x/y coordinates as offsets from the top left of the camera during rendering.

    // The values are adjusted at the rendering stage, overriding the Game Objects actual world position.

    // The end result is that the Game Object will appear to be 'fixed' to the camera, regardless of where in the game world
    // the camera is viewing. This is useful if for example this Game Object is a UI item that you wish to be visible at all times
    // regardless where in the world the camera is.

    // The offsets are stored in the cameraOffset property.

    // Note that the cameraOffset values are in addition to any parent of this Game Object on the display list.

    // Be careful not to set fixedToCamera on Game Objects which are in Groups that already have fixedToCamera enabled on them.
    this.logo1.fixedToCamera = true;

    ```
  - sprite.cameraOffset>
    ```js
    // http://localhost:3000/Phaser.Sprite.html#cameraOffset
    // cameraOffset :Phaser.Point

    // The x/y coordinate offset applied to the top-left of the camera that this Game Object will be drawn at if fixedToCamera is true.

    // The values are relative to the top-left of the camera view and in addition to any parent of the Game Object on the display list.
    t.cameraOffset.setTo(200, 500);

    ```
# mass-camera-cull
  - sprite.autoCull>
    ```js
    // http://localhost:3000/Phaser.Sprite.html#autoCull
    // A Game Object with autoCull set to true will check its bounds against the World Camera every frame.
    // If it is not intersecting the Camera bounds at any point then it has its renderable property set to false.
    // This keeps the Game Object alive and still processing updates, but forces it to skip the render step entirely.

    // This is a relatively expensive operation, especially if enabled on hundreds of Game Objects. So enable it only if you know it's required,
    // or you have tested performance and find it acceptable.
    s.autoCull = true;

    ```
  - sprite.checkWorldBounds>
    ```js
    // http://localhost:3000/Phaser.Sprite.html#checkWorldBounds
    // checkWorldBounds :boolean
    // If this is set to true the Game Object checks if it is within the World bounds each frame.

    // When it is no longer intersecting the world bounds it dispatches the onOutOfBounds event.

    // If it was previously out of bounds but is now intersecting the world bounds again it dispatches the onEnterBounds event.

    // It also optionally kills the Game Object if outOfBoundsKill is true.

    // When checkWorldBounds is enabled it forces the Game Object to calculate its full bounds every frame.

    // This is a relatively expensive operation, especially if enabled on hundreds of Game Objects. So enable it only if you know it's required,
    // or you have tested performance and find it acceptable.
    s.checkWorldBounds = true;

    ```
# moving-the-camera
# world-sprite
# zooming-the-camera
  - camera.focusOnXY>
    ```js
    //  world center is 0x0, top-left is -960x-600
    // http://localhost:3000/Phaser.Camera.html#focusOnXY
    // focusOnXY(x, y)
    // Move the camera focus on a location instantly.
    // 移动相机使对准一个坐标
    this.camera.focusOnXY(-960, -600);

    ```

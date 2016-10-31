# 类
  - game.input: Phaser.Input ( Input Manager )
    + game.input.keyboard: Phaser.Keyboard
      * .addKey() => Phaser.Key
    + game.input.gamepad: Phaser.Gamepad
      * game.input.gamepad.pad1: Phaser.Phaser.SinglePad
        - .getButton() => Phaser.DeviceButton
    + game.input.mouse: Phaser.Mouse
    + game.input.mousePointer(activePointer, pointer1~10): Phaser.Pointer
  - sprite.input: Phaser.InputHandler
  - sprite.events: Phaser.Events
    + .onInputUp: Phaser.Signal
# debug
  - debug.inputInfo
  - debug.spriteInputInfo
  - debug.pointer
# drag
  - inputEnabled: 输入使能，为sprite创建InputHandler
    ```js
    // 创建 Phaser.InputHandler
    // http://localhost:3000/Phaser.Sprite.html#inputEnabled
    // inputEnabled :boolean
    // By default a Game Object won't process any input events. By setting inputEnabled to true a Phaser.InputHandler is created
    // for this Game Object and it will then start to process click / touch events and more.
    // You can then access the Input Handler via this.input.
    // Note that Input related events are dispatched from this.events, i.e.: events.onInputDown.
    // If you set this property to false it will stop the Input Handler from processing any more input events.
    // If you want to temporarily disable input for a Game Object, then it's better to set
    // input.enabled = false, as it won't reset any of the Input Handlers internal properties.
    // You can then toggle this back on as needed.

    ```
  - enableDrag: 拖拽使能
    ```js
    // http://localhost:3000/Phaser.InputHandler.html#enableDrag
    // enableDrag(lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
    // Allow this Sprite to be dragged by any valid pointer.
    // lockCenter:
    // If false the Sprite will drag from where you click it minus the dragOffset. If true it will center itself to the tip of the mouse pointer.

    // events:
    // When the drag begins the Sprite.events.onDragStart event will be dispatched.
    // When the drag completes by way of the user letting go of the pointer that was dragging the sprite, the Sprite.events.onDragStop event is dispatched.
    // For the duration of the drag the Sprite.events.onDragUpdate event is dispatched. This event is only dispatched when the pointer actually
    // changes position and moves. The event sends 5 parameters: sprite, pointer, dragX, dragY and snapPoint.

    // thresholds:
    // You can control the thresholds over when a drag starts via the properties:
    // Pointer.dragDistanceThreshold the distance, in pixels, that the pointer has to move before the drag will start.
    // Pointer.dragTimeThreshold the time, in ms, that the pointer must be held down on
    // the Sprite before the drag will start.
    // You can set either (or both) of these properties after enabling a Sprite for drag.

    ```
# bring-a-child-to-top
  - enableDrag: bringToTop
    ```js
    // http://localhost:3000/Phaser.InputHandler.html#enableDrag
    // enableDrag(lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)

    // bringToTop:
    // If true the Sprite will be bought to the top of the rendering list in its current Group.
    sprite.input.enableDrag(false, true);

    ```
# snap-on-drag
  - enableSnap
    ```js
    // http://localhost:3000/Phaser.InputHandler.html#enableSnap
    // enableSnap(snapX, snapY, onDrag, onRelease, snapOffsetX, snapOffsetY)
    // onDrag:
    // If true the sprite will snap to the grid while being dragged.
    // onRelease
    // If true the sprite will snap to the grid when released.

    // Make this Sprite snap to the given grid either during drag or when it's released.
    // For example 16x16 as the snapX and snapY would make the sprite snap to every 16 pixels.
    atari1.input.enableSnap(32, 32, true, true);

    ```
# bounds-rect
  - enableDrag: boundsRect
    ```js
    // 限制拖拽范围，只能在指定矩形内移动。
    // http://localhost:3000/Phaser.InputHandler.html#enableDrag
    // enableDrag(lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
    // Allow this Sprite to be dragged by any valid pointer.
    // boundsRect:
    // If you want to restrict the drag of this sprite to a specific Rectangle, pass the Phaser.Rectangle here, otherwise it's free to drag anywhere.
    sprite.input.enableDrag();

    ```
  - boundsRect: 限制拖拽范围
    ```js
    // 限制拖拽范围，只能在指定矩形内移动。可以在使能拖拽功能时设置，也可以在使能后设置。
    // http://localhost:3000/Phaser.InputHandler.html#boundsRect
    // A region of the game world within which the sprite is restricted during drag.
    sprite.input.boundsRect = bounds;

    ```
# bounds-sprite
  - enableDrag: boundsSprite
    ```js
    // 限制拖拽范围，只能在指定精灵的bounds内移动。
    // http://localhost:3000/Phaser.InputHandler.html#enableDrag
    // enableDrag(lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
    // Allow this Sprite to be dragged by any valid pointer.
    // boundsSprite:
    // If you want to restrict the drag of this sprite to within the bounding box of another sprite, pass it here.
    sprite.input.enableDrag();

    ```
  - boundsSprite: 限制拖拽范围
    ```js
    // http://localhost:3000/Phaser.InputHandler.html#boundsSprite
    // A Sprite the bounds of which this sprite is restricted during drag.
    sprite.input.boundsSprite = bounds;

    ```
# drag-event-parameters
  - inputEnableChildren
    ```js
    // http://localhost:3000/Phaser.Group.html#inputEnableChildren
    // 输入使能(创建inputHandler)所有后面添加或创建的子元素。
    // A Group with inputEnableChildren set to true will automatically call inputEnabled = true
    // on any children added to, or created by, this Group.

    // If there are children already in the Group at the time you set this property, they are not changed.
    group.inputEnableChildren = true;

    ```
  - onDragStart
    ```js
    // http://localhost:3000/Phaser.Events.html#onDragStart
    // This signal is dispatched if the Game Object has been inputEnabled and enableDrag has been set.
    // It is sent when a Phaser.Pointer starts to drag the Game Object, taking into consideration the various drag limitations that may be set.

    // It is sent four arguments:
    // {any} The Game Object that received the event.
    // {Phaser.Pointer} The Phaser.Pointer object that caused the event.
    // {number} The x coordinate that the drag started from.
    // {number} The y coordinate that the drag started from.
    atari.events.onDragStart.add(this.onDragStart, this);

    ```
  - onDragStop
    ```js
    // http://localhost:3000/Phaser.Events.html#onDragStop
    // This signal is dispatched if the Game Object has been inputEnabled and enableDrag has been set.
    // It is sent when a Phaser.Pointer stops dragging the Game Object.

    // It is sent two arguments:
    // {any} The Game Object that received the event.
    // {Phaser.Pointer} The Phaser.Pointer object that caused the event.
    atari.events.onDragStop.add(this.onDragStop, this);

    ```
  - onChildInputDown
    ```js
    // http://localhost:3000/Phaser.Group.html#onChildInputDown
    // 子元素被点击就触发这个事件
    // This Signal is dispatched whenever a child of this Group emits an onInputDown signal as a result of having been interacted with by a Pointer. You can bind functions to this Signal instead of to  every child Sprite.

    // This Signal is sent 2 arguments:
    // {any} A reference to the Sprite that triggered the signal,
    // {Phaser.Pointer} and a reference to the Pointer that caused it.
    group.onChildInputDown.add(this.onDown, this);

    ```
# drag-update
  - drag-update:
    ```js
    // http://localhost:3000/Phaser.Events.html#onDragUpdate
    // This signal is dispatched if the Game Object has been inputEnabled and enableDrag has been set.
    // It is sent when a Phaser.Pointer is actively dragging the Game Object.
    // Be warned: This is a high volume Signal. Be careful what you bind to it.

    // It is sent six arguments:
    // {any} The Game Object that received the event.
    // {Phaser.Pointer} The Phaser.Pointer object that caused the event.
    // {number} The new x coordinate of the Game Object.
    // {number} The new y coordinate of the Game Object.
    // {Phaser.Point} A Point object that contains the point the Game Object was snapped to, if snapOnDrag has been enabled.
    // {boolean} The fromStart boolean, indicates if this is the first update immediately after the drag has started.
    this.dragSprite.events.onDragUpdate.add(this.onDragUpdate, this);

    ```
# drag-update-multiple
# drag-scaled-group
# drag-several-sprites
# drop-limitation
  - 在drop之后修改精灵的坐标，实现特殊要求的snap
    ```js
    // 在drop之后修改位置，从而限制drop范围。
    item.events.onDragStop.add(this.fixLocaltion, this);

    ```
# motion-lock-horizontal
  - allowVerticalDrag
    ```js
    // http://localhost:3000/Phaser.InputHandler.html#allowVerticalDrag
    // allowVerticalDrag :boolean
    // Controls if the Sprite is allowed to be dragged vertically.
    this.sprite.input.allowVerticalDrag = false;

    ```
# motion-lock-vertical
  - allowHorizontalDrag
    ```js
    // http://localhost:3000/Phaser.InputHandler.html#allowHorizontalDrag
    // allowHorizontalDrag :boolean
    // Controls if the Sprite is allowed to be dragged horizontally.
    this.sprite.input.allowHorizontalDrag = false;

    ```
# touch-events
  - onUp
    ```js
    // http://localhost:3000/Phaser.Input.html#onUp
    // onUp :Phaser.Signal
    // A Signal that is dispatched each time a pointer is released.
    this.input.onUp.add(()=>{
      console.log('Up');
    });

    ```
  - onDown
    ```js
    // http://localhost:3000/Phaser.Input.html#onDown
    // onDown :Phaser.Signal
    // A Signal that is dispatched each time a pointer is pressed down.

    ```
  - onTap
    ```js
    // http://localhost:3000/Phaser.Input.html#onTap
    // onTap :Phaser.Signal
    // A Signal that is dispatched each time a pointer is tapped.

    ```
# on-tap
  - onTap
    ```js
    // http://localhost:3000/Phaser.Input.html#onTap
    // onTap :Phaser.Signal
    // A Signal that is dispatched each time a pointer is tapped.
    this.input.onTap.add(this.onTap, this);

    ```
# button-open-popup
  - useHandCursor
    ```js
    // http://localhost:3000/Phaser.InputHandler.html#useHandCursor
    // useHandCursor :boolean
    // On a desktop browser you can set the 'hand' cursor to appear when moving over the Sprite.

    ```
  - 优先级
    ```js
    // http://localhost:3000/Phaser.InputHandler.html#priorityID
    // priorityID :number

    // The priorityID is used to determine which game objects should get priority when input events occur. For example if you have several Sprites that overlap, by default the one at the top of the display list is given priority for input events. You can
    // stop this from happening by controlling the priorityID value. The higher the value, the more important they are considered to the Input events.
    closeButton.input.priorityID = 1;

    ```
  - 事件
    ```js
    // events
    // All Phaser Game Objects have an Events class which contains all of the events that are dispatched when certain things happen to this
    // Game Object, or any of its components.
    closeButton.events.onInputDown.add(this.closeWindow, this);

    ```
# button-destroy
  - 销毁按钮
    ```js
    // http://localhost:3000/Phaser.Button.html#pendingDestroy
    // pendingDestroy :boolean
    // 在下一个 logic update 摧毁， 所以可以在button的回调里销毁这个button
    // A Game Object is that is pendingDestroy is flagged to have its destroy method called on the next logic update.
    // You can set it directly to allow you to flag an object to be destroyed on its next update.

    // This is extremely useful if you wish to destroy an object from within one of its own callbacks
    // such as with Buttons or other Input events.
    this.button.pendingDestroy = true;

    ```




# game-scale
  - world bounds
    ```js
    // http://localhost:3000/Phaser.World.html#setBounds
    // setBounds(x, y, width, height)
    // Updates the size of this world and sets World.x/y to the given values
    // The Camera bounds and Physics bounds (if set) are also updated to match the new World bounds.
    this.world.setBounds(0, 0, 2000, 2000);

    ```
# down-duration
  - onUp 事件
    ```js
    // http://localhost:3000/Phaser.Input.html#onUp
    // game.input.onUp: Phaser.Input, Phaser.Signal
    // onDown, onHold, onTap, onUp, ...
    this.input.onUp.add(this.getTime, this);

    ```
  - activePointer
    ```js
    // http://localhost:3000/Phaser.Input.html#activePointer
    // game.input.activePointer: Phaser.Input, Phaser.Pointer

    // the most recently active Pointer object.
    // When you've limited max pointers to 1 this will accurately be either the first finger touched or mouse.
    if (this.input.activePointer.isDown) { }

    ```
  - down duration
    ```js
    // http://localhost:3000/Phaser.Pointer.html#duration
    // Phaser.Pointer
    // 按住时间

    // How long the Pointer has been depressed on the touchscreen or any of the mouse buttons have been held down.
    // If not currently down it returns -1.
    // If you need to test a specific mouse or pen button then access the buttons directly, i.e. Pointer.rightButton.duration.
    lastDuration = pointer.duration;

    ```
# out-of-game
  - pointer.withinGame
    ```js
    // http://localhost:3000/Phaser.Pointer.html#withinGame
    // withinGame :boolean
    // true if the Pointer is over the game canvas, otherwise false.
    if (this.input.activePointer.withinGame) {}

    ```
# out-of-game-mouse-up
  - 鼠标移出世界后自动触发 onUp
    ```js
    //  Even if you release the mouse button outside of the game window
    //  the 'onUp' function will still be called.
    this.bubble.events.onInputDown.add(this.onDown, this);

    ```
# override-default-controls
  - 阻止按键传到浏览器
    ```js
    // Prevent directions and space key events bubbling up to browser,
    // since these keys will make web page scroll which is not
    // expected.
    //  Stop the following keys from propagating up to the browser
    // http://localhost:3000/Phaser.Keyboard.html#addKeyCapture
    // addKeyCapture(keycode)
    // By default when a key is pressed Phaser will not stop the event from propagating up to the browser.
    // There are some keys this can be annoying for, like the arrow keys or space bar, which make the browser window scroll.
    // The addKeyCapture method enables consuming keyboard event for specific keys so it doesn't bubble up to the the browser
    // and cause the default browser behavior.
    // Pass in either a single keycode or an array/hash of keycodes.
    this.input.keyboard.addKeyCapture([

    ```
# pointer-lock
  - 射击类游戏: 锁住光标
    ```js
    // http://localhost:3000/Phaser.Mouse.html#requestPointerLock
    // 设计类游戏: 锁住光标。
    // requestPointerLock()
    // If the browser supports it you can request that the pointer be locked to the browser window.
    // This is classically known as 'FPS controls', where the pointer can't leave the browser until the user presses an exit key.
    // If the browser successfully enters a locked state the event Phaser.Mouse.pointerLock will be dispatched and the first parameter will be 'true'.
    this.input.mouse.requestPointerLock();

    ```
  - mousemove事件
    ```js
    // http://localhost:3000/Phaser.Input.html#addMoveCallback
    // addMoveCallback(callback, context)
    // Adds a callback that is fired every time the activePointer receives a DOM move event such as a mousemove or touchmove.

    // The callback will be sent 4 parameters:
    // A reference to the Phaser.Pointer object that moved,
    // The x position of the pointer,
    // The y position,
    // A boolean indicating if the movement was the result of a 'click' event (such as a mouse click or touch down).

    // It will be called every time the activePointer moves, which in a multi-touch game can be a lot of times, so this is best
    // to only use if you've limited input to a single pointer (i.e. mouse or touch).
    // The callback is added to the Phaser.Input.moveCallbacks array and should be removed with Phaser.Input.deleteMoveCallback.
    game.input.addMoveCallback(move, this);

    ```
# pointer-over
  - 是否有pointer悬浮在精灵上
    ```js
    // http://localhost:3000/Phaser.InputHandler.html#pointerOver
    // pointerOver(pointerId) → {boolean}
    // Is the Pointer over this Sprite?
    if (bunny.input.pointerOver()) {}

    ```

# mouse-buttons
  - 鼠标事件 event.preventDefault
    ```js
    // http://localhost:3000/Phaser.Mouse.html#capture
    // Phaser.Input, Phaser.Mouse
    // capture :boolean
    // if true the DOM mouse events will have event.preventDefault applied to them, if false they will propagate fully.
    this.input.mouse.capture = true;

    ```
  - 鼠标按键点击状态
    ```js
    // http://localhost:3000/Phaser.Pointer.html#leftButton
    // leftButton :Phaser.DeviceButton
    // If this Pointer is a Mouse or Pen / Stylus then you can access its left button directly through this property.
    // The DeviceButton has its own properties such as isDown, duration and methods like justReleased for more fine-grained
    // button control.
    this.game.debug.text("Left Button: " + this.game.input.activePointer.leftButton.isDown, 300, 132);

    ```
# multi-touch
  - add pointer
    ```js
    // http://localhost:3000/Phaser.Input.html#addPointer
    // addPointer() → {Phaser.Pointer|null}
    // Add a new Pointer object to the Input Manager.
    // By default Input creates 3 pointer objects: mousePointer (not include in part of general pointer pool), pointer1 and pointer2.
    // This method adds an additional pointer, up to a maximum of Phaser.Input.MAX_POINTERS (default of 10).
    this.input.addPointer();

    ```
  - mousePointer
    ```js
    //  Just renders out the pointer data when you touch the canvas
    // http://localhost:3000/Phaser.Input.html#mousePointer
    // mousePointer :Pointer
    // The mouse has its own unique Phaser.Pointer object which you can use if making a desktop specific game.
    this.game.debug.pointer(this.input.mousePointer);

    ```
  - activePointer
    ```js
    // http://localhost:3000/Phaser.Input.html#activePointer
    // activePointer :Phaser.Pointer
    // The most recently active Pointer object.
    // When you've limited max pointers to 1 this will accurately be either the first finger touched or mouse.

    ```
# follow-mouse
  - mouse pointer
    ```js
    //  only move when you click
    // http://localhost:3000/Phaser.Input.html#mousePointer
    // The mouse has its own unique Phaser.Pointer object which you can use if making a desktop specific game.
    if (this.input.mousePointer.isDown) { }

    ```

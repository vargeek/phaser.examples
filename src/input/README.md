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

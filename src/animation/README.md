# sprite sheet
  - load spritesheet
    ```js
    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    this.load.spritesheet(AssetID.mummy, 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

    ```
  - add and play animation
    ```js
    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    let mummy = this.add.sprite(300, 200, AssetID.mummy);
    mummy.animations.add(Animation.walk);

    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    mummy.animations.play(Animation.walk, 30, true);

    ```
# load texture
  - loadTexture
    ```js
      this.sprite = this.add.sprite(300, 200, AssetID.monster);

      this.sprite.animations.add(Animation.walk,Phaser.ArrayUtils.numberArray(0, 15));
      this.sprite.animations.play(Animation.walk, 20, true);


      // tap to change loadTexture
      this.sprite.loadTexture(cacheKey, frame, remove);

      loadTexture(key: string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture, frame?: string | number, stopAnimation?: boolean): void;
      // Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.

      // If your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the frame or frameName properties instead.

      // You should only use loadTexture if you want to replace the base texture entirely.

      // Calling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU.

      // You can use the new const Phaser.PENDING_ATLAS as the texture key for any sprite.
      // Doing this then sets the key to be the frame argument (the frame is set to zero).

      // This allows you to create sprites using load.image during development, and then change them
      // to use a Texture Atlas later in development by simply searching your code for 'PENDING_ATLAS'
      // and swapping it to be the key of the atlas data.

      // Note: You cannot use a RenderTexture as a texture for a TileSprite.

    ```

# starling atlas
  - starling texture atlas and xml file
    ```js
      //  Here we load the Starling Texture Atlas and XML file
      this.load.atlasXML(AssetID.octopus, 'assets/sprites/octopus.png', 'assets/sprites/octopus.xml');

      octopus.animations.add(Animation.swim);
      octopus.animations.play(Animation.swim, 30, true);

    ```

# local json object
  - use atlasData
    ```js
    // atlasURL 为空, atlasData 为json数据.
    atlas(key: string, textureURL?: string, atlasURL?: string, atlasData?: any, format?: number): Phaser.Loader;

    ```

# animation events
  - events
    ```js
    this.animation.onStart.add(this.onAnimationStart, this);
    this.animation.onLoop.add(this.onAnimationLoop, this);
    this.animation.onComplete.add(this.onAnimationStop, this);

    onAnimationStart (sprite: Phaser.Sprite, animation: Phaser.Animation) { }

    onAnimationLoop (sprite: Phaser.Sprite, animation: Phaser.Animation) { }

    onAnimationStop (sprite: Phaser.Sprite, animation: Phaser.Animation) { }

    // The number of times the animation has looped since it was last started.
    animation.loopCount

    // The loop state of the Animation.
    animation.loop

    ```
# stop animation
  - stop animation
    ```js
    this.greenJellyfish.animations.stop(null, true);
    stop(name?: string, resetFrame?: boolean): void;
    //  This will just top the animation from running, freezing it at its current frame
    // greenJellyfish.animations.stop();

    //  This method will reset the frame to frame 1 after stopping

    ```
# destroy animation
# looped animation
  - Group.setAll()
    ```js
    // Quickly set the same property across all children of this group to a new value.
    // This call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children. If you need that ability please see Group.setAllChildren.
    // The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.
    setAll(key, value, checkAlive, checkVisible, operation, force)
    this.sprites.setAll('x', 10, true, true, 1);

    ```
  - Group.remove(child), Sprite.destroy
    ```js
        this.sprites.remove(sprite, true);
        // Removes the given child from this group.
        // This will dispatch an onRemovedFromGroup event from the child (if it has one), and optionally destroy the child.
        // If the group cursor was referring to the removed child it is updated to refer to the next child.

        Sprite.destroy(destroyChildren?: boolean): void;
        // Destroys the Game Object. This removes it from its parent group, destroys the input, event and animation handlers if present
        // and nulls its reference to game, freeing it up for garbage collection.
        // If this Game Object has the Events component it will also dispatch the onDestroy event.
        // You can optionally also destroy the BaseTexture this Game Object is using. Be careful if you've
        // more than one Game Object sharing the same BaseTexture.

    ```

# frame update
  - on animation frame update
    ```js
    let walk = mummy.animations.add(Animation.walk);

    // Gets or sets if this animation will dispatch the onUpdate events upon changing frame.
    walk.enableUpdate = true;

    // This event is dispatched when the Animation changes frame.
    // By default this event is disabled due to its intensive nature. Enable it with: Animation.enableUpdate = true.
    // Note that the event is only dispatched with the current frame. In a low-FPS environment Animations
    // will automatically frame-skip to try and claw back time, so do not base your code on expecting to
    // receive a perfectly sequential set of frames from this event.
    walk.onUpdate.add(this.onAnimationUpdate, this);

    ```
# two frame test => frame update
# change frame
  - change frame (texture不变)
    ```js
    // Gets or sets the current frame name of the texture being used to render this Game Object.
    // To change the frame set frameName to the name of the new frame in the texture atlas you wish this Game Object to use,
    // for example: player.frameName = "idle".
    // If the frame name given doesn't exist it will revert to the first frame found in the texture and throw a console warning.
    // If you are using a sprite sheet then you should use the frame property instead.
    // If you wish to fully replace the texture being used see loadTexture.
    greenJellyfish.frameName = 'greenJellyfish0010';

    ```
# change texture on click  => load texture
  - change texture
    ```js
    // Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.
    // If your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the frame or frameName properties instead.
    // You should only use loadTexture if you want to replace the base texture entirely.
    // Calling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU.
    // You can use the new const Phaser.PENDING_ATLAS as the texture key for any sprite.
    // Doing this then sets the key to be the frame argument (the frame is set to zero).
    // This allows you to create sprites using load.image during development, and then change them
    // to use a Texture Atlas later in development by simply searching your code for 'PENDING_ATLAS'
    // and swapping it to be the key of the atlas data.
    // Note: You cannot use a RenderTexture as a texture for a TileSprite.
    this.sprite.loadTexture(AssetID.mummy, 0);

    ```
# dynamic animation
  - make a new sprite but not add to game
    ```js
    // make.sprite(x, y, key, frame) → {Phaser.Sprite}
    // Create a new Sprite with specific position and sprite sheet key.

    let orb = this.make.sprite(0, 0, AssetID.orb);

    ```
  - dynamic animation
    在bmd中动态画出图片，作为动画帧
    ```js
    let bmd = this.add.bitmapData(frames * w, h);
    let x = 0;
    let y = -h; // 第一帧只看到orb的最底部

    for (let index = 0; index < frames; index++) {
      bmd.draw(orb, x, y);
      x += w;
      y += 3;
    }

    this.cache.addSpriteSheet('dynamic', '', bmd.canvas, w, h, frames, 0, 0);

    let test = this.add.sprite(x, y, 'dynamic');
    test.animations.add('float');
    test.play('float', 20, true);

    ```
# group creation
  - callAll
    ```js
    //  Here is the important part. Group.callAll will call a method that exists on every child in the Group.
    //  In this case we're saying: child.animations.add('swim', frameNames, 30, true, false)
    //  The second parameter ('animations') is really important and is the context in which the method is called.
    //  For animations the context is the Phaser.AnimationManager, which is linked to the child.animations property.
    //  Everything after the 2nd parameter is just the usual values you'd pass to the animations.add method.
    group.callAll('animations.add', 'animations', 'swim', frameNames, 30, true, false);

    ```
# multiple anims => sprite sheet

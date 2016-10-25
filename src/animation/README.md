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


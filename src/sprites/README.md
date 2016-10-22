# add-a-sprite
  - 加载和添加精灵
    ```js
    this.load.image(AssetID.Mushroom, '/assets/sprites/mushroom2.png');

    this.add.sprite(200, 200, AssetID.Mushroom);
    ```
# add-an-image
# add-several-sprites
  - spritesheet
    ```js
    this.load.spritesheet(cacheKey, 'xxx/xxx.png', w, h, maxFrames);
    mummy.animations.add(Animation.Walk);
    mummy.animations.play(Animation.Walk, 20, true);
    ```

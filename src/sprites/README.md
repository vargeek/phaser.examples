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
# create-sprite
  - spritesheet
    ```js
    // 如果适用所有帧，可以不传入frameMax
    this.add.spritesheet(key: string, url: string, frameWidth: number, frameHeight: number, frameMax?: number, margin?: number, spacing?: number): Phaser.Loader;

    // in preload()
    this.load.spritesheet(cacheKey, 'xxx/xxx.png', 37, 45, 18);

    // in create()
    this.add.sprite(x, y, cacheKey);
    this.sprite.animations.add(animationName);
    this.sprite.animations.play(animationName, 30, true);

    ```
  - sprite from bitmapdata
    ```js
    let bmd = this.add.bitmapData(128, 128);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 128, 128);
    bmd.ctx.fillStyle = '#ff0000';
    bmd.ctx.fill();
    this.rectSprite = this.add.sprite(200, 200, bmd);

    ```

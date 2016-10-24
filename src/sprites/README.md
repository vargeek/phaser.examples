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
# shared-sprite-textures
  - make several unique sprites from the same file
    ```js
    this.load.atlas(shareKey, 'xxx/xxx.png','xxx/xxx.json');
    let chick = this.add.sprite(x, y, shareKey);
    chick.frameName = 'budbrain_chick.png';
    // or
    // chick.frame = 0;

    let cop = this.add.sprite(x, y, shareKey);
    cop.frameName = 'ladycop.png';

    ```
# multi texture test, multi texture example, multi texture example 32
  优化渲染
# extending-sprite
  - 继承 Phaser.Sprite 和使用子类
    ```js
    class SuperSprite extends Phaser.Sprite {

      constructor (...) {
        super(game: Phaser.Game, x: number, y: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number);
      }

    }

    // in create()
    let sprite = new SuperSprite(...);
    this.add.existing(sprite); //或game.add.existing(sprite);

    ```

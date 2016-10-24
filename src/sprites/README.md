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
# destroy
  - destroy
    ```js
    sprite.destroy();

    ```
# sprite-tint
  - sprite-tint
    ```js
    this.sprite.tint = Math.random() * 0xffffff;

    ```
# sprite-dimensions
  - dimensions
    ```js
    sprite1.width, sprite1.height

    ```
# sprite-anchor
  - anchor
    ```js
      this.sprite.anchor.x -= 0.1;
      this.sprite.anchor.y -= 0.1;
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.anchor.setTo(0.5, 0.5);

    ```
# pivot
  - pivot
    以以 anchor 为原点的坐标 (pivot.x, pivot.y) 为旋转点。
    ```js
    // 旋转点: sprite左上角向右100单位
    sprite.pivot.x = 100;

    // 旋转点: sprite中心向右100单位
    sprite.anchor.set(0.5);
    sprite.pivot.x = 100;

    // 旋转点: sprite中心向右100单位, 向下100单位
    sprite.anchor.set(0.5);
    sprite.pivot.x = 100;
    sprite.pivot.y = 100;
    ```
# child-sprites
  - 添加子精灵
    ```js
    this.parent.addChild(this.game.make.sprite(x, y, cacheKey));

    ```
# rotate-and-scale
  - rotate and scale
    ```js
    to(properties: any, duration?: number, ease?: string, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Phaser.Tween;

    // rotate
    this.add.tween(this.sprite).to({angle: 45}, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
    // scale
    this.add.tween(this.sprite.scale).to({x: 1.5, y: 1.5}, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);

    ```
# rotate-and-scale
  - rotate
    ```js
    // in update() 改变角度
    this.sprite.angle += 1;
    // or in update() 改变弧度
    this.sprite.rotation += 0.01;

    // 使用Tween
    to(properties: any, duration?: number, ease?: string, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Phaser.Tween;
    this.add.tween(this.sprite).to({angle: 45}, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
    this.add.tween(this.sprite.scale).to({x: 1, y: 1}, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);

    ```
  - rotated atlas frame support
    ```js
    /**
     * "cactuar":
     * {
	   *   "frame": {"x":491,"y":2,"w":213,"h":159},
	   *   "rotated": true,
	   *   "trimmed": true,
	   *   "spriteSourceSize": {"x":0,"y":0,"w":213,"h":159},
	   *   "sourceSize": {"w":231,"h":175},
	   *   "pivot": {"x":0.5,"y":0.5}
     * },
     * "contra1":
     * {
     * 	"frame": {"x":249,"y":395,"w":83,"h":169},
     * 	"rotated": true,
     * 	"trimmed": false,
     * 	"spriteSourceSize": {"x":0,"y":0,"w":83,"h":169},
     * 	"sourceSize": {"w":83,"h":169},
     * 	"pivot": {"x":0.5,"y":0.5}
     * },
     */
    this.load.atlas(key, 'xxx/xxx.png', 'xxx/xxx.json'); // in preload()
    // in create()
    this.contra = this.add.sprite(x,y, cacheKey, frameName);
    // Should be 83x169 (the original dimensions, even though rotated in the atlas)
    console.log(this.contra.width, this.contra.height);

    ```
  - rotate sprite around point
    ```js
    // in create()
    this.orb = this.add.sprite(x, y, cacheKey);
    this.orb.anchor.set(0.5);
    this.orb.pivot.x = 100;

    // 绕 this.ship旋转
    // in preRender()
    this.orb.x = this.ship.x;
    this.orb.y = this.ship.y;

    ```
# fixed-scale
  - 限定 scale 取值范围
    ```js
    this.parent = this.add.sprite(100, 100, AssetID.Disk);

    this.child = this.make.sprite(0, 0, AssetID.Ball);
    this.parent.addChild(this.child);

    this.child.setScaleMinMax(1, 2);

    // Even though the parent will scale, the child will remain at its own scale (and this is carried on down to any of its children)
    this.add.tween(this.parent.scale).to({x: 3, y:3}, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);

    ```
# sprite bounds
  - rect
    ```js
    this.rect = new Phaser.Rectangle(x, y, w, h);

    /**
     *               TOP_LEFT     TOP_CENTER     TOP_RIGHT
     * LEFT_TOP     |-------------------------------------| RIGHT_TOP
     *              |                                     |
     * LEFT_CENTER  |                                     | RIGHT_CENTER
     *              |                                     |
     * LEFT_BOTTOM  |                                     | RIGHT_BOTTOM
     *              |-------------------------------------|
     *              BOTTOM_LEFT   BOTTOM_CENTER  BOTTOM_RIGHT
     */
    getPoint(position: number, out: Phaser.Point): Phaser.Point;
    this.rect.getPoint(Phaser.TOP_LEFT, undefined)

    this.sprite.centerX = this.rect.centerX;
    this.sprite.centerY = this.rect.centerY;

    ```
  - debug rect
    ```js
    this.game.debug.rectangle(this.rect, '#ffffff', filled);
    this.game.debug.geom(this.rect.getPoint(Phaser.TOP_CENTER, undefined), '#ff00ff');

    ```
# align in rectangle
  - align in
    ```js
    alignIn(container: Phaser.Rectangle | Phaser.Sprite | Phaser.Image | Phaser.Text | Phaser.BitmapText | Phaser.Button | Phaser.Graphics | Phaser.TileSprite, position?: number, offsetX?: number, offsetY?: number): any;

    this.sprite1.alignIn(this.rect, Phaser.TOP_LEFT);

    ```
# align to rectangle
  - align to
    ```js
    alignTo(container: Phaser.Rectangle | Phaser.Sprite | Phaser.Image | Phaser.Text | Phaser.BitmapText | Phaser.Button | Phaser.Graphics | Phaser.TileSprite, position?: number, offsetX?: number, offsetY?: number): any;

    this.sprite1.alignTo(this.rect, Phaser.TOP_CENTER);

    ```
# align to sprite
  - 创建多个 sprite
    ```js
    createMultiple(quantity: number, key: string | string[], frame?: any | any[], exists?: boolean): any[];

    this.world.createMultiple(12, AssetID.pangball, 0, true);

    ```
  - align to sprite
    ```js
    (this.world.getChildAt(1) as Phaser.Sprite).alignTo(sprite, Phaser.TOP_LEFT);

    ```
# align text to sprite
  - align text to sprite
    ```js
    text1.alignTo(sprite, Phaser.RIGHT_TOP, 16);

    ```
# align multiple sprites
  - align multiple sprites
    ```js
    sprite2.alignTo(sprite1, Phaser.RIGHT_CENTER, 16);
    sprite3.alignTo(sprite2, Phaser.RIGHT_CENTER, 16);

    ```

# align within sprite
  - align within sprite
    ```js
    sprite1.alignIn(anotherSprite, Phaser.BOTTOM_RIGHT);

    ```


# rope
  - rope
    ```js
    create () {

      let count = 0;
      let length = 918 / 20;
      let points: Phaser.Point[] = [];

      for (let index = 0; index < 20; index++) {
        points.push(new Phaser.Point(index * length, 0));
      }

      this.rope =  this.add.rope(32, this.world.centerY, AssetID.snake, null, points);
      this.rope.scale.set(0.8, 0.8);

      this.rope.updateAnimation = function () {
        count += 0.1;
        for (let index = 0; index < points.length; index++) {
          points[index].y = Math.sin(index * 0.5 + count) * 20;
        }

      }
    }

    ```
  - debug rope
    ```js
    render () {
      this.game.debug.ropeSegments(this.rope);
    }

    ```

# horizontal crop
  - horizontal crop
    ```js
    // in create()
    this.pic = this.add.image(this.world.centerX, this.world.centerY, AssetID.trsi);
    // crop后，x,y不变，长宽会发生变化。设置anchor使pic始终居中
    this.pic.anchor.setTo(0.5, 0.5);

    this.cropRect = new Phaser.Rectangle(0, 0, 0, this.pic.height);
    let tween = this.add.tween(this.cropRect).to({width: this.pic.width}, 3000, Phaser.Easing.Bounce.Out, false, 0, Number.MAX_VALUE, true);

    this.pic.crop(this.cropRect);

    // in update()
    this.pic.updateCrop();
    ```
# vertical crop
# dynamic crop
  - dynamic crop
    ```js
    // in create()
    this.w = this.pic.width;
    this.h = this.pic.height;

    this.cropRect = new Phaser.Rectangle(0, 0, 128, 128);
    this.pic.crop(this.cropRect);

    // in update()
    if (this.input.x < this.w && this.input.y < this.h) {
      // 将图片移动到input的位置
      this.pic.x = this.input.x;
      this.pic.y = this.input.y;
      // 从原始图片的x,y处开始crop
      this.cropRect.x = this.input.x;
      this.cropRect.y = this.input.y;
      // 更新crop
      this.pic.updateCrop();
    }

    ```


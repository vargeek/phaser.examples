# load-audio
  - 加载并播放音乐
    ```js
    // 如果确定只需要支持一种格式，可以直接使用字符串
    this.load.audio(AssetID.Boden, [
      'xxx/xxx.mp3',
      'xxx/xxx.ogg'
    ])

    this.music = this.sound.play(AssetID.Boden);

    ```
  - 状态
    ```js
    if (this.music.isDecoding){}

    ```
  - 调试
    ```js
    this.game.debug.soundInfo(this.music, 32, 32);

    ```
# load-binary-file
  - 加载二进制文件， 得到 ArrayBuffer 数组， 转换成 Uint8Array 视图
    ```js
    preload () {
      this.load.binary(AssetID.Mod, '/assets/audio/protracker/global_trash_3_v2.mod', this.binaryLoadCallback, this);
    }

    binaryLoadCallback (key: string, data: ArrayBuffer) {
      return new Uint8Array(data);
    }

    ```
  - 使用二进制文件数据
    ```js
    let buffer = this.cache.getBinary(AssetID.Mod) as Uint8Array;

    ```
# check-cache
  - 检查缓存中是否包含某数据
    ```js
    let image = this.cache.checkImageKey(AssetID.Image);
    let text = this.cache.checkTextKey(AssetID.Html);

    ```
# load-bitmap-font
  - 需要加载字体 png 和 xml 文件
    ```js
    this.load.bitmapFont(AssetID.Desyrel, '/assets/fonts/bitmapFonts/desyrel-pink.png', '/assets/fonts/bitmapFonts/desyrel-pink.xml');

    ```
  - 使用字体
    ```js
    this.text = this.add.bitmapText(200, 100, AssetID.Desyrel, 'Bitmap fonts', 64);
     this.text.setText('foo-bar');

    ```
    - 工具
      + On Windows you can use the free app BMFont: http://www.angelcode.com/products/bmfont/
      + On OS X we recommend Glyph Designer: http://www.71squared.com/en/glyphdesigner
# load-events
  - 监听加载事件
    ```js
    this.load.onLoadStart.add(this.onLoadStart, this
    );
    this.load.onFileComplete.add(this.onFileComplete, this);
    this.load.onLoadComplete.add(this.onLoadComplete, this);
    // onFileComplete (progress: number, cacheKey: string, success: boolean, totalLoaded: number, totalFiles: number)

    ```
  - 非preload()函数内调用的load方法，需要手动start。
    ```js
    this.load.image('picture1', 'xxx/xxx.jpg');
    this.load.start();

    ```
  - button: 使用精灵表单，以便设置不同状态下的图片
    ```js
    this.load.spritesheet(key, 'xxx/xxx.png', w, h);

    this.add.button(x, y, key, this.onClickStartButton, this, overframe, outframe, downframe);

    ```
# load-image
  - 加载图片
    ```js
    preload () {
      this.load.image(AssetID.ImageKey, '/assets/sprites/phaser2.png');
    }

    create () {
      this.add.sprite(0, 0, AssetID.ImageKey);
    }

    ```
# load-json-file
  - 加载和获取
    phaser 内部使用 XMLHttpRequest 请求 json 文件。
    ```js
    this.load.json(AssetID.Version, '/assets/version.json');

    this.cache.getJSON(AssetID.Version) as VersionJSON;
    ```

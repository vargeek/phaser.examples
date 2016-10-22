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
# load-spritesheet
  - spritesheet
    和 Texture Atlas 的区别: spritesheet每一帧的尺寸是固定的， Texture Atlas每一帧尺寸是可变化的，尺寸信息保存在json或xml文件中。
  - 使用
    ```js
    this.load.spritesheet(key, 'xxx/xxx.png', frameWidth, frameHeight, frameMax);

    let sprite = this.add.sprite(x, y, key);
    sprite.animations.add(name);
    sprite.animations.play(name, frameRate, loop);

    ```
# load-texture-atlas
  - 加载 texture-atlas
    JSON文件必须使用UTF-8编码，以免部分浏览器无法加载
    ```js
    this.load.atlas(key: string, textureURL?: string, atlasURL?: string, atlasData?: any, format?: number): Phaser.Loader;
    // format 默认为 Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY
    this.load.atlas(key, 'xxx/xxx.png', 'xxx/xxx.json');
    this.load.atlas(key, 'yyy/yyy.png','yyy/yyy.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

    ```
  - 动画
    ```js
    let octopus = this.add.sprite(x, y, AssetID.Seacreatures);
    let frameNames = Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4);
    // static generateFrameNames(prefix: string, start: number, stop: number, suffix?: string, zeroPad?: number): string[];
    // ["octopus0000","octopus0001",...,"octopus0024"]

    octopus.animations.add(Animation.Swim, frameNames, frameRate, loop);
    octopus.animations.play(Animation.Swim);

    ```
  - 显示某一帧
    ```js
    this.add.sprite(x, y, key);

    // 相当于
    this.add.sprite(0, 0, key, 0);
    // 或
    this.add.sprite(0, 0, key, 'cactuar');

    this.add.sprite(0, 0, key, 1);
    // 相当于
    this.add.sprite(0, 0, key, 'carrot');

    ```
# load-starling-atlas
  - 加载 Starling XML 文件格式的 texture atlas files
    ```js
    atlasXML(key: string, textureURL?: string, atlasURL?: string, atlasData?: any): Phaser.Loader;
    this.load.atlasXML(key, 'xxx/xxx.png', 'xxx/xxx.xml');

    ```
# load-text-file
  - 加载和获取文本
    ```js
     game.load.text(key, url);

     let text = this.cache.getText(key);

    ```
# load-tilemap-json
  - 加载资源：
    Tilemap 分成两部分： 地图数据 (CSV、JSON) 和 tileset (图片文件)
    ```js
    this.load.tilemap(key, url?, data?, format);
    // url 和 data 两个参数二选一，另一个参数设置null。 format 包括 Phaser.Tilemap.TILED_JSON 和 Phaser.Tilemap.CSV

    // 图片集
    this.load.image(key, 'xxx/xxx.png');

    ```
  - 添加地图
    ```js
    // 添加tilemap 地图数据、tileset信息等
    this.map = this.add.tilemap(key);

    // 添加图片集
    // tilesetName 对应 json 中的
    // {tilesets:{name:SuperMarioBros-World1-1}}
    this.map.addTilesetImage(tilesetName, cacheKey);

    // 添加地图层
    // layerName 对应 JSON 中的
    //  {layers:[{name:World1, data:...}]}
    this.layer = this.map.createLayer(layerName);

    // 调整游戏世界的size
    this.layer.resizeWorld();

    ```
# load-video
  - 加载、添加、播放视频
    ```js
    this.load.video(cacheKey, 'xxx/xxx.webm');

     this.video = this.add.video(AssetID.Chrome);
     // x, y, anchor x, anchor y, scale x, scale y
    this.video.addToWorld(this.world.centerX, this.world.centerY, 0.5, 0.5, 2, 2);

    // loop
    this.video.play(true);

    // pause
    this.video.paused = true;

    ```

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

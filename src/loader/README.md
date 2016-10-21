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

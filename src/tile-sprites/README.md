# tiling sprite
  - tile sprite
    ```js
    this.tilesprite = this.add.tileSprite(0, 0, 800, 600, AssetID.starfield);

    // The offset position of the image that is being tiled
    // 超出范围会回到范围另一边。
    this.tilesprite.tilePosition.x += 8;
    ```
# sprite sheet tiling sprite
  - tilesprite from sprite sheet
    ```js
    // spritesheet picture file
    this.load.spritesheet(AssetID.mummy, 'xxx/xxx.png', w, h, maxframe);
    this.sprite = this.add.tileSprite(0, 0, 800, 600, AssetID.mummy);

    // spritesheet atlas file
    this.load.atlas(AssetID.seacreatures, 'xxx/xxx.png', 'xxx/xxx.json');
    this.sprite = this.add.tileSprite(0, 0, 800, 600, AssetID.seacreatures, 'octopus0002');
    ```
# tiling atlas trim
# tiling sprite atlas
# tiling sprite atlas 32x32
# animated tiling sprite
# colliding with tiling sprite
# tile sprite from animated sprite

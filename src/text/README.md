# text
  - Text
  - bitmapFont
  - BitmapText: creates one Sprite object per letter of text
  - RetroFont: creates a single texture that you can apply to a game object
# bitmap-font-cache-as-bitmap
  - DisplayObject.cacheAsBitmap>
    ```js
    // http://localhost:3000/PIXI.PIXI.DisplayObject.html#cacheAsBitmap
    // cacheAsBitmap :Boolean
    // Sets if this DisplayObject should be cached as a bitmap.

    // When invoked it will take a snapshot of the DisplayObject, as it is at that moment, and store it in a RenderTexture. This is then used whenever this DisplayObject is rendered. It can provide a performance benefit for complex, but static, DisplayObjects. I.e. those with lots of children.

    // Cached Bitmaps do not track their parents. If you update a property of this DisplayObject, it will not re-generate the cached bitmap automatically. To do that you need to call DisplayObject.updateCache.

    // To remove a cached bitmap, set this property to null.
    txt1.cacheAsBitmap = true;

    ```
# bitmap-font-from-texture-atlas
# bitmap-fonts
  - load.bitmapFont>
    ```js
    // http://localhost:3000/Phaser.Loader.html#bitmapFont
    // bitmapFont(key, textureURL, atlasURL, atlasData, xSpacing, ySpacing) → {Phaser.Loader}
    // Adds Bitmap Font files to the current load queue.
    // To create the Bitmap Font files you can use:
    // BMFont (Windows, free): http://www.angelcode.com/products/bmfont/
    // Glyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner
    // Littera (Web-based, free): http://kvazars.com/littera/
    // You can choose to either load the data externally, by providing a URL to an xml file.
    // Or you can pass in an XML object or String via the xmlData parameter.
    // If you pass a String the data is automatically run through Loader.parseXML and then immediately added to the Phaser.Cache.
    // If URLs are provided the files are not loaded immediately after calling this method, but are added to the load queue.
    // The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
    // Retrieve the file via Cache.getBitmapFont(key). XML files are automatically parsed upon load.
    // If you need to control when the XML is parsed then use Loader.text instead and parse the XML file as needed.
    // The URLs can be relative or absolute. If the URL is relative the Loader.baseURL and Loader.path values will be prepended to it.
    // If the textureURL isn't specified then the Loader will take the key and create a filename from that.
    // For example if the key is "megaFont" and textureURL is null then the Loader will set the URL to be "megaFont.png".
    // The same is true for the atlasURL. If atlasURL isn't specified and no atlasData has been provided then the Loader will
    // set the atlasURL to be the key. For example if the key is "megaFont" the atlasURL will be set to "megaFont.xml".
    // If you do not desire this action then provide URLs and / or a data object.
    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');

    ```
  - add.bitmapText>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#bitmapText

    // bitmapText(x, y, font, text, size, group) → {Phaser.BitmapText}
    // Create a new BitmapText object.

    // BitmapText objects work by taking a texture file and an XML file that describes the font structure.
    // It then generates a new Sprite object for each letter of the text, proportionally spaced out and aligned to match the font structure.

    // BitmapText objects are less flexible than Text objects, in that they have less features such as shadows, fills and the ability to use Web Fonts.
    // However you trade this flexibility for pure rendering speed. You can also create visually compelling BitmapTexts by processing the font texture in an image veditor first, applying fills and any other effects required.

    // To create multi-line text insert \r, \n or \r\n escape codes into the text string.

    // To create a BitmapText data files you can use:

    // BMFont (Windows, free): http://www.angelcode.com/products/bmfont/
    // Glyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner
    // Littera (Web-based, free): http://kvazars.com/littera/
    this.bmpText = this.add.bitmapText(200, 100, 'desyrel', 'Phaser & Pixi\nrocking!', 64);

    ```
# bitmapfont-drag
  - bitmapText + inputHandler.enableDrag
# bitmaptext-anchor-x
  - Phaser.Line>
    ```js
    // http://localhost:3000/Phaser.Line.html
    // new Line(x1, y1, x2, y2)
    // Creates a new Line object with a start and an end point.
    this.line = new Phaser.Line(400, 0, 400, 600);

    ```
# bitmaptext-anchor-y
# bitmaptext-max-width
  - bmpText.maxWidth>
    ```js
    // http://localhost:3000/Phaser.BitmapText.html#maxWidth
    // maxWidth :number
    // The maximum display width of this BitmapText in pixels.
    // If BitmapText.text is longer than maxWidth then the lines will be automatically wrapped
    // based on the last whitespace character found in the line.
    // If no whitespace was found then no wrapping will take place and consequently the maxWidth value will not be honored.
    // Disable maxWidth by setting the value to 0. The maximum width of this BitmapText in pixels.
    this.bmpText.maxWidth = 400;

    ```
# bitmaptext-purge-glyphs
  - bmpText.purgeGlyphs>
    ```js
    // http://localhost:3000/Phaser.BitmapText.html#purgeGlyphs
    // If a BitmapText changes from having a large number of characters to having very few characters it will cause lots of Sprites to be retained in the BitmapText._glyphs array. Although they are not attached to the display list they still take up memory while sat in the glyphs pool waiting to be re-used in the future.
    // If you know that the BitmapText will not grow any larger then you can purge out the excess glyphs from the pool by calling this method. Calling this doesn't prevent you from increasing the length of the text again in the future.
    // Returns:  integer - The amount of glyphs removed from the pool.
    let purged = this.bmpText.purgeGlyphs();

    ```
# bitmaptext-with-physics
  - bmpText + arcade.enable
# bitmaptext-with-physics-updating
# center-text
  - add.text>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#text
    // text(x, y, text, style, group) → {Phaser.Text}
    // Creates a new Text object.
    this.text = this.add.text(0, 0, 'phaser 2.6 text bounds', style);

    ```
  - text.boundsAlignH>
    ```js
    // http://localhost:3000/Phaser.Text.html#boundsAlignH
    // boundsAlignH :string
    // Horizontal alignment of the text within the textBounds. Can be: 'left', 'center' or 'right'.

    ```
  - text.boundsAlignV>
    ```js
    // http://localhost:3000/Phaser.Text.html#boundsAlignV
    // boundsAlignV :string
    // Vertical alignment of the text within the textBounds. Can be: 'top', 'middle' or 'bottom'.

    ```
  - text.font>
    ```js
    // http://localhost:3000/Phaser.Text.html#font
    // font :string
    // Change the font family that the text will be rendered in, such as 'Arial'.
    // Multiple CSS font families and generic fallbacks can be specified as long as CSS font-family rules are followed.
    // To change the entire font string use cssFont instead: eg. text.cssFont = 'bold 20pt Arial'.

    ```
  - font.fill>
    ```js
    // http://localhost:3000/Phaser.Text.html#fill
    // fill :object
    // A canvas fillstyle that will be used on the text eg 'red', '#00FF00'.

    ```
  - text.setShadow>
    ```js
    // http://localhost:3000/Phaser.Text.html#setShadow
    // setShadow(x, y, color, blur, shadowStroke, shadowFill) → {Phaser.Text}
    // Sets a drop shadow effect on the Text. You can specify the horizontal and vertical distance of the drop shadow with the x and y parameters.
    // blur=0: The shadowBlur value. Make the shadow softer by applying a Gaussian blur to it. A number from 0 (no blur) up to approx. 10 (depending on scene).
    // shadowStroke=true: Apply the drop shadow to the Text stroke (if set).
    // shadowFill=true: Apply the drop shadow to the Text fill (if set).

    // The color controls the shade of the shadow (default is black) and can be either an rgba or hex value.
    // The blur is the strength of the shadow. A value of zero means a hard shadow, a value of 10 means a very soft shadow.
    // To remove a shadow already in place you can call this method with no parameters set.
    this.text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    ```
  - text.setTextBounds>
    ```js
    // http://localhost:3000/Phaser.Text.html#setTextBounds
    // setTextBounds(x, y, width, height) → {Phaser.Text}
    // The Text Bounds is a rectangular region that you control the dimensions of into which the Text object itself is positioned,  regardless of the number of lines in the text, the font size or any other attribute.

    // Alignment is controlled via the properties boundsAlignH and boundsAlignV within the Text.style object, or can be directly set through the setters Text.boundsAlignH and Text.boundsAlignV. Bounds alignment is independent of text alignment.

    // For example: If your game is 800x600 in size and you set the text bounds to be 0,0,800,600 then by setting boundsAlignH to 'center' and boundsAlignV to 'bottom' the text will render in the center and at the bottom of your game window, regardless of  how many lines of text there may be. Even if you adjust the text content or change the style it will remain at the bottom center of the text bounds.

    // This is especially powerful when you need to align text against specific coordinates in your game, but the actual text dimensions may vary based on font (say for multi-lingual games).

    // If Text.wordWrapWidth is greater than the width of the text bounds it is clamped to match the bounds width.

    // Call this method with no arguments given to reset an existing textBounds.

    // It works by calculating the final position based on the Text.canvas size, which is modified as the text is updated. Some fonts have additional padding around them which you can mitigate by tweaking the Text.padding property. It then adjusts the pivot
    // property based on the given bounds and canvas size. This means if you need to set the pivot property directly in your game then you either cannot use setTextBounds or you must place the Text object inside another DisplayObject on which you set the pivot.
    this.text.setTextBounds(0, 100, 800, 100);

    ```
# center-text-on-sprite
  - 在update()中手动更新text的坐标
# clean-text
  - bmpText.cleanText>
    ```js
    // http://localhost:3000/Phaser.BitmapText.html#cleanText
    // cleanText(text, replace) → {string}
    // 清除字体中没有的字符(这些字符无法显示)
    // Given a text string this will scan each character in the string to ensure it exists in the BitmapText font data.
    // If it doesn't the character is removed, or replaced with the replace argument.
    // If no font data has been loaded at all this returns an empty string, as nothing can be rendered.
    let cleanString = text1.cleanText(dirtyString);

    ```
# colored-characters
  - text.addColor>
    ```js
    // http://localhost:3000/Phaser.Text.html#addColor
    // addColor(color, position) → {Phaser.Text}
    // Set specific colors for certain characters within the Text.

    // It works by taking a color value, which is a typical HTML string such as #ff0000 or rgb(255,0,0) and a position.
    // The position value is the index of the character in the Text string to start applying this color to.
    // Once set the color remains in use until either another color or the end of the string is encountered.
    // For example if the Text was Photon Storm and you did Text.addColor('#ffff00', 6) it would color in the word Storm in yellow.
    // If you wish to change the stroke color see addStrokeColor instead.
    text.addColor('#ffff00', 16);

    ```
# display-text-word-by-word
# dynamic-text-shadow
  - text.align>
    ```js
    // http://localhost:3000/Phaser.Text.html#align
    // align :string
    // Controls the horizontal alignment for multiline text.
    // Can be: 'left', 'center' or 'right'.
    // Note: Does not affect single lines of text. For that please see setTextBounds.
    this.text.align = 'center';

    ```
# extending-text
  - 继承
  - 子类中实现update方法
# google-webfonts
  - text.fill(CanvasGradient)>
    ```js
    // http://localhost:3000/Phaser.Text.html#context
    // context :HTMLCanvasElement
    // The context of the canvas element that the text is rendered to.
    this.grd = this.text.context.createLinearGradient(0, 0, 0, this.text.canvas.height);
    this.grd.addColorStop(0, '#8ed6ff');
    this.grd.addColorStop(1, '#004cb3');
    this.text.fill = this.grd;

    ```
  - text.stroke>
    ```js
    // http://localhost:3000/Phaser.Text.html#stroke
    // stroke :string
    // A canvas fillstyle that will be used on the text stroke eg 'blue', '#FCFF00'.
    this.text.stroke = '#000000';

    ```
  - text.strokeThickness>
    ```js
    // http://localhost:3000/Phaser.Text.html#strokeThickness
    // strokeThickness :number
    // A number that represents the thickness of the stroke. Default is 0 (no stroke)
    this.text.strokeThickness = 2;

    ```
# hello-arial
# kern-of-duty
  - 显示字幕
# line-color
# littera
  - [littera](http://kvazars.com/littera/)
# remove-text
  - text.destroy>
    ```js
    // http://localhost:3000/Phaser.Text.html#destroy
    // destroy(destroyChildren)
    // Destroy this Text object, removing it from the group it belongs to.
    this.text.destroy();

    ```
# retro-font-1
  - add.RetroFont>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#retroFont
    // retroFont(font, characterWidth, characterHeight, chars, charsPerRow, xSpacing, ySpacing, xOffset, yOffset) → {Phaser.RetroFont}
    // Create a new RetroFont object.
    // font: The key of the image in the Game.Cache that the RetroFont will use.
    // characterWidth: The width of each character in the font set.
    // chars{string}: The characters used in the font set, in display order. You can use the TEXT_SET consts for common font set arrangements.
    // charsPerRow: The number of characters per row in the font set.

    // A RetroFont can be used as a texture for an Image or Sprite and optionally add it to the Cache.
    // A RetroFont uses a bitmap which contains fixed with characters for the font set. You use character spacing to define the set.
    // If you need variable width character support then use a BitmapText object instead. The main difference between a RetroFont and a BitmapText
    // is that a RetroFont creates a single texture that you can apply to a game object, where-as a BitmapText creates one Sprite object per letter of text.
    // The texture can be asssigned or one or multiple images/sprites, but note that the text the RetroFont uses will be shared across them all,
    // i.e. if you need each Image to have different text in it, then you need to create multiple RetroFont objects.
    this.font = this.add.retroFont('knightHawks', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1,);
    image = this.add.image(this.world.centerX, 6 + index * 32, this.font);
    ```
  - retroFont.text>
    ```js
    // http://localhost:3000/Phaser.RetroFont.html#text
    // text :string
    // Set this value to update the text in this sprite. Carriage returns are automatically stripped out if multiLine is false. Text is converted to upper case if autoUpperCase is true.
    this.font.text = `Phaser x: ${this.input.x} y: ${this.input.y}`;

    ```
# retro-font-2
  - retroFont.setText>
    ```js
    // http://localhost:3000/Phaser.RetroFont.html#setText
    // setText(content, multiLine, characterSpacing, lineSpacing, lineAlignment, allowLowerCase)
    // A helper function that quickly sets lots of variables at once, and then updates the text.
    // multiLine=false:  Set to true if you want to support carriage-returns in the text and create a multi-line sprite instead of a single line.
    // characterSpacing=0: To add horizontal spacing between each character specify the amount in pixels
    // lineSpacing=0: To add vertical spacing between each line of text, set the amount in pixels.
    // lineAlignment='left': Align each line of multi-line text. Set to RetroFont.ALIGN_LEFT, RetroFont.ALIGN_RIGHT or RetroFont.ALIGN_CENTER.
    // allowLowerCase=false:  Lots of bitmap font sets only include upper-case characters, if yours needs to support lower case then set this to true.
    this.font2.setText('phaser 2\nin the house', true, 0, 8, Phaser.RetroFont.ALIGN_CENTER);

    ```
# set-properties-after-creation
# text-bounds
  - text.setTextBounds
  - text.wordWrap>
    ```js
    // http://localhost:3000/Phaser.Text.html#wordWrap
    // wordWrap :boolean
    // Indicates if word wrap should be used.

    ```
  - text.wordWrapWidth>
    ```js
    // http://localhost:3000/Phaser.Text.html#wordWrapWidth
    // wordWrapWidth :number
    // The width at which text will wrap.

    ```
# text-events
# text-gradient
  - text.fill(CanvasGradient)>
    ```js
    // http://localhost:3000/Phaser.Text.html#context
    // context :HTMLCanvasElement
    // The context of the canvas element that the text is rendered to.
    this.grd = this.text.context.createLinearGradient(0, 0, 0, this.text.canvas.height);
    this.grd.addColorStop(0, '#8ed6ff');
    this.grd.addColorStop(1, '#004cb3');
    this.text.fill = this.grd;

    ```
# text-line-spacing
  - text.lineSpacing>
    ```js
    // http://localhost:3000/Phaser.Text.html#lineSpacing
    // lineSpacing :number
    // Additional spacing (in pixels) between each line of text if multi-line.
    text.lineSpacing = -20;

    ```
# text-padding
  - text.padding>
    ```js
    // http://localhost:3000/Phaser.Text.html#padding
    // padding :Phaser.Point
    // Specify a padding value which is added to the line width and height when calculating the Text size.
    // ALlows you to add extra spacing if Phaser is unable to accurately determine the true font dimensions.
    this.text.padding.set(10, 16);

    ```
# text-reflect
  - sprite.scale.y=-1
# text-resolution
  - text.resolution>
    ```js
    // http://localhost:3000/Phaser.Text.html#resolution
    // resolution :integer
    // The resolution of the canvas the text is rendered to.
    // This defaults to match the resolution of the renderer, but can be changed on a per Text object basis.
    text2.resolution = 1;

    ```
# text-shadow-stroke
  - text.setShadow(shadowStroke, shadowFill)
# text-shadow
  - text.setShadow
# text-stroke-with-color
  - text.addStrokeColor>
    ```js
    //  This allows us to color the stroke instead of the letters
    // http://localhost:3000/Phaser.Text.html#addStrokeColor
    // addStrokeColor(color, position) → {Phaser.Text}
    // Set specific stroke colors for certain characters within the Text.

    // It works by taking a color value, which is a typical HTML string such as #ff0000 or rgb(255,0,0) and a position.
    // The position value is the index of the character in the Text string to start applying this color to.
    // Once set the color remains in use until either another color or the end of the string is encountered.
    // For example if the Text was Photon Storm and you did Text.addColor('#ffff00', 6) it would color in the word Storm in yellow.
    // This has no effect if stroke is disabled or has a thickness of 0.
    // If you wish to change the text fill color see addColor instead.
    text.addStrokeColor('#ff0000', 13);

    ```
# text-stroke
# text-tabs-from-array
  - text.tags>
    ```js
    // http://localhost:3000/Phaser.Text.html#tabs
    // tabs :integer|array
    // The size (in pixels) of the tabs, for when text includes tab characters. 0 disables.
    // Can be an integer or an array of varying tab sizes, one tab per element.
    // For example if you set tabs to 100 then when Text encounters a tab it will jump ahead 100 pixels.
    // If you set tabs to be [100,200] then it will set the first tab at 100px and the second at 200px.

    ```
  - text.parseList>
    ```js
    // parseList(list) → {Phaser.Text}
    // Converts the given array into a tab delimited string and then updates this Text object.
    // This is mostly used when you want to display external data using tab stops.
    // The array can be either single or multi dimensional depending on the result you need:
    // [ 'a', 'b', 'c' ] would convert in to "a\tb\tc".
    // Where as:
    // [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f'] ]
    // would convert in to: "a\tb\tc\nd\te\tf"
    text.parseList(headings);

    ```
# text-tabs-with-google-font
# text-tabs
# text-tint
  - text.tint>
    ```js
    // http://localhost:3000/Phaser.Text.html#tint
    // tint :Number
    // The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
    item.tint = (item.tint === 0xffffff) ? 0xff0000 : 0xffffff;

    ```
# text-with-physics
  - text.body
# update-text
# word-wrap

# alpha-mask
  - make.bitmapData>
    ```js
    // http://localhost:3000/Phaser.GameObjectCreator.html#bitmapData
    // bitmapData(width, height, key, addToCache) → {Phaser.BitmapData}
    // Create a BitmpaData object.
    // A BitmapData object can be manipulated and drawn to like a traditional Canvas object and used to texture Sprites.
    let bmd = this.make.bitmapData(320, 256);

    ```
  - bmd.alphaMask>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#alphaMask
    // alphaMask(source, mask, sourceRect, maskRect) → {Phaser.BitmapData}
    // sourceRect{Phaser.Rectangle}   A Rectangle where x/y define the coordinates to draw the Source image to and width/height define the size.
    // maskRect{Phaser.Rectangle}     A Rectangle where x/y define the coordinates to draw the Mask image to and width/height define the size.
    // Draws the image onto this BitmapData using an image as an alpha mask.
    bmd.alphaMask('pic', 'mask');

    ```
# atlas
  - bmd.draw>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#draw
    // draw(source, x, y, width, height, blendMode, roundPx) → {Phaser.BitmapData}

    // Draws the given Phaser.Sprite, Phaser.Image or Phaser.Text to this BitmapData at the coordinates specified.
    // You can use the optional width and height values to 'stretch' the sprite as it is drawn. This uses drawImage stretching, not scaling.

    // The children will be drawn at their x and y world space coordinates. If this is outside the bounds of the BitmapData they won't be visible.
    // When drawing it will take into account the rotation, scale, scaleMode, alpha and tint values.

    // Note: You should ensure that at least 1 full update has taken place before calling this,
    // otherwise the objects are likely to render incorrectly, if at all.
    // You can trigger an update yourself by calling stage.updateTransform() before calling draw.
    this.bmd.draw(this.jellyfish, this.input.activePointer.position.x, this.input.activePointer.position.y);

    ```
# cached-bitmapdata
  - cache.addBitmapData>
    ```js
    //	Put the bitmapData into the cache
    // http://localhost:3000/Phaser.Cache.html#addBitmapData
    // addBitmapData(key, bitmapData, frameData) → {Phaser.BitmapData}
    // Add a BitmapData object to the cache.
    this.cache.addBitmapData('blueShade', bmd);

    ```
  - cache.getBitmapData>
    ```js
    //	This one is just for reference (next to the instructions text)
    // http://localhost:3000/Phaser.Cache.html#getBitmapData
    // getBitmapData(key) → {Phaser.BitmapData}
    // Gets a BitmapData object from the cache.
    // The object is looked-up based on the key given.
    // Note: If the object cannot be found a console.warn message is displayed.
    this.add.sprite(8, 8, this.cache.getBitmapData('blueShade'));

    ```
  - bmd.dirty>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#dirty
    // dirty :boolean
    // If dirty this BitmapData will be re-rendered.
    bmd.dirty = true;

    ```
  - gradient>
    ```js
    var grd = bmd.context.createLinearGradient(0, 0, 0, 32);

    grd.addColorStop(0, '#8ED6FF');
    grd.addColorStop(1, '#004CB3');
    bmd.context.fillStyle = grd;
    bmd.context.fillRect(0, 0, 32, 32);

    ```
# copy-bitmapdata
  - bmd.copy>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#copy
    // copy(source, x, y, width, height, tx, ty, newWidth, newHeight, rotate, anchorX, anchorY, scaleX, scaleY, alpha, blendMode, roundPx) → {Phaser.BitmapData}
    // x{number=0}      The x coordinate representing the top-left of the region to copy from the source image.
    // tx{number?}      The x coordinate to translate to before drawing. If not specified it will default to the x parameter. If null and source is a Display Object, it will default to source.x.
    // blendMode{string=null}   The composite blend mode that will be used when drawing. The default is no blend mode at all. This is a Canvas globalCompositeOperation value such as 'lighter' or 'xor'.
    // roundPx{boolean=false}   Should the x and y values be rounded to integers before drawing? This prevents anti-aliasing in some instances.

    // Copies a rectangular area from the source object to this BitmapData. If you give null as the source it will copy from itself.

    // You can optionally resize, translate, rotate, scale, alpha or blend as it's drawn.

    // All rotation, scaling and drawing takes place around the regions center point by default, but can be changed with the anchor parameters.

    // Note that the source image can also be this BitmapData, which can create some interesting effects.

    // This method has a lot of parameters for maximum control.
    // You can use the more friendly methods like copyRect and draw to avoid having to remember them all.

    // You may prefer to use copyTransform if you're simply trying to draw a Sprite to this BitmapData,
    // and don't wish to translate, scale or rotate it from its original values.
    this.bmd.copy('pic');

    ```
  - bmd.addToWorld>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#addToWorld
    // addToWorld(x, y, anchorX, anchorY, scaleX, scaleY) → {Phaser.Image}
    // Creates a new Phaser.Image object, assigns this BitmapData to be its texture, adds it to the world then returns it.
    this.bmd.addToWorld();

    ```
  - bmd.circle>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#circle
    // circle(x, y, radius, fillStyle) → {Phaser.BitmapData}
    // fillStyle{string?}   If set the context fillStyle will be set to this value before the circle is drawn.
    // Draws a filled Circle to the BitmapData at the given x, y coordinates and radius in size.
    this.bmd2.circle(32, 32, 32, 'rgba(255,0,255,0.2)');

    ```
# copy-pixels
  - bmd.copyRect>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#copyRect
    // copyRect(source, area, x, y, alpha, blendMode, roundPx) → {Phaser.BitmapData}
    // x{number}      The destination x coordinate to copy the image to.
    // Copies the area defined by the Rectangle parameter from the source image to this BitmapData at the given location.
    this.bmd.copyRect('pic', this.area, 300, y);

    ```
# draw-atlas-frame
# draw-blended-sprite
  - bmd.draw('destination-out')
# draw-full
  - stage.updateTransform>
    ```js
    // http://localhost:3000/Phaser.Stage.html#updateTransform
    // updateTransform()
    // Updates the transforms for all objects on the display list.
    // This overrides the Pixi default as we don't need the interactionManager, but do need the game property check.
    this.stage.updateTransform();

    ```
  - bmd.drawFull>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#drawFull
    // drawFull(parent, blendMode, roundPx) → {Phaser.BitmapData}
    // Draws the Game Object or Group to this BitmapData and then recursively iterates through all of its children.
    // If a child has an exists property then it (and its children) will be only be drawn if exists is true.
    // The children will be drawn at their x and y world space coordinates. If this is outside the bounds of the BitmapData
    // they won't be drawn. Depending on your requirements you may need to resize the BitmapData in advance to match the
    // bounds of the top-level Game Object.
    // When drawing it will take into account the child's world rotation, scale and alpha values.
    // It's perfectly valid to pass in game.world as the parent object, and it will iterate through the entire display list.

    // Note: If you are trying to grab your entire game at the start of a State then you should ensure that at least 1 full update
    // has taken place before doing so, otherwise all of the objects will render with incorrect positions and scales. You can
    // trigger an update yourself by calling stage.updateTransform() before calling drawFull.
    bmd.drawFull(this.world);

    ```
# draw-group
  - bmd.drawGroup>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#drawGroup
    // drawGroup(group, blendMode, roundPx) → {Phaser.BitmapData}

    // Draws the immediate children of a Phaser.Group to this BitmapData.

    // It's perfectly valid to pass in game.world as the Group, and it will iterate through the entire display list.

    // Children are drawn only if they have their exists property set to true, and have image, or RenderTexture, based Textures.

    // The children will be drawn at their x and y world space coordinates. If this is outside the bounds of the BitmapData they won't be visible.
    // When drawing it will take into account the rotation, scale, scaleMode, alpha and tint values.

    // Note: You should ensure that at least 1 full update has taken place before calling this,
    // otherwise the objects are likely to render incorrectly, if at all.
    // You can trigger an update yourself by calling stage.updateTransform() before calling drawGroup.
    bmd.drawGroup(this.world);

    ```
# draw-sprite
  - bmd.draw
# fastcopy-draw
  - bmd.copy>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#copy
    // copy(source, x, y, width, height, tx, ty, newWidth, newHeight, rotate, anchorX, anchorY, scaleX, scaleY, alpha, blendMode, roundPx) → {Phaser.BitmapData}
    // x{number=0}    The x coordinate representing the top-left of the region to copy from the source image.
    // tx{number?}    The x coordinate to translate to before drawing. If not specified it will default to the x parameter. If null and source is a Display Object, it will default to source.x.

    // Copies a rectangular area from the source object to this BitmapData. If you give null as the source it will copy from itself.

    // You can optionally resize, translate, rotate, scale, alpha or blend as it's drawn.

    // All rotation, scaling and drawing takes place around the regions center point by default, but can be changed with the anchor parameters.

    // Note that the source image can also be this BitmapData, which can create some interesting effects.

    // This method has a lot of parameters for maximum control.
    // You can use the more friendly methods like copyRect and draw to avoid having to remember them all.

    // You may prefer to use copyTransform if you're simply trying to draw a Sprite to this BitmapData,
    // and don't wish to translate, scale or rotate it from its original values.
    this.bmdDest.copy(this.bmd, 0, 0);

    ```
# flood-fill
  - floodfill>
    ```js
    if (this.area.y > 0 && this.time.now > this.dropTime) {
      for (let y = 0; y < this.area.y; y++) {
        this.bmd.copyRect('pic', this.area, 0, y);
      }
      this.area.y--;
      this.dropTime = this.time.now + 25;
    }

    ```
# get-pixel
  - bmd.getPixelRGB>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#getPixelRGB
    // getPixelRGB(x, y, out, hsl, hsv) → {object}

    // Get the color of a specific pixel including its alpha value as a color object containing r,g,b,a and rgba properties.
    // If you have drawn anything to the BitmapData since it was created you must call BitmapData.update to refresh the array buffer,
    // otherwise this may return out of date color values, or worse - throw a run-time error as it tries to access an array element that doesn't exist.
    x = Math.floor(x);
    y = Math.floor(y);
    let color = this.bmd.getPixelRGB(x, y);

    ```
# plot
  - plot
    ```js
    add.renderTexture
    add.sprite(texture)
    texture.renderRawXY

    ```
# process-pixels-1
  - bmd.processPixelRGB>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#processPixelRGB
    // processPixelRGB(callback, callbackContext, x, y, width, height) → {Phaser.BitmapData}

    // Scans through the area specified in this BitmapData and sends a color object for every pixel to the given callback.
    // The callback will be sent a color object with 6 properties: { r: number, g: number, b: number, a: number, color: number, rgba: string }.
    // Where r, g, b and a are integers between 0 and 255 representing the color component values for red, green, blue and alpha.
    // The color property is an Int32 of the full color. Note the endianess of this will change per system.
    // The rgba property is a CSS style rgba() string which can be used with context.fillStyle calls, among others.
    // The callback will also be sent the pixels x and y coordinates respectively.
    // The callback must return either false, in which case no change will be made to the pixel, or a new color object.
    // If a new color object is returned the pixel will be set to the r, g, b and a color values given within it.
    this.bmd.processPixelRGB(this.forEachPixel, this);

    ```
# process-pixels-2
# process-pixels-3
# radial-gradient
  - bmd.cls>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#cls
    // cls()
    // Clears the BitmapData context using a clearRect.
    this.bmd.cls();

    ```
  - bmd.circle>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#circle
    // circle(x, y, radius, fillStyle) → {Phaser.BitmapData}
    // Draws a filled Circle to the BitmapData at the given x, y coordinates and radius in size.
    this.bmd.circle(this.outerCircle.x, this.outerCircle.y, this.outerCircle.radius, grd);

    ```
# replace-color
  - bmd.replaceRGB>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#replaceRGB
    // replaceRGB(r1, g1, b1, a1, r2, g2, b2, a2, region) → {Phaser.BitmapData}
    // Replaces all pixels matching one color with another. The color values are given as two sets of RGBA values.
    // An optional region parameter controls if the replacement happens in just a specific area of the BitmapData or the entire thing.
    this.bmd.replaceRGB(this.color1.r, this.color1.g, this.color1.b, this.color1.a, this.color2.r, this.color2.g, this.color2.b, this.color2.a);

    ```
# reveal
  - bmd.copy
# set-hsl
  - bmd.shiftHSL>
    ```js
    // http://localhost:3000/Phaser.BitmapData.html#shiftHSL
    // shiftHSL(h, s, l, region) → {Phaser.BitmapData}

    // Shifts any or all of the hue, saturation and lightness values on every pixel in the given region, or the whole BitmapData if no region was specified.
    // Shifting will add the given value onto the current h, s and l values, not replace them.
    // The hue is wrapped to keep it within the range 0 to 1. Saturation and lightness are clamped to not exceed 1.
    this.bmd.shiftHSL(0.1);

    ```
# sprite-texture
  - add.sprite(bmd)
# text-blend
  - destination-out
    ```js
    this.bmd.draw(this.text, this.world.randomX, this.world.randomY, null, null, 'destination-out');

    ```
# text
# tint
  - PIXI.CanvasTinter.tintMethod>
    ```js
    PIXI.CanvasTinter.tintMethod(pic.texture, 0xee4343, this.bmd.canvas);

    ```
# wobble

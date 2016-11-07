# blank-tilemap
  - add.tilemap>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#tilemap
    // tilemap(key, tileWidth, tileHeight, width, height) → {Phaser.Tilemap}
    // Creates a new Phaser.Tilemap object.
    // tileWidth=32: The pixel width of a single map tile. If using CSV data you must specify this. Not required if using Tiled map data.
    // tileHeight=32: The pixel height of a single map tile. If using CSV data you must specify this. Not required if using Tiled map data.
    // width=10: The width of the map in tiles. If this map is created from Tiled or CSV data you don't need to specify this.
    // height=10: The height of the map in tiles. If this map is created from Tiled or CSV data you don't need to specify this.

    // The map can either be populated with data from a Tiled JSON file or from a CSV file.
    // To do this pass the Cache key as the first parameter. When using Tiled data you need only provide the key.
    // When using CSV data you must provide the key and the tileWidth and tileHeight parameters.
    // If creating a blank tilemap to be populated later, you can either specify no parameters at all and then use Tilemap.create or pass the map and tile dimensions here.
    // Note that all Tilemaps use a base tile size to calculate dimensions from, but that a TilemapLayer may have its own unique tile size that overrides it.
    this.map = this.add.tilemap();

    ```
  - map.addTilesetImage>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#addTilesetImage
    // addTilesetImage(tileset, key, tileWidth, tileHeight, tileMargin, tileSpacing, gid) → {Phaser.Tileset}
    // tileset{string}  The name of the tileset as specified in the map data.
    // key{string}      The key of the Phaser.Cache image used for this tileset. If undefined or null it will look for an image with a key matching the tileset parameter. You can also pass in a BitmapData which can be used instead of an Image.

    // Adds an image to the map to be used as a tileset. A single map may use multiple tilesets.
    // Note that the tileset name can be found in the JSON file exported from Tiled, or in the Tiled editor.
    this.map.addTilesetImage('ground_1x1');

    ```
  - map.create>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#create
    // create(name, width, height, tileWidth, tileHeight, group) → {Phaser.TilemapLayer}
    // width: The width of the map in tiles.
    // height: The height of the map in tiles.
    // tileWidth: The width of the tiles the map uses for calculations.
    // tileHeight: The height of the tiles the map uses for calculations.
    // Creates an empty map of the given dimensions and one blank layer. If layers already exist they are erased.
    this.layer1 = this.map.create('level1', 40, 30, 32, 32);

    ```
  - map.createBlankLayer>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#createBlankLayer
    // createBlankLayer(name, width, height, tileWidth, tileHeight, group) → {Phaser.TilemapLayer}
    // Creates a new and empty layer on this Tilemap. By default TilemapLayers are fixed to the camera.
    this.layer2 = this.map.createBlankLayer('layer2', 40, 30, 32, 32);

    ```
  - layer.resizeWorld>
    ```js
    // http://localhost:3000/Phaser.TilemapLayer.html#resizeWorld
    // resizeWorld()
    // Sets the world size to match the size of this layer.

    ```
  - layer.scrollFactorX>
    ```js
    // http://localhost:3000/Phaser.TilemapLayer.html#scrollFactorX
    // scrollFactorX :number
    // Speed at which this layer scrolls horizontally, relative to the camera (e.g. scrollFactorX of 0.5 scrolls half as quickly as the 'normal' camera-locked layers do).
    this.layer1.scrollFactorX = 0.5;

    ```
  - layer.getTileX>
    ```js
    // http://localhost:3000/Phaser.TilemapLayer.html#getTileX
    // getTileX(x) → {integer}
    // Convert a pixel value to a tile coordinate.
    worldX = layer.getTileX(this.input.activePointer.worldX) * 32;

    ```
  - layer.putTile>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#putTile
    // putTile(tile, x, y, layer) → {Phaser.Tile}
    // tile{Phaser.Tile|number|null} 	The index of this tile to set or a Phaser.Tile object. If null the tile is removed from the map.
    // x{number} X position to place the tile (given in tile units, not pixels)
    // layer{number|string|Phaser.TilemapLayer}  The layer to modify.

    // Puts a tile of the given index value at the coordinate specified.
    // If you pass null as the tile it will pass your call over to Tilemap.removeTile instead.
    this.map.putTile(this.currentTile, this.currentLayer.getTileX(this.marker.x), this.currentLayer.getTileY(this.marker.y), this.currentLayer);

    ```
  - layer.removeTile>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#removeTile
    // removeTile(x, y, layer) → {Phaser.Tile}
    // x{number}  X position to insert the tile (given in pixels)
    // y{number}  Y position to insert the tile (given in pixels)

    // Removes the tile located at the given coordinates and updates the collision data.

    ```
  - math.snapToFloor>
    ```js
    // http://localhost:3000/Phaser.Math.html#snapToFloor
    // snapToFloor(input, gap, start) → {number}
    // Snap a value to nearest grid slice, using floor.
    // Example: if you have an interval gap of 5 and a position of 12... you will snap to 10.
    // As will 14 snap to 10... but 16 will snap to 15.
    this.currentTile = this.math.snapToFloor(pointer.x, 32) / 32;

    ```
# create-from-array
  - csv array => string
  - cache.addTilemap>
    ```js
    // http://localhost:3000/Phaser.Cache.html#addTilemap
    // addTilemap(key, url, mapData, format)
    // mapData{object}  The tilemap data object (either a CSV or JSON file).
    // format{number}  The format of the tilemap data.

    // Add a new tilemap to the Cache.
    this.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV);

    ```
  - add.tilemap
  - map.addTilesetImage
  - map.createLayer>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#createLayer
    // createLayer(layer, width, height, group) → {Phaser.TilemapLayer}
    // layer{number | string} The layer array index value, or if a string is given the layer name, within the map data that this TilemapLayer represents.
    // width{number}  The rendered width of the layer, should never be wider than Game.width. If not given it will be set to Game.width.

    // Creates a new TilemapLayer object. By default TilemapLayers are fixed to the camera.
    // The layer parameter is important. If you've created your map in Tiled then you can get this by looking in Tiled and looking at the Layer name.
    // Or you can open the JSON file it exports and look at the layers[].name value. Either way it must match.
    // If you wish to create a blank layer to put your own tiles on then see Tilemap.createBlankLayer.
    this.layer = this.map.createLayer(0);

    ```
# create-from-objects
  - load.tilemap>
    ```js
    // http://localhost:3000/Phaser.Loader.html#tilemap
    // tilemap(key, url, data, format) → {Phaser.Loader}
    // Adds a Tile Map data file to the current load queue.
    // Phaser can load data in two different formats: CSV and Tiled JSON.
    // Tiled is a free software package, specifically for creating tilemaps, and is available from http://www.mapeditor.org

    // You can choose to either load the data externally, by providing a URL to a json file.
    // Or you can pass in a JSON object or String via the data parameter.
    // If you pass a String the data is automatically run through JSON.parse and then immediately added to the Phaser.Cache.

    // If a URL is provided the file is not loaded immediately after calling this method, but is added to the load queue.

    // The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.

    // Retrieve the file via Cache.getTilemapData(key). JSON files are automatically parsed upon load.
    // If you need to control when the JSON is parsed then use Loader.text instead and parse the text file as needed.

    // The URL can be relative or absolute. If the URL is relative the Loader.baseURL and Loader.path values will be prepended to it.

    // If the URL isn't specified and no data is given then the Loader will take the key and create a filename from that.
    // For example if the key is "level1" and no URL or data is given then the Loader will set the URL to be "level1.json".
    // If you set the format to be Tilemap.CSV it will set the URL to be "level1.csv" instead.
    // If you do not desire this action then provide a URL or data object.
    this.load.tilemap('map', 'assets/tilemaps/maps/features_test.json', null, Phaser.Tilemap.TILED_JSON);

    ```
  - add.tilemap
  - add.addTilesetImage
  - map.setCollisionBetween>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#setCollisionBetween
    // setCollisionBetween(start, stop, collides, layer, recalculate)
    // layer{number | string | Phaser.TilemapLayer}  The layer to operate on. If not given will default to this.currentLayer.
    // recalculate{boolean}=true  Recalculates the tile faces after the update.
    // Sets collision on a range of tiles where the tile IDs increment sequentially.
    // Calling this with a start value of 10 and a stop value of 14 would set collision for tiles 10, 11, 12, 13 and 14.
    // The collides parameter controls if collision will be enabled (true) or disabled (false).
    this.map.setCollisionBetween(1, 12);

    ```
  - map.createFromObjects>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#createFromObjects
    // createFromObjects(name, gid, key, frame, exists, autoCull, group, CustomClass, adjustY)
    // name{string}  The name of the Object Group to create Sprites from.
    // gid{number}   The layer array index value, or if a string is given the layer name within the map data.
    // autoCull{boolean}=false  The default autoCull state of the Sprite. Sprites that are autoCulled are culled from the camera if out of its range.
    // adjustY{boolean}   By default the Tiled map editor uses a bottom-left coordinate system. Phaser uses top-left. So most objects will appear too low down. This parameter moves them up by their height.

    // Creates a Sprite for every object matching the given gid in the map data. You can optionally specify the group that the Sprite will be created in. If none is
    // given it will be created in the World. All properties from the map data objectgroup are copied across to the Sprite, so you can use this as an easy way to
    // configure Sprite properties from within the map editor. For example giving an object a property of alpha: 0.5 in the map editor will duplicate that when the
    // Sprite is created. You could also give it a value like: body.velocity.x: 100 to set it moving automatically.
    this.map.createFromObjects('Object Layer 1', 34, 'coin', 0, true, false, this.coins);

    ```
# csv-map-collide
  - load.tilemap
  - add.tilemap
  - map.addTilesetImage
  - map.createLayer
  - map.setCollisionBetween
# csv-map-with-p2
  - p2.convertTilemap>
    ```js
    //  Convert the tilemap layer into bodies. Only tiles that collide (see above) are created.
    //  This call returns an array of body objects which you can perform addition actions on if
    //  required. There is also a parameter to control optimising the map build.
    // http://localhost:3000/Phaser.Physics.P2.html#convertTilemap
    // convertTilemap(map, layer, addToWorld, optimize) → {array}
    // optimize{boolean}  If true adjacent colliding tiles will be combined into a single body to save processing. However it means you cannot perform specific Tile to Body collision responses.

    // Goes through all tiles in the given Tilemap and TilemapLayer and converts those set to collide into physics bodies.
    // Only call this after you have specified all of the tiles you wish to collide with calls like Tilemap.setCollisionBetween, etc.
    // Every time you call this method it will destroy any previously created bodies and remove them from the world.
    // Therefore understand it's a very expensive operation and not to be done in a core game update loop.
    this.physics.p2.convertTilemap(this.map, this.layer);

    ```
# csv-map
  - load.tilemap(Phaser.Tilemap.CSV)
  - add.tilemap
  - map.addTilesetImage
  - map.createLayer(0)
  - layer.resizeWorld
# ~~detach-from-camera~~
# ~~dual-view~~
# features-test
  - map.setTileIndexCallback>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#setTileIndexCallback
    // setTileIndexCallback(indexes, callback, callbackContext, layer)
    // Sets a global collision callback for the given tile index within the layer. This will affect all tiles on this layer that have the same index.

    // If a callback is already set for the tile index it will be replaced. Set the callback to null to remove it.
    // If you want to set a callback for a tile at a specific location on the map then see setTileLocationCallback.
    this.map.setTileIndexCallback(26, this.hitCoin, this);

    ```
  - map.setTileLocationCallback>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#setTileLocationCallback
    // setTileLocationCallback(x, y, width, height, callback, callbackContext, layer)
    // Sets a global collision callback for the given map location within the layer. This will affect all tiles on this layer found in the given area.
    // If a callback is already set for the tile index it will be replaced. Set the callback to null to remove it.
    // If you want to set a callback for a tile at a specific location on the map then see setTileLocationCallback.
    this.map.setTileLocationCallback(2, 0, 1, 1, this.hitCoin, this);

    ```
  - layer.debugSettings>
    ```js
    // http://localhost:3000/Phaser.TilemapLayer.html#debugSettings
    // Settings used for debugging and diagnostics.

    //  missingImageFill	string	<nullable>
    // A tile is rendered as a rectangle using the following fill if a valid tileset/image cannot be found. A value of null prevents additional rendering for tiles without a valid tileset image. This takes effect even when debug rendering for the layer is not enabled.

    // debuggedTileOverfill	string	<nullable>
    // If a Tile has Tile#debug true then, after normal tile image rendering, a rectangle with the following fill is drawn above/over it. This takes effect even when debug rendering for the layer is not enabled.

    // forceFullRedraw	boolean
    // When debug rendering (debug is true), and this option is enabled, the a full redraw is forced and rendering optimization is suppressed.

    // debugAlpha	number
    // When debug rendering (debug is true), the tileset is initially rendered with this alpha level. This can make the tile edges clearer.

    // facingEdgeStroke	string	<nullable>
    // When debug rendering (debug is true), this color/stroke is used to draw "face" edges. A value of null disables coloring facing edges.

    // collidingTileOverfill	string	<nullable>
    // When debug rendering (debug is true), this fill is used for tiles that are collidable. A value of null disables applying the additional overfill.
    this.layer.debugSettings.forceFullRedraw = true;

    ```
# fill-tiles
  - add.tilemap>
  - map.addTilesetImage
  - map.createLayer
  - map.fill>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#fill
    // fill(index, x, y, width, height, layer)
    // Fills the given area with the specified tile.
    // index  {number}    The index of the tile that the area will be filled with.
    // x      {number}    X position of the top left of the area to operate one, given in tiles, not pixels.
    // width  {number}    The width in tiles of the area to operate on.
    // layer  {number|string|TilemapLayer}<optional>
    //                    The layer to operate on.
    this.map.fill(31, this.layer.getTileX(this.sprite.x), this.layer.getTileY(this.sprite.y), 8, 8);

    ```
    - layer.getTileX
# ~~flipped-tiles~~
# map-bounce
  - sprite.body.bounce
# map-collide
  - physics.startSystem
  - map.setCollisionBetween
  - map.setCollision
  - physics.enable(this.player)
  - arcade.collide(this.player, this.layer)
# mario
  - layer.wrap
# ~~multi-layer-multi-tileset~~
# ~~multi-layer~~
# ~~multi-map-collide~~
# ~~multi-tileset~~
# paint-tiles
  - map.getTile>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#getTile
    // getTile(x, y, layer, nonNull) → {Phaser.Tile}
    // x  {number}    X position to get the tile from (given in tile units, not pixels)
    // nonNull {boolean} = false    If true getTile won't return null for empty tiles, but a Tile object with an index of -1.
    // Returns {Phaser.Tile}        The tile at the given coordinates or null if no tile was found or the coordinates were invalid.

    // Gets a tile from the Tilemap Layer. The coordinates are given in tile values.
    this.currentTile = this.map.getTile(2, 3);

    ```
  - layer.getTileX
  - map.putTile>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#putTile
    // putTile(tile, x, y, layer) → {Phaser.Tile}
    // tile{Tile|number|null}   The index of this tile to set or a Phaser.Tile object. If null the tile is removed from the map.
    // x  {number}              given in tile units

    // Puts a tile of the given index value at the coordinate specified.
    // If you pass null as the tile it will pass your call over to Tilemap.removeTile instead.
    this.map.putTile(this.currentTile, this.layer.getTileX(this.marker.x), this.layer.getTileY(this.marker.y));

    ```
  - putTile v.s. fill
    + fill: Fills **the given area** with the specified tile.
    + putTile: Puts **a tile** at the coordinate specified.
# randomise-tiles
  - map.random>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#random
    // random(x, y, width, height, layer)
    // x      {number}    X position of the top left of the area to operate one, given in tiles, not pixels.
    // width  {number}    The width in tiles of the area to operate on.

    // Randomises a set of tiles in a given area.
    this.map.random(this.layer.getTileX(this.sprite.x), this.layer.getTileY(this.sprite.y), 6, 6);

    ```
# replace-tiles
  - map.replace>
    ```js
   // http://localhost:3000/Phaser.Tilemap.html#replace
    // replace(source, dest, x, y, width, height, layer)
    // source{number}     The tile index value to scan for.
    // dest{number}       The tile index value to replace found tiles with.
    // x{number}          X position of the top left of the area to operate one, given in tiles, not pixels.
    // width{width}       The width in tiles of the area to operate on.

    // Scans the given area for tiles with an index matching source and updates their index to match dest.
    this.map.replace(31, 46);

    ```
# resize-map
  - layeer.resize>
    ```js
     // http://localhost:3000/Phaser.TilemapLayer.html#resize
      // Resizes the internal canvas and texture frame used by this TilemapLayer.

      // This is an expensive call, so don't bind it to a window resize event! But instead call it at carefully selected times.

      // Be aware that no validation of the new sizes takes place and the current map scroll coordinates are not modified either.
      // You will have to handle both of these things from your game code if required.
      this.layer.resize(w, h);

    ```
# sci-fly
  - body.tilePadding>
    ```js
    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#tilePadding
    // tilePadding :Phaser.Point

    // If this is an especially small or fast moving object then it can sometimes skip over tilemap collisions if it moves through a tile in a step.
    // Set this padding value to add extra padding to its bounds. tilePadding.x applied to its width, y to its height. Extra padding to be added to this sprite's dimensions when checking for tile collision.
    this.sprite.body.tilePadding.set(32);

    ```
# shuffle-tiles
  - map.shuffle>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#shuffle
    // shuffle(x, y, width, height, layer)
    // x{number}        X position of the top left of the area to operate one, given in tiles, not pixels.
    // width{number}    The width in tiles of the area to operate on.

    // Shuffles a set of tiles in a given area. It will only randomise the tiles in that area, so if they're all the same nothing will appear to have changed!
    this.map.shuffle((this.layer as any).getTileX(this.sprite.x), (this.layer as any).getTileY(this.sprite.y), 6, 6, undefined);

    ```
# swap-tiles
  - map.swap>
    ```js
    // http://localhost:3000/Phaser.Tilemap.html#swap
    // swap(tileA, tileB, x, y, width, height, layer)
    // tileA{number}      First tile index.
    // tileB{number}      Second tile index.
    // x{number}          X position of the top left of the area to operate one, given in tiles, not pixels.
    // width{number}      The width in tiles of the area to operate on.


    // Scans the given area for tiles with an index matching tileA and swaps them with tileB.
    this.map.swap(30, 31);

    ```
# tile-callbacks
  - map.setTileIndexCallback
  - map.setTileLocationCallback
# tile-properties
  - tile.properties>
    ```js
    // http://localhost:3000/Phaser.Tile.html#properties
    // properties :object
    // Tile specific properties.
    tile.properties.wibble = true;

    ```
# tilemap-ray-cast
  - layer.getRayCastTiles>
    ```js
    // http://localhost:3000/Phaser.TilemapLayer.html#getRayCastTiles
    // getRayCastTiles(line, stepRate, collides, interestingFace) → {Array.<Phaser.Tile>}
    // line{Phaser.Line}          The line used to determine which tiles to return.
    // stepRate{integer}=rayStepRate    How many steps through the ray will we check?
    // collides{boolean=false}    If true, only return tiles that collide on one or more faces.
    // interestingFace{boolean=false}   If true, only return tiles that have interesting faces.

    // Gets all tiles that intersect with the given line.
    this.tileHits = this.layer.getRayCastTiles(this.line, 4, false, false);

    ```
  - layer.rayStepRate>
    ```js
    // http://localhost:3000/Phaser.TilemapLayer.html#rayStepRate
    // rayStepRate :integer = 4
    // When ray-casting against tiles this is the number of steps it will jump. For larger tile sizes you can increase this to improve performance.

    ```
# tileset-from-bitmapdata
  - add.tilemap() //blank tilemap
  - make.bitmapData
  - map.addTilesetImage(name, bmd);
  - map.create(layername, w, h, tileW, tileH);
  - map.putTile

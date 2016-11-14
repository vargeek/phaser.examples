import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CachedBitmapdataState extends BootState {

  preload () {

  }

  create () {

    this.stage.backgroundColor = '#003663';

    //	Create our bitmapData which we'll use as a Sprite texture
    var bmd = this.add.bitmapData(32, 32);

    //	Fill it
    var grd = bmd.context.createLinearGradient(0, 0, 0, 32);

    grd.addColorStop(0, '#8ED6FF');
    grd.addColorStop(1, '#004CB3');
    bmd.context.fillStyle = grd;
    bmd.context.fillRect(0, 0, 32, 32);

    //	Put the bitmapData into the cache
    // http://localhost:3000/Phaser.Cache.html#addBitmapData
    // addBitmapData(key, bitmapData, frameData) → {Phaser.BitmapData}
    // Add a BitmapData object to the cache.
    this.cache.addBitmapData('blueShade', bmd);

    //	Now let's make some sprites using this texture, one every second
    this.physics.startSystem(Phaser.Physics.ARCADE);

    //	This one is just for reference (next to the instructions text)
    // http://localhost:3000/Phaser.Cache.html#getBitmapData
    // getBitmapData(key) → {Phaser.BitmapData}
    // Gets a BitmapData object from the cache.
    // The object is looked-up based on the key given.
    // Note: If the object cannot be found a console.warn message is displayed.
    this.add.sprite(8, 8, this.cache.getBitmapData('blueShade'));

    //	And these move :)
    this.createBox();

    this.time.events.repeat(Phaser.Timer.SECOND, 20, this.createBox, this);

    this.input.onDown.add(this.updateBitmapDataTexture, this);

  }

  createBox () {

    var sprite = this.add.sprite(this.world.randomX, this.world.randomY, this.cache.getBitmapData('blueShade'));

    this.physics.arcade.enable(sprite);

    sprite.body.collideWorldBounds = true;
    sprite.body.bounce.set(1);
    sprite.body.velocity.x = this.rnd.realInRange(-200, 200);
    sprite.body.velocity.y = this.rnd.realInRange(-200, 200);


  }

  updateBitmapDataTexture () {

    //	Get the bitmapData from the cache. This returns a reference to the original object
    var bmd = this.cache.getBitmapData('blueShade');

    //	Modify it slightly. This has a direct result, because it's a reference to the cached object we don't need to write it back to the cache again

    var grd = bmd.context.createLinearGradient(0, 0, 0, 32);

    grd.addColorStop(0, this.generateHexColor());
    grd.addColorStop(1, this.generateHexColor());
    bmd.context.fillStyle = grd;
    bmd.context.fillRect(0, 0, 32, 32);

    //	All sprites using this texture will update at the next render
    // http://localhost:3000/Phaser.BitmapData.html#dirty
    // dirty :boolean
    // If dirty this BitmapData will be re-rendered.
    bmd.dirty = true;

  }

  generateHexColor () {

    return `#${((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16)}`;

  }

}

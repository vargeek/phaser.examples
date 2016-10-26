import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class EarthQuakeState extends BootState {

  preload () {

    this.load.image(AssetID.tile, 'assets/sprites/p2.jpeg');
    this.load.spritesheet(AssetID.monster, 'assets/sprites/pixi_monsters.png', 154, 170);

  }

  create () {

    // we need to add margin to the world, so the camera can move
    var margin = 50;
    // and set the world's bounds according to the given margin
    var x = -margin;
    var y = -margin;
    var w = this.world.width + margin * 2;
    var h = this.world.height + margin * 2;
    // it's not necessary to increase height, we do it to keep uniformity
    this.world.setBounds(x, y, w, h);

    // we make sure camera is at position (0,0)
    this.world.camera.position.set(0);

    // include some props on the scene
    this.add.tileSprite(x, y, w, h, AssetID.tile);
    this.add.sprite(100, 100, AssetID.monster, 0);
    this.add.sprite(500, 100, AssetID.monster, 0);
    this.add.sprite(100, 400, AssetID.monster, 0);
    this.add.sprite(500, 400, AssetID.monster, 0);

    // this is where the magic happens
    this.addQuake();

  }

  addQuake () {

    let rumbleOffset = 10;
    let properties = {
      x: this.camera.x - rumbleOffset
    }

    let duration = 100;
    let repeat = 4;
    let ease = Phaser.Easing.Bounce.InOut;
    let autoStart = false;
    let delay = 1000;
    let yoyo = true;

    let quake = this.add.tween(this.camera)
      .to(properties, duration, ease, autoStart, delay, repeat, yoyo);

    quake.onComplete.addOnce(this.addQuake, this);

    quake.start();

  }

}

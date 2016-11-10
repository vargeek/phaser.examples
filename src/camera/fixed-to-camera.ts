import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FixedToCameraState extends BootState {
  cursors: Phaser.CursorKeys;
  logo1: Phaser.Sprite;
  logo2: Phaser.Sprite;

  preload () {

    this.stage.backgroundColor = '#007236';
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
    this.load.image('phaser', 'assets/sprites/phaser1.png');
  }

  create () {

    this.world.resize(6000, 600);

    for (var i = 0; i < 200; i++)
    {
        this.add.sprite(this.world.randomX, this.world.randomY, 'mushroom');
    }

    this.add.text(32, 32, "this text is on the background\nuse arrows to scroll", { font: "32px Arial", fill: "#f26c4f", align: "left" });

    this.logo1 = this.add.sprite(100, 300, 'phaser');
    // http://localhost:3000/Phaser.Sprite.html#fixedToCamera
    // fixedToCamera :boolean

    // A Game Object that is "fixed" to the camera uses its x/y coordinates as offsets from the top left of the camera during rendering.

    // The values are adjusted at the rendering stage, overriding the Game Objects actual world position.

    // The end result is that the Game Object will appear to be 'fixed' to the camera, regardless of where in the game world
    // the camera is viewing. This is useful if for example this Game Object is a UI item that you wish to be visible at all times
    // regardless where in the world the camera is.

    // The offsets are stored in the cameraOffset property.

    // Note that the cameraOffset values are in addition to any parent of this Game Object on the display list.

    // Be careful not to set fixedToCamera on Game Objects which are in Groups that already have fixedToCamera enabled on them.
    this.logo1.fixedToCamera = true;

    this.logo2 = this.add.sprite(500, 100, 'phaser');
    this.logo2.fixedToCamera = true;

    var t = this.add.text(200, 500, "this text is fixed to the camera", { font: "32px Arial", fill: "#ffffff", align: "center" });
    t.fixedToCamera = true;
    // http://localhost:3000/Phaser.Sprite.html#cameraOffset
    // cameraOffset :Phaser.Point

    // The x/y coordinate offset applied to the top-left of the camera that this Game Object will be drawn at if fixedToCamera is true.

    // The values are relative to the top-left of the camera view and in addition to any parent of the Game Object on the display list.
    t.cameraOffset.setTo(200, 500);

    this.add.tween(this.logo2.cameraOffset).to( { y: 400 }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown)
    {
        this.game.camera.x -= 4;
    }
    else if (this.cursors.right.isDown)
    {
        this.game.camera.x += 4;
    }

  }

  render () {

    this.game.debug.cameraInfo(this.camera, 32, 32);

  }

}

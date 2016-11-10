import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ZoomingTheCameraState extends BootState {
  card: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  zooming = false;
  zoomAmount = 0;
  size = new Phaser.Rectangle(0,0,0,0);
  view = '';

  preload () {

    this.load.image('backdrop', 'assets/pics/remember-me.jpg');
    this.load.image('card', 'assets/sprites/mana_card.png');

  }

  create () {

    //  1920 x 1200 (960 x 600)
    this.world.setBounds(-960, -600, 1920, 1200);

    this.size.setTo(-960, -600, 1920, 1200);

    this.add.sprite(-960, -600, 'backdrop');

    // card = game.add.sprite(200.5, 200.5, 'card');

    this.cursors = this.input.keyboard.createCursorKeys();

    //  world center is 0x0, top-left is -960x-600
    // http://localhost:3000/Phaser.Camera.html#focusOnXY
    // focusOnXY(x, y)
    // Move the camera focus on a location instantly.
    this.camera.focusOnXY(-960, -600);

    // game.world.pivot.x = game.world.width / 2;
    // game.world.pivot.y = game.world.height / 2;
    // console.log(game.world.pivot);

    // game.camera.bounds = null;

    this.input.onDown.add(this.startZoom, this);
    this.input.onUp.add(this.stopZoom, this);

  }

  startZoom (pointer: Phaser.Pointer) {

    this.zooming = true;

    if (pointer.button === Phaser.Mouse.LEFT_BUTTON) {
      this.zoomAmount = 0.005;
    }
    else {
      this.zoomAmount = -0.005;
    }

  }

  stopZoom () {

    this.zooming = false;

  }

  update () {

    if (this.zooming) {

      this.camera.scale.x += this.zoomAmount;
      this.camera.scale.y += this.zoomAmount;

      this.camera.bounds.x = this.size.x * this.camera.scale.x;
      this.camera.bounds.y = this.size.y * this.camera.scale.y;
      this.camera.bounds.width = this.size.width * this.camera.scale.x;
      this.camera.bounds.height = this.size.height * this.camera.scale.y;

      // console.log(this.camera.view);
      this.view = this.camera.view.toString();

    }

    if (this.cursors.up.isDown) {
      this.camera.y -= 4;
    }
    else if (this.cursors.down.isDown) {
      this.camera.y += 4;
    }

    if (this.cursors.left.isDown) {
      this.camera.x -= 4;
    }
    else if (this.cursors.right.isDown) {
      this.camera.x += 4;
    }

  }

  render () {

    this.game.debug.cameraInfo(this.camera, 500, 32);
    this.game.debug.text(this.view, 32, 500);

  }




}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CursorKeyMovementState extends BootState {
  cursors: Phaser.CursorKeys;

  preload () {

    this.stage.backgroundColor = '#007236';

    this.load.image('ball', 'assets/sprites/shinyball.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    this.load.image('phaser', 'assets/sprites/sonic_havok_sanity.png');

  }

  create () {

    this.world.setBounds(-1000, -1000, 2000, 2000);

    for (let index = 0; index < 100; index++) {
      this.add.image(this.world.randomX, this.world.randomY, 'mushroom');
    }

    this.add.image(-16, -16, 'ball');
    this.cursors = this.input.keyboard.createCursorKeys();

    let text = this.add.text(32, 32, 'Cursors to move. Shift + Up / Down to Rotate World', {fill: '#ffffff'});

  }

  update () {

    //  For example this checks if the up or down keys are pressed and moves the camera accordingly.
    // Phaser.Key
    // isDown :boolean
    // The "down" state of the key. This will remain true for as long as the keyboard thinks this key is held down.
    if (this.cursors.up.isDown) {

      //  If the shift key is also pressed then the world is rotated
      // Phaser.Key
      // shiftKey :boolean
      // The down state of the SHIFT key, if pressed at the same time as this key.
      if (this.cursors.up.shiftKey) {
        this.world.rotation += 0.05;
      }
      else {
        this.camera.y -= 4;
      }
    }
    else if (this.cursors.down.isDown) {
      if (this.cursors.down.shiftKey) {
        this.world.rotation -= 0.05;
      }
      else {
        this.camera.y += 4;
      }
    }

    if (this.cursors.left.isDown) {
      this.camera.x -= 4;
    }
    else if (this.cursors.right.isDown) {
      this.camera.x += 4;
    }

  }

  render () {

    this.game.debug.cameraInfo(this.camera, 32, 500);

  }

}

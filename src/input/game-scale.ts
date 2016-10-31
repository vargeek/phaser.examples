import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GameScaleState extends BootState {
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('melon', 'assets/sprites/melon.png');

  }

  create () {

    // http://localhost:3000/Phaser.World.html#setBounds
    // setBounds(x, y, width, height)
    // Updates the size of this world and sets World.x/y to the given values
    // The Camera bounds and Physics bounds (if set) are also updated to match the new World bounds.
    this.world.setBounds(0, 0, 2000, 2000);

    for (let index = 0; index < 1000; index++) {

      this.add.sprite(this.world.randomX, this.world.randomY, 'melon');

    }
    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown) {
      this.camera.x -= 2;
    }
    else if (this.cursors.right.isDown) {
      this.camera.x += 2;
    }
    else if (this.cursors.up.isDown) {
      this.camera.y -= 2;
    }
    else if (this.cursors.down.isDown) {
      this.camera.y += 2;
    }

  }

  render () {

    this.game.debug.inputInfo(16, 16);

  }

}

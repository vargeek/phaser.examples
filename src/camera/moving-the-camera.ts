import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MovingTheCameraState extends BootState {
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('mushroom', 'assets/sprites/mushroom2.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    //  Make our game world 2000x2000 pixels in size (the default is to match the game size)
    this.world.setBounds(0, 0, 2000, 2000);

    for (var i = 0; i < 150; i++)
    {
        this.add.sprite(this.world.randomX, this.world.randomY, 'mushroom');
    }

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.up.isDown)
    {
        this.camera.y -= 4;
    }
    else if (this.cursors.down.isDown)
    {
        this.camera.y += 4;
    }

    if (this.cursors.left.isDown)
    {
        this.camera.x -= 4;
    }
    else if (this.cursors.right.isDown)
    {
        this.camera.x += 4;
    }

  }

  render () {

    this.game.debug.cameraInfo(this.camera, 32, 32);

  }

}

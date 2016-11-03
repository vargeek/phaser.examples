import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LargerBoundingBoxState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;

  preload () {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    this.sprite1 = this.add.sprite(130, 200, 'atari');
    this.sprite1.name = 'atari';

    this.physics.enable(this.sprite1, Phaser.Physics.ARCADE);

    this.sprite1.body.setSize(400, 50, -100, 20);
    this.sprite1.body.immovable = true;

    this.sprite2 = this.game.add.sprite(700, 210, 'mushroom');
    this.sprite2.name = 'mushroom';
    this.game.physics.enable(this.sprite2, Phaser.Physics.ARCADE);
    this.sprite2.body.velocity.x = -100;

  }

  update () {

    this.physics.arcade.collide(this.sprite1, this.sprite2, this.collisionHander, null, this);

  }

  collisionHander () {

    this.stage.backgroundColor = '#992dd2d';

  }

  render () {

    this.game.debug.bodyInfo(this.sprite2, 32, 32);

    this.game.debug.body(this.sprite1);
    this.game.debug.body(this.sprite2);
  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class OffsetBoundingBoxState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  preload () {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');


  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#2d2d2d';

    this.sprite1 = this.add.sprite(150, 200, 'atari');
    this.sprite1.name = 'atari';

    this.sprite2 = this.add.sprite(700, 220, 'mushroom');
    this.sprite2.name = 'mushroom';

    this.physics.enable([this.sprite1,this.sprite2], Phaser.Physics.ARCADE);

    //  This adjusts the collision body size to be a 100x50 box.
    //  50, 25 is the X and Y offset of the newly sized box.

    // 偏移
    this.sprite1.body.setSize(100, 50, 50, 25);
    this.sprite1.body.immovable = true;

    this.sprite2.body.velocity.x = -100;

  }

  update () {

    this.physics.arcade.collide(this.sprite1, this.sprite2, this.collisionHandler, null, this);

  }

  collisionHandler (sprite1: Phaser.Sprite, sprite2: Phaser.Sprite) {

    this.game.stage.backgroundColor = '#992d2d';

  }

  render () {

    this.game.debug.bodyInfo(this.sprite1, 32, 32);
    this.game.debug.body(this.sprite1);
    this.game.debug.body(this.sprite2);


  }

}

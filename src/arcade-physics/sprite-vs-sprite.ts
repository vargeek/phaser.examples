import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SpriteVsSpriteState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;

  preload () {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#2d2d2d';

    //  This will check Sprite vs. Sprite collision

    this.sprite1 = this.add.sprite(50, 200, 'atari');
    this.sprite2 = this.add.sprite(700, 220, 'mushroom');

    this.physics.enable( [ this.sprite1, this.sprite2 ], Phaser.Physics.ARCADE);

    this.sprite1.name = 'atari';
    this.sprite1.body.velocity.x = 100;

    this.sprite2.name = 'mushroom';
    this.sprite2.body.velocity.x = -100;

  }

  update () {

    this.physics.arcade.collide(this.sprite1, this.sprite2, this.collisionHandler, null, this);

  }

  collisionHandler (sprite1: Phaser.Sprite, sprite2: Phaser.Sprite) {

    this.stage.backgroundColor = '#992d2d';

  }

  render () {

    this.game.debug.body(this.sprite1);
    this.game.debug.body(this.sprite2);

  }

}

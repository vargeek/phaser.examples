import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class VerticalCollisionState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;

  preload () {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');


  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#2d2d2d';

    this.sprite1 = this.add.sprite(300, 50, 'atari');
    this.sprite1.name = 'atari';

    this.physics.enable(this.sprite1);

    this.sprite1.body.velocity.y = 100;

    this.sprite1.body.setSize(220, 10, 0, 0);

    this.sprite2 = this.add.sprite(400, 450, 'mushroom');
    this.sprite2.name =' mushroom';
    this.physics.enable(this.sprite2);

    this.sprite2.body.immovable = true;

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

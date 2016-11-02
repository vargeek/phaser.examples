import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DirectBodyMovementState extends BootState {
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
    this.sprite2 = this.add.sprite(400, 450, 'mushroom');

    this.physics.arcade.enable([this.sprite1, this.sprite2]);

    this.add.tween(this.sprite1.body).to({y: 400}, 3000, Phaser.Easing.Linear.None, true);

  }

  update () {

    this.physics.arcade.overlap(this.sprite1, this.sprite2, this.overlapHander, null, this);

  }

  overlapHander (sprite1: Phaser.Sprite, sprite2: Phaser.Sprite) {

    this.stage.backgroundColor = '#992d2d';
    sprite2.kill();

  }

  render () {

    this.game.debug.body(this.sprite1);
    this.game.debug.body(this.sprite2);

  }

}

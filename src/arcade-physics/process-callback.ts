import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ProcessCallbackState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;

  preload () {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#2d2d2d';

    this.sprite1 = this.add.sprite(0, 200, 'atari');
    this.sprite2 = this.add.sprite(750, 220, 'mushroom');

    this.physics.arcade.enable([this.sprite1, this.sprite2]);

    this.sprite1.body.velocity.x = 50 + Math.random() * 100;
    this.sprite2.body.velocity.x = - ( 50 + Math.random() * 100 );

  }

  update () {

    this.physics.arcade.collide(this.sprite1, this.sprite2, this.collisionCallback, this.processCallback, this);

  }

  collisionCallback () {

    this.stage.backgroundColor = '#992d2d';

  }

  processCallback (sprite1: Phaser.Sprite, sprite2: Phaser.Sprite) {

    return sprite1.body.speed > sprite2.body.speed;

  }

  render () {

    this.game.debug.text('The processCallback will only collide if sprite1 is going fastest.', 32, 32);
    this.game.debug.text('Sprite 1 speed: ' + this.sprite1.body.speed, 32, 64);
    this.game.debug.text('Sprite 2 speed: ' + this.sprite2.body.speed, 32, 96);


  }

}

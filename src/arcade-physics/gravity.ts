import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class GravityState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  sprite3: Phaser.Sprite;
  sprite4: Phaser.Sprite;

  preload () {

    this.load.image('ilkke', 'assets/sprites/ilkke.png');

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 100;

    this.sprite1 = this.add.sprite(100, 96, 'ilkke');

    this.sprite2 = this.add.sprite(300, 96, 'ilkke');

    this.sprite3 = this.add.sprite(500, 96, 'ilkke');

    this.sprite4 = this.add.sprite(700, 96, 'ilkke');

    this.physics.arcade.enable([this.sprite1, this.sprite2, this.sprite3, this.sprite4]);

    (this.sprite1.body as Body).collideWorldBounds = true;
    (this.sprite2.body as Body).collideWorldBounds = true;
    (this.sprite3.body as Body).collideWorldBounds = true;

    (this.sprite1.body as Body).bounce.y = 0.8;
    (this.sprite2.body as Body).bounce.y = 0.8;
    (this.sprite3.body as Body).bounce.y = 0.8;

    (this.sprite2.body as Body).gravity.y = 200;
    (this.sprite3.body as Body).gravity.y = 50;

    (this.sprite4.body as Body).allowGravity = false;

  }

  render () {

    this.game.debug.text('world gravity', this.sprite1.x - 32, 64);
    this.game.debug.text('local gravity', this.sprite2.x - 32, 64);
    this.game.debug.text('local / 2', this.sprite3.x - 32, 64);
    this.game.debug.text('no gravity', this.sprite4.x - 32, 64);

  }

}

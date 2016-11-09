import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FireRateState extends BootState {
  sprite: Phaser.Sprite;
  weapon: Phaser.Weapon;
  cursors: Phaser.CursorKeys;
  fireButton: Phaser.Key;

  preload () {

    this.load.image('bullet', 'assets/sprites/bullet.png');
    this.load.image('ship', 'assets/sprites/shmup-ship.png');

  }


  create () {

    this.weapon = this.add.weapon(30, 'bullet');

    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

    this.weapon.bulletAngleOffset = 90;

    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 60;

    this.sprite = this.add.sprite(320, 500, 'ship');

    this.physics.arcade.enable(this.sprite);

    this.weapon.trackSprite(this.sprite, 14, 0);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

  }


  update () {

    this.sprite.body.velocity.x = 0;

    if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -200;
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.velocity.x = 200;
    }

    if (this.fireButton.isDown) {
      this.weapon.fire();
    }

    this.world.wrap(this.sprite, 16);

  }

  render () {

    this.weapon.debug();

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SingleBulletState extends BootState {
  sprite: Phaser.Sprite;
  weapon: Phaser.Weapon;
  cursors: Phaser.CursorKeys;
  fireButton: Phaser.Key;

  preload () {

    this.load.image('bullet', 'assets/sprites/bullet.png');
    this.load.image('ship', 'assets/sprites/shmup-ship.png');

  }

  create () {

    //  Creates 1 single bullet, using the 'bullet' graphic
    this.weapon = this.add.weapon(1, 'bullet');

    //  The bullet will be automatically killed when it leaves the world bounds
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

    //  Because our bullet is drawn facing up, we need to offset its rotation:
    this.weapon.bulletAngleOffset = 90;

    //  The speed at which the bullet is fired
    this.weapon.bulletSpeed = 400;

    this.sprite = this.add.sprite(320, 500, 'ship');

    this.physics.arcade.enable(this.sprite);

    //  Tell the Weapon to track the 'player' Sprite, offset by 14px horizontally, 0 vertically
    this.weapon.trackSprite(this.sprite, 14, 0);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);


  }

  update () {

    this.sprite.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
        this.sprite.body.velocity.x = -200;
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite.body.velocity.x = 200;
    }

    if (this.fireButton.isDown)
    {
        this.weapon.fire();
    }

  }

  render () {

    this.weapon.debug();

  }

}

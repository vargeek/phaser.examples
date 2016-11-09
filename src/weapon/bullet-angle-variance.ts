import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BulletAngleVarianceState extends BootState {
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

    // http://localhost:3000/Phaser.Weapon.html#bulletAngleOffset
    // bulletAngleOffset :number

    // An optional angle offset applied to the Bullets when they are launched.
    // This is useful if for example your bullet sprites have been drawn facing up, instead of to the right, and you want to fire them at an angle.
    // In which case you can set the angle offset to be 90 and they'll be properly rotated when fired.
    this.weapon.bulletAngleOffset = 90;

    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 60;

    // http://localhost:3000/Phaser.Weapon.html#bulletAngleVariance
    // bulletAngleVariance :number

    // This is a variance added to the angle of Bullets when they are fired.
    // If you fire from an angle of 90 and have a bulletAngleVariance of 20 then the actual angle of the Bullets will be between 70 and 110 degrees. This is a quick way to add a great 'spread' effect to a Weapon.
    this.weapon.bulletAngleVariance = 10;

    this.sprite = this.add.sprite(320, 500, 'ship');

    this.physics.arcade.enable(this.sprite);

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

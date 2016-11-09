import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MultipleBulletsState extends BootState {
  sprite: Phaser.Sprite;
  weapon: Phaser.Weapon;
  cursors: Phaser.CursorKeys;
  fireButton: Phaser.Key;

  preload () {

    this.load.image('bullet', 'assets/sprites/bullet.png');
    this.load.image('ship', 'assets/sprites/shmup-ship.png');

  }

  create () {

    //  Creates 40 bullets, using the 'bullet' graphic
    this.weapon = this.add.weapon(40, 'bullet');

    //  The bullets will be automatically killed when they leave the world bounds
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

    //  Because our bullet is drawn facing up, we need to offset its rotation:
    this.weapon.bulletAngleOffset = 90;

    //  The speed at which the bullets are fired
    this.weapon.bulletSpeed = 400;

    this.sprite = this.add.sprite(320, 500, 'ship');

    this.physics.arcade.enable(this.sprite);

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

    var x = this.sprite.x;
    var y = this.sprite.y;

    if (this.fireButton.isDown)
    {
        this.weapon.fireRate = 0;
        this.weapon.fire({ x: x, y: y });
        this.weapon.fire({ x: x + 10, y: y });
        this.weapon.fire({ x: x + 20, y: y });
        this.weapon.fire({ x: x + 30, y: y });
    }

    this.weapon.fireRate = 200;

  }




}

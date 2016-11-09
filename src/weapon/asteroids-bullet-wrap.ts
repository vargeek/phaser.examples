import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AsteroidsBulletWrapState extends BootState {
  sprite: Phaser.Sprite;
  weapon: Phaser.Weapon;
  cursors: Phaser.CursorKeys;
  fireButton: Phaser.Key;

  preload () {

    this.load.image('bullet', 'assets/sprites/shmup-bullet.png');
    this.load.image('ship', 'assets/sprites/thrust_ship.png');

  }

  create () {

    this.weapon = this.add.weapon(30, 'bullet');

    this.weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
    // http://localhost:3000/Phaser.Weapon.html#bulletLifespan
    // bulletLifespan :number

    // If you've set bulletKillType to Phaser.Weapon.KILL_LIFESPAN this controls the amount of lifespan the Bullets have set on launch.
    // The value is given in milliseconds.
    // When a Bullet hits its lifespan limit it will be automatically killed.
    this.weapon.bulletLifespan = 2000;

    this.weapon.bulletSpeed = 600;
    this.weapon.fireRate = 100;

    // http://localhost:3000/Phaser.Weapon.html#bulletWorldWrap
    // Should the Bullets wrap around the world bounds? This automatically calls
    // World.wrap on the Bullet each frame. See the docs for that method for details.
    this.weapon.bulletWorldWrap = true;

    this.sprite = this.add.sprite(400, 300, 'ship');
    this.sprite.anchor.set(0.5);

    this.physics.arcade.enable(this.sprite);

    this.sprite.body.collideWorldBounds = true;

    this.sprite.body.drag.set(70);
    this.sprite.body.maxVelocity.set(200);

    this.weapon.trackSprite(this.sprite, 0, 0, true);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);


  }

  update () {

    if (this.cursors.up.isDown) {
      this.physics.arcade.accelerationFromRotation(this.sprite.rotation, 300, this.sprite.body.acceleration);
    }
    else {
      this.sprite.body.acceleration.set(0);
    }

    if (this.cursors.left.isDown) {
      this.sprite.body.angularVelocity = -300;
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.angularVelocity = 300;
    }
    else {
      this.sprite.body.angularVelocity = 0;
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

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BulletFrameCycleState extends BootState {
  sprite: Phaser.Sprite;
  weapon: Phaser.Weapon;
  cursors: Phaser.CursorKeys;
  fireButton: Phaser.Key;

  preload () {

    this.load.image('ship', 'assets/sprites/thrust_ship.png');
    this.load.spritesheet('bullet', 'assets/sprites/rgblaser.png', 4, 4);

  }

  create () {

    this.weapon = this.add.weapon(40, 'bullet');

    //  The 'rgblaser.png' is a Sprite Sheet with 80 frames in it (each 4x4 px in size)
    //  The 3rd argument tells the Weapon Plugin to advance to the next frame each time
    //  a bullet is fired, when it hits 80 it'll wrap to zero again.
    //  You can also set this via this.weapon.bulletFrameCycle = true
    this.weapon.setBulletFrames(0, 80, true);

    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 50;

    this.sprite = this.add.sprite(400, 300, 'ship');
    this.sprite.anchor.set(0.5);

    this.physics.arcade.enable(this.sprite);

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

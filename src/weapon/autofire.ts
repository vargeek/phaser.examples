import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AutofireState extends BootState {
  sprite: Phaser.Sprite;
  weapon: Phaser.Weapon;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('ship', 'assets/sprites/thrust_ship.png');
    this.load.spritesheet('bullet', 'assets/sprites/rgblaser.png', 4, 4);

  }

  create () {

    this.weapon = this.add.weapon(40, 'bullet');

    // http://localhost:3000/Phaser.Weapon.html#setBulletFrames
    // setBulletFrames(min, max, cycle, random) → {Phaser.Weapon}
    // min{number}              The minimum value the frame can be. Usually zero.
    // max{number}              The maximum value the frame can be.
    // cycle{boolean=true}      Should the bullet frames cycle as they are fired?
    // random{boolean=false}    Should the bullet frames be picked at random as they are fired?

    // Sets the texture frames that the bullets can use when being launched.

    // This is intended for use when you've got numeric based frames, such as those loaded via a Sprite Sheet.

    // It works by calling Phaser.ArrayUtils.numberArray internally, using the min and max values provided. Then it sets the frame index to be zero.

    // You can optionally set the cycle and random booleans, to allow bullets to cycle through the frames when they're fired, or pick one at random.
    this.weapon.setBulletFrames(0, 80, true);
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 100;
    // http://localhost:3000/Phaser.Weapon.html#autofire
    // Will this weapon auto fire? If set to true then a new bullet will be fired
    // based on the fireRate value.
    this.weapon.autofire = true;

    this.sprite = this.add.sprite(400, 300, 'ship');
    this.sprite.anchor.set(0.5);

    this.physics.arcade.enable(this.sprite);

    this.sprite.body.drag.set(70);
    this.sprite.body.maxVelocity.set(200);

    this.weapon.trackSprite(this.sprite, 0, 0, true);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.up.isDown) {
      this.weapon.autofire = true;
    }
    else if (this.cursors.down.isDown) {
      this.weapon.autofire = false;
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

    this.world.wrap(this.sprite, 16);

  }

  render () {

    this.weapon.debug();

  }

}

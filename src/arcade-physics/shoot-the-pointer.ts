import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;
export class ShootThePointerState extends BootState {
  sprite: Phaser.Sprite;
  bullets: Phaser.Group;

  fireRate = 100;
  nextFire = 0;

  preload () {

    this.load.image('arrow', 'assets/sprites/arrow.png');
    this.load.image('bullet', 'assets/sprites/purple_ball.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#313131';

    this.bullets = this.add.group();
    this.bullets.enableBody = true;

    this.bullets.createMultiple(50, 'bullet');
    this.bullets.setAll('checkWorldBounds', true);
    this.bullets.setAll('outofBoundsKill', true);

    this.sprite = this.add.sprite(400, 300, 'arrow');
    this.sprite.anchor.set(0.5);

    this.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    (this.sprite.body as Body).allowRotation = false;

  }

  update () {

    this.sprite.rotation = this.physics.arcade.angleToPointer(this.sprite);

    if (this.input.activePointer.isDown) {
      this.fire();
    }

  }

  fire () {

    // http://localhost:3000/Phaser.Group.html#countDead
    // countDead() → {integer}
    // Get the number of dead children in this group.
    if (this.time.now > this.nextFire && this.bullets.countDead() > 0) {
      this.nextFire = this.time.now + this.fireRate;

      let bullet = this.bullets.getFirstDead() as Phaser.Sprite;
      bullet.reset(this.sprite.x - 8, this.sprite.y - 8);

      this.physics.arcade.moveToPointer(bullet, 300);

    }

  }

  render () {

    // http://localhost:3000/Phaser.Group.html#countLiving
    // countLiving() → {integer}
    // Get the number of living children in this group.
    this.game.debug.text(`Active Bullets: ${this.bullets.countLiving()} / ${this.bullets.total}`, 32, 32);
    this.game.debug.spriteInfo(this.sprite, 32 ,450);

  }

}

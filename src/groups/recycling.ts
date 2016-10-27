import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RecyclingState extends BootState {
  enemies: Phaser.Group;

  preload () {

    this.load.image('baddie', 'assets/sprites/space-baddie.png');
    this.load.spritesheet('button', 'assets/buttons/baddie-buttons.png', 224, 70);

  }

  create () {

    this.enemies = this.add.group();

    for (let index = 0; index < 8; index++) {
      this.enemies.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'baddie');
    }

    this.add.button(16, 50, 'button', this.createBaddie, this, 0, 0, 0);
    this.add.button(16, 130, 'button', this.killBaddie, this, 1, 1, 1);


  }

  createBaddie () {

    let baddie = this.enemies.getFirstExists(false) as Phaser.Sprite;
    if (baddie) {
      baddie.revive();
    }
  }

  killBaddie () {

    let baddie = this.enemies.getFirstAlive() as Phaser.Sprite;
    if (baddie) {
      baddie.kill();
    }
  }

  render () {

    this.game.debug.text('Recycle baddies from a group using getFirstExists.', 16, 24);
    this.game.debug.text('Notice that you cannot add more than 8 baddies since we only create 8 instance.', 16, 36);
    this.game.debug.text('Living baddies: ' + (this.enemies.countLiving()), 340, 420);


  }

}

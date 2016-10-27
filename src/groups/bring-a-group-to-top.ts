import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BringAGroupToTopState extends BootState {
  group1: Phaser.Group;
  group2: Phaser.Group;


  preload () {

    this.load.image('beast', 'assets/pics/shadow_of_the_beast2_karamoon.png');
    this.load.image('snot', 'assets/pics/nslide_snot.png');
    this.load.image('atari1', 'assets/sprites/atari130xe.png');
    this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');


  }

  create () {

    let bg = this.add.sprite(0, 0, 'beast');
    bg.width = 800;

    this.group1 = this.add.group();
    this.group2 = this.add.group();

    for (let index = 0; index < 10; index++) {

      let sprite = this.add.sprite(this.world.randomX, this.world.randomY, 'atari1');
      sprite.name = `atari${index}`;
      sprite.inputEnabled = true;
      sprite.input.enableDrag(false, true);
      this.group1.add(sprite);

      sprite = this.add.sprite(this.world.randomX, this.world.randomY, 'sonic');
      sprite.name = `sonic${index}`;
      sprite.inputEnabled = true;
      sprite.input.enableDrag(false, true);
      this.group2.add(sprite);
    }

    this.add.sprite(this.world.randomX, this.world.height, 'snot').anchor.set(0.5, 1);

  }

  update () {

    if (this.input.keyboard.isDown(Phaser.Keyboard.ONE)) {
      // bringToTop(child) → {any}
      // Brings the given child to the top of this group so it renders above all other children.
      this.world.bringToTop(this.group1);
    }
    if (this.input.keyboard.isDown(Phaser.Keyboard.TWO)) {
      this.world.bringToTop(this.group2);
    }

  }

  render () {

    this.game.debug.inputInfo(32, 32);

  }

}

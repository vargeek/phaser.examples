import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class NestedGroupsState extends BootState {
  ballsGroup: Phaser.Group;
  shipsGroup: Phaser.Group;

  preload () {

    this.load.image('ball', 'assets/sprites/pangball.png');
	  this.load.image('arrow', 'assets/sprites/asteroids_ship.png');

  }

  create () {

    this.ballsGroup = this.add.group();
    this.shipsGroup = this.add.group();

    for (let index = 0; index < 20; index++) {
      this.ballsGroup.create(this.rnd.integerInRange(0, 128), this.world.randomY, 'ball');
      this.shipsGroup.create(this.rnd.integerInRange(0, 128), this.world.randomY, 'arrow');
    }

    // Now make the ships group a child of the balls group - so anything that happens to the balls group
	  // will happen to the ships group too
    this.ballsGroup.add(this.shipsGroup);

  }

  update () {

    this.ballsGroup.x += 0.1;
    this.shipsGroup.x += 0.1;

  }

}

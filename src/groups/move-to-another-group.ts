import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MoveToAnotherGroupState extends BootState {
  group1: Phaser.Group;
  group2: Phaser.Group;

  preload () {

    this.load.image('ship1', 'assets/sprites/bsquadron1.png');
    this.load.image('ship2', 'assets/sprites/bsquadron3.png');

  }

  create () {

    this.group1 = this.add.group();
    this.group1.y = 600;

    this.group2 = this.add.group();
    this.group2.y = -150;

    for (let index = 0; index < 10; index++) {
      this.group1.create(this.rnd.between(0, 740), this.rnd.between(0, 100), 'ship1');
      this.group2.create(this.rnd.between(0, 736), this.rnd.between(0, 100), 'ship2');
    }

    this.add.tween(this.group1).to({y: -150}, 5000, Phaser.Easing.Linear.None, true, 0, -1);
    this.add.tween(this.group2).to({y: 600}, 5000, Phaser.Easing.Linear.None, true, 0, -1);

    this.input.onDown.addOnce(this.moveShips, this);

  }

  moveShips () {

    //  This moves all ships from group 1 into group 2
    // moveAll(group, silent) → {Phaser.Group}
    // Moves all children from this Group to the Group given.
    // silent: If true the children will not dispatch the onAddedToGroup event for the new Group.
    this.group1.moveAll(this.group2);

  }

  render () {

    this.game.debug.text("Group 1 size: " + this.group1.length, 32, 32);
    this.game.debug.text("Group 2 size: " + this.group2.length, 32, 64);

    if (this.group1.length === 10)
    {
        this.game.debug.text("Click to move children", 32, 96);
    }

  }

}

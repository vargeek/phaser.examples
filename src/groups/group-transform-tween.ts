import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GroupTransformTweenState extends BootState {
  robot: Phaser.Group;

  preload () {

    this.load.image('eye', 'assets/sprites/robot/eye.png');
    this.load.image('body', 'assets/sprites/robot/body.png');
    this.load.image('arm-l', 'assets/sprites/robot/arm-l.png');
    this.load.image('arm-r', 'assets/sprites/robot/arm-r.png');
    this.load.image('leg-l', 'assets/sprites/robot/leg-l.png');
    this.load.image('leg-r', 'assets/sprites/robot/leg-r.png');


  }

  create () {

    this.robot = this.add.group();

    this.robot.create(90, 175, 'arm-l');
    this.robot.create(549, 175, 'arm-r');
    this.robot.create(270, 325, 'leg-l');
    this.robot.create(410, 325, 'leg-r');
    this.robot.create(219, 32, 'body');
    this.robot.create(335, 173,'eye');

    this.add.tween(this.robot.scale).to({x: 1.2, y:1.2}, 1000, Phaser.Easing.Back.InOut, true, 0, -1).yoyo(true);


  }

  render () {

    this.game.debug.text('The robot is a group and every component is a sprite.', 32, 32);

  }

}

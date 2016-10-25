/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID, Animation } from '../constant';

export class GroupCreationState extends BootState {
  group: Phaser.Group;

  preload () {

    this.load.atlas(AssetID.seacreatures, 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');
    this.load.image(AssetID.undersea, 'assets/pics/undersea.jpg');
    this.load.image(AssetID.coral, 'assets/pics/seabed.png');

  }

  create () {

    this.group = this.add.group();

    for (let index = 0; index < 6; index++) {
      let sprite = this.group.create(120 * index, this.rnd.integerInRange(100, 400), AssetID.seacreatures, 'octopus0000');
    }

    let frameNames = Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4);

     //  Here is the important part. Group.callAll will call a method that exists on every child in the Group.
    //  In this case we're saying: child.animations.add('swim', frameNames, 30, true, false)
    //  The second parameter ('animations') is really important and is the context in which the method is called.
    //  For animations the context is the Phaser.AnimationManager, which is linked to the child.animations property.
    //  Everything after the 2nd parameter is just the usual values you'd pass to the animations.add method.
    this.group.callAll('animations.add', 'animations', Animation.swim, frameNames, 30, true, false);

    this.group.callAll('play', null, Animation.swim);

    this.add.sprite(0, 466, AssetID.coral);

  }

}

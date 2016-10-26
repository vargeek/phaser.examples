/// <reference path="../phaser.d.ts" />
import { BootState, IBootInfo } from '../boot.state';
import { AssetID, Animation } from '../constant';


export class CreaturePhoenixState extends BootState {
  static bootInfo: IBootInfo = {
    states: [],
    renderer: Phaser.WEBGL,
    bounds: {
      width: 800,
      height: 600
    }
  }

  phoenix: any;

  preload () {

    this.load.image(AssetID.sky, 'assets/skies/deepblue.png');
    this.load.image(AssetID.phoenixTexture, 'assets/creature/phoenix.png');
    this.load.json(AssetID.phoenixMesh, 'assets/creature/phoenix.json');

  }

  create () {

    this.add.image(0, 0, AssetID.sky);

    // Create a new Creature Animation object.
    // Creature is a custom Game Object used in conjunction with the Creature Runtime libraries by Kestrel Moon Studios.
    // It allows you to display animated Game Objects that were created with the Creature Automated Animation Tool.
    // Note 1: You can only use Phaser.Creature objects in WebGL enabled games. They do not work in Canvas mode games.
    // Note 2: You must use a build of Phaser that includes the CreatureMeshBone.js runtime and gl-matrix.js, or have them
    // loaded before your Phaser game boots.
    // See the Phaser custom build process for more details.
    this.phoenix = (this.add as any).creature(450, 350, AssetID.phoenixTexture, AssetID.phoenixMesh);

    // Sets the Animation this Creature object will play, as defined in the mesh data.
    this.phoenix.setAnimation(Animation.flight);

    this.phoenix.scale.set(5.0);

    // Plays the currently set animation.
    // true = loop
    this.phoenix.play(true);

  }

}

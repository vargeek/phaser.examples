import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LoadPolygon1State extends BootState {
  contra: Phaser.Sprite;
  start = false;

  preload () {

	  this.load.image('contra2', 'assets/pics/contra2.png');

	  //	Load our physics data exported from PhysicsEditor
	  this.load.physics('physicsData', 'assets/physics/sprites.json');

  }

  create () {

    //	Enable p2 physics
    this.physics.startSystem(Phaser.Physics.P2JS);

    this.contra = this.add.sprite(400, 300, 'contra2');

    //	Enable the physics body on this sprite and turn on the visual debugger
    this.physics.p2.enable(this.contra, true);

    //	Clear the shapes and load the 'contra2' polygon from the physicsData JSON file in the cache
    this.contra.body.clearShapes();
    this.contra.body.loadPolygon('physicsData', 'contra2');

    //	Just starts it rotating
    this.input.onDown.add(()=>{
      this.start = true;
    });



  }

  update () {

    if (this.start) {
      this.contra.body.rotateLeft(5);
    }

  }

}

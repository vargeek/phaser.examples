import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LoadPolygon2State extends BootState {
  contra: Phaser.Sprite;
  bunny: Phaser.Sprite;
  tetris1: Phaser.Sprite;
  tetris2: Phaser.Sprite;
  tetris3: Phaser.Sprite;

  start = false;


  preload () {

  	this.load.image('contra2', 'assets/pics/contra2.png');
  	this.load.image('bunny', 'assets/sprites/bunny.png');
  	this.load.image('tetrisblock1', 'assets/sprites/tetrisblock1.png');
  	this.load.image('tetrisblock2', 'assets/sprites/tetrisblock2.png');
  	this.load.image('tetrisblock3', 'assets/sprites/tetrisblock3.png');

	  //	Load our physics data exported from PhysicsEditor
  	this.load.physics('physicsData', 'assets/physics/sprites.json');

  }

  create () {

    //	Enable p2 physics
    this.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    this.physics.p2.restitution = 0.8;

    this.contra = this.add.sprite(100, 200, 'contra2');
    this.bunny = this.add.sprite(500, 250, 'bunny');
    this.tetris1 = this.add.sprite(100, 400, 'tetrisblock1');
    this.tetris2 = this.add.sprite(300, 450, 'tetrisblock2');
    this.tetris3 = this.add.sprite(600, 450, 'tetrisblock3');

    //	Enable the physics bodies on all the sprites and turn on the visual debugger
    this.physics.p2.enable([ this.contra, this.bunny, this.tetris1, this.tetris2, this.tetris3 ], true);

    //	Clear the shapes and load the 'contra2' polygon from the physicsData JSON file in the cache
    this.contra.body.clearShapes();
    this.contra.body.loadPolygon('physicsData', 'contra2');

    this.bunny.body.clearShapes();
    this.bunny.body.loadPolygon('physicsData', 'bunny');

    this.tetris1.body.clearShapes();
    this.tetris1.body.loadPolygon('physicsData', 'tetrisblock1');

    this.tetris2.body.clearShapes();
    this.tetris2.body.loadPolygon('physicsData', 'tetrisblock2');

    this.tetris3.body.clearShapes();
    this.tetris3.body.loadPolygon('physicsData', 'tetrisblock3');

    //	Just starts it rotating
    this.input.onDown.add(this.boom, this);

  }

  boom () {

    if (this.input.activePointer.x > this.tetris1.x)
    {
      this.tetris1.body.rotateLeft(200);
    }
    else
    {
      this.tetris1.body.rotateRight(200);
    }

    if (this.input.activePointer.y < this.tetris1.y)
    {
      this.tetris1.body.moveForward(400);
    }
    else
    {
      this.tetris1.body.moveBackward(400);
    }

  }

}

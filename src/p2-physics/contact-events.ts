import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.P2.Body;

export class ContactEventsState extends BootState {
  contra: Phaser.Sprite;
  block: Phaser.Sprite;
  wizball: Phaser.Sprite;
  tetris1: Phaser.Sprite;
  tetris2: Phaser.Sprite;
  tetris3: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  result = 'Move with the cursors';

  preload () {

    this.load.image('contra2', 'assets/pics/contra2.png');
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('wizball', 'assets/sprites/wizball.png');
    this.load.image('tetrisblock1', 'assets/sprites/tetrisblock1.png');
    this.load.image('tetrisblock2', 'assets/sprites/tetrisblock2.png');
    this.load.image('tetrisblock3', 'assets/sprites/tetrisblock3.png');

    this.load.physics('physicsData', 'assets/physics/sprites.json');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.restitution = 0.9;

    this.contra = this.add.sprite(200, 200, 'contra2');
    this.block = this.add.sprite(500, 200, 'block');
    this.wizball = this.add.sprite(500, 500, 'wizball');
    this.tetris1 = this.add.sprite(100, 450, 'tetrisblock1');
    this.tetris2 = this.add.sprite(300, 450, 'tetrisblock2');
    this.tetris3 = this.add.sprite(650, 350, 'tetrisblock3');

    this.physics.p2.enable([this.contra, this.block, this.wizball, this.tetris1, this.tetris2, this.tetris3], true);

    this.contra.body.clearShapes();
    this.contra.body.loadPolygon('physicsData', 'contra2');

    this.wizball.body.setCircle(45);

    this.tetris1.body.clearShapes();
    this.tetris1.body.loadPolygon('physicsData', 'tetrisblock1');

    this.tetris2.body.clearShapes();
    this.tetris2.body.loadPolygon('physicsData', 'tetrisblock2');

    this.tetris3.body.clearShapes();
    this.tetris3.body.loadPolygon('physicsData', 'tetrisblock3');

    this.cursors = this.input.keyboard.createCursorKeys();

    // http://localhost:3000/Phaser.Physics.P2.Body.html#onBeginContact
    // onBeginContact :Phaser.Signal
    // Dispatched when a first contact is created between shapes in two bodies.
    // This event is fired during the step, so collision has already taken place.

    // The event will be sent 5 arguments in this order:
    // The Phaser.Physics.P2.Body it is in contact with. This might be null if the Body was created directly in the p2 world.
    // The p2.Body this Body is in contact with.
    // The Shape from this body that caused the contact.
    // The Shape from the contact body.
    // The Contact Equation data array.
    (this.block.body as Body).onBeginContact.add(this.blockHit, this);

  }

  blockHit (body: Body, bodyB: Body, shape: p2.Shape, shapeb: p2.Shape, equation:p2.Equation) {

    if (body) {
      this.result = `You last hit: ${body.sprite.key}`;
    }
    else {
      this.result = `You last hit: The wall :)`;
    }

  }

  update () {

    this.block.body.setZeroVelocity();

    if (this.cursors.left.isDown)
    {
        this.block.body.moveLeft(200);
    }
    else if (this.cursors.right.isDown)
    {
        this.block.body.moveRight(200);
    }

    if (this.cursors.up.isDown)
    {
        this.block.body.moveUp(200);
    }
    else if (this.cursors.down.isDown)
    {
        this.block.body.moveDown(200);
    }

  }

  render () {

    this.game.debug.text(this.result, 32, 32);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class SnakeState extends BootState {
  snakeHead: Phaser.Sprite //head of snake sprite
  cursors: Phaser.CursorKeys;
  snakeSection = new Array(); //array of sprites that make the snake body sections
  snakePath = new Array(); //arrary of positions(points) that have to be stored for the path the sections follow
  numSnakeSections = 30; //number of snake body sections
  snakeSpacer = 6; //parameter that sets the spacing between sections

  preload () {

    this.load.image('ball','assets/sprites/shinyball.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.world.setBounds(0, 0, 800, 600);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.snakeHead = this.add.sprite(400, 300, 'ball');
    this.snakeHead.anchor.setTo(0.5, 0.5);

    this.physics.enable(this.snakeHead, Phaser.Physics.ARCADE);

    //  Init snakeSection array
    for (var i = 1; i <= this.numSnakeSections-1; i++)
    {
        this.snakeSection[i] = this.add.sprite(400, 300, 'ball');
        this.snakeSection[i].anchor.setTo(0.5, 0.5);
    }

    //  Init snakePath array
    for (var i = 0; i <= this.numSnakeSections * this.snakeSpacer; i++)
    {
        this.snakePath[i] = new Phaser.Point(400, 300);
    }


  }

  update () {

    this.snakeHead.body.velocity.setTo(0, 0);
    this.snakeHead.body.angularVelocity = 0;

    if (this.cursors.up.isDown)
    {
        this.snakeHead.body.velocity.copyFrom(this.physics.arcade.velocityFromAngle(this.snakeHead.angle, 300));

        // Everytime the snake head moves, insert the new location at the start of the array,
        // and knock the last position off the end

        var part = this.snakePath.pop();

        part.setTo(this.snakeHead.x, this.snakeHead.y);

        this.snakePath.unshift(part);

        for (var i = 1; i <= this.numSnakeSections - 1; i++)
        {
            this.snakeSection[i].x = (this.snakePath[i * this.snakeSpacer]).x;
            this.snakeSection[i].y = (this.snakePath[i * this.snakeSpacer]).y;
        }
    }

    if (this.cursors.left.isDown)
    {
        this.snakeHead.body.angularVelocity = -300;
    }
    else if (this.cursors.right.isDown)
    {
        this.snakeHead.body.angularVelocity = 300;
    }

  }

  render () {

    this.game.debug.spriteInfo(this.snakeHead, 32, 32);

  }

}

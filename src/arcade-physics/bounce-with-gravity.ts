import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BounceWithGravityState extends BootState {
  image: Phaser.Sprite;

  preload () {

    this.load.image('flyer', 'assets/sprites/phaser-dude.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    //  This creates a simple sprite that is using our loaded image and displays it on-screen and assign it to a variable
    this.image = this.add.sprite(400, 200, 'flyer');

    this.physics.enable(this.image, Phaser.Physics.ARCADE);

    //  This gets it moving
    this.image.body.velocity.setTo(200, 200);

    //  This makes the game world bounce-able
    this.image.body.collideWorldBounds = true;

    //  This sets the image bounce energy for the horizontal  and vertical vectors (as an x,y point). "1" is 100% energy return
    this.image.body.bounce.set(0.8);

    this.image.body.gravity.set(0, 180);


  }

  update () {


  }

  render () {

    this.game.debug.spriteInfo(this.image, 32, 32);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AngleBetweenState extends BootState {
  arrow: Phaser.Sprite;
  target: Phaser.Sprite;


  preload () {

    this.load.image('arrow', 'assets/sprites/longarrow.png');
    this.load.image('ball', 'assets/sprites/pangball.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#0072bc';

    this.arrow = this.add.sprite(200, 250, 'arrow');
    this.arrow.anchor.set(0.1, 0.5);

    this.target = this.add.sprite(600, 400, 'ball');
    this.target.anchor.set(0.5);
    this.target.inputEnabled = true;
    this.target.input.enableDrag(false);

  }

  update () {

    // http://localhost:3000/Phaser.Physics.Arcade.html#angleBetween
    // angleBetween(source, target, world) → {number}
    // Find the angle in radians between two display objects (like Sprites).

    // source, target: The Display Object to test from, to

    // world: boolean (false)
    // Calculate the angle using World coordinates (true), or Object coordinates (false, the default)
    // The optional world argument allows you to return the result based on the Game Objects world property, instead of its x and y values. This is useful of the object has been nested inside an offset Group, or parent Game Object.
    this.arrow.rotation = this.physics.arcade.angleBetween(this.arrow, this.target);

  }

  render () {

    this.game.debug.text('Drag the ball', 32, 32);
    this.game.debug.spriteInfo(this.arrow, 32, 100);

  }

}

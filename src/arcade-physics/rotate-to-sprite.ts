import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RotateToSpriteState extends BootState {
  math: typeof Phaser.Math;
  arrow: Phaser.Sprite;
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  sprite3: Phaser.Sprite;
  sprite4: Phaser.Sprite;
  sprite5: Phaser.Sprite;
  sprite6: Phaser.Sprite;
  target: Phaser.Sprite;


  preload () {

    this.load.image('arrow', 'assets/sprites/longarrow.png');
    this.load.image('ball', 'assets/sprites/shinyball.png');

  }

  create () {

    this.stage.backgroundColor = '#363636';

    this.arrow = this.add.sprite(400, 300, 'arrow');
    this.arrow.anchor.setTo(0.1, 0.5);

    this.sprite1 = this.add.sprite(200, 200, 'ball');
    this.sprite1.anchor.set(0.5);

    this.sprite2 = this.add.sprite(100, 500, 'ball');
    this.sprite2.anchor.set(0.5);

    this.sprite3 = this.add.sprite(300, 100, 'ball');
    this.sprite3.anchor.set(0.5);

    this.sprite4 = this.add.sprite(600, 400, 'ball');
    this.sprite4.anchor.set(0.5);

    this.sprite5 = this.add.sprite(500, 200, 'ball');
    this.sprite5.anchor.set(0.5);

    this.sprite6 = this.add.sprite(300, 450, 'ball');
    this.sprite6.anchor.set(0.5);

    this.target = this.sprite6;
    this.target.tint = 0xff0000;

  }

  update () {

    let angle = this.physics.arcade.angleBetween(this.arrow, this.target);
    // http://localhost:3000/Phaser.Math.html#rotateToAngle
    // rotateToAngle(currentAngle, targetAngle, lerp) → {number}
    // Rotates currentAngle towards targetAngle, taking the shortest rotation distance.
    // The lerp argument is the amount to rotate by in this call.
    let rotation = this.math.rotateToAngle(this.arrow.rotation, angle, 0.01);

    if (rotation === this.arrow.rotation) {

      this.target.tint = 0xffffff;
      this.target = this.rnd.pick([this.sprite1, this.sprite2, this.sprite3, this.sprite4, this.sprite5, this.sprite6]);
      this.target.tint = 0xff0000;

    }
    else {
      this.arrow.rotation = rotation;
    }

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GearConstraintState extends BootState {
  sprite: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
    this.load.image('ball', 'assets/sprites/arrow.png');
    this.load.image('sky', 'assets/skies/cavern2.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.sprite = this.add.sprite(400, 200, 'ball');

    let sonic1 = this.add.sprite(200, 400, 'sonic');
    let sonic2 = this.add.sprite(600, 400, 'sonic');

    this.physics.p2.enable([this.sprite, sonic1, sonic2]);

    // http://localhost:3000/Phaser.Physics.P2.html#createGearConstraint
    // createGearConstraint(bodyA, bodyB, angle, ratio) → {Phaser.Physics.P2.GearConstraint}
    // angle{number=0}    The relative angle
    // ratio{number=1}    The gear ratio.
    // Creates a constraint that tries to keep the distance between two bodies constant.
    let constraint1 = this.physics.p2.createGearConstraint(this.sprite, sonic1, 0, 1);

    let constraint2 = this.physics.p2.createGearConstraint(this.sprite, sonic2, 0, 0.5);

    let text = this.add.text(20, 20, 'rotate with arrow keys', { fill: '#ffffff' });

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown) {
      this.sprite.body.rotateLeft(50);
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.rotateRight(50);
    }

  }

}

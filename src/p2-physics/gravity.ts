import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GravityState extends BootState {
  sprite: Phaser.Sprite;
  bmd: Phaser.BitmapData;

  preload () {

    this.load.image('arrow', 'assets/sprites/xenon2_ship.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.stage.backgroundColor = '#124184';

    this.bmd = this.add.bitmapData(800, 600);
    this.bmd.context.fillStyle = '#fff';

    let bg = this.add.sprite(0, 0, this.bmd);

    this.physics.p2.gravity.y = 100;
    this.physics.p2.restitution = 0.8;

    this.sprite = this.add.sprite(32, 450, 'arrow');

    this.physics.p2.enable(this.sprite);

    this.sprite.body.fixedRotation = true;


    let text = this.add.text(20, 20, 'click to the left / right of the ship', { fill: '#ffffff', font: '14pt Arial' });

	  this.input.onDown.add(this.launch, this);

  }

  launch () {

    if (this.input.x < this.sprite.x) {
      this.sprite.body.velocity.x = -200;
      this.sprite.body.velocity.y = -200;
    }
    else {
      this.sprite.body.velocity.x = 200;
      this.sprite.body.velocity.y = -200;
    }

  }

  update () {

    this.bmd.context.fillStyle = '#ff0';
    this.bmd.context.fillRect(this.sprite.x, this.sprite.y, 2, 2);

  }

}

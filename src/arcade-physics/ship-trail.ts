import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ShipTrailState extends BootState {
  sprite: Phaser.Sprite;
  bmd: Phaser.BitmapData;

  preload () {

    this.load.image('chunk', 'assets/sprites/chunk.png');
    this.load.image('arrow', 'assets/sprites/asteroids_ship.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    //  Click on the left or right of the game to shoot the space ship in that direction

    this.stage.backgroundColor = '#124184';

    this.bmd = this.add.bitmapData(800, 600);
    this.bmd.context.fillStyle = '#ffffff';

    var bg = this.add.sprite(0, 0, this.bmd);

    this.physics.arcade.gravity.y = 100;

    this.sprite = this.add.sprite(32, 450, 'arrow');
    this.sprite.anchor.set(0.5);

    this.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.set(0.8);

    this.input.onDown.add(this.launch, this);

  }

  launch () {

    if (this.input.x < this.sprite.x) {
      this.sprite.body.velocity.setTo(-200, -200);
    }
    else {
      this.sprite.body.velocity.setTo(200, -200);
    }

  }

  update () {

    this.sprite.rotation = this.sprite.body.angle;
    this.bmd.context.fillRect(this.sprite.x, this.sprite.y, 2, 2);

    // http://localhost:3000/Phaser.BitmapData.html#dirty
    // If dirty this BitmapData will be re-rendered.
    this.bmd.dirty = true;

  }

  render () {

    this.game.debug.bodyInfo(this.sprite, 32, 32);

  }

}

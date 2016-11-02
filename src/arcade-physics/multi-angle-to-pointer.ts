import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MultiAngleToPointerState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  sprite3: Phaser.Sprite;
  sprite4: Phaser.Sprite;

  preload () {

    this.load.image('arrow', 'assets/sprites/longarrow.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#363636';

    this.sprite1 = this.add.sprite(150, 150, 'arrow');
    this.sprite1.anchor.set(0.1, 0.5);

    this.sprite2 = this.add.sprite(200, 500, 'arrow');
    this.sprite2.anchor.set(0.1, 0.5);

    this.sprite3 = this.add.sprite(400, 200, 'arrow');
    this.sprite3.anchor.set(0.1, 0.5);

    this.sprite4 = this.add.sprite(600, 400, 'arrow');
    this.sprite4.anchor.set(0.1, 0.5);

  }

  update () {

    this.sprite1.rotation = this.physics.arcade.angleToPointer(this.sprite1);
    this.sprite2.rotation = this.physics.arcade.angleToPointer(this.sprite2);
    this.sprite3.rotation = this.physics.arcade.angleToPointer(this.sprite3);
    this.sprite4.rotation = this.physics.arcade.angleToPointer(this.sprite4);

  }

}

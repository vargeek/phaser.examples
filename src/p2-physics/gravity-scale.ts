import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GravityScaleState extends BootState {
  sprite1: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  sprite3: Phaser.Sprite;

  preload () {

    this.load.image('ball', 'assets/sprites/shinyball.png');
    this.load.image('sky', 'assets/skies/sunset.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.gravity.y = 300;

    let spriteMaterial = this.physics.p2.createMaterial('spriteMaterial');
    let worldmaterial = this.physics.p2.createMaterial('worldMaterial');
    let contactMaterial = this.physics.p2.createContactMaterial(spriteMaterial, worldmaterial, <p2.ContactMaterialOptions>{restitution: 1.0});

    this.physics.p2.setWorldMaterial(worldmaterial);

    this.sprite1 = this.add.sprite(200, 100, 'ball');
    this.sprite2 = this.add.sprite(400, 100, 'ball');
    this.sprite3 = this.add.sprite(600, 100, 'ball');

    this.physics.p2.enable([this.sprite1, this.sprite2, this.sprite3]);

    this.sprite1.body.setMaterial(spriteMaterial);
    this.sprite2.body.setMaterial(spriteMaterial);
    this.sprite3.body.setMaterial(spriteMaterial);

    // http://localhost:3000/Phaser.Physics.P2.Body.html#data
    // <internal> data :p2.Body
    // The p2 Body data.
    // This member is internal (protected) and may be modified or removed in the future.
    this.sprite1.body.data.gravityScale = 1;
    this.sprite2.body.data.gravityScale = 0.5;
    this.sprite3.body.data.gravityScale = 0.25;


  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class ContactMaterialState extends BootState {
  sprite: Phaser.Sprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.image('sky', 'assets/skies/sunset.png');

  }

  create () {

    this.add.image(0, 0, 'sky');

    this.physics.startSystem(Phaser.Physics.P2JS);

    // http://localhost:3000/Phaser.Physics.P2.html#gravity
    // gravity :Phaser.Physics.P2.InversePointProxy
    // The gravity applied to all bodies each step.
    this.physics.p2.gravity.y = 100;

    this.sprite = this.add.sprite(200, 200, 'atari');

    this.physics.p2.enable(this.sprite);

    // http://localhost:3000/Phaser.Physics.P2.html#createMaterial
    // createMaterial(name, body) → {Phaser.Physics.P2.Material}
    // name{string?}     Each Material has a unique ID but string names are handy for debugging.
    // body{Body?}       If given it will assign the newly created Material to the Body shapes.

    // Creates a Material. Materials are applied to Shapes owned by a Body and can be set with Body.setMaterial().
    // Materials are a way to control what happens when Shapes collide. Combine unique Materials together to create Contact Materials.
    // Contact Materials have properties such as friction and restitution that allow for fine-grained collision control between different Materials.
    let spriteMaterial = this.physics.p2.createMaterial('spriteMaterial', this.sprite.body);

    let worldMaterial = this.physics.p2.createMaterial('worldMaterial');

    this.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

    // http://localhost:3000/Phaser.Physics.P2.html#createContactMaterial
    // createContactMaterial(materialA, materialB, options) → {Phaser.Physics.P2.ContactMaterial}
    // Creates a Contact Material from the two given Materials. You can then edit the properties of the Contact Material directly.
    let contactMaterial = this.physics.p2.createContactMaterial(spriteMaterial, worldMaterial);

    // 摩擦力
    // Friction to use in the contact of these two materials.
    contactMaterial.friction = 0.3;
    // 恢复系数
    // Restitution (i.e. how bouncy it is!) to use in the contact of these two materials.
    contactMaterial.restitution = 1.0;
    // 刚度: 指材料或结构在受力时抵抗弹性变形的能力。
    // Stiffness of the resulting ContactEquation that this ContactMaterial generate.
    contactMaterial.stiffness = 1e7;
    // Relaxation of the resulting ContactEquation that this ContactMaterial generate.
    contactMaterial.relaxation = 3;
    //  Stiffness of the resulting FrictionEquation that this ContactMaterial generate.
    (contactMaterial as any).frictionStiffness = 1e7;
    // Relaxation of the resulting FrictionEquation that this ContactMaterial generate.
    contactMaterial.frictionRelaxation = 3;
    // Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.
    contactMaterial.surfaceVelocity = 0;

    let text = this.add.text(20, 20, 'move with arrow keys', {
      fill: '#fff'
    });

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    if (this.cursors.left.isDown)
    {
        this.sprite.body.moveLeft(200);
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite.body.moveRight(200);
    }

    if (this.cursors.up.isDown)
    {
        this.sprite.body.moveUp(200);
    }
    else if (this.cursors.down.isDown)
    {
        this.sprite.body.moveDown(200);
    }

  }

}

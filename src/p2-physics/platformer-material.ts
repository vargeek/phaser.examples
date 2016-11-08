import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PlatformerMaterialState extends BootState {
  sprite: Phaser.Sprite;
  player: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  jumpButton: Phaser.Key;
  yAxis = p2.vec2.fromValues(0, 1);
  facing = 'left';
  jumpTimer = 0;

  preload () {

    this.load.image('atari', 'assets/sprites/block.png');
    this.load.image('background', 'assets/games/starstruck/background2.png');
    this.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);

  }

  create () {

    let bg = this.add.tileSprite(0, 0, 800, 600, 'background');

    //  Enable p2 physics
    this.physics.startSystem(Phaser.Physics.P2JS);

    this.physics.p2.gravity.y = 350;
    // http://localhost:3000/Phaser.Physics.P2.html#world
    // <internal> world :p2.World
    // The p2 World in which the simulation is run.

    // http://schteppe.github.io/p2.js/docs/classes/World.html#property_defaultContactMaterial
    // The default contact material to use, if no contact material was set for the colliding materials.
    this.physics.p2.world.defaultContactMaterial.friction = 0.3;
    // http://schteppe.github.io/p2.js/docs/classes/World.html#method_setGlobalStiffness
    // Set the stiffness for all equations and contact materials.
    this.physics.p2.world.setGlobalStiffness(1e5);

    //  Add a sprite
    this.player = this.add.sprite(200, 200, 'dude');
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('turn', [4], 20, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    //  Enable if for physics. This creates a default rectangular body.
    this.physics.p2.enable(this.player);

    this.player.body.fixedRotation = true;
    this.player.body.damping = 0.5;

    var spriteMaterial = this.physics.p2.createMaterial('spriteMaterial', this.player.body);
    var worldMaterial = this.physics.p2.createMaterial('worldMaterial');
    var boxMaterial = this.physics.p2.createMaterial('worldMaterial');

    //  4 trues = the 4 faces of the world in left, right, top, bottom order
    this.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

    //  A stack of boxes - you'll stick to these
    for (var i = 1; i < 4; i++)
    {
        var box = this.add.sprite(300, 645 - (95 * i), 'atari');
        this.physics.p2.enable(box);
        box.body.mass = 6;
        // box.body.static = true;
        box.body.setMaterial(boxMaterial);
    }

    //  Here is the contact material. It's a combination of 2 materials, so whenever shapes with
    //  those 2 materials collide it uses the following settings.

    var groundPlayerCM = this.physics.p2.createContactMaterial(spriteMaterial, worldMaterial, <p2.ContactMaterialOptions>{ friction: 0.0 });
    var groundBoxesCM = this.physics.p2.createContactMaterial(worldMaterial, boxMaterial, <p2.ContactMaterialOptions>{ friction: 0.6 });

    //  Here are some more options you can set:

    // contactMaterial.friction = 0.0;     // Friction to use in the contact of these two materials.
    // contactMaterial.restitution = 0.0;  // Restitution (i.e. how bouncy it is!) to use in the contact of these two materials.
    // contactMaterial.stiffness = 1e3;    // Stiffness of the resulting ContactEquation that this ContactMaterial generate.
    // contactMaterial.relaxation = 0;     // Relaxation of the resulting ContactEquation that this ContactMaterial generate.
    // contactMaterial.frictionStiffness = 1e7;    // Stiffness of the resulting FrictionEquation that this ContactMaterial generate.
    // contactMaterial.frictionRelaxation = 3;     // Relaxation of the resulting FrictionEquation that this ContactMaterial generate.
    // contactMaterial.surfaceVelocity = 0.0;        // Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.

    let text = this.add.text(20, 20, 'move with arrow, space to jump', { fill: '#ffffff' });

    this.cursors = this.input.keyboard.createCursorKeys();
    this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


  }

  update () {

    if (this.cursors.left.isDown)
    {
        this.player.body.moveLeft(200);

        if (this.facing != 'left')
        {
            this.player.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.moveRight(200);

        if (this.facing != 'right')
        {
            this.player.animations.play('right');
            this.facing = 'right';
        }
    }
    else
    {
        this.player.body.velocity.x = 0;

        if (this.facing != 'idle')
        {
            this.player.animations.stop();

            if (this.facing == 'left')
            {
                this.player.frame = 0;
            }
            else
            {
                this.player.frame = 5;
            }

            this.facing = 'idle';
        }
    }

    if (this.jumpButton.isDown && this.time.now > this.jumpTimer && this.checkIfCanJump())
    {
        this.player.body.moveUp(300);
        this.jumpTimer = this.time.now + 750;
    }


  }

  checkIfCanJump () {

    var result = false;

    // http://schteppe.github.io/p2.js/docs/classes/World.html#property_narrowphase
    // The narrowphase to use to generate contacts.

    // http://schteppe.github.io/p2.js/docs/classes/Narrowphase.html#property_contactEquations
    // narrowphase.contactEquations

    // http://schteppe.github.io/p2.js/docs/classes/ContactEquation.html
    // p2.ContactEquation
    for (var i=0; i < this.physics.p2.world.narrowphase.contactEquations.length; i++)
    {
        var c = this.physics.p2.world.narrowphase.contactEquations[i];

        if (c.bodyA === this.player.body.data || c.bodyB === this.player.body.data)
        {
            // http://schteppe.github.io/p2.js/docs/classes/vec2.html#method_dot
            // Calculates the dot product of two vec2's

            // http://schteppe.github.io/p2.js/docs/classes/ContactEquation.html#property_normalA
            // the normal vector, pointing out of body i
            var d = p2.vec2.dot(c.normalA, this.yAxis);

            if (c.bodyA === this.player.body.data)
            {
                d *= -1;
            }

            if (d > 0.5)
            {
                result = true;
            }
        }
    }

    return result;
  }

}

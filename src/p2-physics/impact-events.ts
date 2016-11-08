import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.P2.Body
export class ImpactEventsState extends BootState {
  ship: Phaser.Sprite;
  starfield: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('stars', 'assets/misc/starfield.jpg');
    this.load.spritesheet('ship', 'assets/sprites/humstar.png', 32, 32);
    this.load.image('panda', 'assets/sprites/spinObj_01.png');
    this.load.image('sweet', 'assets/sprites/spinObj_06.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.restitution = 0.9;

    this.starfield = this.add.tileSprite(0, 0, 800, 600, 'stars');
    this.starfield.fixedToCamera = true;

    let panda = this.add.sprite(this.world.randomX, this.world.randomY, 'panda');
    this.physics.p2.enable(panda, false);
    panda.body.setRectangle(40, 40, 0, 0);

    let sweet = this.add.sprite(this.world.randomX, this.world.randomY, 'sweet')
    this.physics.p2.enable(sweet, false);
    sweet.body.setRectangle(40, 40, 0, 0);

    this.ship = this.add.sprite(200, 200, 'ship');
    this.ship.scale.set(2);
    this.ship.smoothed = false;
    this.ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
    this.ship.play('fly');

    this.physics.p2.enable(this.ship, false);

    this.ship.body.setCircle(28);
    this.ship.body.fixedRotation = true;

    this.camera.follow(this.ship);

    // http://localhost:3000/Phaser.Physics.P2.Body.html#createBodyCallback
    // createBodyCallback(object, callback, callbackContext)

    // Sets a callback to be fired any time a shape in this Body impacts with a shape in the given Body. The impact test is performed against body.id values.
    // The callback will be sent 4 parameters: This body, the body that impacted, the Shape in this body and the shape in the impacting body.

    // Note that the impact event happens after collision resolution, so it cannot be used to prevent a collision from happening.
    // It also happens mid-step. So do not destroy a Body during this callback, instead set safeDestroy to true so it will be killed on the next preUpdate.
    this.ship.body.createBodyCallback(panda, this.hitPanda, this);

    this.physics.p2.setImpactEvents(true);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  hitPanda (body1: Body, body2: Body) {

    body2.sprite.alpha -= 0.1

  }

  update () {

    this.ship.body.setZeroVelocity();

    if (this.cursors.left.isDown)
    {
        this.ship.body.moveLeft(200);
    }
    else if (this.cursors.right.isDown)
    {
        this.ship.body.moveRight(200);
    }

    if (this.cursors.up.isDown)
    {
        this.ship.body.moveUp(200);
    }
    else if (this.cursors.down.isDown)
    {
        this.ship.body.moveDown(200);
    }

    if (!this.camera.atLimit.x)
    {
        this.starfield.tilePosition.x += (this.ship.body.velocity.x * 16) * this.time.physicsElapsed;
    }

    if (!this.camera.atLimit.y)
    {
        this.starfield.tilePosition.y += (this.ship.body.velocity.y * 16) * this.time.physicsElapsed;
    }

  }

}

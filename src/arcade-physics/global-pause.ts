import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GlobalPauseState extends BootState {
  car: Phaser.Sprite;
  aliens: Phaser.Group;
  cursors: Phaser.CursorKeys;
  spaceKey: Phaser.Key;


  preload () {

    this.load.image('car', 'assets/sprites/car90.png');
    this.load.image('baddie', 'assets/sprites/space-baddie.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.aliens = this.add.group();
    this.aliens.enableBody = true;

    for (var i = 0; i < 50; i++)
    {
        var s = this.aliens.create(this.world.randomX, this.world.randomY, 'baddie');
        s.name = 'alien' + s;
        s.body.collideWorldBounds = true;
        s.body.bounce.setTo(0.8, 0.8);
        s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
    }

    this.car = this.add.sprite(400, 300, 'car');
    this.car.name = 'car';
    this.car.anchor.set(0.5);

    this.physics.enable(this.car, Phaser.Physics.ARCADE);

    this.car.body.collideWorldBounds = true;
    this.car.body.bounce.set(0.8);
    this.car.body.allowRotation = true;
    this.car.body.immovable = true;

    this.cursors = this.input.keyboard.createCursorKeys();

    this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.spaceKey.onDown.add(this.togglePause, this);


  }

  update () {

    this.physics.arcade.collide(this.car, this.aliens);

    this.car.body.velocity.x = 0;
    this.car.body.velocity.y = 0;
    this.car.body.angularVelocity = 0;

    if (this.cursors.left.isDown)
    {
        this.car.body.angularVelocity = -200;
    }
    else if (this.cursors.right.isDown)
    {
        this.car.body.angularVelocity = 200;
    }

    if (this.cursors.up.isDown)
    {
        // http://localhost:3000/Phaser.Point.html#copyFrom
        // Copies the x and y properties from any given object to this Point.
        this.car.body.velocity.copyFrom(this.physics.arcade.velocityFromAngle(this.car.angle, 300));
    }


  }

  togglePause () {

    // http://localhost:3000/Phaser.Physics.Arcade.html#isPaused
    // isPaused :boolean
    // If true the Body.preUpdate method will be skipped, halting all motion for all bodies.
    // Note that other methods such as collide will still work, so be careful not to call them on paused bodies.
    (this.physics.arcade as any).isPaused = !(this.physics.arcade as any).isPaused;

  }
}

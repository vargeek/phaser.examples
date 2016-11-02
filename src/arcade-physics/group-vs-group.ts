import { BootState } from '../boot.state';
import { AssetID } from '../constant';
type Body = Phaser.Physics.Arcade.Body;
export class GroupVsGroupState extends BootState {
  sprite: Phaser.Sprite;
  bullets: Phaser.Group;
  veggies: Phaser.Group;
  cursors: Phaser.CursorKeys;
  bulletTime = 0;
  bullet: Phaser.Sprite;

  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');
    this.load.image('bullet', 'assets/misc/bullet0.png');
    this.load.spritesheet('veggies', 'assets/sprites/fruitnveg32wh37.png', 32, 32);

  }

  create () {

    this.stage.backgroundColor = '#2d2d2d';

    //  This will check Group vs. Group collision (bullets vs. veggies!)

    this.veggies = this.add.group();
    this.veggies.enableBody = true;
    this.veggies.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 50; i++)
    {
        var c = this.veggies.create(this.world.randomX, Math.random() * 500, 'veggies', this.rnd.integerInRange(0, 36));
        c.name = 'veg' + i;
        c.body.immovable = true;
    }

    this.bullets = this.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 20; i++)
    {
        var b = this.bullets.create(0, 0, 'bullet');
        b.name = 'bullet' + i;
        b.exists = false;
        b.visible = false;
        b.checkWorldBounds = true;

        // http://localhost:3000/Phaser.Events.html#onOutOfBounds
        // onOutOfBounds :Phaser.Signal
        // This signal is dispatched when the Game Object leaves the Phaser.World bounds.
        // This signal is only if Sprite.checkWorldBounds is set to true.
        // It is sent one argument:
        // {any} The Game Object that left the World bounds.
        b.events.onOutOfBounds.add(this.resetBullet, this);
    }

    this.sprite = this.add.sprite(400, 550, 'phaser');
    this.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

  }

  update () {

    //  As we don't need to exchange any velocities or motion we can the 'overlap' check instead of 'collide'
    this.physics.arcade.overlap(this.bullets, this.veggies, this.collisionHandler, null, this);

    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.left.isDown)
    {
        this.sprite.body.velocity.x = -300;
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite.body.velocity.x = 300;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        this.fireBullet();
    }


  }

  resetBullet (bullet: Phaser.Sprite) {

    bullet.kill();

  }

  collisionHandler (bullet: Phaser.Sprite, veg: Phaser.Sprite) {

    bullet.kill();
    veg.kill();

  }

  fireBullet () {

    if (this.time.now > this.bulletTime) {
      this.bullet = this.bullets.getFirstExists(false);
      if (this.bullet) {
        this.bullet.reset(this.sprite.x + 6, this.sprite.y - 8);
        (this.bullet.body as Body).velocity.y = -300;
        this.bulletTime = this.time.now + 150;
      }
    }

  }

}

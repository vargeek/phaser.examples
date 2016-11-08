import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TilespriteState extends BootState {
  sprite: Phaser.TileSprite;
  cursors: Phaser.CursorKeys;
  veggies: Phaser.Group;

  preload () {

	  this.load.image('sky', 'assets/skies/sky4.png');
    this.load.image('starfield', 'assets/misc/starfield.jpg');
    this.load.spritesheet('veggies', 'assets/sprites/fruitnveg64wh37.png', 64, 64);

  }

  create () {

    this.add.image(0, 0, 'sky');

	  //	Enable p2 physics
	  this.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    this.physics.p2.restitution = 0.8;

    //  Add a sprite
    this.sprite = this.add.tileSprite(300, 450, 200, 50, 'starfield');

    //  Enable if for physics. This creates a default rectangular body.
	  this.physics.p2.enable(this.sprite);

    this.veggies = this.add.group();
    this.veggies.enableBody = true;
    this.veggies.physicsBodyType = Phaser.Physics.P2JS;

    var vegFrames = [ 1, 3, 4, 8 ];

    for (var i = 0; i < 10; i++)
    {
        var veg = this.veggies.create(this.world.randomX, this.world.randomY, 'veggies', this.rnd.pick(vegFrames));
        veg.body.setCircle(26);
    }

    let text = this.add.text(20, 20, 'move with arrow keys', { fill: '#ffffff' });

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

	  this.sprite.body.setZeroVelocity();

    if (this.cursors.left.isDown)
    {
    	this.sprite.body.moveLeft(400);
      this.sprite.tilePosition.x -= 8;
    }
    else if (this.cursors.right.isDown)
    {
    	this.sprite.body.moveRight(400);
      this.sprite.tilePosition.x += 8;
    }

    if (this.cursors.up.isDown)
    {
    	this.sprite.body.moveUp(400);
      this.sprite.tilePosition.y -= 8;
    }
    else if (this.cursors.down.isDown)
    {
    	this.sprite.body.moveDown(400);
      this.sprite.tilePosition.y += 8;
    }

  }

}

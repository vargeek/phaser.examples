import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class WorldBoundsEventState extends BootState {

  preload () {

    this.load.image('space', 'assets/skies/space3.png');
    this.load.spritesheet('face', 'assets/sprites/metalface78x92.png', 78, 92);

  }

  create () {

    this.add.sprite(0, 0, 'space');

    var face = this.add.sprite(0, 0, 'face');

    //  A simple animation that flashes the 'eyes' of the sprite
    face.animations.add('flash', [0,1,2,3,2,1,0], 24, false);

    //  Set-up the physics body
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.physics.arcade.enable(face);

    face.body.velocity.setTo(200, 200);
    face.body.bounce.set(1);

    face.body.collideWorldBounds = true;

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#onWorldBounds
    // onWorldBounds :Phaser.Signal
    // A Signal that is dispatched when this Body collides with the world bounds.

    // Due to the potentially high volume of signals this could create it is disabled by default.
    // To use this feature set this property to a Phaser.Signal: sprite.body.onWorldBounds = new Phaser.Signal()
    // and it will be called when a collision happens, passing five arguments:
    // onWorldBounds(sprite, up, down, left, right)
    // where the Sprite is a reference to the Sprite that owns this Body, and the other arguments are booleans
    // indicating on which side of the world the Body collided.
    face.body.onWorldBounds = new Phaser.Signal();

    //  And then listen for it
    face.body.onWorldBounds.add(this.hitWorldBounds, this);


  }

  hitWorldBounds (sprite: Phaser.Sprite) {

    sprite.play('flash');

  }

}

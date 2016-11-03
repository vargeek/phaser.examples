import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class OnCollideEventState extends BootState {
  face1: Phaser.Sprite;
  face2: Phaser.Sprite;

  preload () {

    this.load.image('space', 'assets/skies/space3.png');
    this.load.spritesheet('face', 'assets/sprites/metalface78x92.png', 78, 92);

  }

  create () {

    this.add.sprite(0, 0, 'space');

    this.face1 = this.add.sprite(0, 0, 'face');
    this.face2 = this.add.sprite(500, 0, 'face');

    //  A simple animation that flashes the 'eyes' of the sprite
    this.face1.animations.add('flash', [0,1,2,3,2,1,0], 24, false);
    this.face2.animations.add('flash', [0,1,2,3,2,1,0], 24, false);

    //  Set-up the physics bodies
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.physics.arcade.enable([this.face1, this.face2]);

    this.face1.body.velocity.setTo(200, 200);
    this.face1.body.bounce.set(1);

    this.face2.body.velocity.setTo(-200, 200);
    this.face2.body.bounce.set(1);

    this.face1.body.collideWorldBounds = true;
    this.face2.body.collideWorldBounds = true;

    // http://localhost:3000/Phaser.Physics.Arcade.Body.html#onCollide
    // onCollide :Phaser.Signal
    // A Signal that is dispatched when this Body collides with another Body.

    // You still need to call game.physics.arcade.collide in your update method in order for this signal to be dispatched.

    // Usually you'd pass a callback to the collide method, but this signal provides for a different level of notification.

    // Due to the potentially high volume of signals this could create it is disabled by default.

    // To use this feature set this property to a Phaser.Signal: sprite.body.onCollide = new Phaser.Signal()
    // and it will be called when a collision happens, passing two arguments: the sprites which collided.
    // The first sprite in the argument is always the owner of this Body.

    // If two Bodies with this Signal set collide, both will dispatch the Signal.
    this.face1.body.onCollide = new Phaser.Signal();
    this.face1.body.onCollide.add(this.hitSprite, this);

  }

  hitSprite (sprite1: Phaser.Sprite, sprite2: Phaser.Sprite) {

    sprite1.play('flash');
    sprite2.play('flash');

  }

  update (){

    this.physics.arcade.collide(this.face1, this.face2);

  }

}

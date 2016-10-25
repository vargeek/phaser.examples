/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;

export class OutOfBoundsState extends BootState {
  player: Phaser.Sprite;
  aliens: Phaser.Group;

  preload () {

    this.load.image(AssetID.alien, 'assets/sprites/space-baddie.png');
    this.load.image(AssetID.ship, 'assets/sprites/shmup-ship.png');

  }

  create () {

    // Updates the size of this physics world to match the size of the game world.
    // We only want world bounds on the left and right
    this.physics.setBoundsToWorld();

    this.player = this.add.sprite(400, 500, AssetID.ship);
    this.player.anchor.set(0.5);

    this.aliens = this.add.group();
    // If true all Sprites created by, or added to this group, will have a physics body enabled on them.
    // If there are children already in the Group at the time you set this property, they are not changed.
    this.aliens.enableBody = true;
    this.aliens.physicsBodyType = Phaser.Physics.ARCADE;


    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 10; x++) {
        // Creates a new Phaser.Sprite object and adds it to the top of this group.
        // Use classType to change the type of object created.
        // The child is automatically added to the top of the group, and is displayed above every previous child.
        // If Group.enableBody is set, then a physics body will be created on the object, so long as one does not already exist.
        // If Group.inputEnableChildren is set, then an Input Handler will be created on the object, so long as one does not already exist.
        let alien = this.aliens.create(200 + x * 48, y * 50, AssetID.alien) as Phaser.Sprite;
        alien.name = `alien ${x.toString()} ${y.toString()}`;

        // If this is set to true the Game Object checks if it is within the World bounds each frame.

        // When it is no longer intersecting the world bounds it dispatches the onOutOfBounds event.
        // If it was previously out of bounds but is now intersecting the world bounds again it dispatches the onEnterBounds event.

        // It also optionally kills the Game Object if outOfBoundsKill is true.

        // When checkWorldBounds is enabled it forces the Game Object to calculate its full bounds every frame.
        // This is a relatively expensive operation, especially if enabled on hundreds of Game Objects. So enable it only if you know it's required,
        // or you have tested performance and find it acceptable.
        alien.checkWorldBounds = true;
        alien.events.onOutOfBounds.add(this.onAlienOut, this);

        (alien.body as Body).velocity.y = 50 + Math.random() * 200;
      }
    }




  }

  onAlienOut (alien: Phaser.Sprite) {

    alien.reset(alien.x, 0);
    (alien.body as Body).velocity.y = 50 + Math.random() * 200;

  }

}

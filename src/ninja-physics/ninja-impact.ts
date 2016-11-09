import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class NinjaImpactState extends BootState {
  sprite1: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  tile1: Phaser.Sprite;
  tile2: Phaser.Sprite;

  preload () {

    this.load.spritesheet('ninja-tiles', 'assets/physics/ninja-tiles128.png', 128, 128, 34);
    this.load.image('a', 'assets/sprites/firstaid.png');

  }

  create () {

    this.stage.smoothed = true;

    this.physics.startSystem(Phaser.Physics.NINJA);

    this.sprite1 = this.add.sprite(500, 200, 'a');

    this.physics.ninja.enableAABB(this.sprite1);

    this.tile1 = this.add.sprite(0, 500, 'ninja-tiles', 14);
    this.tile1.width = 100;
    this.tile1.height = 100;

    this.physics.ninja.enableTile(this.tile1, this.tile1.frame as number);
    (this.tile1.body as Phaser.Physics.Ninja.Body).collideWorldBounds = true;

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  collisionHandler () {

    this.stage.backgroundColor = 0xff0000;

  }

  update () {

    this.physics.ninja.collide(this.sprite1, this.tile1, this.collisionHandler, null, this);

    this.tile1.body.moveRight(1);

    if (this.cursors.left.isDown)
    {
        this.sprite1.body.moveLeft(20);
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite1.body.moveRight(20);
    }

    if (this.cursors.up.isDown)
    {
        this.sprite1.body.moveUp(20);
    }
    else if (this.cursors.down.isDown)
    {
        this.sprite1.body.moveUp(20);
    }


  }


}

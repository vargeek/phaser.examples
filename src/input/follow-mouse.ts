import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FollowMouseState extends BootState {
  sprite: Phaser.Sprite;

  preload () {

    this.load.image('ball', 'assets/sprites/shinyball.png');

  }

  create () {

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'ball');
    this.physics.enable(this.sprite, Phaser.Physics.ARCADE);

  }

  update () {

    //  only move when you click
    // http://localhost:3000/Phaser.Input.html#mousePointer
    // The mouse has its own unique Phaser.Pointer object which you can use if making a desktop specific game.
    if (this.input.mousePointer.isDown) {

      this.physics.arcade.moveToPointer(this.sprite, 400);

      if (Phaser.Rectangle.contains(this.sprite.body, this.input.x, this.input.y)) {
        (this.sprite.body as Phaser.Physics.Arcade.Body).velocity.setTo(0, 0);
      }

    }
    else {

      (this.sprite.body as Phaser.Physics.Arcade.Body).velocity.setTo(0, 0);

    }

  }

}

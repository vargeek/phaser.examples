/// <reference path="../phaser.d.ts" />
import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.Arcade.Body;

export class CollideWorldBoundsState extends BootState {
  pineapples: Phaser.Group;

  preload () {

    this.load.image(AssetID.pineapple, 'assets/sprites/pineapple.png');

  }

  create () {

    this.pineapples = this.add.group();
    this.pineapples.enableBody = true;
    this.pineapples.physicsBodyType = Phaser.Physics.ARCADE;

    for (let index = 0; index < 10; index++) {
      let pineapple = this.pineapples.create(200 + index * 48, 50, AssetID.pineapple) as Phaser.Sprite;
      let body = pineapple.body as Body;

      // A Body can be set to collide against the World bounds automatically and rebound back into the World if this is set to true. Otherwise it will leave the World. Should the Body collide with the World bounds?
      body.collideWorldBounds = true;

      body.gravity.x = this.rnd.integerInRange(-50, 50);
      body.gravity.y = 100 + Math.random() * 100;
      // The elasticity of the Body when colliding. bounce.x/y = 1 means full rebound, bounce.x/y = 0.5 means 50% rebound velocity.re
      body.bounce.setTo(0.9, 0.9);
    }


  }

}

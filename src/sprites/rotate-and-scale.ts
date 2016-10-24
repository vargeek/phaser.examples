/// <reference path="../phaser.d.ts" />
import { BootState, IBootInfo } from '../boot.state';

const AssetID = {
  Disk: 'Disk',
  Atlas: 'atlas',
  Ship: 'Ship',
  Ball: 'Ball'
}

type Body = Phaser.Physics.Arcade.Body;

export class RotateAndScaleState extends BootState {

  sprite: Phaser.Sprite;
  sprite2: Phaser.Sprite;
  cactuar: Phaser.Sprite;
  contra: Phaser.Sprite;
  lulu: Phaser.Sprite;
  ship: Phaser.Sprite;
  orb: Phaser.Sprite;

  cursors: Phaser.CursorKeys;


  preload () {

    this.load.image(AssetID.Disk, '/assets/sprites/copy-that-floppy.png');

    /**
     * "cactuar":
     * {
	   *   "frame": {"x":491,"y":2,"w":213,"h":159},
	   *   "rotated": true,
	   *   "trimmed": true,
	   *   "spriteSourceSize": {"x":0,"y":0,"w":213,"h":159},
	   *   "sourceSize": {"w":231,"h":175},
	   *   "pivot": {"x":0.5,"y":0.5}
     * },
     * "contra1":
     * {
     * 	"frame": {"x":249,"y":395,"w":83,"h":169},
     * 	"rotated": true,
     * 	"trimmed": false,
     * 	"spriteSourceSize": {"x":0,"y":0,"w":83,"h":169},
     * 	"sourceSize": {"w":83,"h":169},
     * 	"pivot": {"x":0.5,"y":0.5}
     * },
     */
    this.load.atlas(AssetID.Atlas, '/assets/sprites/atlas_rotated.png', '/assets/sprites/atlas_rotated.json');

    this.load.image(AssetID.Ship, '/assets/sprites/shmup-ship2.png');
    this.load.image(AssetID.Ball, '/assets/sprites/blue_ball.png');

  }

  create () {

    this.sprite = this.add.sprite(200, 100, AssetID.Disk);
    this.sprite.scale.set(0.5);


    this.add.tween(this.sprite).to({angle: 45}, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
    this.add.tween(this.sprite.scale).to({x: 1, y: 1}, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);

    this.sprite2 = this.add.sprite(600, 100, AssetID.Disk);
    this.sprite2.scale.set(0.5);

    this.cactuar = this.add.sprite(100,400, AssetID.Atlas, 'cactuar');
    this.contra = this.add.sprite(400, 400, AssetID.Atlas, 'contra1');

    //   Should be 83x169 (the original dimensions, even though rotated in the atlas)
    console.log(this.contra.width, this.contra.height);

    this.lulu = this.add.sprite(600, 400, AssetID.Atlas, 'shocktroopers_lulu2');


    this.ship = this.add.sprite(400, 300, AssetID.Ship);
    this.ship.anchor.set(0.5);

    this.game.physics.arcade.enable(this.ship);

    this.orb = this.add.sprite(400, 300, AssetID.Ball);
    this.orb.anchor.set(0.5);
    this.orb.pivot.x = 100;

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

    this.sprite2.angle += 1;
    //  Note: Due to a bug in Chrome the following doesn't work atm:
    //  sprite.angle++;
    //  See: https://code.google.com/p/chromium/issues/detail?id=306851

    const body = this.ship.body as Body;
    body.velocity.x = 0;
    body.velocity.y = 0;

    if (this.cursors.left.isDown) {
      body.velocity.x = -300;
    }
    else if (this.cursors.right.isDown) {
      body.velocity.x = 300;
    }
    else if (this.cursors.up.isDown) {
      body.velocity.y = -300;
    }
    else if (this.cursors.down.isDown) {
      body.velocity.y = 300;
    }

    this.orb.rotation += 0.05;

  }

  preRender () {

    this.orb.x = this.ship.x;
    this.orb.y = this.ship.y;

  }

  render () {
    this.game.debug.geom(this.cactuar.getBounds());
    this.game.debug.geom(this.contra.getBounds());
    this.game.debug.geom(this.lulu.getBounds());
  }

}

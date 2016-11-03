import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LauncherFollowState extends BootState {
  player: Phaser.Sprite;
  analog: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  arrow: Phaser.Sprite;
  catchFlag = false;
  launchVelocity = 0;

  preload () {

    this.load.image('background','assets/misc/starfield.jpg');
    this.load.image('player','assets/sprites/phaser-dude.png');
    this.load.image('analog', 'assets/tests/fusia.png');
    this.load.image('arrow', 'assets/sprites/longarrow2.png');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.world.setBounds(0, 0, 3400, 1000);
    this.add.tileSprite(0, 0, 3400, 1000, 'background');

    this.analog = this.add.sprite(200, 450, 'analog');
    this.analog.width = 8;
    this.analog.rotation = 220;
    this.analog.alpha = 0;
    this.analog.anchor.setTo(0.5, 0.0);

    this.arrow = this.add.sprite(200, 450, 'arrow');
    this.arrow.anchor.setTo(0.1, 0.5);
    this.arrow.alpha = 0;

    this.player = this.add.sprite(150, 320, 'player');

    this.physics.enable([this.player], Phaser.Physics.ARCADE);

    this.player.anchor.set(0.5);
    this.player.body.collideWorldBounds = true;
    this.player.body.bounce.set(0.9);
    this.player.body.drag.set(20, 20);

    // Enable input.
    this.player.inputEnabled = true;
    this.player.input.start(0, true);
    this.player.events.onInputDown.add(this.setBall, this);
    this.player.events.onInputUp.add(this.launchBall, this);

    this.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN);

  }

  setBall (player: Phaser.Sprite, pointer: Phaser.Pointer) {

    this.catchFlag = true;
    this.camera.follow(null);

    player.body.moves = false;
    player.body.velocity.set(0);
    this.arrow.reset(player.x, player.y)
    this.analog.reset(player.x , player.y)

  }

  launchBall () {

    this.catchFlag = false;
    this.player.body.moves = true;
    this.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN);

    this.arrow.alpha = 0;
    this.analog.alpha = 0;

    let xVector = (this.arrow.x - this.player.x) * 3;
    let yVector = (this.arrow.y - this.player.y) * 3;

    this.player.body.velocity.setTo(xVector, yVector);

  }

  update () {

    this.arrow.rotation = this.physics.arcade.angleBetween(this.arrow, this.player);

    if (this.catchFlag === true) {
      this.player.x = this.input.activePointer.worldX;
      this.player.y = this.input.activePointer.worldY;

      this.arrow.alpha = 1;
      this.analog.alpha = 0.5;
      this.analog.rotation = this.arrow.rotation - 3.14 / 2;
      this.analog.height = this.physics.arcade.distanceBetween(this.arrow, this.player);
      this.launchVelocity = this.analog.height;
    }

  }

  render () {

    this.game.debug.text("Drag the sprite and release to launch", 32, 32, 'rgb(0,255,0)');
    this.game.debug.cameraInfo(this.game.camera, 32, 64);
    this.game.debug.spriteCoords(this.player, 32, 150);
    this.game.debug.text(`Launch Velocity: ${this.launchVelocity}`, 550, 32, 'rgb(0,255,0)');


  }

}

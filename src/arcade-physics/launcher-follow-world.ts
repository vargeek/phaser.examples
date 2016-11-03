import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LauncherFollowWorldState extends BootState {
  myTween: Phaser.Tween;
  player: Phaser.Sprite;
  analog: Phaser.Sprite;
  cursors: Phaser.CursorKeys;
  arrow: Phaser.Sprite;
  launched: boolean;
  catchFlag = false;
  launchVelocity = 0;


  preload () {

    this.load.image('background','assets/misc/starfield.jpg');
    this.load.image('player','assets/sprites/phaser-dude.png');
    this.load.image('analog', 'assets/tests/fusia.png');
    this.load.image('arrow', 'assets/sprites/longarrow2.png');

  }

  create () {

    this.world.setBounds(0, 0, 5000, 600);
    this.add.tileSprite(0, 0, 5000, 600, 'background');

    var graphics = this.add.graphics(0,0);
    graphics.beginFill(0x049e0c);
    graphics.drawRect(395, 400, 10, 250);

    this.analog = this.add.sprite(400, 400, 'analog');
    this.analog.width = 8;
    this.analog.rotation = 220;
    this.analog.alpha = 0;
    this.analog.anchor.setTo(0.5, 0.0);

    this.arrow = this.add.sprite(400, 400, 'arrow');
    this.arrow.anchor.setTo(0.1, 0.5);
    this.arrow.alpha = 0;

    this.player = this.add.sprite(150, 320, 'player');
    this.player.anchor.setTo(0.5, 0.5);

    this.physics.enable(this.player, Phaser.Physics.ARCADE);

    this.player.body.collideWorldBounds = true;
    this.player.body.bounce.set(0.9);
    this.player.body.drag.set(20, 0);

    // Enable input.
    this.player.inputEnabled = true;
    this.player.input.start(0, true);
    this.player.events.onInputDown.add(this.setBall, this);
    this.player.events.onInputUp.add(this.lanchBall, this);

    // this tween is to make the camera return to left side of world when done launching
    // so it is not used until then
    this.myTween = this.add.tween(this.player).to({x: 150}, 5000, Phaser.Easing.Linear.None);
    this.myTween.onComplete.add(this.reappear, this);
    this.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN);

  }

  update () {

    this.arrow.rotation = this.physics.arcade.angleBetween(this.arrow, this.player);

    if (this.catchFlag) {
      let distance = this.physics.arcade.distanceToPointer(this.arrow);
      let theta = this.physics.arcade.angleToPointer(this.arrow);

      if (distance > 300) {
        distance = 300;
        let adjacentX = Math.cos(theta) * distance;
        let oppositeY = Math.sin(theta) * distance;
        this.player.x = 400 + adjacentX;
        this.player.y = 400 + oppositeY;
        this.analog.height = distance;
      }
      else {
        this.player.x = this.input.activePointer.worldX;
        this.player.y = this.input.activePointer.worldY;
        this.analog.height = distance;
      }

      this.arrow.alpha = 1;
      this.analog.alpha = 0.5;
      this.analog.rotation = this.arrow.rotation - Math.PI / 2;
      this.launchVelocity = this.analog.height;
    }

    var tweening = this.myTween.isRunning;

    if (!tweening && this.launched && (this.player.x >= this.world.width-20 || this.player.body.deltaX() == 0))
    {
        this.player.body.velocity.setTo(0, 0);
        this.player.alpha = 0;
        this.player.body.moves = false;
        this.player.x = 150;
        this.player.y = 320;
        this.myTween.start();
    }



  }

  setBall (player: Phaser.Sprite, pointer: Phaser.Pointer) {

    if (!this.launched) {
      this.catchFlag = true;
      this.camera.follow(null);
      this.player.body.moves = false;
      this.player.body.gravity.set(0);
      this.player.body.velocity.set(0);
    }

  }

  lanchBall () {

    if (this.catchFlag) {
      this.catchFlag = false;
      this.launched = true;
      this.camera.follow(this.player, Phaser.Camera.FOLLOW_TOPDOWN);

      this.arrow.alpha = 0;
      this.analog.alpha = 0;
      let xVector = (this.arrow.x - this.player.x) * 3;
      let yVector = (this.arrow.y - this.player.y) * 3;
      this.player.body.moves = true;
      this.player.body.gravity.set(0, 180);
      this.player.body.velocity.set(xVector, yVector);
    }

  }

  reappear (){

    this.launched = false;
    this.player.alpha = 1;

  }

  render () {

    this.game.debug.text("Drag the sprite and release to launch", 32, 32, 'rgb(0,255,0)');
    this.game.debug.cameraInfo(this.game.camera, 32, 64);
    this.game.debug.spriteCoords(this.player, 32, 150);
    this.game.debug.text(`Launch Velocity: ${this.launchVelocity}`, 550, 32, 'rgb(0,255,0)');

  }

}

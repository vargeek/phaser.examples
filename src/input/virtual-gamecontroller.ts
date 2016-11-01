import { BootState } from '../boot.state';
import { AssetID } from '../constant';

type Body = Phaser.Physics.P2.Body;

export class VirtualGamecontroller extends BootState {
  fireballs: Phaser.Group ;
  fireRate = 300;
  nextFire = 0;
  nextJump = 0;
  player: Phaser.Sprite;
  left=false;
  right=false;
  duck= false;
  fire=false;
  jump=false;

  preload () {

    //spritesheet for animations
    this.load.spritesheet('mario', 'assets/misc/mariospritesheet-small.png',50,50); // key, sourcefile, framesize x, framesize y
    //background, ground, fireball images
    this.load.image('ground', 'assets/misc/2048x48-ground.png');
    this.load.image('clouds', 'assets/misc/clouds.jpg');
    this.load.image('fireball', 'assets/misc/fireball.png');
    //gamepad buttons
    this.load.spritesheet('buttonvertical', 'assets/buttons/buttons-big/button-vertical.png',64,64);
    this.load.spritesheet('buttonhorizontal', 'assets/buttons/buttons-big/button-horizontal.png',96,64);
    this.load.spritesheet('buttondiagonal', 'assets/buttons/buttons-big/button-diagonal.png',64,64);
    this.load.spritesheet('buttonfire', 'assets/buttons/buttons-big/button-round-a.png',96,96);
    this.load.spritesheet('buttonjump', 'assets/buttons/buttons-big/button-round-b.png',96,96);
    // fullscreen setup
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

  }

  create () {

    if (!this.game.device.desktop) {
      this.input.onDown.add(this.goFull, this);
    }

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.gravity.y = 1200;
    this.world.setBounds(0, 0, 2000, 600);
    this.physics.p2.setBoundsToWorld(true, true, false, true, false);
    this.physics.p2.friction = 5;

    let clouds = this.add.tileSprite(0, 0, 2048, 600, 'clouds');

    let ground = this.add.sprite(this.world.width / 2, this.world.height - 24, 'ground');
    this.physics.p2.enable(ground);
    (ground.body as Body).static = true;

    this.fireballs = this.add.group();
    this.fireballs.createMultiple(500, 'fireball', 0, false);

    this.player = this.add.sprite(350, this.world.height - 150, 'mario');
    this.physics.p2.enable(this.player);
    (this.player.body as Body).setCircle(22);
    (this.player.body as Body).fixedRotation = true;
    (this.player.body as Body).mass = 4;

    this.player.animations.add('walk', [1,2,3,4], 10, true);
    this.player.animations.add('duck', [11], 0, true);
    this.player.animations.add('duckwalk', [10,11,12], 3, true);

    this.camera.follow(this.player);

    let buttonjump = this.add.button(600, 500, 'buttonjump', null, this, 0, 1, 0, 1);
    buttonjump.fixedToCamera = true;

    buttonjump.events.onInputOver.add(()=>{this.jump=true});
    buttonjump.events.onInputOut.add(()=>{this.jump=false});
    buttonjump.events.onInputDown.add(()=>{this.jump=true});
    buttonjump.events.onInputUp.add(()=>{this.jump=false});

    let buttonfire = this.add.button(700, 500, 'buttonfire', null, this, 0, 1, 0, 1);
    buttonfire.fixedToCamera = true;
    buttonfire.events.onInputOver.add(()=>{this.fire=true;});
    buttonfire.events.onInputOut.add(()=>{this.fire=false;});
    buttonfire.events.onInputDown.add(()=>{this.fire=true;});
    buttonfire.events.onInputUp.add(()=>{this.fire=false;});

    let buttonleft = this.add.button(0, 472, 'buttonhorizontal', null, this, 0, 1, 0, 1);
    buttonleft.fixedToCamera = true;
    buttonleft.events.onInputOver.add(()=>{this.left=true;});
    buttonleft.events.onInputOut.add(()=>{this.left=false;});
    buttonleft.events.onInputDown.add(()=>{this.left=true;});
    buttonleft.events.onInputUp.add(()=>{this.left=false;});

    let buttonbottomleft = this.add.button(32, 536, 'buttondiagonal', null, this, 6, 4, 6, 4);
    buttonbottomleft.fixedToCamera = true;
    buttonbottomleft.events.onInputOver.add(()=>{this.left=true;this.duck=true;});
    buttonbottomleft.events.onInputOut.add(()=>{this.left=false;this.duck=false;});
    buttonbottomleft.events.onInputDown.add(()=>{this.left=true;this.duck=true;});
    buttonbottomleft.events.onInputUp.add(()=>{this.left=false;this.duck=false;});

    let buttonright = this.add.button(160, 472, 'buttonhorizontal', null, this, 0, 1, 0, 1);
    buttonright.fixedToCamera = true;
    buttonright.events.onInputOver.add(()=>{this.right=true;});
    buttonright.events.onInputOut.add(()=>{this.right=false;});
    buttonright.events.onInputDown.add(()=>{this.right=true;});
    buttonright.events.onInputUp.add(()=>{this.right=false;});

    let buttonbottomright = this.add.button(160, 536, 'buttondiagonal', null, this, 7, 5, 7, 5);
    buttonbottomright.fixedToCamera = true;
    buttonbottomright.events.onInputOver.add(()=>{this.right=true;this.duck=true;});
    buttonbottomright.events.onInputOut.add(()=>{this.right=false;this.duck=false;});
    buttonbottomright.events.onInputDown.add(()=>{this.right=true;this.duck=true;});
    buttonbottomright.events.onInputUp.add(()=>{this.right=false;this.duck=false;});

    let buttondown = this.add.button(96, 536, 'buttonvertical', null, this, 0, 1, 0, 1);
    buttondown.fixedToCamera = true;
    buttondown.events.onInputOver.add(()=>{this.duck=true;});
    buttondown.events.onInputOut.add(()=>{this.duck=false;});
    buttondown.events.onInputDown.add(()=>{this.duck=true;});
    buttondown.events.onInputUp.add(()=>{this.duck=false;});

  }

  update () {

    if (this.left && !this.duck) {
      this.player.scale.x = -1;
      this.player.body.moveLeft(500);
      this.player.animations.play('walk');
    }
    else if (this.right && !this.duck) {
      this.player.scale.x = 1;
      this.player.body.moveRight(500);
      this.player.animations.play('walk');
    }
    else if (this.duck && !this.left && !this.right) {
      this.player.body.velocity.x = 0;
      this.player.animations.play('duck');
    }
    else if (this.duck && this.right) {
      this.player.scale.x = 1;
      this.player.body.moveRight(200);
      this.player.animations.play('duckwalk');
    }
    else if (this.duck && this.left) {
      this.player.scale.x = -1;
      this.player.body.moveLeft(200);
      this.player.animations.play('duckwalk');
    }
    else {
      this.player.loadTexture('mario', 0);
    }

    if (this.jump) {
      this.jumpNow();
      this.player.loadTexture('mario', 5);
    }

    if (this.fire) {
      this.fireNow();
      this.player.loadTexture('mario', 8);
    }

    if (this.duck) {
      this.player.body.setCircle(16, 0, 6);
    }
    else {
      this.player.body.setCircle(22);
    }

    if (this.input.maxPointers == 0 && !this.game.input.activePointer.isMouse) {
      this.fire = false;
      this.left = false;
      this.right = false;
      this.duck = false;
      this.jump = false;
    }

  }


  goFull () {

    this.scale.startFullScreen(false);

  }

  jumpNow () {

    if (this.time.now > this.nextJump) {
      this.player.body.moveUp(600);
      this.nextJump = this.time.now + 900;
    }

  }

  fireNow () {

    if (this.time.now > this.nextFire) {
      this.nextFire = this.time.now + this.fireRate;

      let fireball = this.fireballs.getFirstExists(false) as Phaser.Sprite;

      if (fireball) {
        fireball.exists = true;
        fireball.lifespan = 2500;
        if (this.player.scale.x === -1) {
          fireball.reset(this.player.x - 20, this.player.y);
          this.physics.p2.enable(fireball);
          fireball.body.moveLeft(800);
          fireball.body.moveDown(180);
        }
        else {
          fireball.reset(this.player.x + 20, this.player.y);
          this.physics.p2.enable(fireball);
          fireball.body.moveRight(800);
          fireball.body.moveDown(180);
        }
        fireball.body.setCircle(10);
      }
    }

  }

  render () {

    this.game.debug.text(`jump: ${this.jump} duck: ${this.duck} left: ${this.left} right: ${this.right} fire: ${this.fire}`, 20 ,20);

  }

}

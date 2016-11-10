import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FollowStylesState extends BootState {
  ufo: Phaser.Sprite;
  Keys = Phaser.Keyboard;
  speed = 4;
  style = 'default';
  deadzone = 'null';
  cursors: Phaser.CursorKeys;

  preload () {

    this.load.image('ground', 'assets/tests/ground-2x.png');
    this.load.image('river', 'assets/tests/river-2x.png');
    this.load.image('sky', 'assets/tests/sky-2x.png');
    this.load.image('cloud0', 'assets/tests/cloud-big-2x.png');
    this.load.image('cloud1', 'assets/tests/cloud-narrow-2x.png');
    this.load.image('cloud2', 'assets/tests/cloud-small-2x.png');
    this.load.image('ufo','assets/sprites/ufo.png');
    this.load.image('baddie','assets/sprites/space-baddie.png');
    this.load.spritesheet('button', 'assets/buttons/follow-style-button.png', 224, 70);

  }

  create () {

    //  Make the world larger than the actual canvas
    this.world.setBounds(0, 0, 1400, 1400);

    for (var i=0; i < 10; i++)
    {
        this.add.sprite(this.world.randomX, this.world.randomY, 'baddie');
    }

    //  Background images
    this.add.tileSprite(0, 0, 1400, 600, 'sky');
    this.add.sprite(0, 360, 'ground');
    this.add.sprite(0, 400, 'river');
    this.add.sprite(200, 120, 'cloud0');
    this.add.sprite(-60, 120, 'cloud1');
    this.add.sprite(900, 170, 'cloud2');

    // ufo sprite
    this.ufo = this.add.sprite(300, 240, 'ufo');

    //registration point
    this.ufo.anchor.setTo(0.5, 0.5);

    this.camera.follow(this.ufo);

    // follow style switch buttons
    let btn0 = this.add.button(6, 40, 'button',  this.lockonFollow,this, 0, 0, 0);
    let btn1 = this.add.button(6, 120, 'button', this.platformerFollow,this, 1, 1, 1);
    let btn2 = this.add.button(6, 200, 'button', this.topdownFollow,this, 2, 2, 2);
    let btn3 = this.add.button(6, 280, 'button', this.topdownTightFollow,this, 3, 3, 3);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  lockonFollow () {

    this.camera.follow(this.ufo, Phaser.Camera.FOLLOW_LOCKON);
    this.style = 'STYLE_LOCKON';
    this.deadzone = 'null';


  }
  platformerFollow () {

    this.camera.follow(this.ufo, Phaser.Camera.FOLLOW_PLATFORMER);
    this.style = 'STYLE_PLATFORMER';
    this.deadzone = this.camera.deadzone.toString();

  }

  topdownFollow () {

    this.camera.follow(this.ufo, Phaser.Camera.FOLLOW_TOPDOWN);
    this.style = 'STYLE_TOPDOWN';
    this.deadzone = this.camera.deadzone.toString();

  }
  topdownTightFollow () {

    this.camera.follow(this.ufo, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
    this.style = 'STYLE_TOPDOWN_TIGHT';
    this.deadzone = this.camera.deadzone.toString();

  }

  update () {

    if (this.cursors.left.isDown)
    {
        this.ufo.x -= this.speed;
        this.ufo.angle = -15;
    }
    else if (this.cursors.right.isDown)
    {
        this.ufo.x += this.speed;
        this.ufo.angle = 15;
    }
    else if (this.cursors.up.isDown)
    {
        this.ufo.y -= this.speed;
    }
    else if (this.cursors.down.isDown)
    {
        this.ufo.y += this.speed;
    }
    else
    {
        this.ufo.angle = 0;
    }

  }

  render () {

    // console.log(this.camera.deadzone);
    if (this.camera.deadzone) {
      let zone = new Phaser.Rectangle(this.camera.x + this.camera.deadzone.x, this.camera.y + this.camera.deadzone.y, this.camera.deadzone.width, this.camera.deadzone.height);
      this.game.debug.geom(zone);
    }
    else {
      let zone = new Phaser.Rectangle(this.camera.x + (this.camera.width - 4)/2, this.camera.y + (this.camera.height - 4)/ 2, 4, 4);
      this.game.debug.geom(zone);
    }
    this.game.debug.text('Click buttons to switch follow styles', 32, 32);
    this.game.debug.text('Current style: ' + this.style, 32, 64);
    this.game.debug.text(this.deadzone, 32, 96);


  }

}

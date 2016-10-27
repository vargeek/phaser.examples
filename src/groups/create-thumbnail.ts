import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CreateThumbnailState extends BootState {
  capture: Phaser.BitmapData;
  thumbnail: Phaser.BitmapData;

  text1: Phaser.BitmapText;
  text2: Phaser.BitmapText;


  preload () {

    this.load.image('sky', 'assets/skies/sky1.png');
    this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
    this.load.image('clown', 'assets/sprites/clown.png');
    this.load.image('leaf', 'assets/particles/leaf1.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    this.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);
    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
    this.load.bitmapFont('stack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.xml');


  }

  create () {

    //  The Stage is a BitmapData the size of the Game window
    this.capture = this.make.bitmapData(800, 600);

    //  Thumbnail will hold our scaled-down version (+4px padding for the black border)
    this.thumbnail = this.make.bitmapData(204, 154);

    //  And thumbContainer is a Sprite with the thumbnail for its texture
    var thumbContainer = this.make.sprite(590, 10, this.thumbnail);

    //  Note we add the thumbContainer to the Stage, not the World, to avoid it being captured itself => 看下面的makeThumbnail()
    this.stage.addChild(thumbContainer);


    //  Everything from this point on is just display stuff for our 'this' to show the capture working

    //  A static image
    this.add.image(0, 0, 'sky');

    //  A Graphics object
    var graphics = this.add.graphics(100, 100);

    graphics.beginFill(0xFF3300);
    graphics.lineStyle(10, 0xffd900, 1);
    graphics.lineTo(250, 50);
    graphics.lineTo(100, 100);
    graphics.lineTo(250, 220);
    graphics.lineTo(50, 220);
    graphics.lineTo(50, 50);
    graphics.endFill();

    graphics.lineStyle(10, 0xFF0000, 0.8);
    graphics.beginFill(0xFF700B, 1);

    graphics.moveTo(210,300);
    graphics.lineTo(450,320);
    graphics.lineTo(570,350);
    graphics.quadraticCurveTo(600, 0, 480,100);
    graphics.lineTo(330,120);
    graphics.lineTo(410,200);
    graphics.lineTo(210,300);
    graphics.endFill();

    //  A Group of animated sprites
    var coins = this.add.group();

    for (var i = 0; i < 20; i++)
    {
        coins.create(this.world.randomX, this.world.randomY, 'coin', 0);
    }

    coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
    coins.callAll('animations.play', 'animations', 'spin');

    //  A particle emitter
    var emitter = this.add.emitter(this.world.centerX, 0, 100);
    emitter.makeParticles('leaf');
    emitter.minParticleSpeed.setTo(-300, 30);
    emitter.maxParticleSpeed.setTo(300, 100);
    emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 0.5;
    emitter.gravity = 250;
    emitter.flow(2000, 500, 5, -1);

    //  Two BitmapText objects
    this.text1 = this.add.bitmapText(200, 100, 'desyrel', 'BitmapText', 64);
    this.text2 = this.add.bitmapText(400, 400, 'stack', 'drawFull', 32);

    this.physics.arcade.enable([ this.text1, this.text2 ]);

    this.text1.body.velocity.setTo(200, 200);
    this.text1.body.collideWorldBounds = true;
    this.text1.body.bounce.set(1);

    this.text2.body.velocity.setTo(-100, -100);
    this.text2.body.collideWorldBounds = true;
    this.text2.body.bounce.set(1);

    //  A Sprite with children, one of them scaled
    var sonic = this.add.sprite(50, 280, 'sonic');
    sonic.addChild(this.make.sprite(80, 130, 'clown'));
    sonic.addChild(this.make.sprite(110, 130, 'clown'));
    var clown3 = sonic.addChild(this.make.sprite(140, 130, 'clown')) as Phaser.Sprite;
    clown3.scale.set(2, 2);
    clown3.anchor.set(1, 1);

    //  Scaled and rotated
    var mushroom = this.add.sprite(500, 400, 'mushroom');
    mushroom.scale.set(2);
    mushroom.angle = 24;

    //  Inverse scale
    var sonic2 = this.add.sprite(400, 200, 'sonic');
    sonic2.scale.set(2);

    // var subsonic = sonic2.addChild(game.make.sprite(100, 0, 'sonic'));
    // subsonic.scale.x = -1;

    //  A Text Object
    this.add.text(440, 530, "Click to capture", { font: "48px Arial", fill: "#ff0044" });

    //  Click to capture a thumbnail
    this.input.onDown.add(this.makeThumbnail, this);

  }

  makeThumbnail () {

    this.capture.drawFull(this.world);
    this.thumbnail.rect(0, 0, 204, 154, '#000');
    this.thumbnail.copy(this.capture, 0, 0, 800, 600, 2, 2, 200, 150);

  }

  update () {

    this.physics.arcade.collide(this.text1, this.text2);

  }

}

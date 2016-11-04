import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class BitmaptextWithPhysicsState extends BootState {
  text1: Phaser.BitmapText;
  text2: Phaser.BitmapText;

  preload () {

    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
    this.load.bitmapFont('stack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.xml');

  }

  create () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.text1 = this.add.bitmapText(200, 100, 'desyrel', 'BitmapText', 64);
    this.text2 = this.add.bitmapText(400, 400, 'stack', 'with physics', 32);

    this.physics.arcade.enable([this.text1, this.text2]);

    this.text1.body.velocity.set(200);
    this.text1.body.collideWorldBounds = true;
    this.text1.body.bounce.set(1);

    this.text2.body.velocity.set(-100, -100);
    this.text2.body.collideWorldBounds = true;
    this.text2.body.bounce.set(1);

  }

  update () {

    this.physics.arcade.collide(this.text1, this.text2);

  }

}

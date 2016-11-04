import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RetroFont2State extends BootState {
  font1: Phaser.RetroFont;
  font2: Phaser.RetroFont;
  image1: Phaser.Image;
  image2: Phaser.Image;

  preload () {

    this.load.image('goldFont', 'assets/fonts/retroFonts/gold_font.png');
    this.load.image('bluePink', 'assets/fonts/retroFonts/bluepink_font.png');
    this.load.image('forgotten', 'assets/pics/forgotten_worlds.png');

  }

  create () {

    this.font1 = this.add.retroFont('goldFont', 16, 16, `!     :() ,?.${Phaser.RetroFont.TEXT_SET10}`, 20, 0, 0);

    this.font1.text = 'phaser brings you retro style bitmap fonts';

    this.image1 = this.add.image(this.world.centerX, 48, this.font1);
    this.image1.anchor.set(0.5);

    this.font2 = this.add.retroFont('bluePink', 32, 32, Phaser.RetroFont.TEXT_SET2, 10);
    // http://localhost:3000/Phaser.RetroFont.html#setText
    // setText(content, multiLine, characterSpacing, lineSpacing, lineAlignment, allowLowerCase)
    // A helper function that quickly sets lots of variables at once, and then updates the text.
    // multiLine=false:  Set to true if you want to support carriage-returns in the text and create a multi-line sprite instead of a single line.
    // characterSpacing=0: To add horizontal spacing between each character specify the amount in pixels
    // lineSpacing=0: To add vertical spacing between each line of text, set the amount in pixels.
    // lineAlignment='left': Align each line of multi-line text. Set to RetroFont.ALIGN_LEFT, RetroFont.ALIGN_RIGHT or RetroFont.ALIGN_CENTER.
    // allowLowerCase=false:  Lots of bitmap font sets only include upper-case characters, if yours needs to support lower case then set this to true.
    this.font2.setText('phaser 2\nin the house', true, 0, 8, Phaser.RetroFont.ALIGN_CENTER);

    this.image2 = this.add.image(this.world.centerX, 220, this.font2);
    this.image2.anchor.set(0.5);

    this.add.image(0, this.game.height - 274, 'forgotten');

    this.time.events.loop(Phaser.Timer.SECOND * 2, this.change, this);

  }

  change () {

    this.image2.tint = Math.random() * 0xffffff;

  }

  update () {

    this.image2.rotation += (2 * this.time.physicsElapsed);

  }

}

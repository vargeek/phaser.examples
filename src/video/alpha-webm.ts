import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AlphaWebmState extends BootState {
  text: Phaser.BitmapText;
  video: Phaser.Video;

  preload () {

    this.load.image('pic', 'assets/pics/thalion-rain.png');
    this.load.video('space', 'assets/video/alpha-webm.webm');
    this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');

  }

  create () {

    //  This only works in Chrome
    //  No other browser supports webm files with alpha transparency (yet)

    let pic = this.add.image(this.world.centerX, this.world.centerY, 'pic');
    pic.anchor.set(0.5);
    pic.scale.set(4);
    pic.smoothed = false;

    this.text = this.add.bitmapText(400, 300, 'desyrel', 'Phaser\nAlpha Videos', 64);
    this.text.anchor.set(0.5);
    this.text.align = 'center';

    this.video = this.add.video('space');
    this.video.play(true);
    this.video.addToWorld(400, 300, 0.5, 0.5);

  }

  update () {

    this.text.text = `Phaser kicking\nAlpha Video Channels\n${Math.round(this.video.progress * 100)}%`;

  }

}

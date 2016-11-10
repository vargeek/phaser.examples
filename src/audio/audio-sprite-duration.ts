import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AudioSpriteDurationState extends BootState {
  fx: Phaser.Sound;

  preload () {

    this.load.image('bg', 'assets/pics/cougar_dragonsun.png');

    this.load.spritesheet('button', 'assets/buttons/flixel-button.png', 80, 20);
    this.load.bitmapFont('nokia', 'assets/fonts/bitmapFonts/nokia16black.png', 'assets/fonts/bitmapFonts/nokia16black.xml');

    this.load.audio('sfx', [ 'assets/audio/SoundEffects/magical_horror_audiosprite.mp3', 'assets/audio/SoundEffects/magical_horror_audiosprite.ogg' ]);

  }

  create () {

    let bg = this.add.image(0, 0, 'bg');
    bg.width = 800;
    bg.height = 600;

    this.fx = this.add.audio('sfx');
    this.fx.allowMultiple = false;

    this.fx.addMarker('charm', 0, 2.7);
    this.fx.addMarker('curse', 4, 2.9);
    this.fx.addMarker('fireball', 8, 5.2);
    this.fx.addMarker('spell', 14, 4.7);
    this.fx.addMarker('soundscape', 20, 18.8);

	  this.makeButton('charm', 600, 100);
	  this.makeButton('curse', 600, 140);
	  this.makeButton('fireball', 600, 180);
	  this.makeButton('spell', 600, 220);
    this.makeButton('soundscape', 600, 260);
	  this.makeButton('pause', 600, 380);

  }

  makeButton (name: string, x: number, y: number) {

    let button = this.add.button(x, y, 'button', this.onClickButton, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;

    let text = this.add.bitmapText(x, y + 7, 'nokia', name, 16);
    text.x += (button.width / 2) - (text.textWidth / 2);

  }

  onClickButton (button: Phaser.Button) {

    if (button.name === 'pause') {
      // http://localhost:3000/Phaser.Sound.html#paused
      // paused :boolean
      // true if the sound is paused, otherwise false.
      if (this.fx.paused) {
        // http://localhost:3000/Phaser.Sound.html#resume
        // resume()
        // Resumes the sound.
        this.fx.resume();
      }
      else {
        // http://localhost:3000/Phaser.Sound.html#pause
        // pause()
        // Pauses the sound.
        this.fx.pause();
      }
    }
    else {
      this.fx.play(button.name);
    }

  }

}

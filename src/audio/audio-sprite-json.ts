import { BootState } from '../boot.state';
import { AssetID } from '../constant';
var audioJSON = {
    spritemap: {
        'alien death': {
            start: 1,
            end: 2,
            loop: false
        },
        'boss hit': {
            start: 3,
            end: 3.5,
            loop: false
        },
        'escape': {
            start: 4,
            end: 7.2,
            loop: false
        },
        'meow': {
            start: 8,
            end: 8.5,
            loop: false
        },
        'numkey': {
            start: 9,
            end: 9.1,
            loop: false
        },
        'ping': {
            start: 10,
            end: 11,
            loop: false
        },
        'death': {
            start: 12,
            end: 16.2,
            loop: false
        },
        'shot': {
            start: 17,
            end: 18,
            loop: false
        },
        'squit': {
            start: 19,
            end: 19.3,
            loop: false
        }
    }
};
export class AudioSpriteJsonState extends BootState {
  fx: Phaser.AudioSprite;

  preload () {

    this.load.image('title', 'assets/pics/catastrophi.png');

    this.load.spritesheet('button', 'assets/buttons/flixel-button.png', 80, 20);
    this.load.bitmapFont('nokia', 'assets/fonts/bitmapFonts/nokia16black.png', 'assets/fonts/bitmapFonts/nokia16black.xml');

    // http://localhost:3000/Phaser.Loader.html#audioSprite
    // audioSprite(key, urls, jsonURL, jsonData, autoDecode) → {Phaser.Loader}
    // Adds an audio sprite file to the current load queue.

    // The file is not loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.

    // The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.

    // Audio Sprites are a combination of audio files and a JSON configuration.

    // The JSON follows the format of that created by https://github.com/tonistiigi/audiosprite

    // Retrieve the file via Cache.getSoundData(key).

    // The URL can be relative or absolute. If the URL is relative the Loader.baseURL and Loader.path values will be prepended to it.
    this.load.audiosprite('sfx', ['assets/audio/SoundEffects/fx_mixdown.ogg'],null, audioJSON);

  }

  create () {

    this.add.image(0, 0, 'title');

    // http://localhost:3000/Phaser.GameObjectFactory.html#audioSprite
    // audioSprite(key) → {Phaser.AudioSprite}
    // Creates a new AudioSprite object.
    this.fx = this.add.audioSprite('sfx');

	  this.makeButton('alien death', 600, 100);
	  this.makeButton('boss hit', 600, 140);
	  this.makeButton('escape', 600, 180);
	  this.makeButton('meow', 600, 220);
	  this.makeButton('numkey', 600, 260);
	  this.makeButton('ping', 600, 300);
	  this.makeButton('death', 600, 340);
	  this.makeButton('shot', 600, 380);
	  this.makeButton('squit', 600, 420);


  }

  makeButton (name: string, x: number, y: number) {

    let button = this.add.button(x, y, 'button', this.onClickbutton, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;

    let text = this.add.bitmapText(x, y + 7, 'nokia', name, 16);
    text.x += (button.width / 2) - (text.textWidth / 2);

  }

  onClickbutton (button: Phaser.Bullet) {

    // http://localhost:3000/Phaser.AudioSprite.html#play
    // play(marker, volume) → {Phaser.Sound}
    // Play a sound with the given name.
    this.fx.play(button.name);

  }

}

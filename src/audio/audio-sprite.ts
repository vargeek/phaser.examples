import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class AudioSpriteState extends BootState {
  fx: Phaser.Sound;

  preload () {

    this.load.image('title', 'assets/pics/catastrophi.png');

    this.load.spritesheet('button', 'assets/buttons/flixel-button.png', 80, 20);
    this.load.bitmapFont('nokia', 'assets/fonts/bitmapFonts/nokia16black.png', 'assets/fonts/bitmapFonts/nokia16black.xml');

    // game.load.audio('sfx', [ 'assets/audio/SoundEffects/fx_mixdown.mp3', 'assets/audio/SoundEffects/fx_mixdown.ogg' ]);

    // http://localhost:3000/Phaser.Loader.html#audio
    // audio(key, urls, autoDecode) → {Phaser.Loader}
    // Adds an audio file to the current load queue.

    // The file is not loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.

    // The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.

    // Retrieve the file via Cache.getSound(key).

    // The URL can be relative or absolute. If the URL is relative the Loader.baseURL and Loader.path values will be prepended to it.

    // Mobile warning: There are some mobile devices (certain iPad 2 and iPad Mini revisions) that cannot play 48000 Hz audio.
    // When they try to play the audio becomes extremely distorted and buzzes, eventually crashing the sound system.
    // The solution is to use a lower encoding rate such as 44100 Hz.
    this.load.audio('sfx', 'assets/audio/SoundEffects/fx_mixdown.ogg');

  }

  create () {

    this.add.image(0, 0, 'title');

    // http://localhost:3000/Phaser.GameObjectFactory.html#audio
    // audio(key, volume, loop, connect) → {Phaser.Sound}
    // volume{number=1}     The volume at which the sound will be played.
    // loop{boolean=false}  Whether or not the sound will loop.
    // connect              Controls if the created Sound object will connect to the master gainNode of the SoundManager when running under WebAudio.
    // Creates a new Sound object.
    this.fx = this.add.audio('sfx');
    // http://localhost:3000/Phaser.Sound.html#allowMultiple
    // allowMultiple :boolean

    // This will allow you to have multiple instances of this Sound playing at once. This is only useful when running under Web Audio, and we recommend you implement a local pooling system to not flood the sound channels.
    this.fx.allowMultiple = true;

    // http://localhost:3000/Phaser.Sound.html#addMarker
    // addMarker(name, start, duration, volume, loop)
    // Adds a marker into the current Sound. A marker is represented by a unique key and a start time and duration.
    // This allows you to bundle multiple sounds together into a single audio file and use markers to jump between them for playback.
	  this.fx.addMarker('alien death', 1, 1.0);
	  this.fx.addMarker('boss hit', 3, 0.5);
	  this.fx.addMarker('escape', 4, 3.2);
	  this.fx.addMarker('meow', 8, 0.5);
	  this.fx.addMarker('numkey', 9, 0.1);
	  this.fx.addMarker('ping', 10, 1.0);
	  this.fx.addMarker('death', 12, 4.2);
	  this.fx.addMarker('shot', 17, 1.0);
	  this.fx.addMarker('squit', 19, 0.3);

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

    let button = this.add.button(x, y, 'button', this.onClickButton, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;

    let text = this.add.bitmapText(x, y + 7, 'nokia', name, 16);
    text.x += (button.width / 2) - (text.textWidth / 2);

  }

  onClickButton (button: Phaser.Button) {

    // http://localhost:3000/Phaser.Sound.html#play
    // play(marker, position, volume, loop, forceRestart) → {Phaser.Sound}
    // marker{string=''}    If you want to play a marker then give the key here, otherwise leave blank to play the full sound.
    // position{number=0}   The starting position to play the sound from - this is ignored if you provide a marker.
    // volume{number=1}     Volume of the sound you want to play. If none is given it will use the volume given to the Sound when it was created (which defaults to 1 if none was specified).
    // loop{boolean=false}  Loop when finished playing? If not using a marker / audio sprite the looping will be done via the WebAudio loop property, otherwise it's time based.
    // forceRestart{boolean=true}   If the sound is already playing you can set forceRestart to restart it from the beginning.
    // Play this sound, or a marked section of it.
    this.fx.play(button.name);

  }

}

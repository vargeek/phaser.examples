import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class LoopState extends BootState {

  bass: Phaser.Sound;
  drums: Phaser.Sound;
  percussion: Phaser.Sound;
  synth1: Phaser.Sound;
  synth2: Phaser.Sound;
  top1: Phaser.Sound;
  top2: Phaser.Sound;
  text: Phaser.Text;
  sounds: Phaser.Sound[];
  current: Phaser.Sound;
  speakers: Phaser.Image;
  loopCount = 0;

  preload () {

    this.load.image('speakers','assets/sprites/speakers.png');

    this.load.audio('bass', 'assets/audio/tech/bass.mp3');
    this.load.audio('drums', 'assets/audio/tech/drums.mp3');
    this.load.audio('percussion', 'assets/audio/tech/percussion.mp3');
    this.load.audio('synth1', 'assets/audio/tech/synth1.mp3');
    this.load.audio('synth2', 'assets/audio/tech/synth2.mp3');
    this.load.audio('top1', 'assets/audio/tech/top1.mp3');
    this.load.audio('top2', 'assets/audio/tech/top2.mp3');

  }

  create () {

    this.stage.backgroundColor = '#838282';

    this.speakers = this.add.image(this.world.centerX, 500, 'speakers');
    this.speakers.anchor.set(0.5, 1);

    var style = { font: "65px Arial", fill: "#52bace", align: "center" };
    this.text = this.add.text(this.world.centerX, 100, "decoding", style);
    this.text.anchor.set(0.5);

    this.bass = this.add.audio('bass');
    this.drums = this.add.audio('drums');
    this.percussion = this.add.audio('percussion');
    this.synth1 = this.add.audio('synth1');
    this.synth2 = this.add.audio('synth2');
    this.top1 = this.add.audio('top1');
    this.top2 = this.add.audio('top2');

    this.sounds = [this.bass, this.drums, this.percussion, this.synth1, this.synth2, this.top1, this.top2];

    // http://localhost:3000/Phaser.SoundManager.html#setDecodedCallback
    // setDecodedCallback(files, callback, callbackContext)
    // files{string[]|Sound[]}    An array containing either Phaser.Sound objects or their key strings as found in the Phaser.Cache.

    // This method allows you to give the SoundManager a list of Sound files, or keys, and a callback.
    // Once all of the Sound files have finished decoding the callback will be invoked.
    // The amount of time spent decoding depends on the codec used and file size.
    // If all of the files given have already decoded the callback is triggered immediately.
    this.sound.setDecodedCallback(this.sounds, this.start, this);

  }

  start () {

    this.sounds.shift();
    // http://localhost:3000/Phaser.Sound.html#loopFull
    // loopFull(volume) → {Phaser.Sound}
    // Loops this entire sound. If you need to loop a section of it then use Sound.play and the marker and loop parameters.
    this.bass.loopFull(0.6);
    // http://localhost:3000/Phaser.Sound.html#onLoop
    // onLoop :Phaser.Signal
    // The onLoop event is dispatched when this sound loops during playback.
    this.bass.onLoop.add(this.hasLooped, this);
    this.text.text = 'bass';

  }

  hasLooped (sound: Phaser.Sound) {

    this.loopCount++;

    if (this.loopCount === 1) {
      this.sounds.shift();
      this.drums.loopFull(0.6);
      this.text.text = 'drums';
      this.add.tween(this.speakers.scale).to({x: 1.3, y: 1.1}, 230, 'Sine.easeInOut', true, 0, -1, true);
    }
    else if (this.loopCount === 2) {
      this.current = this.rnd.pick(this.sounds);
      this.current.loopFull();
      // http://localhost:3000/Phaser.Sound.html#key
      // key :string
      // Asset key for the sound.
      this.text.text = this.current.key;
    }
    else if (this.loopCount > 2) {
      // http://localhost:3000/Phaser.Sound.html#stop
      // stop()
      // Stop playing this sound.
      this.current.stop();
      this.current = this.rnd.pick(this.sounds);
      this.current.loopFull();
      this.text.text = this.current.key;
    }


  }



}

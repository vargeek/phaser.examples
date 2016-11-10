import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class RemoveSoundState extends BootState {
  sprite: Phaser.Sprite;
  music: Phaser.Sound;

  preload () {

    this.load.image('greenie', 'assets/sprites/wizball.png');
    this.load.audio('wizball', ['assets/audio/oedipus_wizball_highscore.mp3', 'assets/audio/oedipus_wizball_highscore.ogg']);

  }

  create () {

    this.stage.backgroundColor = '#182d3b';
    this.input.touch.preventDefault = false;

    this.music = this.add.audio('wizball');

    this.music.play();

    this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'greenie');
    this.sprite.anchor.set(0.5);

    this.input.onDown.add(this.removeMusic, this);

  }

  removeMusic () {

    // http://localhost:3000/Phaser.Sound.html#destroy
    // destroy(remove)
    // Destroys this sound and all associated events and removes it from the SoundManager.
    this.music.destroy();

    // http://localhost:3000/Phaser.Cache.html#removeSound
    // removeSound(key)
    // Removes a sound from the cache.

    // If any Phaser.Sound objects use the audio file in the cache that you remove with this method, they will
    // automatically destroy themselves. If you wish to have full control over when Sounds are destroyed then
    // you must finish your house-keeping and destroy them all yourself first, before calling this method.

    // Note that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere
    // then it will persist in memory.
    this.game.cache.removeSound('wizball');

  }

  render () {

    // http://localhost:3000/Phaser.Cache.html#checkSoundKey
    // checkSoundKey(key) → {boolean}
    // Checks if the given key exists in the Sound Cache.
    if (this.cache.checkSoundKey('wizball')) {
      this.game.debug.soundInfo(this.music, 20, 20);
    }

  }

}

# audio-sprite
  - load.audio>
    ```js
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

    ```
  - add.audio>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#audio
    // audio(key, volume, loop, connect) → {Phaser.Sound}
    // volume{number=1}     The volume at which the sound will be played.
    // loop{boolean=false}  Whether or not the sound will loop.
    // connect              Controls if the created Sound object will connect to the master gainNode of the SoundManager when running under WebAudio.
    // Creates a new Sound object.
    this.fx = this.add.audio('sfx');

    ```
  - sound.allowMultiple>
    ```js
    // http://localhost:3000/Phaser.Sound.html#allowMultiple
    // allowMultiple :boolean

    // This will allow you to have multiple instances of this Sound playing at once. This is only useful when running under Web Audio, and we recommend you implement a local pooling system to not flood the sound channels.
    this.fx.allowMultiple = true;

    ```
  - sound.addMarker>
    ```js
    // http://localhost:3000/Phaser.Sound.html#addMarker
    // addMarker(name, start, duration, volume, loop)
    // Adds a marker into the current Sound. A marker is represented by a unique key and a start time and duration.
    // This allows you to bundle multiple sounds together into a single audio file and use markers to jump between them for playback.
	  this.fx.addMarker('alien death', 1, 1.0);

    ```
  - sound.play>
    ```js
    // http://localhost:3000/Phaser.Sound.html#play
    // play(marker, position, volume, loop, forceRestart) → {Phaser.Sound}
    // marker{string=''}    If you want to play a marker then give the key here, otherwise leave blank to play the full sound.
    // position{number=0}   The starting position to play the sound from - this is ignored if you provide a marker.
    // volume{number=1}     Volume of the sound you want to play. If none is given it will use the volume given to the Sound when it was created (which defaults to 1 if none was specified).
    // loop{boolean=false}  Loop when finished playing? If not using a marker / audio sprite the looping will be done via the WebAudio loop property, otherwise it's time based.
    // forceRestart{boolean=true}   If the sound is already playing you can set forceRestart to restart it from the beginning.
    // Play this sound, or a marked section of it.
    this.fx.play(button.name);

    ```
# audio-sprite-duration
  - sound.pause>
    ```js
    // http://localhost:3000/Phaser.Sound.html#pause
    // pause()
    // Pauses the sound.
    this.fx.pause();

    ```
  - sound.resume>
    ```js
    // http://localhost:3000/Phaser.Sound.html#resume
    // resume()
    // Resumes the sound.
    this.fx.resume();

    ```
  - sound.paused>
    ```js
    // http://localhost:3000/Phaser.Sound.html#paused
    // paused :boolean
    // true if the sound is paused, otherwise false.
    if (this.fx.paused) {}
    ```
# audio-sprite-json
  - load.audiosprite>
    ```js
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

    ```
  - add.audioSprite>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#audioSprite
    // audioSprite(key) → {Phaser.AudioSprite}
    // Creates a new AudioSprite object.
    this.fx = this.add.audioSprite('sfx');

    ```
  - audiosprite.play>
    ```js
    // http://localhost:3000/Phaser.AudioSprite.html#play
    // play(marker, volume) → {Phaser.Sound}
    // Play a sound with the given name.
    this.fx.play(button.name);

    ```
# fade-in
  - sound.onDecoded>
    ```js
    // http://localhost:3000/Phaser.Sound.html#onDecoded
    // onDecoded :Phaser.Signal
    // The onDecoded event is dispatched when the sound has finished decoding (typically for mp3 files)
    this.music.onDecoded.add(this.start, this);

    ```
  - sound.fadeIn>
    ```js
    // http://localhost:3000/Phaser.Sound.html#fadeIn
    // fadeIn(duration, loop, marker)
    // duration{number=1000}    The time in milliseconds over which the Sound should fade in.
    // loop(number=false)       Should the Sound be set to loop? Note that this doesn't cause the fade to repeat.
    // marker{string=current_marker}    The marker to start at; defaults to the current (last played) marker. To start playing from the beginning specify specify a marker of ''.

    // Starts this sound playing (or restarts it if already doing so) and sets the volume to zero.
    // Then increases the volume from 0 to 1 over the duration specified.

    // At the end of the fade Sound.onFadeComplete is dispatched with this Sound object as the first parameter,
    // and the final volume (1) as the second parameter.
    this.music.fadeIn(4000);

    ```
  - debug.soundInfo
# ios
  - load.audio
  - add.audio
  - sound.onDecoded
# loop
  - soundManager.setDecodedCallback>
    ```js
    // http://localhost:3000/Phaser.SoundManager.html#setDecodedCallback
    // setDecodedCallback(files, callback, callbackContext)
    //

    // This method allows you to give the SoundManager a list of Sound files, or keys, and a callback.
    // Once all of the Sound files have finished decoding the callback will be invoked.
    // The amount of time spent decoding depends on the codec used and file size.
    // If all of the files given have already decoded the callback is triggered immediately.
    this.sound.setDecodedCallback(this.sounds, this.start, this);

    ```
  - sound.loopFull>
    ```js
    // http://localhost:3000/Phaser.Sound.html#loopFull
    // loopFull(volume) → {Phaser.Sound}
    // Loops this entire sound. If you need to loop a section of it then use Sound.play and the marker and loop parameters.
    this.bass.loopFull(0.6);

    ```
  - sound.onLoop>
    ```js
    // http://localhost:3000/Phaser.Sound.html#onLoop
    // onLoop :Phaser.Signal
    // The onLoop event is dispatched when this sound loops during playback.
    this.bass.onLoop.add(this.hasLooped, this);

    ```
  - sound.key>
    ```js
    // http://localhost:3000/Phaser.Sound.html#key
    // key :string
    // Asset key for the sound.
    this.text.text = this.current.key;

    ```
  - sound.stop>
    ```js
    // http://localhost:3000/Phaser.Sound.html#stop
    // stop()
    // Stop playing this sound.
    this.current.stop();

    ```
# pause-and-resume
# pause-and-resume-marker
# play-music
# protracker
# remove-sound
# restart-sound
# sound-complete
# ym

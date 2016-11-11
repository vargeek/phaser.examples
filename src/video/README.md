# load-as-blob
  - load.video>
    ```js
    // http://localhost:3000/Phaser.Loader.html#video
    // video(key, urls, loadEvent, asBlob) → {Phaser.Loader}
    // Adds a video file to the current load queue.

    // The file is not loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.

    // The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.

    // Retrieve the file via Cache.getVideo(key).

    // The URL can be relative or absolute. If the URL is relative the Loader.baseURL and Loader.path values will be prepended to it.

    // You don't need to preload a video in order to play it in your game. See Video.createVideoFromURL for details.
    this.load.video('space', 'assets/video/wormhole.mp4', 'canplaythrough', true);

    ```
  - add.video>
    ```js
    // http://localhost:3000/Phaser.GameObjectFactory.html#video
    // video(key, url) → {Phaser.Video}
    // Create a Video object.
    // This will return a Phaser.Video object which you can pass to a Sprite to be used as a texture.
    let video = this.add.video('space');

    ```
  - video.play>
    ```js
    // http://localhost:3000/Phaser.Video.html#play
    // play(loop, playbackRate) → {Phaser.Video}
    // playbackRate{number=1}     The playback rate of the video. 1 is normal speed, 2 is x2 speed, and so on. You cannot set a negative playback rate.
    // Starts this video playing if it's not already doing so.
    video.play(true)

    ```
  - video.addToWorld>
    ```js
    // http://localhost:3000/Phaser.Video.html#addToWorld
    // addToWorld(x, y, anchorX, anchorY, scaleX, scaleY) → {Phaser.Image}
    // Creates a new Phaser.Image object, assigns this Video to be its texture, adds it to the world then returns it.
    video.addToWorld();

    ```
# play-video
# multiple-videos
# alpha-webm
  - alpha transparency

    This only works in Chrome, No other browser supports webm files with alpha transparency (yet)
# change-source
  - video.onPlay>
    ```js
    // http://localhost:3000/Phaser.Video.html#onPlay
    // onPlay :Phaser.Signal
    // This signal is dispatched when the Video starts to play. It sends 3 parameters: a reference to the Video object, if the video is set to loop or not and the playback rate.
    this.video.onPlay.addOnce(this.start, this);

    ```
  - video.changeSource>
    ```js
        // http://localhost:3000/Phaser.Video.html#changeSource
    // changeSource(src, autoplay) → {Phaser.Video}

    // On some mobile browsers you cannot play a video until the user has explicitly touched the video to allow it.
    // Phaser handles this via the setTouchLock method. However if you have 3 different videos, maybe an "Intro", "Start" and "Game Over"
    // split into three different Video objects, then you will need the user to touch-unlock every single one of them.

    // You can avoid this by using just one Video object and simply changing the video source. Once a Video element is unlocked it remains
    // unlocked, even if the source changes. So you can use this to your benefit to avoid forcing the user to 'touch' the video yet again.

    // As you'd expect there are limitations. So far we've found that the videos need to be in the same encoding format and bitrate.
    // This method will automatically handle a change in video dimensions, but if you try swapping to a different bitrate we've found it
    // cannot render the new video on iOS (desktop browsers cope better).

    // When the video source is changed the video file is requested over the network. Listen for the onChangeSource signal to know
    // when the new video has downloaded enough content to be able to be played. Previous settings such as the volume and loop state
    // are adopted automatically by the new video.

    // Note: So far we've found that the videos need to be in the same encoding format and bitrate.
    this.video.changeSource('assets/video/skull.mp4');

    ```
  - Note: So far we've found that the videos need to be in the same encoding format and bitrate.
# dolby-digital-plus
# snapshot-blend-mode
  - video.onAccess>
    ```js
    // http://localhost:3000/Phaser.Video.html#onAccess
    // onAccess :Phaser.Signal
    // This signal is dispatched if the user allows access to their webcam.
    this.video.onAccess.add(this.camAllowed, this);

    ```
  - video.onError>
    ```js
    // http://localhost:3000/Phaser.Video.html#onError
    // onError :Phaser.Signal
    // This signal is dispatched if an error occurs either getting permission to use the webcam (for a Video Stream) or when trying to play back a video file.
    this.video.onError.add(this.camBlocked, this);

    ```
  - video.startMediaStream>
    ```js
    // http://localhost:3000/Phaser.Video.html#startMediaStream
    // startMediaStream(captureAudio, width, height) → {Phaser.Video}
    // captureAudio{boolean=false}      Controls if audio should be captured along with video in the video stream.

    // Instead of playing a video file this method allows you to stream video data from an attached webcam.

    // As soon as this method is called the user will be prompted by their browser to "Allow" access to the webcam.
    // If they allow it the webcam feed is directed to this Video. Call Video.play to start the stream.

    // If they block the webcam the onError signal will be dispatched containing the NavigatorUserMediaError or MediaStreamError event.

    // You can optionally set a width and height for the stream. If set the input will be cropped to these dimensions.
    // If not given then as soon as the stream has enough data the video dimensions will be changed to match the webcam device.
    // You can listen for this with the onChangeSource signal.
    this.video.startMediaStream();

    ```
  - video.grab>
    ```js
    // http://localhost:3000/Phaser.Video.html#grab
    // grab(clear, alpha, blendMode) → {Phaser.BitmapData}
    // clear{boolean=false}     Should the BitmapData be cleared before the Video is grabbed? Unless you are using alpha or a blend mode you can usually leave this set to false.
    // alpha{boolean=1}         The alpha that will be set on the video before drawing. A value between 0 (fully transparent) and 1, opaque.
    // blendMode{string=null}   The composite blend mode that will be used when drawing. The default is no blend mode at all. This is a Canvas globalCompositeOperation value such as 'lighter' or 'xor'.

    // Grabs the current frame from the Video or Video Stream and renders it to the Video.snapshot BitmapData.
    // You can optionally set if the BitmapData should be cleared or not, the alpha and the blend mode of the draw.
    // If you need more advanced control over the grabbing them call Video.snapshot.copy directly with the same parameters as BitmapData.copy.
    this.video.grab(true, this.alpha.alpha);

    ```
  - video.snapshot>
    ```js
    // http://localhost:3000/Phaser.Video.html#snapshot
    // <readonly> snapshot :Phaser.BitmapData
    // A snapshot grabbed from the video. This is initially black. Populate it by calling Video.grab().
    // When called the BitmapData is updated with a grab taken from the current video playing or active video stream.
    // If Phaser has been compiled without BitmapData support this property will always be null.
    this.bmd.draw(this.video.snapshot);

    ```
# sprites-sharing-video
  - group.create(x,y,video: Phaser.Video)
# take-snapshot-from-stream
  - video.onChangeSource>
    ```js
    // http://localhost:3000/Phaser.Video.html#onChangeSource
    // onChangeSource :Phaser.Signal
    // This signal is dispatched if the Video source is changed. It sends 3 parameters: a reference to the Video object and the new width and height of the new video source.
    this.video.onChangeSource.add(this.takeSnapshot, this);

    ```
  - bitmapData.addToWorld
  - video.grab
# video-stream
  - video.stop>
    ```js
    // http://localhost:3000/Phaser.Video.html#stop
    // stop() → {Phaser.Video}

    // Stops the video playing.

    // This removes all locally set signals.

    // If you only wish to pause playback of the video, to resume at a later time, use Video.paused = true instead.
    // If the video hasn't finished downloading calling Video.stop will not abort the download. To do that you need to
    // call Video.destroy instead.

    // If you are using a video stream from a webcam then calling Stop will disconnect the MediaStream session and disable the webcam.
    this.video.stop();

    ```

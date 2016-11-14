import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class FullscreenState extends BootState {

  preload () {

    this.load.image('dragon', 'assets/pics/cougar_dragonsun.png');
    this.load.image('star', 'assets/pics/monika_krawinkel-amberstar_title.png');
    this.load.image('nanoha', 'assets/pics/nanoha_taiken_pink.png');

  }

  create () {

    let image = this.add.image(this.world.centerX, this.world.centerY, 'nanoha');
    image.anchor.set(0.5);

    this.stage.backgroundColor = '#4d4d4d';

    this.input.onDown.add(this.gofull, this);

  }

  gofull () {

    // http://localhost:3000/Phaser.ScaleManager.html#isFullScreen
    // <readonly> isFullScreen :boolean
    // Returns true if the browser is in fullscreen mode, otherwise false.
    if (this.scale.isFullScreen) {
      // http://localhost:3000/Phaser.ScaleManager.html#stopFullScreen
      // stopFullScreen() → {boolean}
      // Stops / exits fullscreen mode, if active.
      // Returns: boolean -
      // Returns true if the browser supports fullscreen mode and fullscreen mode will be exited.
      this.scale.stopFullScreen();
    }
    else {
      // http://localhost:3000/Phaser.ScaleManager.html#startFullScreen
      // startFullScreen(antialias, allowTrampoline) → {boolean}
      // antialias{boolean?}        Changes the anti-alias feature of the canvas before jumping in to fullscreen (false = retain pixel art, true = smooth art). If not specified then no change is made. Only works in CANVAS mode.
      // allowTrampoline{boolean?}  Internal argument. If false click trampolining is suppressed.
      // Start the browsers fullscreen mode - this must be called from a user input Pointer or Mouse event.
      // The Fullscreen API must be supported by the browser for this to work - it is not the same as setting
      // the game size to fill the browser window. See compatibility.supportsFullScreen to check if the current
      // device is reported to support fullscreen mode.
      // The fullScreenFailed signal will be dispatched if the fullscreen change request failed or the game does not support the Fullscreen API.
      this.scale.startFullScreen(false);
    }

  }


}

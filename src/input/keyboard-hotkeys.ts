import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class KeyboardHotkeysState extends BootState {
  key1: Phaser.Key;
  key2: Phaser.Key;
  key3: Phaser.Key;

  preload () {

    this.load.image('phaser', 'assets/sprites/phaser-dude.png');
    this.load.image('logo', 'assets/sprites/phaser_tiny.png');
    this.load.image('pineapple', 'assets/sprites/pineapple.png');

  }

  create () {

    this.stage.backgroundColor = '#736357';
    this.add.text(0, 0, 'Press one, two or three !', {});

    // http://localhost:3000/Phaser.Keyboard.html#addKey
    // addKey(keycode) → {Phaser.Key}
    // 注册按键.
    // 通过addKey注册的按键默认自动添加了addKeyCapture(阻止向浏览器传递按键事件)，未注册而只通过轮询的方式检查是否按下的按键默认是不会被capture
    // If you need more fine-grained control over a Key you can create a new Phaser.Key object via this method.
    // The Key object can then be polled, have events attached to it, etc.
    this.key1 = this.input.keyboard.addKey(Phaser.Keyboard.ONE);
    this.key1.onDown.add(this.addPhaserDude, this);

    this.key2 = this.input.keyboard.addKey(Phaser.Keyboard.TWO);
    this.key2.onDown.add(this.addPhaserLogo, this);

    this.key3 = this.input.keyboard.addKey(Phaser.Keyboard.THREE);
    this.key3.onDown.add(this.addPineapple, this);

    // 当按键添加了addKeyCapture，该按键会阻止向浏览器传递按键事件，所以在游戏事件外面的 <input> 无法capture的按键。三种方法处理这个问题：

    // Option 1 - 在update() 中使用this.input.activePointer.withinGame 判断鼠标是否在游戏世界里， 不在游戏世界时禁用game.input

    //  Option 2 - Alternatively, Remove captures so they flood up to the browser too
    // http://localhost:3000/Phaser.Keyboard.html#removeKeyCapture
    // removeKeyCapture(keycode)
    // Removes an existing key capture.
    // this.input.keyboard.removeKeyCapture(Phaser.Keyboard.ONE);
    // this.input.keyboard.removeKeyCapture(Phaser.Keyboard.TWO);
    // this.input.keyboard.removeKeyCapture(Phaser.Keyboard.THREE);

    //  Option 3 - If the game is an iframe, or chat is in another window, use Game.onBlur and Game.onFocus instead
    // http://localhost:3000/Phaser.Game.html#onBlur
    // onBlur :Phaser.Signal
    // This event is fired when the game no longer has focus (typically on page hide).
    // game.onBlur.add(...);
    // game.onFocus.add(...);

  }

  update () {

    // http://localhost:3000/Phaser.Pointer.html#withinGame
    // withinGame :boolean
    // true if the Pointer is over the game canvas, otherwise false.
    if (this.input.activePointer.withinGame) {
      this.input.enabled = true;
      this.stage.backgroundColor = '#736357';
    }
    else {
      this.input.enabled = false;
      this.stage.backgroundColor = '#731111';
    }

  }

  addPhaserDude () {

    this.add.sprite(this.world.randomX, this.world.randomY, 'phaser');

  }

  addPhaserLogo () {

    this.add.sprite(this.world.randomX, this.world.randomY, 'logo');

  }

  addPineapple () {

    this.add.sprite(this.world.randomX, this.world.randomY, 'pineapple');

  }

}

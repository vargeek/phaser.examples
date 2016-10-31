# 类
  - game.input: Phaser.Input ( Input Manager )
    + game.input.keyboard: Phaser.Keyboard
      * .addKey() => Phaser.Key
    + game.input.gamepad: Phaser.Gamepad
      * game.input.gamepad.pad1: Phaser.Phaser.SinglePad
        - .getButton() => Phaser.DeviceButton
    + game.input.mouse: Phaser.Mouse
    + game.input.mousePointer(activePointer, pointer1~10): Phaser.Pointer
  - sprite.input: Phaser.InputHandler
  - sprite.events: Phaser.Events
    + .onInputUp: Phaser.Signal
# debug
  - debug.inputInfo
  - debug.spriteInputInfo
  - debug.pointer
# xxx

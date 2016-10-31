import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class MultiTouchState extends BootState {

  preload () {

  }

  create () {

    this.stage.backgroundColor = '#454645';

    // http://localhost:3000/Phaser.Input.html#addPointer
    // addPointer() → {Phaser.Pointer|null}
    // Add a new Pointer object to the Input Manager.
    // By default Input creates 3 pointer objects: mousePointer (not include in part of general pointer pool), pointer1 and pointer2.
    // This method adds an additional pointer, up to a maximum of Phaser.Input.MAX_POINTERS (default of 10).
    this.input.addPointer();
    this.input.addPointer();
    this.input.addPointer();
    this.input.addPointer();

  }

  render () {

    //  Just renders out the pointer data when you touch the canvas
    // http://localhost:3000/Phaser.Input.html#mousePointer
    // mousePointer :Pointer
    // The mouse has its own unique Phaser.Pointer object which you can use if making a desktop specific game.
    this.game.debug.pointer(this.input.mousePointer);

    this.game.debug.pointer(this.input.pointer1);
    this.game.debug.pointer(this.input.pointer2);
    this.game.debug.pointer(this.input.pointer3);
    this.game.debug.pointer(this.input.pointer4);
    this.game.debug.pointer(this.input.pointer5);
    this.game.debug.pointer(this.input.pointer6);

    // http://localhost:3000/Phaser.Input.html#activePointer
    // activePointer :Phaser.Pointer
    // The most recently active Pointer object.
    // When you've limited max pointers to 1 this will accurately be either the first finger touched or mouse.


  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TouchEventsState extends BootState {

  preload () {

  }

  create () {

    this.stage.backgroundColor = '#454645';

    // http://localhost:3000/Phaser.Input.html#onUp
    // onUp :Phaser.Signal
    // A Signal that is dispatched each time a pointer is released.
    this.input.onUp.add(()=>{
      console.log('Up');
    });

    // http://localhost:3000/Phaser.Input.html#onDown
    // onDown :Phaser.Signal
    // A Signal that is dispatched each time a pointer is pressed down.
    this.input.onDown.add(()=>{
      console.log('Down');
    });

    // http://localhost:3000/Phaser.Input.html#onTap
    // onTap :Phaser.Signal
    // A Signal that is dispatched each time a pointer is tapped.
    this.input.onTap.add(()=>{
      console.log('Tap');
    });

  }

  render () {

    this.game.debug.pointer(this.input.mousePointer);
    this.game.debug.pointer(this.input.pointer1);
    this.game.debug.pointer(this.input.pointer2);

  }

}

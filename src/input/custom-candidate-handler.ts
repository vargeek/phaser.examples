import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CustomCandidateHandlerState extends BootState {

  preload () {

    this.load.image('manga', 'assets/pics/manga-girl.png');
    this.load.image('disk', 'assets/sprites/copy-that-floppy.png');
    this.load.image('card', 'assets/sprites/mana_card.png');

  }

  create () {

    this.stage.backgroundColor = '#4b0049';

    let disk = this.add.sprite(200, 200, 'disk');
    disk.inputEnabled = true;

    let manga = this.add.sprite(700, 100, 'manga');
    manga.inputEnabled = true;

    let card = this.add.sprite(300, 300, 'card');
    card.inputEnabled = true;

    // http://localhost:3000/Phaser.Input.html#setInteractiveCandidateHandler
    // Adds a callback that is fired every time Pointer.processInteractiveObjects is called.
    // The purpose of processInteractiveObjects is to work out which Game Object the Pointer is going to
    // interact with. It works by polling all of the valid game objects, and then slowly discounting those
    // that don't meet the criteria (i.e. they aren't under the Pointer, are disabled, invisible, etc).

    // Eventually a short-list of 'candidates' is created. These are all of the Game Objects which are valid
    // for input and overlap with the Pointer. If you need fine-grained control over which of the items is
    // selected then you can use this callback to do so.

    // The callback will be sent 3 parameters:

    // 1) A reference to the Phaser.Pointer object that is processing the Items.
    // 2) An array containing all potential interactive candidates. This is an array of InputHandler objects, not Sprites.
    // 3) The current 'favorite' candidate, based on its priorityID and position in the display list.
    // Your callback MUST return one of the candidates sent to it.
    this.input.setInteractiveCandidateHandler(this.interactiveCandidateHandler, this);

  }

  interactiveCandidateHandler (pointer: Phaser.Pointer, candidates: Phaser.InputHandler[], favorite: Phaser.InputHandler) {

    if (candidates.length > 1) {

      for (let index = 0; index < candidates.length; index++) {
        if (candidates[index].sprite.key === 'disk') {
          return candidates[index];
        }
      }
      return favorite;
    }
    else {
      return favorite;
    }

  }


  render () {

    let name = this.input.activePointer.targetObject ? (this.input.activePointer.targetObject as Phaser.InputHandler).sprite.key : 'none';
    this.game.debug.text(`Pointer Target: ${name}`, 32, 32);

  }

}

import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class InputPriorityState extends BootState {

  preload () {

    this.load.image('manga', 'assets/pics/manga-girl.png');
    this.load.image('disk', 'assets/sprites/copy-that-floppy.png');
    this.load.image('card', 'assets/sprites/mana_card.png');

  }

  create () {

    this.stage.backgroundColor = '#4b0049';

    let manga = this.add.sprite(100, 100, 'manga');
    manga.inputEnabled = true;
    manga.input.enableDrag(false, false, true);
    // http://localhost:3000/Phaser.InputHandler.html#priorityID
    // priorityID :number
    // The priorityID is used to determine which game objects should get priority when input events occur. For example if you have
    // several Sprites that overlap, by default the one at the top of the display list is given priority for input events. You can
    // stop this from happening by controlling the priorityID value. The higher the value, the more important they are considered to the Input events.
    manga.input.priorityID = 2;

    let disk = this.add.sprite(200, 200, 'disk');
    disk.alpha = 0.7;
    disk.inputEnabled = true;
    disk.input.enableDrag(false, false, true);
    disk.input.priorityID = 1;

    let card = this.add.sprite(300, 300, 'card');
    card.inputEnabled = true;
    card.input.enableDrag(false, false, true);
    card.input.priorityID = 0;

  }

  render () {

    this.game.debug.text('Drag the Sprites', 32, 32);

  }


}

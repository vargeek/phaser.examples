import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DragScaledGroupState extends BootState {

  preload () {

    this.load.image('grid', 'assets/tests/debug-grid-1920x1920.png');
    this.load.image('atari', 'assets/sprites/atari800xl.png');

  }

  create () {

    this.add.sprite(0, 0, 'grid');

    let group = this.add.group();
    // group.scale.set(1.5);
    group.scale.set(0.8);

    let atari1 = group.create(100, 100, 'atari') as Phaser.Sprite;
    atari1.scale.set(0.7);
    atari1.inputEnabled = true;
    atari1.input.enableDrag();

    let atari2 = this.add.sprite(500, 300, 'atari');
    atari2.inputEnabled = true;
    atari2.input.enableDrag();



  }

}

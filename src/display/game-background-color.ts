import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class GameBackgroundColorState extends BootState {

  preload () {

    this.load.image('hotdog', 'assets/sprites/hotdog.png');

  }

  create () {

    // http://localhost:3000/Phaser.Stage.html#backgroundColor
    // backgroundColor :number|string
    // Gets and sets the background color of the stage. The color can be given as a number: 0xff0000 or a hex string: '#ff0000'
    this.stage.backgroundColor = '#48a';

    this.add.image(this.world.centerX, this.world.centerY, 'hotdog').anchor.set(0.5);

    this.input.onDown.add(this.changeColor, this);

  }

  changeColor () {

    let c = Phaser.Color.getRandomColor(50, 255, 255);

    this.stage.backgroundColor = c;

  }

}

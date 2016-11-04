import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class KernOfDutyState extends BootState {
  text: Phaser.Text;
  index = 0;
  line = '';
  content = [
    " ",
    "photon storm presents",
    "a phaser production",
    " ",
    "Kern of Duty",
    " ",
    "directed by rich davey",
    "rendering by mat groves",
    "    ",
    "03:45, November 4th, 2014",
    "somewhere in the north pacific",
    "mission control bravo ...",
  ];

  preload () {

    this.load.image('cod', 'assets/pics/cod.jpg');

  }

  create () {

    this.add.sprite(0, 0, 'cod');

    const style: Phaser.PhaserTextStyle = {
      font: '30pt Courier',
      fill: '#19cb65',
      stroke: '#119f4e',
      strokeThickness: 2,
    }

    this.text = this.add.text(32, 380, '', style);

    this.nextLine();

  }

  nextLine () {

    this.index++;
    if (this.index < this.content.length) {
      this.line = '';
      this.time.events.repeat(80, this.content[this.index].length + 1, this.updateLine, this);
    }

  }


  updateLine () {

    if (this.line.length < this.content[this.index].length) {
      this.line = this.content[this.index].substr(0, this.line.length + 1);
      this.text.setText(this.line);
    }
    else {
      this.time.events.add(Phaser.Timer.SECOND * 2, this.nextLine, this);
    }

  }


}

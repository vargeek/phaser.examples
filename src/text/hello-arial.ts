import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class HelloArialState extends BootState {

  create () {

    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    var text = this.add.text(this.world.centerX, this.world.centerY, "- phaser -\nwith a sprinkle of\npixi dust", style);

    text.anchor.set(0.5);

  }

}

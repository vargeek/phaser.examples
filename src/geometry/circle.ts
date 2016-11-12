import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CircleState extends BootState {

  create () {

    let graphics = this.add.graphics(0, 0);

    graphics.beginFill(0xff0000, 1);
    graphics.drawCircle(300, 300, 100);

  }

}

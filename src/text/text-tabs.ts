import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextTabsState extends BootState {

  preload () {

    this.load.image('bg', 'assets/skies/deepblue.png');

  }

  create () {

    this.add.image(0, 0, 'bg');

    let style = {
      font: '20px Courier',
      fill: '#fff',
      tabs: 132,
    }

    let text = this.add.text(100, 64, 'Armor\tSpells\tDamage\tWeapons', style);

    let text2 = this.add.text(100, 120, '100\tFire\t+50\tAxe\n67\tIce\t+23\tStaff', style);


  }

}

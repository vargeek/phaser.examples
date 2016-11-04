import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class TextTabsWithGoogleFontState extends BootState {

  preload () {

    this.load.image('bg', 'assets/skies/deepblue.png');

    (window as any).WebFontConfig = {
      //  'active' means all requested fonts have finished loading
      //  We set a 1 second delay before calling 'createText'.
      //  For some reason if we don't the browser cannot render the text the first time it's created.
      active: () => {
        this.time.events.add(Phaser.Timer.SECOND, this.createText, this);
      },

      //  The Google Fonts we want to load (specify as many as you like in the array)
      google: {
        families: ['Finger Paint']
      }
    };
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
  }


  create () {

    this.add.image(0, 0, 'bg');

  }

  createText () {

    let style = {
      font: '28px Finger Paint',
      fill: '#fff',
      tabs: [150, 150, 200],
    }

    let text = this.add.text(32, 64, 'Armor\tSpells\tDamage\tWeapons', style);
    text.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);

    let text2 = this.add.text(32, 180, '100\tFire\t+50\tAxe\n67\tIce\t+23\tStaff', style);
    text2.setShadow(-3, 3, 'rgba(0,0,0,0.5)', 0);

  }

}

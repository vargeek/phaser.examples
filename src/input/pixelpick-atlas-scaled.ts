import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PixelpickAtlasScaledState extends BootState {
  text: Phaser.Text;

  preload () {

    this.load.atlas('atlas', 'assets/pics/texturepacker_test.png', 'assets/pics/texturepacker_test.json');

  }

  create () {

    this.stage.backgroundColor = '#404040';

    //  This demonstrates pixel perfect click detection even if using sprites in a texture atlas.

    let chick = this.add.sprite(64, 64, 'atlas');
    chick.frameName = 'budbrain_chick.png';
    chick.inputEnabled = true;
    chick.input.pixelPerfectClick = true;
    chick.events.onInputDown.add(this.onClicked, this);
    chick.scale.set(2);

    let cop = this.add.sprite(650, 32, 'atlas');
    cop.frameName = 'ladycop.png';
    cop.inputEnabled = true;
    cop.input.pixelPerfectClick = true;
    cop.events.onInputDown.add(this.onClicked, this);
    cop.scale.set(1, 2.5);

    let car = this.add.sprite(100, 400, 'atlas');
    car.frameName = 'supercars_parsec.png';
    car.inputEnabled = true;
    car.input.pixelPerfectClick = true;
    car.events.onInputDown.add(this.onClicked, this);
    car.scale.set(0.5);

    let mech = this.add.sprite(240, 100, 'atlas');
    mech.frameName = 'titan_mech.png';
    mech.inputEnabled = true;
    mech.input.pixelPerfectClick = true;
    mech.events.onInputDown.add(this.onClicked, this);
    mech.scale.set(1.5, 1);

    this.text = this.add.text(16, 16, 'Click a sprite', { fill: '#ffffff' });

  }

  onClicked (sprite: Phaser.Sprite) {

    this.text.text = `You clicked ${sprite.frameName}`;

  }

}

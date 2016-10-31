import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class PixelpickAtlasState extends BootState {
  click: Phaser.Sprite;
  cop: Phaser.Sprite;
  robot: Phaser.Sprite;
  car: Phaser.Sprite;
  mech: Phaser.Sprite;
  text: Phaser.Text;

  preload () {

    this.load.atlas('atlas', 'assets/pics/texturepacker_test.png', 'assets/pics/texturepacker_test.json');

  }

  create () {

    this.stage.backgroundColor = '#404040';

    this.click = this.add.sprite(64, 64, 'atlas');
    this.click.frameName = 'budbrain_chick.png';
    this.click.inputEnabled = true;

    // http://localhost:3000/Phaser.InputHandler.html#pixelPerfectClick
    // pixelPerfectClick :boolean
    // Set to true to use pixel perfect hit detection when checking if the pointer is over this Sprite when it's clicked or touched.
    // The x/y coordinates of the pointer are tested against the image in combination with the InputHandler.pixelPerfectAlpha value.
    // This feature only works for display objects with image based textures such as Sprites. It won't work on BitmapText or Rope.
    // Warning: This is expensive so only enable if you really need it. Use a pixel perfect check when testing for clicks or touches on the Sprite.
    this.click.input.pixelPerfectClick = true;
    this.click.events.onInputDown.add(this.onClicked, this);

    this.cop = this.add.sprite(600, 64, 'atlas');
    this.cop.frameName = 'ladycop.png';
    this.cop.inputEnabled = true;
    this.cop.input.pixelPerfectClick = true;
    this.cop.events.onInputDown.add(this.onClicked, this);

    this.robot = this.add.sprite(50, 300, 'atlas');
    this.robot.frameName = 'robot.png';
    this.robot.inputEnabled = true;
    this.robot.input.pixelPerfectClick = true;
    this.robot.events.onInputDown.add(this.onClicked, this);

    this.car = this.add.sprite(100, 400, 'atlas');
    this.car.frameName = 'supercars_parsec.png';
    this.car.inputEnabled = true;
    this.car.input.pixelPerfectClick = true;
    this.car.events.onInputDown.add(this.onClicked, this);

    this.mech = this.add.sprite(250, 100, 'atlas');
    this.mech.frameName = 'titan_mech.png';
    this.mech.inputEnabled = true;
    this.mech.input.pixelPerfectClick = true;
    this.mech.events.onInputDown.add(this.onClicked, this);

    this.text = this.add.text(16, 16, 'Click a sprite', {fill: '#ffffff'});

  }

  onClicked (sprite: Phaser.Sprite) {

    this.text.text = `You clicked ${sprite.frameName}`;

  }

}

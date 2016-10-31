import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class InputEnableGroupState extends BootState {
  text = 'Click the Sprites';

  preload () {

    this.load.image('beball', 'assets/sprites/beball1.png');
    this.load.image('bikkuriman', 'assets/sprites/bikkuriman.png');

  }

  create () {

    let group = this.add.group();

    // http://localhost:3000/Phaser.Group.html#inputEnableChildren
    // inputEnableChildren :boolean
    // A Group with inputEnableChildren set to true will automatically call inputEnabled = true
    // on any children added to, or created by, this Group.
    // If there are children already in the Group at the time you set this property, they are not changed.
    group.inputEnableChildren = true;

    for (let index = 0; index < 10; index++) {

      let sprite = group.create(64 + 64 * index, 400, 'beball') as Phaser.Sprite;
      sprite.name = `child ${index}`;
      sprite.events.onInputDown.add(this.onClickSprite, this);

    }

  }

  onClickSprite (sprite: Phaser.Sprite) {

    this.text = `Yyou clicked: ${sprite.name}`;
    sprite.y -= 16;

  }

  render () {

    this.game.debug.text(this.text, 32, 32);

  }

}

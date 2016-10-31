import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class IgnoreChildInputState extends BootState {
  text = '';
  group1: Phaser.Group;
  group2: Phaser.Group;

  preload () {

    this.load.image('beball', 'assets/sprites/beball1.png');
    this.load.image('bikkuriman', 'assets/sprites/bikkuriman.png');
    this.load.image('square', 'assets/sprites/50x50.png');

  }

  create () {

    this.group1 = this.add.group();
    this.group2 = this.add.group();

    this.group1.inputEnableChildren = true;
    this.group2.inputEnableChildren = true;

    for (let index = 0; index < 10; index++) {
      let sprite1 = this.group1.create(64 + 64 * index, 150, 'beball') as Phaser.Sprite;
      sprite1.name = `group1-child-${index}`;
      sprite1.events.onInputDown.add(this.onClickSprite, this);

      let sprite2 = this.group2.create(64 + 64 * index, 350, 'bikkuriman') as Phaser.Sprite;
      sprite2.name = `group2-child-${index}`;
      sprite2.events.onInputDown.add(this.onClickSprite, this);

    }

    let toggle = this.add.sprite(800 - 66, 16, 'square');
    toggle.inputEnabled = true;
    toggle.events.onInputDown.add(this.toggleGroup, this);

  }

  onClickSprite (sprite: Phaser.Sprite) {

    this.text = `You clicked: ${sprite.name}`;
    sprite.tint = sprite.tint === 0xff0000 ? 0xffffff : 0xff0000;

  }

  toggleGroup () {

    // http://localhost:3000/Phaser.Group.html#ignoreChildInput
    // ignoreChildInput :Boolean
    // If ignoreChildInput is false it will allow this objects children to be considered as valid for Input events.
    // If this property is true then the children will not be considered as valid for Input events.
    // Note that this property isn't recursive: only immediate children are influenced, it doesn't scan further down.
    this.group2.ignoreChildInput = !this.group2.ignoreChildInput;

  }

  render () {

    this.game.debug.text(this.text, 32, 32);
    this.game.debug.text(`Group2.ignoreChildInput: ${this.group2.ignoreChildInput}`, 32, 64);

  }

}

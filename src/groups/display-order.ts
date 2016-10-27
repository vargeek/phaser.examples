import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class DisplayOrderState extends BootState {
  items: Phaser.Group;
  card: Phaser.Sprite;

  preload () {

    this.load.image('atari1', 'assets/sprites/atari130xe.png');
    this.load.image('atari2', 'assets/sprites/atari800xl.png');
    this.load.image('card', 'assets/sprites/mana_card.png');


  }

  create () {

    this.items = this.add.group();

    this.items.create(64, 100, 'atari1');

    this.card = this.items.create(240, 80, 'card');

    this.items.create(280, 100, 'atari2');

    this.input.onTap.addOnce(this.removeCard, this);


  }

  removeCard () {

    this.card.kill();

    this.input.onTap.addOnce(this.replaceCard, this);

  }

  replaceCard () {

    let  deadCard = this.items.getFirstDead() as Phaser.Sprite;

    deadCard.revive();


  }

}

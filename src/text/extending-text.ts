import { BootState } from '../boot.state';
import { AssetID } from '../constant';

export class CustomText extends Phaser.Text {
  rotateSpeed = 1;
  constructor (game: Phaser.Game, x: number, y: number, text: string) {
    super(game, x, y, text, {
      font: '65px Arial',
      fill: '#ff0044',
      align: 'center',
    });

    this.anchor.set(0.5);
  }

  update () {

    this.angle += this.rotateSpeed;

  }
}


export class ExtendingTextState extends BootState {

  create () {

    let text = new CustomText(this.game, this.world.centerX, this.world.centerY, 'Hello World!');

    this.add.existing(text);

  }

}
